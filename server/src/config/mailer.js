import nodemailer from "nodemailer";

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SECURE,
  MAIL_USER,
  MAIL_PASS,
  MAIL_FROM
} = process.env;

if (!MAIL_HOST || !MAIL_USER || !MAIL_PASS) {
  throw new Error("❌ Mailer ENV variables missing");
}

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: Number(MAIL_PORT),
  secure: MAIL_SECURE === "true",
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS
  }
});

console.log("✅ Mailer configured");

export { transporter, MAIL_FROM };
