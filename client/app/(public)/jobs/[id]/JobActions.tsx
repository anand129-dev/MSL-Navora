"use client";

import { useRouter } from "next/navigation";

export default function JobActions({ jobId }: { jobId: string }) {
  const router = useRouter();

  return (
    <>
      {/* Desktop button */}
      <button
        className="bg-secondary hidden rounded-full px-6 py-3 text-lg text-white md:inline-flex"
        onClick={() => router.push(`/apply/${jobId}`)}
      >
        Apply Now
      </button>

      {/* Mobile button */}
      <button
        className="bg-secondary rounded-full px-4 py-3 text-white md:hidden"
        onClick={() => router.push(`/apply/${jobId}`)}
      >
        Apply Now
      </button>
    </>
  );
}
