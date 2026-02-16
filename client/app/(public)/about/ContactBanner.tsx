"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactBanner() {
  const router = useRouter();

  return (
    <div className="relative py-20 mt-20 overflow-hidden">
      {/* Background */}
      <Image
        src="/about/contactbanner.png"
        alt="Contact banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Talk to our team
        </h2>

        <p className="mb-6 text-white/90">
          Whether you’re exploring your next career move or seeking the right talent for your team, our team is ready to support you.
        </p>

        <button
          onClick={() => router.push("/contact")}
          className="bg-white hover:opacity-90 transition text-xl font-bold text-secondary px-6 py-3 rounded-full"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
