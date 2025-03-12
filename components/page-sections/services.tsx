import { ServiceCard } from "@/components/ui/service-card";

import serviceImage01 from "@/app/images/christopher-burns-Kj2SaNHG-hg-unsplash.jpg";
import serviceImage02 from "@/app/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import serviceImage03 from "@/app/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg";

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
        <ServiceCard
          title="Advice"
          description="Learn about hosting built for scale and reliability."
          imageSrc={serviceImage01.src}
        />
        <ServiceCard
          title="Education"
          description="Learn how Framer can optimize your site for search engines."
          imageSrc={serviceImage02.src}
        />
        <ServiceCard
          title="Technology"
          description="Get inspired by blogs, job openings, events and more."
          imageSrc={serviceImage03.src}
        />
      </div>
    </section>
  );
}
