"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Role {
  img: string;
  title: string;
  desc: string;
}

interface RolesGridProps {
  roles: Role[];
  container: any;
  item: any;
}

export default function RolesGrid({ roles, container, item }: RolesGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-4 text-3xl font-medium text-[#0B1F6A] sm:text-4xl md:text-5xl lg:text-6xl">
        Roles We Recruit
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {roles.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -6 }}
            className="group relative h-105 overflow-hidden"
          >
            {/* Gold hover line */}
            <div className="absolute top-0 left-0 z-20 h-0.75 w-0 bg-[#D6B25E] transition-all duration-500 group-hover:w-full" />

            <Image
              src={itemData.img}
              alt={itemData.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={i === 0}
            />

            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.85)_100%)]" />

            {/* Index */}
            <div className="absolute top-4 right-4 z-20 text-sm text-white/60">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="absolute bottom-0 z-20 p-6 text-white">
              <h2 className="mb-2 text-2xl font-semibold">{itemData.title}</h2>

              <p className="mb-4 text-sm text-gray-200">{itemData.desc}</p>

              {/* <button className="inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black">
                View in detail
                <motion.span whileHover={{ x: 4 }}>→</motion.span>
              </button> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
