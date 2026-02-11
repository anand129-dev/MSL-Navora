"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Sector = {
  title: string;
  description: string;
  image: string;
  points: string[];
};

type Props = Sector & {
  reverse?: boolean;
  index?: number;
};

export default function SectorSection({
  title,
  description,
  image,
  points,
  reverse = false,
  index = 0,
}: Props) {
  const isCream = index % 2 !== 0;

  return (
    <section
      className={`w-full overflow-hidden py-8 lg:py-24 ${
        isCream ? "bg-[#f9f9f9]" : "bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={reverse ? "lg:order-2" : ""}
        >
          <h2 className="mb-2 text-3xl font-bold text-[#0B1F6A] md:text-3xl md:font-light lg:text-5xl">
            {title}
          </h2>

          <p className="mb-2 max-w-xl leading-tight text-gray-600 md:mb-4">
            {description}
          </p>

          <div className="border-t border-[#D6B25E]">
            {points.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="hover:bg-primary border-b border-[#D6B25E] py-1 text-lg text-[#0B1F6A] transition-all duration-300 hover:pl-2 md:py-2 md:text-xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`${reverse ? "lg:order-1" : ""} overflow-hidden`}
        >
          <Image
            src={image}
            alt={title}
            width={700}
            height={700}
            className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
