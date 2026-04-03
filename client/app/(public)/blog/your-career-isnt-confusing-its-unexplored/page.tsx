// app/blog/marine-career-guide/page.tsx

import Article from "./Article";

export const metadata = {
  title: "There are so many fields... but how do I even know what fields exist?",
  description:
    "A practical guide for students and professionals to explore career paths, internships, and industry opportunities.",
  openGraph: {
    title: "Your Career Isn’t Confusing. It’s Unexplored.",
    description:
      "A practical guide to understanding career paths for students and professionals.",
    url: "https://navora.maritimesolutionsltd.com/blog/your-career-isnt-confusing-its-unexplored",
    siteName: "MaritimeSolutionsLtd",
    images: [
      {
        url: "https://navora.maritimesolutionsltd.com/banner/your-career-isnt-confusing-its-unexplored.png", // 👈 REQUIRED
        // width: 1200,
        // height: 627,
      },
    ],
    type: "article",
  },
};

export default function Page() {
  return <Article />;
}