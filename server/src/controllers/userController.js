import User from "../models/user.model.js";
import { success, error } from "../utils/response.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    success(res, user, "User created");
  } catch (err) {
    error(res, err.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    success(res, users);
  } catch (err) {
    error(res, err.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return error(res, "User not found", 404);

    success(res, user);
  } catch (err) {
    error(res, err.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return error(res, "User not found", 404);

    success(res, user, "Updated");
  } catch (err) {
    error(res, err.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return error(res, "User not found", 404);

    success(res, user, "Deleted");
  } catch (err) {
    error(res, err.message);
  }
};
