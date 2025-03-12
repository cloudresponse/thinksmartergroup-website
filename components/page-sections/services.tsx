"use client";

import { ServiceCard } from "@/components/ui/service-card";
import { motion } from "framer-motion";

import serviceImage01 from "@/app/images/christopher-burns-Kj2SaNHG-hg-unsplash.jpg";
import serviceImage02 from "@/app/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import serviceImage03 from "@/app/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg";
import { SectionHeader } from "../SectionHeader";
const services = [
  {
    title: "Advisory Services",
    description:
      "Strategy consulting and investment advice on how to boost growth.",
    imageSrc: serviceImage01.src,
  },
  {
    title: "Product and Technology",
    description:
      "Prototyping and experimentation in order to learn fast about monetisation potential in a lean way.",
    imageSrc: serviceImage02.src,
  },
  {
    title: "Training and Assessment",
    description:
      "Get started on your Gen AI journey in the right way with our skills gap analysis and training offers.",
    imageSrc: serviceImage03.src,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Services() {
  return (
    <section id="services" className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <SectionHeader title="Our Services" />
          {/* <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Comprehensive solutions tailored to your needs
            </p> */}
        </div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12"
      >
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            variants={item}
          />
        ))}
      </motion.div>
    </section>
  );
}
