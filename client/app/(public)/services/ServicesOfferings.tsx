"use client";

import { motion } from "framer-motion";

interface Service {
  title: string;
  desc: string;
}

interface ServicesOfferingsProps {
  heading: string;
  intro: string;
  services: Service[];
}

export default function ServicesOfferings({
  heading,
  intro,
  services,
}: ServicesOfferingsProps) {
  return (
    <section
      className="bg-white py-12"
      aria-labelledby="services-offerings-heading"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 px-6 lg:grid-cols-2">
        {/* LEFT INTRO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            id="services-offerings-heading"
            className="mb-6 text-4xl font-bold text-[#0B1F6A] lg:text-5xl"
          >
            {heading}
          </h2>

          <div className="mb-6 h-0.75 w-20 bg-[#D6B25E]" />

          <p className="max-w-md leading-relaxed text-gray-700">{intro}</p>
        </motion.div>

        {/* RIGHT SERVICES */}
        <div className="space-y-10">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l border-[#D6B25E] pl-6"
            >
              <h3 className="mb-2 text-2xl font-semibold text-[#0B1F6A]">
                {service.title}
              </h3>

              <p className="leading-relaxed text-gray-700">{service.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
