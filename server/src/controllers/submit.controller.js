import { sendEmail } from "../config/smtp2go.js";

const { HR_MAIL } = process.env;

/* =========================
   HELPERS
========================= */
const fileToAttachment = (file) => ({
  filename: file.originalname,
  fileblob: file.buffer.toString("base64"),
  mimetype: file.mimetype,
});

export const submitForm = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      phone,
      source = "unknown",
      previousEmployment = "no",
      previousDetails = "",
      jobId,
      jobTitle,
      jobDepartment,
      jobLocation,
      jobType,
      jobReference,
    } = req.body;

    if (!fullName || !email || !jobId || !jobTitle) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required",
      });
    }

    /* =========================
       1️⃣ INTERNAL HR EMAIL
    ========================= */
    const hrEmailHtml = `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#f6f8fb;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:16px;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:720px; background:#ffffff; border:1px solid #e0e0e0;">
            
            <!-- HEADER -->
            <tr>
              <td style="background-color:#24439C; padding:20px; border-top:6px solid #CEA72B;">
                <p style="margin:0; color:#CEA72B; font-size:12px; letter-spacing:1px;">
                  NEW TALENT ALERT
                </p>
                <h2 style="margin:8px 0 0; color:#ffffff; font-size:20px; line-height:1.4;">
                  ${jobTitle}${jobDepartment ? ` – ${jobDepartment}` : ""}<br/>
                  <span style="font-size:14px; color:#e0e6f2;">
                    Location: ${jobLocation || "N/A"}
                  </span>
                </h2>
              </td>
            </tr>

            <!-- CONTENT -->
            <tr>
              <td style="padding:24px; color:#333333; font-size:14px;">
                
                <!-- Candidate Info -->
                <h3 style="margin:0 0 12px; color:#24439C;">Candidate Information</h3>
                <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td width="40%" style="background:#f2f4f7;">Name</td>
                    <td>${fullName}</td>
                  </tr>
                  <tr>
                    <td style="background:#f2f4f7;">Email</td>
                    <td>${email}</td>
                  </tr>
                  <tr>
                    <td style="background:#f2f4f7;">Phone</td>
                    <td>${phone}</td>
                  </tr>
                  <tr>
                    <td style="background:#f2f4f7;">Previously employed with Navora</td>
                    <td>${previousEmployment}</td>
                  </tr>
                  ${
                    previousEmployment === "yes" && previousDetails
                      ? `<tr>
                           <td style="background:#f2f4f7;">Previous details</td>
                           <td>${previousDetails}</td>
                         </tr>`
                      : ""
                  }
                  <tr>
                    <td style="background:#f2f4f7;">Source</td>
                    <td>${source}</td>
                  </tr>
                </table>

                <!-- Job Info -->
                <h3 style="margin:24px 0 12px; color:#24439C;">Job Information</h3>
                <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td width="40%" style="background:#f2f4f7;">Title</td>
                    <td>${jobTitle}</td>
                  </tr>
                  <tr>
                    <td style="background:#f2f4f7;">Department</td>
                    <td>${jobDepartment || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="background:#f2f4f7;">Location</td>
                    <td>${jobLocation || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="background:#f2f4f7;">Type</td>
                    <td>${jobType || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="background:#f2f4f7;">Job ID</td>
                    <td>${jobId}</td>
                  </tr>
                  <tr>
                    <td style="background:#f2f4f7;">Reference</td>
                    <td>${jobReference || "N/A"}</td>
                  </tr>
                </table>

                <p style="margin-top:20px; font-size:13px;">
                  📎 Resume attached with this email.
                </p>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="background:#f2f4f7; padding:16px; font-size:12px; color:#555555; text-align:center;">
                <p style="margin:0;">
                  Navora Careers Portal · Powered by MaritimeSolutionsLtd
                </p>
                <p style="margin:6px 0 0;">
                  This is an automated notification for internal recruitment processing.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

    // Example usage in transporter.sendMail
    const hrAttachments = req.file ? [fileToAttachment(req.file)] : [];

    await sendEmail({
      to: HR_MAIL,
      subject: `New Application – ${fullName} (${jobTitle}) | Navora (MSL)`,
      html: hrEmailHtml,
      attachments: hrAttachments,
    });

    /* =========================
       2️⃣ CANDIDATE THANK-YOU EMAIL
    ========================= */
    const candidateEmailHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#f6f8fb;">
    
    <!-- OUTER WRAPPER -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f8fb; padding:12px;">
      <tr>
        <td align="center">

          <!-- MAIN CONTAINER -->
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:720px; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #e0e0e0;">
            
            <!-- HEADER -->
            <tr>
              <td style="background-color:#24439C; padding:16px; text-align:center;">
                <p style="margin:0; font-size:18px; font-weight:bold; color:#FFD700;">NAVORA</p>
                <p style="margin:4px 0 0; font-size:14px; color:#FFD700;">MaritimeSolutionsLtd</p>
              </td>
            </tr>

            <!-- BODY -->
            <tr>
              <td style="padding:20px; color:#333; font-size:14px; line-height:1.6;">
                <p style="margin-top:0;">Dear <strong>${fullName}</strong>,</p>

                <p>
                  Thank you for applying for the position of 
                  <strong>${jobTitle}</strong> – <strong>${jobDepartment}</strong> with Navora.
                  We have received your application and our recruitment team will review it carefully.
                </p>

                <p style="margin:24px 0 8px; font-size:16px; font-weight:bold; color:#24439C;">
                  Your Application Details
                </p>

                <!-- DETAILS TABLE -->
                <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse; border:1px solid #e0e0e0; font-size:13px;">
                  <tr>
                    <td style="background:#f6f6f6; width:40%;"><strong>Job Title</strong></td>
                    <td style="word-break:break-word;">${jobTitle}</td>
                  </tr>
                  <tr>
                    <td style="background:#f6f6f6;"><strong>Department</strong></td>
                    <td style="word-break:break-word;">${
                      jobDepartment || "N/A"
                    }</td>
                  </tr>
                  <tr>
                    <td style="background:#f6f6f6;"><strong>Location</strong></td>
                    <td style="word-break:break-word;">${
                      jobLocation || "N/A"
                    }</td>
                  </tr>
                  <tr>
                    <td style="background:#f6f6f6;"><strong>Type</strong></td>
                    <td style="word-break:break-word;">${jobType || "N/A"}</td>
                  </tr>
                </table>

                <p style="margin-top:20px;">
                  We appreciate your interest in joining our team.
                  Our HR team may reach out to you if your profile matches the requirements.
                </p>

                <p style="margin-top:20px;">
                  Best regards,<br/>
                  <strong>Navora Recruitment Team</strong>
                </p>
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="background:#f2f2f2; padding:14px; text-align:center; font-size:11px; color:#555; line-height:1.5;">
                <p style="margin:0;">Navora – Powered by MaritimeSolutionsLtd</p>
                <p style="margin:4px 0 0;">This is an automated email. Please do not reply.</p>
              </td>
            </tr>

          </table>
          <!-- END MAIN CONTAINER -->

        </td>
      </tr>
    </table>
    <!-- END OUTER WRAPPER -->

  </body>
</html>
`;

    // Usage example:
    await sendEmail({
      to: email,
      subject: `Thank You for Applying – ${jobTitle} | Navora (MSL)`,
      html: candidateEmailHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Submit error:", error);
    next(error);
  }
};
