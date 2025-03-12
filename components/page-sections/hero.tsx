import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex items-center justify-center w-full min-h-[100vh]">
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
          <Link href="#services">
            <Button size="lg">Our Services</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
