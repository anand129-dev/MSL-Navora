const { SMTP2GO_API_KEY, MAIL_FROM } = process.env;

if (!SMTP2GO_API_KEY || !MAIL_FROM) {
  throw new Error("❌ SMTP2GO env variables missing");
}

export const sendEmail = async ({
  to,
  subject,
  html,
  attachments = [],
  cc = [],
}) => {
  const payload = {
    api_key: SMTP2GO_API_KEY,
    to: Array.isArray(to) ? to : [to],
    sender: MAIL_FROM,
    subject,
    html_body: html,
    cc,
    attachments, // already base64 encoded
  };

  const response = await fetch("https://api.smtp2go.com/v3/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok || result.data?.failed > 0) {
    console.error("SMTP2GO Error:", result);
    throw new Error("Failed to send email via SMTP2GO");
  }

  return result;
};
