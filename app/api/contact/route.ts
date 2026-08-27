/* ── Per-site config — THE ONLY LINES THAT CHANGE BETWEEN SITES ───────────
   Deliberately self-contained: this file imports nothing from lib/, so it
   drops into any site in the network unchanged apart from these two values.

   SITE_NAME    labels the subject line, e.g. "[365loan] New message — Jane".
   TO_ADDRESS   where it lands. Forwarded by Cloudflare Email Routing, so it
                needs no verification anywhere.
   SENDER_DOMAIN must be a domain verified in Resend. 365loan.ca is the one
                verified sender for the whole network — leave it alone until
                a site gets its own verified domain.                       */
import nodemailer from "nodemailer";
import { buildBrandedContactEmail } from "@/lib/contact-email";

const SITE_NAME = "E-Loan";
/* ─────────────────────────────────────────────────────────────────────── */

export const dynamic = "force-dynamic";

const LIMITS = { name: 100, email: 200, message: 5000, subject: 200, phone: 40 };

// Best-effort throttle. Each serverless instance keeps its own map, so this
// slows obvious floods rather than guaranteeing a global limit.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  if (hits.size > 5000) hits.clear();

  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) return true;

  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function clientIp(request: Request) {
  // cf-connecting-ip is the real visitor IP when proxied through Cloudflare.
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

type Submission = {
  name: string;
  email: string;
  message: string;
  topic: string;
  subject: string;
  // Optional on every form, so it may be blank.
  phone: string;
};

function buildEmail({ name, email, message, topic, subject, phone }: Submission) {
  const emailSubject = `[${SITE_NAME}] ${topic} — ${name}`;

  const subjectRowHtml = subject
    ? `<p style="margin:0 0 4px"><strong>Subject:</strong> ${escapeHtml(subject)}</p>`
    : "";

  const phoneRowHtml = phone
    ? `<p style="margin:0 0 4px"><strong>Phone:</strong> ${escapeHtml(phone)}</p>`
    : "";

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;color:#111;line-height:1.6">
      <h2 style="margin:0 0 16px;font-size:17px">${escapeHtml(topic)}</h2>
      <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phoneRowHtml}
      ${subjectRowHtml}
      <p style="margin:16px 0 4px"><strong>Message:</strong></p>
      <div style="white-space:pre-wrap;padding:12px 14px;background:#f6f6f6;border-radius:8px">${escapeHtml(message)}</div>
      <p style="margin:20px 0 0;font-size:13px;color:#666">
        Sent from the ${SITE_NAME} contact form. Reply directly to answer ${escapeHtml(name)}.
      </p>
    </div>`;

  const text = `${topic}

Name: ${name}
Email: ${email}${phone ? `\nPhone: ${phone}` : ""}${subject ? `\nSubject: ${subject}` : ""}

Message:
${message}

— Sent from the ${SITE_NAME} contact form.`;

  return buildBrandedContactEmail({ name, email, message, topic, subject, phone, emailSubject, text, fallbackHtml: html });
}

export async function POST(request: Request) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "465");
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const fromAddress = process.env.CONTACT_FROM ?? smtpUser;
  const toAddress = process.env.CONTACT_TO;

  if (!smtpHost || !Number.isInteger(smtpPort) || !smtpUser || !smtpPassword || !fromAddress || !toAddress) {
    console.error("[contact] Gmail SMTP environment variables are incomplete");
    return Response.json(
      { error: "The contact form is not configured. Please email us directly." },
      { status: 500 },
    );
  }

  if (rateLimited(clientIp(request))) {
    return Response.json(
      { error: "Too many messages. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, company, topic, subject, phone } = (body ?? {}) as Record<
    string,
    unknown
  >;

  // Honeypot: hidden from humans, commonly auto-filled by bots. Return a
  // success shape so the bot has no signal that it was rejected.
  if (typeof company === "string" && company.trim() !== "") {
    return Response.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !isEmail(email.trim())
  ) {
    return Response.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const cleanName = name.trim().slice(0, LIMITS.name);
  const cleanEmail = email.trim().slice(0, LIMITS.email);
  const cleanMessage = message.trim().slice(0, LIMITS.message);

  const cleanTopic =
    typeof topic === "string" && topic.trim() ? topic.trim().slice(0, 40) : "New message";
  const cleanSubject =
    typeof subject === "string" ? subject.trim().slice(0, LIMITS.subject) : "";
  const cleanPhone = typeof phone === "string" ? phone.trim().slice(0, LIMITS.phone) : "";

  const {
    subject: emailSubject,
    html,
    text,
  } = buildEmail({
    name: cleanName,
    email: cleanEmail,
    message: cleanMessage,
    topic: cleanTopic,
    subject: cleanSubject,
    phone: cleanPhone,
  });

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE !== "false",
      auth: { user: smtpUser, pass: smtpPassword },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
    await transporter.sendMail({ from: `${SITE_NAME} Contact <${fromAddress}>`, to: toAddress, replyTo: cleanEmail, subject: emailSubject, html, text });
  } catch (err) {
    console.error("[contact] Gmail SMTP send failed", err);
    return Response.json(
      { error: "We couldn't send your message. Please email us directly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
