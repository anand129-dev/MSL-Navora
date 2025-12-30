import { notFound } from "next/navigation";
import React from "react";

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
  console.log("params.id received:", id); // ✅ Should log actual id

  try {
    const res = await fetch(`http://localhost:4080/api/jobs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API returned not ok:", res.statusText);
      return notFound();
    }

    const { data: job } = await res.json();

    if (!job) return notFound();

    return (
      <div className="bg-white //bg-gray-100">
        <div className="min-h-screen">
          {/* 1. HERO SECTION (Image Background + Gradient) */}
          <div className="relative w-full h-[50vh] overflow-hidden hidden md:block">
            {/* Background Image */}
            <img
              src={imageUrl}
              alt="A beautiful landscape hero background"
              className="absolute inset-0 w-full h-full object-cover"
              // onError={(e) => { e.target.onerror = null; e.target.src = fallbackImageUrl; }}
            />

            {/* Gradient Overlay (Fades to white at the bottom) */}
            {/* <div className="hero-gradient-overlay absolute inset-0"></div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-1"></div>

            {/* Hero Content Text */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10">
              <h2 className="text-4xl sm:text-6xl font-extrabold text-shadow-lg text-center leading-tight">
                Career Opportunities
              </h2>
              <p className="mt-4 text-xl sm:text-2xl font-light text-center">
                View job details below
              </p>
            </div> */}
          </div>

          {/* 2. MAIN CONTENT PAGE (White, Overlapping, Narrowed) */}
          {/* max-w-4xl keeps the content page narrow as requested */}
          <main className="absolute bg-white top-24 md:top-56 inset-x-0 mx-auto w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl md:shadow-2xl   px-4 sm:px-6 lg:px-8 py-10">
            {/* --- JOB DETAIL CONTENT (Based on user's Next.js component) --- */}
            <div className="flex justify-between mb-6 text-gray-600">
              <button>
                <p> Back To search results</p>
              </button>
              <button>
                <p>Next Job</p>
              </button>
            </div>
            {/* <hr className="my-6 border-gray-200" /> */}
            <div>
              <span className="font-semibold text-gray-700">jobs/</span>{" "}
              {job._id}
            </div>
            <div className="p-4 sm:p-0">
              <div className="flex justify-between items-start gap-4 mb-6">
                <h1 className="text-2xl md:text-4xl font-bold text-secondary flex-1">
                  {job.title}
                </h1>

                {/* Desktop button */}
                <button className="hidden md:inline-flex px-6 py-3 text-lg bg-secondary text-white rounded-full whitespace-nowrap">
                  Apply Now
                </button>

                {/* Mobile circular button */}
                <button className="md:hidden px-4 py-3 text-lg flex items-center justify-center bg-secondary text-white rounded-full shrink-0">
                  Apply Now
                </button>
              </div>

              <div className="mb-6 text-lg space-y-1">
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

              <h2 className="text-2xl font-bold mb-3 text-gray-800">
                Job Description
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {job.description}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-800">
                Key Responsibilities
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {job.responsibilities}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-800">
                Key Requirements
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {job.requirements}
              </p>

              <button className="mt-10 px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]">
                Apply for this Position
              </button>
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
// The main component, must be the default export in a single-file React app
// const App = () => {
//   // --- MOCK DATA (Replacing the async fetch logic) ---
//   const job = {
//     _id: "54321",
//     title: "Senior Full Stack Engineer (Mock Job)",
//     department: "Product Development",
//     location: "San Francisco, CA (Remote Option)",
//     type: "Full-Time",
//     description:
//       "We are seeking a highly skilled and motivated Senior Full Stack Engineer to join our dynamic team. You will be responsible for designing, developing, and deploying scalable software solutions from front-end user interfaces to back-end services. This role requires excellent problem-solving skills and a passion for building high-quality, performant applications.",
//     responsibilities:
//       "5+ years of professional experience in software development. Expert proficiency in React, TypeScript, and Node.js. Deep understanding of RESTful APIs, database design (SQL/NoSQL), and cloud infrastructure (AWS/GCP). Excellent communication and collaboration skills.",
//     requirements:
//       "5+ years of professional experience in software development. Expert proficiency in React, TypeScript, and Node.js. Deep understanding of RESTful APIs, database design (SQL/NoSQL), and cloud infrastructure (AWS/GCP). Excellent communication and collaboration skills.",
//   };
//   // ----------------------------------------------------

//   const imageUrl = "/hero-background.jpg";
//   // const fallbackImageUrl = 'https://placehold.co/1920x1080/4F46E5/ffffff/png?text=Image+Not+Found';

//   return (
//     <>
//       <div className="bg-white //bg-gray-100">
//         <div className="min-h-screen">
//           {/* 1. HERO SECTION (Image Background + Gradient) */}
//           <div className="relative w-full h-[50vh] overflow-hidden hidden md:block">
//             {/* Background Image */}
//             <img
//               src={imageUrl}
//               alt="A beautiful landscape hero background"
//               className="absolute inset-0 w-full h-full object-cover"
//               // onError={(e) => { e.target.onerror = null; e.target.src = fallbackImageUrl; }}
//             />

//             {/* Gradient Overlay (Fades to white at the bottom) */}
//             {/* <div className="hero-gradient-overlay absolute inset-0"></div> */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-1"></div>

//             {/* Hero Content Text */}
//             {/* <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10">
//               <h2 className="text-4xl sm:text-6xl font-extrabold text-shadow-lg text-center leading-tight">
//                 Career Opportunities
//               </h2>
//               <p className="mt-4 text-xl sm:text-2xl font-light text-center">
//                 View job details below
//               </p>
//             </div> */}
//           </div>

//           {/* 2. MAIN CONTENT PAGE (White, Overlapping, Narrowed) */}
//           {/* max-w-4xl keeps the content page narrow as requested */}
//           <main className="absolute bg-white top-24 md:top-56 inset-x-0 mx-auto w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl md:shadow-2xl   px-4 sm:px-6 lg:px-8 py-10">
//             {/* --- JOB DETAIL CONTENT (Based on user's Next.js component) --- */}
//             <div className="flex justify-between mb-6 text-gray-600">
//               <button>
//                 <p> Back To search results</p>
//               </button>
//               <button>
//                 <p>Next Job</p>
//               </button>
//             </div>
//             {/* <hr className="my-6 border-gray-200" /> */}
//             <div>
//               <span className="font-semibold text-gray-700">jobs/</span>{" "}
//               {job._id}
//             </div>
//             <div className="p-4 sm:p-0">
//               <div className="flex justify-between items-start gap-4 mb-6">
//                 <h1 className="text-2xl md:text-4xl font-bold text-secondary flex-1">
//                   {job.title}
//                 </h1>

//                 {/* Desktop button */}
//                 <button className="hidden md:inline-flex px-6 py-3 text-lg bg-secondary text-white rounded-full whitespace-nowrap">
//                   Apply Now
//                 </button>

//                 {/* Mobile circular button */}
//                 <button className="md:hidden px-4 py-3 text-lg flex items-center justify-center bg-secondary text-white rounded-full shrink-0">
//                   Apply Now
//                 </button>
//               </div>

//               <div className="mb-6 text-lg space-y-1">
//                 <p className="text-gray-600">
//                   <span className="font-semibold text-gray-700">
//                     Department:
//                   </span>{" "}
//                   {job.department}
//                 </p>
//                 <p className="text-gray-600">
//                   <span className="font-semibold text-gray-700">Location:</span>{" "}
//                   {job.location}
//                 </p>
//                 <p className="text-gray-600">
//                   <span className="font-semibold text-gray-700">Type:</span>{" "}
//                   {job.type}
//                 </p>
//               </div>

//               <hr className="my-6 border-gray-200" />

//               <h2 className="text-2xl font-bold mb-3 text-gray-800">
//                 Job Description
//               </h2>
//               <p className="mt-4 text-gray-700 leading-relaxed">
//                 {job.description}
//               </p>

//               <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-800">
//                 Key Responsibilities
//               </h2>
//               <p className="mt-4 text-gray-700 leading-relaxed">
//                 {job.responsibilities}
//               </p>

//               <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-800">
//                 Key Requirements
//               </h2>
//               <p className="mt-4 text-gray-700 leading-relaxed">
//                 {job.requirements}
//               </p>

//               <button className="mt-10 px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]">
//                 Apply for this Position
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
