import express from "express";
import { sendEmail } from "../config/smtp2go.js";
import validator from "validator";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      type,
      message,
      company,
      title,
      country,
    } = req.body;

    if (!firstName || !email || !type) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Type:</strong> ${type}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${title ? `<p><strong>Title:</strong> ${title}</p>` : ""}
      ${country ? `<p><strong>Country:</strong> ${country}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message || "-"}</p>
    `;

    await sendEmail({
      to: "your@email.com",
      subject: `Contact Form - ${type}`,
      html,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
