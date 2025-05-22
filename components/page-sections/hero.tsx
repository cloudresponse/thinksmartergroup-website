import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-[100vh] overflow-hidden">
      <div aria-live="polite" className="sr-only">
        Welcome to Think Smarter Group, providing expert advisory services,
        training and tech solutions for Education, Skills and Employability
        Sectors
      </div>
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1
            className="mb-8
             text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
          >
            Transform your future.
            <br />
            In a lean way.
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Expert advisory services, Training and tech solutions for Education,
            Skills and Employability Sectors
          </p>
        </div>
        <div className="space-x-4">
          <Link href="#services" aria-label="Learn about our services">
            <Button size="lg">Our Services</Button>
          </Link>
          <Link href="#contact" aria-label="Contact Think Smarter Group">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
