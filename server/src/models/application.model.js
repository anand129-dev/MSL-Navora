// models/Application.js
import mongoose from "mongoose";
// import { getFormattedId } from "../utils/getFormattedId.js";

const applicationSchema = new mongoose.Schema(
  {
    // applicationId: { type: String, unique: true },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    appliedAt: { type: Date, default: Date.now },

    status: {
      type: String,
      enum: [
        "Applied",
        "Under Review",
        "Shortlisted",
        "Interview Scheduled",
        "Selected",
        "Rejected",
      ],
      default: "Applied",
    },

    resumeUrl: String,
    coverLetter: String,

    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },

    notes: String,
  },
  { timestamps: true }
);

applicationSchema.index({ jobId: 1, userId: 1 }, { unique: true }); // prevent double-apply
// applicationSchema.pre("save", async function () {
//   if (this.isNew) {
//     this.customId = await getFormattedId("application", "A", 3);
//     // A001, A002...
//   }
// });

export default mongoose.model("Application", applicationSchema);
