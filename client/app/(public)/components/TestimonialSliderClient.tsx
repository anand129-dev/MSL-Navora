"use client";

import dynamic from "next/dynamic";

const TestimonialSlider = dynamic(() => import("./TestimonialSlider"), {
  ssr: false,
});

export default function TestimonialSliderClient() {
  return <TestimonialSlider />;
}
