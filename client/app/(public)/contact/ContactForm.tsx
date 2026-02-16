"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    company: "",
    title: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            type: userType,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          company: "",
          title: "",
          country: "",
        });
        setUserType("");
      } else {
        alert("Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">
            Connect With Our Team
          </h1>
          <p className="text-slate-600">
            Share a few details and our team will reach out shortly.
          </p>
        </div>

        {success && (
          <div className="mb-6 rounded-lg bg-green-50 border border-green-200 text-green-700 px-4 py-3">
            Message sent successfully ✅
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>

          {/* User Type */}
          <div>
            <label className="text-sm font-medium">Who are you?</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="jobSeeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
          </div>

          {/* Conditional Fields */}
          {userType === "jobSeeker" && (
            <div>
              <label className="text-sm font-medium">
                Tell us about your enquiry
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          )}

          {userType === "employer" && (
            <div className="space-y-4">
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2"
              />

              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2"
              />

              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your enquiry"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2"
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!userType || loading}
            className="w-full rounded-lg bg-slate-900 text-white py-3 font-medium hover:bg-slate-800 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
