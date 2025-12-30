"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "react-phone-number-input/style.css";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Dynamic import for PhoneInput to prevent SSR hydration errors
const PhoneInput = dynamic(() => import("react-phone-number-input"), {
  ssr: false,
});

type Job = {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  isActive?: boolean;
  description?: string;
};

export default function SendEmailForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [previousEmployment, setPreviousEmployment] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState<Job | null>(null);
  const params = useParams();
  const jobId = params.id;
  const imageUrl = "/hero-background.jpg";

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  //  Fetch Job Details from API
  useEffect(() => {
    if (!jobId) return;
    const fetchJob = async () => {
      try {
        const res = await fetch(`${API_URL}/jobs/${jobId}`, {
          cache: "no-store",
        });
        const json = await res.json();
        setJob(json.data);
      } catch (err) {
        console.error("Failed to fetch job", err);
      }
    };
    fetchJob();
  }, [jobId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, any> = {};
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        data[key] = { name: value.name, size: value.size, type: value.type };
      } else {
        data[key] = value;
      }
    }

    if (!job) return;

    data.jobId = job?._id;
    data.jobTitle = job?.title;
    data.jobDepartment = job?.department;
    data.jobLocation = job?.location;
    console.log("FINAL APPLICATION DATA 👇");
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative hidden h-[50vh] w-full overflow-hidden md:block">
        <img
          src={imageUrl}
          alt="A beautiful landscape hero background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-white"></div>
      </div>

      <main className="absolute inset-x-0 top-24 mx-auto w-full bg-white px-4 py-10 sm:px-6 md:top-56 md:max-w-4xl md:shadow-2xl lg:max-w-5xl lg:px-8 xl:max-w-7xl">
        <div className="space-y-3">
          {/* Job ID */}
          <div className="text-sm text-gray-500">
            Job ID:{" "}
            <span className="font-medium text-gray-700">{job?._id}</span>
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-800 md:text-2xl">
            Apply for {job?.title}
            {job?.department && (
              <span className="font-medium text-gray-500">
                {" "}
                · {job.department}
              </span>
            )}
          </h1>

          {/* Meta info */}
          <div className="mt-2 flex flex-wrap gap-6">
            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg
                width={18}
                height={18}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2C10.477 2 6 6.478 6 12c0 5.018 10.005 20.011 10 20 1.964.011 10-15.05 10-20C26 6.478 21.523 2 16 2zm0 14a4 4 0 110-8 4 4 0 010 8z"
                  fill="#7a7a7a"
                />
              </svg>
              <span>{job?.location}</span>
            </div>

            {/* Job Type */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="6.27"
                  width="21"
                  height="15.27"
                  rx="1.91"
                  stroke="#7d7d7d"
                  strokeWidth={1.5}
                />
                <path
                  d="M3.41 6.27H20.59A1.91 1.91 0 0122.5 8.18v1A3.82 3.82 0 0118.68 13H5.32A3.82 3.82 0 011.5 9.14v-1A1.91 1.91 0 013.41 6.27z"
                  stroke="#7d7d7d"
                  strokeWidth={1.5}
                />
              </svg>
              <span>{job?.type}</span>
            </div>
          </div>
        </div>

        {/* Horizontal Bar */}
        <div className="my-4 h-[2px] w-full bg-blue-500"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              Full Name<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name="fullName"
              required
              defaultValue=""
              placeholder="Enter your full name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-400 focus:ring-0 focus:outline-none md:w-2/3"
            />
          </div>

          {/* Email */}
          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              Email Address<span className="text-red-500">*</span>
            </p>
            <input
              type="email"
              name="email"
              required
              defaultValue=""
              placeholder="you@example.com"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-400 focus:ring-0 focus:outline-none md:w-2/3"
            />
          </div>

          {/* Phone Number */}
          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              Phone Number<span className="text-red-500">*</span>
            </p>
            <div className="w-full md:w-2/3">
              <PhoneInput
                international
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
                className="PhoneInput w-full rounded-md border border-gray-300 px-4 py-2"
              />
              <input type="hidden" name="phone" value={phone || ""} />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              Upload Your Resume<span className="text-red-500">*</span>
            </p>
            <div className="flex w-full flex-col gap-1 md:w-2/3">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700 focus:border-gray-400 focus:ring-0 focus:outline-none"
              />
              <p className="text-sm text-gray-400">
                Accepted formats: PDF, DOC, DOCX. Max size: 5MB
              </p>
            </div>
          </div>

          {/* Source Dropdown */}
          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              How Did You Hear About Us?
            </p>
            <select
              name="source"
              required
              defaultValue=""
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:border-gray-400 focus:ring-0 focus:outline-none md:w-2/3"
            >
              <option value="" disabled hidden>
                Please select
              </option>
              <option value="linkedin">LinkedIn</option>
              <option value="company-website">Company Website</option>
              <option value="referral">Employee Referral</option>
              <option value="job-portal">Job Portal</option>
              <option value="social-media">Social Media</option>
              <option value="recruiter">Recruiter</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Previous Employment */}
          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              Have you been employed through Navora in the past?
              <span className="text-red-500">*</span>
            </p>
            <div className="flex w-full flex-col gap-2 md:w-2/3">
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="previousEmployment"
                    value="yes"
                    className="accent-blue-600"
                    checked={previousEmployment === "yes"}
                    onChange={() => setPreviousEmployment("yes")}
                    required
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="previousEmployment"
                    value="no"
                    className="accent-blue-600"
                    checked={previousEmployment === "no"}
                    onChange={() => setPreviousEmployment("no")}
                  />
                  No
                </label>
              </div>
              {previousEmployment === "yes" && (
                <input
                  type="text"
                  name="previousDetails"
                  placeholder="Please specify your previous role or period"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 md:w-1/2"
                  required
                />
              )}
            </div>
          </div>

          {/* Consent */}
          <div className="mt-6 flex flex-col gap-2">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 h-4 w-4 accent-blue-600"
              />
              <span className="text-sm text-gray-600">
                I agree to receive recruitment-related communications from
                Navora, operated by MaritimeSolutionsLtd. I understand that my
                personal information will be processed in accordance with the{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Recruitment and Applicant Privacy Policy
                </a>
                , and I may opt out at any time.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              {loading ? "Sending..." : "Submit Application"}
            </button>
          </div>

          {/* Status */}
          {status && (
            <p className="mt-4 text-center font-medium text-green-600">
              {status}
            </p>
          )}
          <input type="hidden" name="jobId" value={job?._id || ""} />
          <input type="hidden" name="jobTitle" value={job?.title || ""} />
        </form>
      </main>
    </div>
  );
}
