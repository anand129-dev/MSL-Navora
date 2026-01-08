import express from "express";
import upload from "../config/multer.js";
import { submitForm } from "../controllers/submit.controller.js";
import { applyLimiter } from "../config/rateLimit.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  // First handle multer errors
  upload.single("resume")(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          success: false,
          message: "Resume must be under 5MB",
        });
      }
      return res.status(400).json({ success: false, message: err.message });
    }

    // Apply rate limiter
    applyLimiter(req, res, (limiterErr) => {
      if (limiterErr) return next(limiterErr);

      // Now call your controller
      submitForm(req, res, next);
    });
  });
});

export default router;
