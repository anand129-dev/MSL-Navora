"use client";

import { useState } from "react";

export default function CreateJobPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData(e.target);

    const jobData = {
      title: form.get("title"),
      department: form.get("department"),
      location: form.get("location"),
      type: form.get("type"),
      description: form.get("description"),
      responsibilities: form
        .get("responsibilities")
        .split("\n")
        .filter((x) => x.trim().length > 0),
      requirements: form
        .get("requirements")
        .split("\n")
        .filter((x) => x.trim().length > 0),
      postedBy: "6770e9fa55e01a79cd01f123", // TEMP — replace with logged-in HR/Admin ID
    };

    try {
      const res = await fetch("http://localhost:4080/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Job Created Successfully!");
        e.target.reset();
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setMessage("Server Error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Create Job Opening
        </h1>

        {message && (
          <p className="mb-4 text-center text-white p-2 rounded bg-green-600">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium">Job Title *</label>
            <input
              name="title"
              required
              className="w-full border rounded p-2"
              placeholder="Software Engineer"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block mb-1 font-medium">Department</label>
            <input
              name="department"
              className="w-full border rounded p-2"
              placeholder="Engineering"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-medium">Location *</label>
            <input
              name="location"
              required
              className="w-full border rounded p-2"
              placeholder="Mumbai"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block mb-1 font-medium">Job Type *</label>
            <select
              name="type"
              className="w-full border rounded p-2"
              defaultValue="Full-Time"
            >
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Job Description *</label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full border rounded p-2"
              placeholder="Explain the role and purpose..."
            ></textarea>
          </div>

          {/* Responsibilities */}
          <div>
            <label className="block mb-1 font-medium">
              Responsibilities (one per line)
            </label>
            <textarea
              name="responsibilities"
              rows={4}
              className="w-full border rounded p-2"
              placeholder="Write each point on a new line"
            ></textarea>
          </div>

          {/* Requirements */}
          <div>
            <label className="block mb-1 font-medium">
              Requirements (one per line)
            </label>
            <textarea
              name="requirements"
              rows={4}
              className="w-full border rounded p-2"
              placeholder="Skills, experience, tools..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Creating..." : "Create Job"}
          </button>
        </form>
      </div>
    </div>
  );
}
