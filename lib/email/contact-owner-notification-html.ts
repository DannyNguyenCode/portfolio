function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absolutePublicAsset(origin: string, path: string): string {
  return origin ? `${origin}${path}` : "";
}

/**
 * Rich HTML for the inbox notification when someone uses the contact form.
 * Tables + inline styles for email clients.
 */
export function buildOwnerNotificationHtml(options: {
  nameStr: string;
  emailStr: string;
  messageStr: string;
  origin: string;
}): string {
  const { nameStr, emailStr, messageStr, origin } = options;
  const safeName = escapeHtml(nameStr);
  const safeEmail = escapeHtml(emailStr);
  const safeMessage = escapeHtml(messageStr);

  const heroSrc = absolutePublicAsset(origin, "/MinaEmploymentHero.png");

  const fontBody =
    "font-family:'Be Vietnam Pro',Georgia,'Times New Roman',serif;";
  const fontHead =
    "font-family:'Plus Jakarta Sans',system-ui,-apple-system,Segoe UI,sans-serif;";

  const mailtoReply = `mailto:${encodeURIComponent(emailStr)}`;

  const nameBlock =
    nameStr.length > 0
      ? `<p style="margin:0 0 10px;font-size:15px;line-height:1.5;color:#372d24;"><span style="${fontHead}font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#66594e;">Name</span><br/><span style="font-size:17px;font-weight:600;">${safeName}</span></p>`
      : "";

  const hasHero = heroSrc.length > 0;
  const heroRow = hasHero
    ? `<tr>
<td style="padding:12px 28px 0;background-color:#fff5ee;">
<img src="${heroSrc}" alt="Mina at the desk" width="616" style="display:block;width:100%;max-width:616px;height:auto;border:0;border-radius:12px 12px 0 0;"/>
</td>
</tr>`
    : "";
  const bannerRadius = hasHero ? "0 0 12px 12px" : "12px 12px 0 0";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta http-equiv="x-ua-compatible" content="ie=edge"/>
<title>New contact — The Web Design Lounge</title>
</head>
<body style="margin:0;padding:0;background-color:#f9e5d4;${fontBody}color:#372d24;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f9e5d4;padding:16px 8px 32px;">
<tr>
<td align="center">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:672px;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid rgba(186,170,157,0.35);box-shadow:0 12px 40px rgba(55,45,36,0.08);">
<tr>
<td style="padding:20px 28px 16px;background-color:#fff5ee;border-bottom:1px solid rgba(186,170,157,0.15);">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
<tr>
<td align="left" style="${fontHead}font-size:22px;font-weight:800;letter-spacing:-0.03em;color:#8f4800;">The Web Design Lounge</td>
</tr>
</table>
</td>
</tr>
${heroRow}
<tr>
<td style="padding:22px 28px 26px;background-color:#8f4800;border-radius:${bannerRadius};">
<h1 style="margin:0;${fontHead}font-size:28px;font-weight:800;letter-spacing:-0.02em;color:#fff0e8;line-height:1.2;">New contact message</h1>
<p style="margin:10px 0 0;${fontHead}font-size:14px;font-weight:500;color:rgba(255,240,232,0.9);">From the site contact form</p>
</td>
</tr>
<tr>
<td style="padding:24px 28px 28px;background-color:#fff5ee;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:520px;margin:0 auto;">
<tr>
<td>
${nameBlock}
<p style="margin:0 0 14px;font-size:15px;line-height:1.5;color:#372d24;"><span style="${fontHead}font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#66594e;">Email</span><br/><a href="${mailtoReply}" style="font-size:17px;font-weight:600;color:#00618d;text-decoration:underline;">${safeEmail}</a></p>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#ffeee0;border-radius:10px;border:1px solid rgba(186,170,157,0.35);">
<tr>
<td style="padding:16px 18px;">
<p style="margin:0 0 8px;${fontHead}font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#66594e;">Message</p>
<p style="margin:0;font-size:16px;line-height:1.65;color:#372d24;white-space:pre-wrap;">${safeMessage}</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

export function buildOwnerNotificationPlainText(options: {
  nameStr: string;
  emailStr: string;
  messageStr: string;
}): string {
  const { nameStr, emailStr, messageStr } = options;
  return [
    "New contact message — The Web Design Lounge",
    "",
    ...(nameStr ? [`Name: ${nameStr}`] : []),
    `Email: ${emailStr}`,
    "",
    "Message:",
    messageStr,
  ].join("\n");
}
