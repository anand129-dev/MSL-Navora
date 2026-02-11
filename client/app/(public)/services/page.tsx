import PageHero from "@/app/(public)/components/PageHero";
import RolesGrid from "./RolesGrid";
import ServicesOfferings from "./ServicesOfferings";

const services = [
  {
    title: "Permanent Recruitment Services",
    desc: "We deliver expert permanent recruitment solutions for businesses in the Shipping, Maritime, and Energy sectors. Our approach focuses on connecting you with candidates who are not only skilled but also motivated to grow with your business for the long term.",
  },
  {
    title: "Maritime Executive Search",
    desc: "We specialize in Maritime Executive Search, focusing on identifying, recruiting, and selecting senior executives and directors for the global Maritime, Shipping, and Energy sectors.",
  },
  {
    title: "Recruitment Process Outsourcing (RPO)",
    desc: "Navora’s Recruitment Process Outsourcing (RPO) service enables Maritime and Shipping businesses to optimize their hiring. From high-volume recruitment to specialized roles, our expert team can manage part or all your recruitment process, making your hiring strategy more efficient and effective.",
  },
  {
    title: "Salary Surveys and Benchmarking",
    desc: "We partner with businesses operating in the Shipping, Maritime and Energy sectors to create bespoke salary surveys and benchmarking of roles in these sectors.",
  },
  {
    title: "Consultancy Services for Leadership Training",
    desc: "Supporting leadership development through tailored consultancy and training services designed to strengthen executive capability and organisational performance.",
  },
];

const roles = [
  {
    title: "Marine & Technical Professionals",
    desc: "Supporting traditional and renewable energy markets with specialist talent.",
    img: "/services/role1.jpg",
  },
  {
    title: "Commercial & Trading Roles",
    desc: "Global maritime recruitment across commercial and technical roles.",
    img: "/services/role2.jpg",
  },
  {
    title: "Offshore & Energy Specialists",
    desc: "Expert recruitment for offshore, oil & gas, and renewable energy sectors.",
    img: "/services/role3.jpg",
  },
  {
    title: "Digital & AI Talent",
    desc: "Building future-ready digital and AI teams.",
    img: "/services/role4.jpg",
  },
  {
    title: "Logistics & Supply Chain",
    desc: "End-to-end recruitment for logistics and supply chain.",
    img: "/services/role5.jpg",
  },
  {
    title: "Finance, Legal & Corporate Functions",
    desc: "Specialist recruitment for finance, legal, and corporate roles.",
    img: "/services/role6.jpg",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesGrid() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Our Services"
        description="We deliver end-to-end recruitment solutions across Maritime, Shipping, Energy, Logistics, Trading, and Professional Services — from specialist roles to executive leadership."
      />

      {/* ROLES GRID */}
      <RolesGrid roles={roles} container={container} item={item} />

      <ServicesOfferings
        heading="Recruitment Solutions"
        intro="From permanent placements to executive search and RPO, we provide end-to-end recruitment and consultancy services tailored to the maritime, shipping, and energy industries."
        services={services}
      />
    </>
  );
}
