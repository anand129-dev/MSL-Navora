import multer from "multer";
import path from "path";

// Max file size: 5MB
const MAX_SIZE = 5 * 1024 * 1024;

// Allowed MIME types and extensions
const allowedMimeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const allowedExtensions = [".pdf", ".doc", ".docx"];

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: MAX_SIZE },
  fileFilter(req, file, cb) {
    // Check MIME type
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(
        new multer.MulterError(
          "LIMIT_UNEXPECTED_FILE",
          "Only PDF, DOC, DOCX files are allowed"
        )
      );
    }

    // Optional: check file extension as extra validation
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      return cb(
        new multer.MulterError(
          "LIMIT_UNEXPECTED_FILE",
          "Only PDF, DOC, DOCX files are allowed"
        )
      );
    }

    cb(null, true);
  },
});

export default upload;
