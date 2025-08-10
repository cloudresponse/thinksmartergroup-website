"use client";

import { easeOut, motion } from "framer-motion";
import serviceImage02 from "@/app/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";

import serviceImage01 from "@/app/images/christopher-burns-Kj2SaNHG-hg-unsplash.jpg";
import serviceImage03 from "@/app/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg";
import { ServiceCard } from "@/components/ui/service-card";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  {
    title: "Advisory Services",
    description:
      "Strategy consulting and investment advice on how to boost growth.",
    href: "/services/#advice",
    imageSrc: serviceImage01.src,
  },
  {
    title: "Product and Technology",
    description:
      "Prototyping and experimentation in order to learn fast about monetisation potential in a lean way.",
    href: "/services/#product",
    imageSrc: serviceImage02.src,
  },
  {
    title: "Training and Assessment",
    description:
      "Get started on your Gen AI journey in the right way with our skills gap analysis and training offers.",
    href: "/services/#training",
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export function Services() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <SectionHeader title="Our Services" />
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
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
              href={service.href}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
