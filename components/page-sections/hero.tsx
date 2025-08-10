import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-[100vh] overflow-hidden">
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,0,0,0.08),transparent_50%)] dark:bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.08),transparent_50%)]" />

      <div aria-live="polite" className="sr-only">
        Welcome to Think Smarter Group, providing expert advisory services,
        training and tech solutions for Education, Skills and Employability
        Sectors
      </div>
      <div className="flex flex-col items-center space-y-6 text-center">
        <div className="space-y-4">
          <h1
            className="mb-4 text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-black to-zinc-600 dark:from-white dark:to-zinc-400">
              Transform your future.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-black to-zinc-600 dark:from-white dark:to-zinc-400">
              In a lean way.
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-zinc-600 md:text-xl dark:text-zinc-300">
            Expert advisory services, training and tech solutions, with a focus
            on the education, skills and employability sectors.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="#services" aria-label="Learn about our services">
            <Button size="lg" className="shadow-sm hover:shadow-md transition-shadow">
              Our Services
            </Button>
          </Link>
          <Link href="#contact" aria-label="Contact Think Smarter Group">
            <Button variant="outline" size="lg" className="border-zinc-300 hover:border-zinc-400">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* chrome lines for depth */}
      <div className="pointer-events-none absolute inset-x-0 bottom-16 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent dark:via-white/20" />
    </section>
  );
}
