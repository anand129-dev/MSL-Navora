import nodemailer from "nodemailer";

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SECURE,
  SMTP_USER,
  SMTP_PASS,
  MAIL_FROM,
  HR_MAIL,
} = process.env;

if (!MAIL_HOST || !MAIL_FROM || !SMTP_USER || !SMTP_PASS) {
  throw new Error("❌ Mailer ENV variables missing");
}

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: Number(MAIL_PORT),
  secure: MAIL_SECURE === "true",
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // FIX TLS handshake issue
  },
});

if (
  (MAIL_PORT === "587" && MAIL_SECURE === "true") ||
  (MAIL_PORT === "465" && MAIL_SECURE === "false")
) {
  console.warn("⚠️ SMTP port & secure mismatch");
}

transporter.verify((err) => {
  if (err) console.error("❌ SMTP error:", err);
  else console.log("✅ SMTP ready");
});

console.log("✅ Mailer configured");

export { transporter, MAIL_FROM, HR_MAIL };
