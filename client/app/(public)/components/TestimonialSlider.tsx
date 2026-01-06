"use client";

import NextImage from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Testimonials } from "./Testimonials";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* ------------------------------------------------------------------ */
/* Types */
/* ------------------------------------------------------------------ */

interface Testimonial {
  name: string;
  role: string;
  text: ReactNode;
  image?: string; // optional
}

/* ------------------------------------------------------------------ */
/* Local testimonial data (edit here) */
/* ------------------------------------------------------------------ */

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arun D'Sa",
    role: "Technical Superintendent",
    text: (
      <>
        <p>Dear Ms. Roohi Mehta,</p>
        <br />
        <p>
          I would like to sincerely thank you for your continuous support and
          guidance throughout my recruitment process for the Technical
          Superintendent position.
        </p>
        <br />
        <p>
          From the initial screening to the technical, HR, and psychometric
          stages, your timely communication and clear instructions made the
          entire process smooth and well-organized. I truly appreciate the way
          you followed up at every step and ensured I was well prepared.
        </p>
        <br />
        <p>
          Your professionalism, encouragement, and dedication have been
          extremely valuable, and I am grateful for all the effort you put into
          coordinating the process.
        </p>
        <br />
        <p>Thank you once again for your support.</p>
        <br />
        <p>Warm regards,</p>
        <p>Arun D’Sa</p>
      </>
    ),
    image: "/images/testimonials/rahul.jpg",
  },

  {
    name: "Anita Sharma",
    role: "Second Officer",
    text: "Clear communication, timely updates, and a team that genuinely cares about seafarers.",
  },
  {
    name: "Vikram Iyer",
    role: "Fleet Superintendent",
    text: "A well-structured approach and strong industry knowledge made the experience seamless.",
    image: "/images/testimonials/vikram.jpg",
  },
];

/* ------------------------------------------------------------------ */

const SLIDE_DELAY = 8000;

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setProgress(0);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setProgress((prev) =>
        prev >= 100 ? 100 : prev + 100 / (SLIDE_DELAY / 50),
      );
    }, 50);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  if (!TESTIMONIALS.length) return null;

  return (
    <>
      <section
        id="current-openings"
        className="flex justify-center bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] py-12"
      >
        <div className="w-full max-w-7xl">
          {/* ---------------- HEADER (ALWAYS VISIBLE) ---------------- */}
          <div className="flex justify-between py-4">
            <div>
              <h1 className="text-primary text-2xl md:text-4xl">
                Candidates Testimonials...
              </h1>
              <h2 className="text-2xl font-thin text-slate-900 md:text-4xl">
                Here’s what candidates recruited through us had to say about
                their{" "}
                <span className="text-secondary font-medium">experience</span>{" "}
                with us.
              </h2>
            </div>
            <div className="pl-10">
              <svg
                width={75}
                height={75}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                // {...props}
              >
                <g>
                  <g id="right_quote">
                    <path
                      d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"
                      fill="#CEA72B"
                    />
                    <path
                      d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"
                      fill="#CEA72B"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          {/* ---------------- CONTENT AREA ---------------- */}
          <Testimonials />

          <p className="mt-4 text-center text-sm text-slate-500">
            “Every journey is unique — we’re grateful to be part of theirs.”
          </p>
        </div>
      </section>
    </>
  );
}
