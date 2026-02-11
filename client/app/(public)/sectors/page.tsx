import SectorSection from "./SectorSection";
import PageHero from "@/app/(public)/components/PageHero";

export const metadata = {
  title: "Sectors | Navora MaritimeSolutionsLtd",
  description:
    "Specialised recruitment and workforce solutions across maritime, offshore, energy, logistics and digital industries.",
};

const sectors = [
  {
    title: "SHIPPING SECTOR",
    description:
      "Our recruitment services span across technical and marine operations, commercial shipping, ship management, and class and P&I — delivering talent across the global maritime ecosystem.",
    image: "/sectors/sector1.jpg",
    points: [
      "Technical and Marine operations",
      "Ship Brokering and Chartering",
      "Commercial Shipping",
      "Ship Management",
      "Class and P&I",
    ],
  },
  {
    title: "OFFSHORE",
    description:
      "Supporting offshore exploration, construction, and production through specialized recruitment across global energy projects.",
    image: "/sectors/sector2.jpg",
    points: [
      "Drilling Operations",
      "Subsea Engineering",
      "Marine & Construction",
      "Project Management",
      "Health, Safety & Environment",
    ],
  },
  {
    title: "ENERGY & RENEWABLES",
    description:
      "Connecting skilled professionals with traditional energy and renewable projects worldwide.",
    image: "/sectors/sector3.jpg",
    points: [
      "Oil & Gas",
      "Wind Energy",
      "Solar Projects",
      "Grid Infrastructure",
      "Energy Transition",
    ],
  },
  {
    title: "LOGISTICS",
    description:
      "Delivering talent across global supply chains, freight forwarding, and port operations.",
    image: "/sectors/sector4.jpg",
    points: [
      "Port Operations",
      "Freight Forwarding",
      "Supply Chain Management",
      "Warehousing",
      "Distribution",
    ],
  },
  {
    title: "AI & DIGITAL IT",
    description:
      "Providing digital and technology professionals driving innovation across maritime and enterprise systems.",
    image: "/sectors/sector5.jpg",
    points: [
      "Software Development",
      "Data Science",
      "Artificial Intelligence",
      "Cyber Security",
      "Cloud Engineering",
    ],
  },
  {
    title: "TRADING & OTHERS",
    description:
      "Supporting global trading houses and diverse industries with specialized recruitment solutions.",
    image: "/sectors/sector6.jpg",
    points: [
      "Commodity Trading",
      "Risk Management",
      "Operations",
      "Finance",
      "Business Support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="SECTORS"
        description="Delivering specialised recruitment and workforce solutions across maritime, offshore, energy, logistics and digital industries — connecting global talent with opportunity."
      />

      {/* SECTORS */}
      {sectors.map((sector, index) => (
        <SectorSection
          key={index}
          {...sector}
          index={index}
          reverse={index % 2 !== 0}
        />
      ))}
    </main>
  );
}
