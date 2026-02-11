"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative flex h-[340px] items-center justify-center overflow-hidden bg-[#0B1F6A]">
      {/* Background circles */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10" />
      <div className="absolute right-[-140px] bottom-[-140px] h-[480px] w-[480px] rounded-full bg-white/10" />

      <div className="relative max-w-3xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-3 text-4xl font-bold text-white lg:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="leading-relaxed text-white/80"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-auto mt-6 h-[3px] bg-[#D6B25E]"
        />
      </div>
    </section>
  );
}
