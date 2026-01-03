import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.pdf$/i)) {
      return cb(new Error("Only PDF files are allowed"));
    }
    cb(null, true);
  }
});

upload.single("resume")

export default upload;
