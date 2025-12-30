import express from "express";
import Job from "../models/job.model.js";

const router = express.Router();

// Create Job
router.post("/", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    return res.status(201).json(job);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// Read All Jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Read Job by ID
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (err) {
    res.status(404).json({ error: "Job not found" });
  }
});

// Update Job by ID
router.put("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Job by ID
router.delete("/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
