import { transporter, MAIL_FROM } from "../config/mailer.js";

export const submitForm = async (req, res, next) => {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { fullName, email } = req.body;

    console.log("NAME:", fullName);

    try {
        const { name, email, message } = req.body;

        console.log("BODY:", req.body);
        console.log("FILE:", req.file?.originalname);


        // if (!fullName || !email) {
        //   return res.status(400).json({ success: false, message: "Missing fields" });
        // }

        await transporter.sendMail({
            from: MAIL_FROM,
            to: MAIL_FROM,
            subject: `New Application from ${name}`,
            html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message || ""}</p>
      `,
            attachments: req.file
                ? [
                    {
                        filename: req.file.originalname,
                        content: req.file.buffer
                    }
                ]
                : []
        });

        res.status(200).json({ success: true, message: "Application submitted" });
    } catch (error) {
        next(error);
    }
};
