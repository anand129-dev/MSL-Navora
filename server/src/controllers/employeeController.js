import Employee from "../models/employee.model.js";
import { success, error } from "../utils/response.js";

// export const createEmployee = async (req, res) => {
//   try {
//     const emp = await Employee.create(req.body);
//     success(res, emp, "Employee created");
//   } catch (err) {
//     error(res, err.message);
//   }
// };

export const createEmployee = async (req, res) => {
  console.log("CreateEmployee Controller");
  console.log("Request body:", req.body);

  try {
    const emp = await Employee.create(req.body);
    console.log("Employee created:", emp);

    return res.status(201).json({
      status: "success",
      message: "Employee created",
      data: emp,
    });
  } catch (err) {
    console.error("Mongoose Error:", err);
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    success(res, employees);
  } catch (err) {
    error(res, err.message);
  }
};

export const getEmployee = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if (!emp) return error(res, "Employee not found", 404);

    success(res, emp);
  } catch (err) {
    error(res, err.message);
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!emp) return error(res, "Employee not found", 404);

    success(res, emp, "Updated");
  } catch (err) {
    error(res, err.message);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const emp = await Employee.findByIdAndDelete(req.params.id);
    if (!emp) return error(res, "Employee not found", 404);

    success(res, emp, "Deleted");
  } catch (err) {
    error(res, err.message);
  }
};
