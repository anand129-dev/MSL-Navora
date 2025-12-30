// models/Job.js
import mongoose from "mongoose";
import { getFormattedId } from "../utils/getFormattedId.js";

const jobSchema = new mongoose.Schema(
  {
    // jobId: { type: String, unique: false },
    title: { type: String, required: true },
    department: String,
    location: { type: String, required: true },
    type: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Contract"],
      default: "Full-Time",
    },

    description: { type: String, required: true },
    responsibilities: [String],
    requirements: [String],

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee", // admin or HR
      required: true,
    },

    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // candidates who applied
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

jobSchema.index({ title: "text", description: "text", requirements: "text" });

jobSchema.pre("save", async function () {
  if (this.isNew) {
    this.customId = await getFormattedId("job", "J", 4);
    // J0001, J0002...
  }
});

export default mongoose.model("Job", jobSchema);
