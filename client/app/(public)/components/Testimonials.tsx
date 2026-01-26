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
    quote: `Dear Roohi maam, Navora Team (MSL)
I am writing this mail to thank you and provide a feedback for our amazing engagement during the whole job process.
Its not been written from chatgpt but its coming straight from my heart.
You have coached me , informed me and fought for me during the whole process , I am grateful.
You reviewed my skills , and helped me to take conscious decisions even when initially they were not working in favour.
You kept supporting me , gave clear guidance about the role and always made me aware about the bright side. 
Even when I refused initially , you have taken that in right spirit, when i came back , you helped me again to get back into the game with more guidance .
I am thankful to you , that in this process, you helped me secure a good package and growth path.
I will remain always at your disposal and truly grateful.
You knowledge of industry is enlightening and you make us aware of future job openings which we might get after a few years of experience.
The way you negotiated on my behalf with company speaks a lot about your nature that you consider candidate not as a number but a human being , and understand their part of story during job process.
Thank you for this amazing opportunity. 
Best Regards
`,
    name: "Shaswat Upreti",
    title: "Chief Engineer",
    image: "/candidate3.png",
  },
];
