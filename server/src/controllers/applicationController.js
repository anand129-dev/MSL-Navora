import Application from "../models/application.model.js";
import Job from "../models/job.model.js";
import User from "../models/user.model.js";
import { success, error } from "../utils/response.js";

export const createApplication = async (req, res) => {
  try {
    const app = await Application.create(req.body);

    // Add references
    await User.findByIdAndUpdate(app.userId, {
      $addToSet: { appliedApplications: app._id },
    });

    await Job.findByIdAndUpdate(app.jobId, {
      $addToSet: { applicants: app.userId },
    });

    success(res, app, "Application submitted");
  } catch (err) {
    error(res, err.message);
  }
};

export const getApplications = async (req, res) => {
  try {
    const apps = await Application.find().populate("jobId").populate("userId");

    success(res, apps);
  } catch (err) {
    error(res, err.message);
  }
};

export const getApplication = async (req, res) => {
  try {
    const app = await Application.findById(req.params.id)
      .populate("jobId")
      .populate("userId");

    if (!app) return error(res, "Application not found", 404);

    success(res, app);
  } catch (err) {
    error(res, err.message);
  }
};

export const updateApplication = async (req, res) => {
  try {
    const app = await Application.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!app) return error(res, "Application not found", 404);

    success(res, app, "Updated");
  } catch (err) {
    error(res, err.message);
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const app = await Application.findByIdAndDelete(req.params.id);

    if (!app) return error(res, "Application not found", 404);

    success(res, app, "Deleted");
  } catch (err) {
    error(res, err.message);
  }
};
