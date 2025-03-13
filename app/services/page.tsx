"use client";

import { motion } from "framer-motion";
import serviceImage01 from "@/app/images/christopher-burns-Kj2SaNHG-hg-unsplash.jpg";
import serviceImage02 from "@/app/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import serviceImage03 from "@/app/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Contact } from "@/components/page-sections/contact";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
  content: React.ReactNode;
  href?: string;
  hrefText: string;
  imageSrc: string;
}

function AdvisoryServices() {
  return (
    <div id="advice" className="h-full space-y-16 scroll-mt-64">
      <div className="prose">
        <h2>Advisory Services</h2>
        <h5 className="text-muted-foreground">
          Strategy consulting and investment advice on how to boost growth.
        </h5>
        <p>
          We cover the full range of strategy consulting engagements but do so
          in a lean manner that enables quick but informed decision making.
          Examples include:
        </p>
        <ul>
          <li>Market analysis and due diligence</li>
          <li>Competitor landscape analysis</li>
          <li>Growth options and prioritisation</li>
          <li>Fundraising and M&A</li>
        </ul>
      </div>
      <Link href="#contact" className="hidden md:block">
        <Button>Get in touch</Button>
      </Link>
    </div>
  );
}

function ProductAndTechnology() {
  return (
    <div id="product" className="h-full space-y-16 scroll-mt-64">
      <div className="prose">
        <h2>Product and Technology</h2>
        <h5 className="text-muted-foreground   ">
          Prototyping and experimentation in order to learn fast about
          monetisation potential in a lean way.
        </h5>
        <p>
          When our clients have hypotheses with regards to new product and
          service offerings, we offer a lean experimentation process that allows
          them to test real-world feedback to MVPs. We create simple technology
          products that inform the next stage of decision making.
        </p>
        <ul>
          <li>Gen AI products such as lesson plan generators</li>
          <li>Simple website builds</li>
          <li>Simple app development</li>
        </ul>
        <p>
          Further, in the area of careers technology, we also offer our own
          product,{" "}
          <Link
            href="https://thinksmart.careers/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Think Smart Careers
          </Link>{" "}
          which enables an organisation to provide real-world problem solving to
          its learners in order for them to make more informed career and study
          decisions.
        </p>
      </div>
      <Link href="#contact" className="hidden md:block">
        <Button>Get in touch</Button>
      </Link>
    </div>
  );
}

function TrainingAndAssessment() {
  return (
    <div id="training" className="h-full shadow-none space-y-16 scroll-mt-64">
      <div className="prose">
        <h2>Training and Assessment</h2>
        <h5 className="text-muted-foreground">
          Get started on your Gen AI journey in the right way with our skills
          gap analysis and training offers.
        </h5>
        <p>
          We specialise in getting organisations on their way when it comes to
          Gen AI implementation and strategy.
        </p>
        <p>
          We have developed a unique assessment for prompt writing skills -{" "}
          <Link
            href="https://www.promptability.org/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            PromptAbility
          </Link>{" "}
          - which provide a skills gap analysis as the crucial skills needed for
          using Gen AI tools. This forms the foundation of our half day / full
          day and
        </p>
      </div>
      <Link href="#contact" className="hidden md:block">
        <Button>Get in touch</Button>
      </Link>
    </div>
  );
}

const services: Service[] = [
  {
    title: "Advisory Services",
    description:
      "Strategy consulting and investment advice on how to boost growth.",
    content: <AdvisoryServices />,
    href: "#contact",
    hrefText: "Get in touch",
    imageSrc: serviceImage01.src,
  },
  {
    title: "Product and Technology",
    description:
      "Prototyping and experimentation in order to learn fast about monetisation potential in a lean way.",
    content: <ProductAndTechnology />,
    href: "#contact",
    hrefText: "Get in touch",
    imageSrc: serviceImage02.src,
  },
  {
    title: "Training and Assessment",
    description:
      "Get started on your Gen AI journey in the right way with our skills gap analysis and training offers.",
    content: <TrainingAndAssessment />,
    href: "#contact",
    hrefText: "Get in touch",
    imageSrc: serviceImage03.src,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const ServiceSection = ({ service }: { service: Service }) => {
  return (
    <>
      <motion.div
        variants={fadeInUp}
        className="col-span-2 min-h-[400px] md:min-h-[600px] hidden md:block"
      >
        <Card className="group relative overflow-hidden shadow-none transition-all duration-500 hover:shadow-xl hover:scale-[1.02] md:max-w-96 h-full">
          <Image
            src={service.imageSrc}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Card>
      </motion.div>
      <motion.div variants={fadeInUp} className="col-span-3">
        {service.content}
      </motion.div>
    </>
  );
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Main gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-24"
        >
          <div className="space-y-4">
            <SectionHeader title="Our Services" />
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Expert advisory services, Training and tech solutions for
              Education, Skills and Employability Sectors
            </p>
          </div>
        </motion.div>

        <section
          id="services"
          className="relative w-full scroll-mt-16 pb-24 md:mt-48"
        >
          <div className="space-y-32">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 lg:gap-32"
            >
              {services.map((service) => (
                <div key={service.title} className="contents">
                  <ServiceSection service={service} />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}
