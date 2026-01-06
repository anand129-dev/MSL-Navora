import CurrentOpening from "./components/CurrentOpenings";
import HeroSection from "./components/Hero";
import TestimonialSliderClient from "./components/TestimonialSliderClient";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CurrentOpening />
      <TestimonialSliderClient />
    </div>
  );
}
