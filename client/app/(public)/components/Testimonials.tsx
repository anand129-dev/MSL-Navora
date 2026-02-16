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
    image: "/candidates/candidate1.png",
  },
  {
    quote: `I would like to share my sincere feedback regarding my experience with Navora (MSL). It has been a pleasure interacting with your team throughout the process. The professionalism, clarity, and support extended to me were truly exceptional.
I appreciate the confidence you have shown in me. Your encouraging words "We believe in you. May you continue to outshine forever" - mean a lot and motivate me to give my best every day.
Thank you once again for the opportunity and the positive experience. I look forward to staying connected.`,
    name: "Nishal Ranjan",
    title: "____",
    image: "/candidates/candidate2.png",
  },
  {
    quote: `Dear Navora (MSL) Team,
I wanted to take a moment to sincerely thank you for your constant support and close monitoring of my profile. Your guidance has truly helped me build confidence throughout the process.
I am happy to share that I have received an offer as a business analyst. I’m genuinely grateful for your encouragement and the effort you invested in helping me reach this milestone.
Thank you once again for everything.`,
    name: "Anand Kumar Rowlo",
    title: "____",
    image: "/candidates/candidate.png",
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
    image: "/candidates/candidate3.png",
  },
  {
    quote: `I Cdr Bala Murali (Retd.) writing this mail to express my sincere thanks for your support in securing a new role as Technical Data Manager . I’ve officially received my appointment letter today and I am excited to share this news.
Few Key points i experienced with Roohi Mehta and the Navora (MSL)are as follows:-  
Communication: I appreciate the timely updates and the clarity regarding the job description and mapping my experience accordingly. 
Preparation: The briefing sessions before my interviews and timely coordination with the stakeholders were incredibly helpful and gave me the confidence I needed.
Professionalism: The entire process felt seamless and well-organized from start to finish.
Even though I have this job, I would like to stay on good terms with you for long-term career networking. 
Thank you again for your guidance throughout this transition!
Regards

`,
    name: "Bala Murali",
    title: "___",
    image: "/candidates/candidate4.jpg",
  },
  {
    quote: `Dear Madam Roohi Mehta,
Navora Team (MSL)

Good Day,
I am writing this message with a deep sense of gratitude and appreciation for everything you have done for me during my recruitment journey. From the very first interaction to well after receiving my offer letter, your support has been constant, reassuring, and genuinely caring.
You did not just help me get a job—you stood by me at every step. From patiently preparing and refining my profile, guiding me through the entire recruitment process, answering even the smallest of my doubts, and ensuring that I felt confident and clear throughout, your involvement made a world of difference. My successful placement as Assistant Training Superintendent would not have been possible without your sincere efforts.
What sets you apart is not only your deep understanding of the maritime industry and recruitment processes, but also your genuine commitment to the candidates you represent. Your willingness to clarify doubts even after placement, and your assurance of continued support in the future, reflects a rare level of integrity, ownership, and care.
It is professionals like you who elevate recruitment from a transactional process to a meaningful professional partnership. I feel extremely fortunate to have been guided by you, and I hold Navora / Maritime Solutions Ltd. in the highest regard for its ethics, transparency, and people-centric approach.
Thank you once again for your unwavering support and encouragement. I look forward to staying connected and will always recommend you and Navora (MSL) with complete confidence and respect.
Thank You. 

Best Regards,
Hemant Arya
Master

`,
    name: "Hemant Arya",
    title: "___",
    image: "/candidates/candidate1.png",
  },
  
];
