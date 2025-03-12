import { Hero } from "@/components/page-sections/hero";
import { Services } from "@/components/page-sections/services";
import { Team } from "@/components/page-sections/team";
import { Contact } from "@/components/page-sections/contact";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Think Smarter Group - Innovation & Technology Solutions",
  description:
    "Professional technology solutions and consulting services for modern businesses.",
};

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="space-y-24 py-16 sm:py-24">
          <Suspense
            fallback={<div className="h-screen animate-pulse bg-gray-100" />}
          >
            <section aria-label="Hero section">
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

      {/* <footer className="mt-24">
        <Footer />
      </footer> */}
    </div>
  );
}
