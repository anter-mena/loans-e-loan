type ContactEmailInput = {
  name: string;
  email: string;
  message: string;
  topic: string;
  subject: string;
  phone: string;
  emailSubject: string;
  text: string;
  fallbackHtml: string;
};

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function buildBrandedContactEmail(input: ContactEmailInput) {
  const { name, email, message, topic, subject, phone, emailSubject, text } = input;
  const reference = `EL-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  const receivedAt = new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Toronto",
  }).format(new Date());

  const html = `<!doctype html>
<html lang="en">
<body style="margin:0;padding:0;background:#f5f5f3;font-family:Arial,Helvetica,sans-serif;color:#161616">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f5f5f3">
    <tr><td align="center" style="padding:32px 12px">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background:#ffffff;border:1px solid #ebebeb">
        <tr><td background="https://e-loan.ca/assets/email/contact-header-bg.jpg" style="padding:76px 32px;background-color:#f9fa58;background-image:url('https://e-loan.ca/assets/email/contact-header-bg.jpg');background-position:center;background-size:cover;color:#161616;text-align:center">
          <h1 style="margin:0;font-size:34px;line-height:1.15;font-weight:700;letter-spacing:-0.8px;color:#161616">New message from ${escapeHtml(name)}</h1>
          <div style="margin-top:14px;font-size:16px;line-height:1.4;font-weight:400;color:#3d3d14">${escapeHtml(subject || topic)}</div>
        </td></tr>
        <tr><td style="padding:30px 32px 12px">
          <div style="font-size:11px;line-height:1.5;font-weight:700;color:#a4a600">${escapeHtml(receivedAt)} &nbsp;&middot;&nbsp; ${reference}</div>
          <h2 style="margin:16px 0 0;font-size:26px;line-height:1.25;font-weight:700;letter-spacing:-0.4px;color:#161616">${escapeHtml(subject || topic)}</h2>
          <div style="margin-top:20px;font-size:16px;line-height:1.65;white-space:pre-wrap;color:#383838">${escapeHtml(message)}</div>
          <div style="margin-top:22px;font-size:11px;line-height:1.5;color:#666666">
            <a href="mailto:${escapeHtml(email)}" style="color:#161616;text-decoration:underline;text-decoration-color:#d5d600">${escapeHtml(email)}</a>
            ${phone ? `<span style="padding:0 7px;color:#c8c8c8">&middot;</span><span>${escapeHtml(phone)}</span>` : ""}
          </div>
        </td></tr>
        <tr><td align="center" style="padding:24px 32px 28px">
          <img src="https://e-loan.ca/logo.svg" width="76" alt="E-Loan" style="display:block;width:76px;max-width:100%;height:auto;margin:0 auto;border:0">
          <div style="margin-top:14px;font-size:11px;line-height:1.6;color:#666666">
            <a href="https://e-loan.ca/privacy-policy" style="color:#161616;text-decoration:underline">Privacy Policy</a>
            <span style="padding:0 7px;color:#c8c8c8">|</span>
            <a href="https://e-loan.ca/terms-of-use" style="color:#161616;text-decoration:underline">Terms of Use</a>
          </div>
          <div style="margin-top:14px;font-size:10px;line-height:1.65;color:#8a8a8a">
            Sent securely from the E-Loan contact form.<br>
            Never request passwords, banking credentials, or security codes by email.
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject: emailSubject, html, text: `${text}\n\nReference: ${reference}` };
}
