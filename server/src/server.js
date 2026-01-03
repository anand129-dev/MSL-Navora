// import dotenv from "dotenv";
// dotenv.config({ path: ".env" });
import "./config/env.js";

import mongoose from "mongoose";
import app from "./app.js";

// dotenv.config();

const PORT = process.env.PORT || 4080;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.log(err));
