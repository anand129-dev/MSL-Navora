import Article from "./Article";

export const metadata = {
  title: "Recruitment for Joint Ventures (JVs): Where Strategy Meets Talent",
  description:
    "A strategic perspective on hiring for Joint Ventures, focusing on alignment, adaptability, and stakeholder dynamics.",
  openGraph: {
    title: "Recruitment for Joint Ventures (JVs): Where Strategy Meets Talent",
    description:
      "Understand how JV hiring differs from traditional recruitment and what it takes to get it right.",
    url: "https://navora.maritimesolutionsltd.com/blog/jv-recruitment-strategy",
    siteName: "MaritimeSolutionsLtd",
    images: [
      {
        url: "https://navora.maritimesolutionsltd.com/banner/jv-recruitment-strategy.png",
        width: 1200,
        height: 627,
      },
    ],
    type: "article",
  },
};

export default function Page() {
  return <Article />;
}
