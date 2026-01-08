// config/rateLimit.js
import rateLimit from "express-rate-limit";

export const applyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 applications per IP in 15 mins
  message: "Too many applications from this IP, please try again later.",
});
