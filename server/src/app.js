import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employee.routes.js";
import userRoutes from "./routes/user.routes.js";
import jobRoutes from "./routes/job.routes.js";
import applicationRoutes from "./routes/application.routes.js";
// import other routes later

const app = express();

// 🌐 Enable CORS
app.use(cors());

// 📦 Parse JSON requests
app.use(express.json());

// 🔹 Mount Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

// 🔹 Default route
app.get("/", (req, res) => {
  res.send("MSL Careers Backend Running 🚀");
});

// 🔹 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});

// 🔹 Global Error Handler (must have 4 parameters)
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Something went wrong",
  });
});

export default app;
