"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center"
    >
      {title}
    </motion.h2>
  );
}
