import { Hero } from "@/components/page-sections/hero";
import { Team } from "@/components/page-sections/team";
import { Contact } from "@/components/page-sections/contact";
import { Metadata } from "next";
import { Suspense } from "react";
import { Services } from "@/components/page-sections/services";

export const metadata: Metadata = {
  title: "Think Smarter Group - Innovation & Technology Solutions",
  description:
    "Professional technology solutions and consulting services for modern businesses.",
};

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Main gradient background for the entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 -z-10"></div>

      {/* Subtle pattern overlay for the entire page */}
      <div className="fixed inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] -z-10"></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col">
          <Suspense
            fallback={<div className="h-screen animate-pulse bg-gray-100" />}
          >
            <section aria-label="Hero section" className="scroll-mt-16">
              <Hero />
            </section>
          </Suspense>

          <Suspense
            fallback={<div className="h-96 animate-pulse bg-gray-100" />}
          >
            <section
              aria-label="Our services"
              className="scroll-mt-16"
              id="services"
            >
              <Services />
            </section>
          </Suspense>

          <Suspense
            fallback={<div className="h-96 animate-pulse bg-gray-100" />}
          >
            <section aria-label="Our team" className="scroll-mt-16" id="team">
              <Team />
            </section>
          </Suspense>

          <Suspense
            fallback={<div className="h-96 animate-pulse bg-gray-100" />}
          >
            <section
              aria-label="Contact us"
              className="scroll-mt-16"
              id="contact"
            >
              <Contact />
            </section>
          </Suspense>
        </div>
      </main>

      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}
