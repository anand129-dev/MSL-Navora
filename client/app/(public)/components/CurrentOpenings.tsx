"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Job = {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  isActive: boolean;
  description: string;
};

export default function JobList() {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // Initialize from sessionStorage if available
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
  // const [starred, setStarred] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // server check

    const saved = sessionStorage.getItem("jobs");
    if (saved) {
      setJobs(JSON.parse(saved));
      setLoading(false); // already have jobs, no need to fetch
    } else {
      // fetch from API here
      const controller = new AbortController();

      const fetchJobs = async () => {
        try {
          const res = await fetch(`${API_URL}/api/jobs`, {
            signal: controller.signal,
          });
          const result = await res.json();
          const activeJobs = result.data.filter(
            (job: Job) => job.isActive && job._id && job.title && job.location,
          );
          setJobs(activeJobs);
          sessionStorage.setItem("jobs", JSON.stringify(activeJobs));
        } catch (err: any) {
          if (err.name === "AbortError") return;
          setError("Unable to load jobs at the moment.");
        } finally {
          setLoading(false);
        }
      };

      fetchJobs();

      return () => controller.abort();
    }
  }, [API_URL]);

  return (
    <section
      id="current-openings"
      className="flex justify-center bg-white py-12"
    >
      <div className="//p-6 //sm:p-8 //lg:py-12 w-full max-w-7xl">
        {/* ---------------- HEADER (ALWAYS VISIBLE) ---------------- */}
        <div className="flex justify-between py-4">
          <div>
            <h1 className="text-primary text-2xl md:text-4xl">
              Current Openings
            </h1>
            <h2 className="text-2xl md:text-4xl">Be the First to Apply</h2>
          </div>
          <div>
            <button className="rounded-full border border-blue-500 px-6 py-2 transition hover:bg-blue-500 hover:text-white">
              View All
            </button>
          </div>
        </div>

        {/* ---------------- CONTENT AREA ---------------- */}
        {loading && (
          <div className="w-full rounded-md bg-slate-100 py-16 text-center">
            <p className="text-gray-500">Loading current openings…</p>
          </div>
        )}

        {!loading && error && (
          <div className="py-16 text-center">
            <p className="text-gray-600">{error}</p>
          </div>
        )}

        {!loading && !error && jobs.length === 0 && (
          <div className="w-full rounded-md bg-slate-100 px-4 py-16 text-center">
            <h2 className="mb-2 text-2xl font-semibold">No Current Openings</h2>
            <p className="text-gray-500">
              We currently don’t have any open positions. Please check back soon
              or follow us on LinkedIn for updates.
            </p>
          </div>
        )}

        {!loading && !error && jobs.length > 0 && (
          <div>
            <div className="w-full rounded-md bg-slate-100 px-4 py-4">
              <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                  <li
                    key={job._id}
                    className="flex flex-col gap-2 rounded-md bg-white p-4"
                  >
                    <div className="items-top flex justify-between">
                      <div>
                        <h2 className="font-inter text-xl font-bold">
                          {job.title}
                        </h2>
                        <h2 className="text-xl">({job.department})</h2>
                      </div>
                      {/* <button onClick={() => setStarred(!starred)}>
                    {starred ? (
                      // ⭐ FILLED STAR
                      <svg
                        viewBox="0 0 512 512"
                        className="h-10 w-10 text-[#0061ff]"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M505.917,217.41c5.516-5.377,7.463-13.268,5.084-20.593c-2.381-7.325-8.594-12.564-16.217-13.671l-152.358-22.138c-0.118-0.017-0.222-0.092-0.276-0.201l-68.136-138.06C270.605,15.84,263.701,11.548,256,11.548c-7.701,0-14.605,4.291-18.014,11.198l-68.136,138.06c-0.054,0.109-0.158,0.184-0.277,0.202L17.214,183.147c-7.622,1.107-13.836,6.346-16.217,13.671c-2.38,7.327-0.433,15.217,5.084,20.593L116.33,324.876c0.087,0.085,0.126,0.206,0.105,0.326L90.409,476.944c-2.069,12.06,7.484,23.505,19.779,23.505c3.192,0,6.401-0.77,9.367-2.328l136.275-71.645c0.107-0.057,0.233-0.057,0.341,0.001l136.273,71.642c6.818,3.586,14.924,3,21.156-1.529c6.232-4.528,9.294-12.057,7.991-19.647L395.565,325.2c-0.021-0.12,0.018-0.241,0.105-0.325L505.917,217.41z" />
                      </svg>
                    ) : (
                      // ☆ HOLLOW STAR
                      <svg
                        viewBox="-16 -16 544 544"
                        className="h-10 w-10 text-[#0061ff]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M505.917,217.41c5.516-5.377,7.463-13.268,5.084-20.593c-2.381-7.325-8.594-12.564-16.217-13.671l-152.358-22.138c-0.118-0.017-0.222-0.092-0.276-0.201l-68.136-138.06C270.605,15.84,263.701,11.548,256,11.548c-7.701,0-14.605,4.291-18.014,11.198l-68.136,138.06c-0.054,0.109-0.158,0.184-0.277,0.202L17.214,183.147c-7.622,1.107-13.836,6.346-16.217,13.671c-2.38,7.327-0.433,15.217,5.084,20.593L116.33,324.876c0.087,0.085,0.126,0.206,0.105,0.326L90.409,476.944c-2.069,12.06,7.484,23.505,19.779,23.505c3.192,0,6.401-0.77,9.367-2.328l136.275-71.645c0.107-0.057,0.233-0.057,0.341,0.001l136.273,71.642c6.818,3.586,14.924,3,21.156-1.529c6.232-4.528,9.294-12.057,7.991-19.647L395.565,325.2c-0.021-0.12,0.018-0.241,0.105-0.325L505.917,217.41z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={16}
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button> */}
                    </div>
                    <div className="//justify-between flex gap-4">
                      <p className="rounded-xl bg-slate-100 px-2 text-sm text-slate-800">
                        Location :{" "}
                        <span className="font-semibold">{job.location}</span>
                      </p>
                      <p className="rounded-xl bg-slate-100 px-2 text-sm text-slate-800">
                        Type : <span className="font-semibold">{job.type}</span>
                      </p>
                    </div>
                    <div className="//justify-between flex gap-4">
                      <p className="rounded-xl bg-slate-100 px-2 text-sm text-slate-800">
                        Date :{" "}
                        <span className="font-semibold">Dec 21, 2025</span>
                      </p>
                      <p className="rounded-xl bg-slate-100 px-2 text-sm">
                        Job Id : <span className="font-semibold">MSL2334L</span>
                      </p>
                    </div>
                    <p className="text-xs leading-4 font-medium text-slate-500">
                      {job.description}
                    </p>

                    <div className="flex gap-4">
                      <button
                        onClick={() => router.push(`/jobs/${job._id}`)}
                        className="rounded-full border border-[#24439C] px-4 py-1 text-base font-medium text-[#24439C] hover:bg-[#24439C] hover:font-light hover:text-white"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => router.push(`/apply/${job._id}`)}
                        className="rounded-full border-[#24439C] bg-[#24439C] px-4 py-1 text-base font-light text-white hover:border hover:bg-white hover:font-medium hover:text-[#24439C]"
                      >
                        Apply Now
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">
              Stay connected — follow us on LinkedIn for the latest job
              openings.
              <br />
              We continuously update our website with new opportunities.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
