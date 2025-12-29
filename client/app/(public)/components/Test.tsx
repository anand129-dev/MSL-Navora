"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Job = {
  _id: string;
  title: string;
  department: string;
  location: string;
  isActive: boolean;
};

export default function Test() {
  const router = useRouter();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:4080/api/jobs", {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("We’re unable to load current openings right now.");
        }

        const result = await res.json();

        if (!result?.data || !Array.isArray(result.data)) {
          throw new Error(
            "Current openings are temporarily unavailable. Thank you for your patience.",
          );
        }

        const activeJobs = result.data.filter(
          (job: Job) => job.isActive && job._id && job.title && job.location,
        );

        setJobs(activeJobs);
      } catch (err: any) {
        if (err.name === "AbortError") {
          setError(
            "This page is taking longer than expected to load. Please try again in a little while.",
          );
        } else {
          setError(
            "We’re unable to display current openings at the moment. Please check back shortly.",
          );
        }
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    };

    fetchJobs();

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex min-h-[50vh] justify-center bg-green-300">
      <div className="flex w-full max-w-7xl  bg-red-500 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <h1 className="text-center text-2xl font-bold underline sm:text-3xl md:text-4xl">
          Test Component
        </h1>
      </div>
    </div>
  );
}
