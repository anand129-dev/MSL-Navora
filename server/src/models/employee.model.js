import mongoose from "mongoose";
import { getFormattedId } from "../utils/getFormattedId.js";

const employeeSchema = new mongoose.Schema(
  {
    employeeId: { type: String, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ["admin", "hr", "manager"], required: true },
    department: String,
  },
  { timestamps: true }
);

// ✅ Async pre-save hook (no next)
employeeSchema.pre("save", async function () {
  if (this.isNew) {
    this.employeeId = await getFormattedId("employee", "E", 3); // E001, E002...
  }
});

export default mongoose.model("Employee", employeeSchema);
