// models/User.js
import mongoose from "mongoose";
import { getFormattedId } from "../utils/getFormattedId.js";

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, unique: true },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    phone: String,
    resumeUrl: String,
    profileImage: String,
    appliedApplications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.userId = await getFormattedId("candidate", "C", 3);
    // C001, C002, C003
  };
});

export default mongoose.model("User", userSchema);
