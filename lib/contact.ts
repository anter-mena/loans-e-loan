/* Shared contact-form submitter.

   This file is IDENTICAL in every site in the network — do not customise it
   per site. Anything site-specific belongs in app/api/contact/route.ts.

   It reads the <form> generically rather than expecting fixed fields, so each
   site can keep its own markup and field set. Whatever extra inputs a form
   has (phone, loan amount, enquiry type...) are appended to the message body
   automatically — no changes needed here.                                  */

export type ContactStatus = "idle" | "submitting" | "success" | "error";

export const CONTACT_ERROR_FALLBACK =
  "Something went wrong. Please try again, or email us directly.";

// Handled explicitly below; everything else is treated as an extra detail.
const KNOWN_FIELDS = new Set([
  "name",
  "firstName",
  "lastName",
  "email",
  "phone",
  "message",
  "subject",
  "company",
]);

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function submitContactForm(
  form: HTMLFormElement,
  topic = "New message",
): Promise<ContactResult> {
  const data = new FormData(form);
  const value = (key: string) => String(data.get(key) ?? "").trim();

  // Sites label the name field differently: some use `name`, some split it.
  const name =
    [value("name"), value("firstName"), value("lastName")].filter(Boolean).join(" ").trim() ||
    value("email");

  // Any field this helper doesn't know about still reaches the inbox.
  const extras: string[] = [];
  for (const [key, entry] of data.entries()) {
    if (KNOWN_FIELDS.has(key) || typeof entry !== "string") continue;
    const trimmed = entry.trim();
    if (trimmed) extras.push(`${key}: ${trimmed}`);
  }

  const message =
    value("message") + (extras.length ? `\n\n---\n${extras.join("\n")}` : "");

  let res: Response;
  try {
    res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topic,
        name,
        email: value("email"),
        phone: value("phone"),
        subject: value("subject"),
        message,
        company: value("company"), // honeypot
      }),
    });
  } catch {
    return { ok: false, error: "Couldn't reach the server. Please check your connection." };
  }

  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as { error?: string } | null;
    return { ok: false, error: body?.error ?? CONTACT_ERROR_FALLBACK };
  }

  return { ok: true };
}
