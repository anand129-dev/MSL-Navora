import express from "express";
import upload from "../config/multer.js";
import { submitForm } from "../controllers/submit.controller.js";

const router = express.Router();

router.post("/", upload.single("resume"), submitForm);

export default router;
