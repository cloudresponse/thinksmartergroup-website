import { ServiceCard } from "@/components/ui/service-card";

import serviceImage01 from "@/app/images/christopher-burns-Kj2SaNHG-hg-unsplash.jpg";
import serviceImage02 from "@/app/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import serviceImage03 from "@/app/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg";

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

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          {/* <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Comprehensive solutions tailored to your needs
            </p> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}
