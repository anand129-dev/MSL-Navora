"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="dark:bg-grid-white/[0.05] //h-[40rem] //bg-white relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased dark:bg-black">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: `Dear Ms. Roohi Mehta,I would like to sincerely thank you for your continuous support and guidance throughout my recruitment process for the Technical Superintendent position.
From the initial screening to the technical, HR, and psychometric stages, your timely communication and clear instructions made the entire process smooth and well-organized. I truly appreciate the way you followed up at every step and ensured I was well prepared.
Your professionalism, encouragement, and dedication have been extremely valuable, and I am grateful for all the effort you put into coordinating the process.
Thank you once again for your support.
Warm regards,
Arun D’Sa`,
    name: "Arun D'Sa",
    title: "Technical Superintendent",
    image: "/candidate1.png",
  },
  {
    quote: `I would like to share my sincere feedback regarding my experience with Navora (MSL). It has been a pleasure interacting with your team throughout the process. The professionalism, clarity, and support extended to me were truly exceptional.
I appreciate the confidence you have shown in me. Your encouraging words "We believe in you. May you continue to outshine forever" - mean a lot and motivate me to give my best every day.
Thank you once again for the opportunity and the positive experience. I look forward to staying connected.`,
    name: "Nishal Ranjan",
    title: "____",
    image: "/candidate2.png",
  },
  {
    quote: `Dear Navora (MSL) Team,
I wanted to take a moment to sincerely thank you for your constant support and close monitoring of my profile. Your guidance has truly helped me build confidence throughout the process.
I am happy to share that I have received an offer as a business analyst. I’m genuinely grateful for your encouragement and the effort you invested in helping me reach this milestone.
Thank you once again for everything.`,
    name: "Anand Kumar Rowlo",
    title: "____",
    image: "/candidate.png",
  },
  {
    quote: `I’m writing to thank you for the incredible support throughout my job search. This feedback comes straight from my heart. You coached me, guided me, and stood by me during the entire process, even when decisions were difficult. I truly appreciate how you helped me evaluate my skills, make informed choices, and negotiate a role that offers both growth and a strong package.`,
    name: "Shaswat Upreti",
    title: "Chief Engineer",
    image: "/candidate3.png",
  },
];
