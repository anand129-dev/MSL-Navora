import { notFound } from "next/navigation";
import JobActions from "./JobActions";
import React from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Job = {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string;
  requirements: string;
};

type Props = { params: { id: string } };

export default async function JobDetailPage(props: Props) {
  const { id } = await props.params; // <- this is required in Next.js 14+ App Router
  const imageUrl = "/hero-background.jpg";
  // console.log("params.id received:", id); // ✅ Should log actual id

  try {
    const res = await fetch(`${API_URL}/api/jobs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API returned not ok:", res.statusText);
      return notFound();
    }

    const { data: job } = await res.json();

    if (!job) return notFound();

    return (
      <div className="//bg-gray-100 bg-white">
        <div className="min-h-screen">
          {/* 1. HERO SECTION (Image Background + Gradient) */}
          <div className="relative hidden h-[50vh] w-full overflow-hidden md:block">
            {/* Background Image */}
            <img
              src={imageUrl}
              alt="A beautiful landscape hero background"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Gradient Overlay (Fades to white at the bottom) */}
            <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-white"></div>
          </div>

          {/* 2. MAIN CONTENT PAGE (White, Overlapping, Narrowed) */}
          <main className="absolute inset-x-0 top-24 mx-auto w-full bg-white px-4 py-10 sm:px-6 md:top-56 md:max-w-4xl md:shadow-2xl lg:max-w-5xl lg:px-8 xl:max-w-7xl">
            <div>
              <span className="font-semibold text-gray-700">jobs/</span>{" "}
              {job._id}
            </div>
            <div className="p-4 sm:p-0">
              <div className="mb-6 flex items-start justify-between gap-4">
                <h1 className="text-secondary flex-1 text-2xl font-bold md:text-4xl">
                  {job.title}
                </h1>
                <JobActions jobId={job._id} />
              </div>

              <div className="mb-6 space-y-1 text-lg">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-700">
                    Department:
                  </span>{" "}
                  {job.department}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-700">Location:</span>{" "}
                  {job.location}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-700">Type:</span>{" "}
                  {job.type}
                </p>
              </div>

              <hr className="my-6 border-gray-200" />

              <h2 className="mb-3 text-2xl font-bold text-gray-800">
                Job Description
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                {job.description}
              </p>

              <h2 className="mt-8 mb-3 text-2xl font-bold text-gray-800">
                Key Responsibilities
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                {job.responsibilities}
              </p>

              <h2 className="mt-8 mb-3 text-2xl font-bold text-gray-800">
                Key Requirements
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                {job.requirements}
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  } catch (err) {
    console.error("Error fetching job detail:", err);
    return notFound();
  }
}
