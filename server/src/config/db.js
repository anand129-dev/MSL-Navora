import mongoose from "mongoose";
import "./config/env.js";
const connectDB = async () => {
  try {
    // const uri = process.env.MONGO_URI;
    const uri="mongodb+srv://itsanand129_db_user:RXeCsaIHBrNk2wbk@mil-careers.0dbbpln.mongodb.net/?appName=mil-careers";

    console.log("DB FILE URI =", uri); // debug

    if (!uri || typeof uri !== "string") {
      throw new Error("❌ MONGO_URI is not a valid string");
    }

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ DB connect error:", error.message);
  }
};

export default connectDB;
