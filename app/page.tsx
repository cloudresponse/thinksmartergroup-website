import type { Metadata } from "next";
import { Suspense } from "react";
import { Contact } from "@/components/page-sections/contact";
import { Hero } from "@/components/page-sections/hero";
import { Services } from "@/components/page-sections/services";
import { Team } from "@/components/page-sections/team";

export const metadata: Metadata = {
  title: "Think Smarter Group - Innovation & Technology Solutions",
  description:
    "Professional technology solutions and consulting services for modern businesses. Expert advisory, training and tech solutions for Education, Skills and Employability Sectors.",
  keywords: [
    "technology solutions",
    "business consulting",
    "education technology",
    "skills development",
    "employability solutions",
    "digital transformation",
    "tech advisory services",
  ],
  authors: [{ name: "Think Smarter Group" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://thinksmartergroup.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <Suspense fallback={<div className="h-screen animate-pulse bg-gray-100" />}>
            <section aria-label="Hero section" className="scroll-mt-16" id="home">
              <Hero />
            </section>
          </Suspense>

          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
            <section aria-label="Our services" className="scroll-mt-16" id="services">
              <Services />
            </section>
          </Suspense>

          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
            <section aria-label="Our team" className="scroll-mt-16" id="team">
              <Team />
            </section>
          </Suspense>

          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
            <section aria-label="Contact us" className="scroll-mt-16">
              <Contact />
            </section>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
