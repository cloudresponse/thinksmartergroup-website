import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { NavBar } from "@/components/feature/NavBar";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/footer";
import Script from "next/script";
import { routes } from "@/lib/routes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  openGraph: {
    title: "Think Smarter Group - Innovation & Technology Solutions",
    description:
      "Professional technology solutions and consulting services for modern businesses. Expert advisory, training and tech solutions for Education, Skills and Employability Sectors.",
    url: "https://thinksmartergroup.com",
    siteName: "Think Smarter Group",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://thinksmartergroup.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Think Smarter Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Think Smarter Group - Innovation & Technology Solutions",
    description:
      "Professional technology solutions and consulting services for modern businesses. Expert advisory, training and tech solutions for Education, Skills and Employability Sectors.",
    images: [
      "https://thinksmartergroup.com/opengraph-image",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = "https://thinksmartergroup.com";

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Think Smarter Group",
    url: baseUrl,
    sameAs: [
      "https://www.linkedin.com/company/think-smarter-group/",
    ],
    logo: `${baseUrl}/favicon.ico`,
  };

  const siteNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: routes
      .filter((r) => r.href.startsWith("/") && !r.href.includes("#"))
      .map((r) => r.label),
    url: routes
      .filter((r) => r.href.startsWith("/") && !r.href.includes("#"))
      .map((r) => `${baseUrl}${r.href}`),
  };

  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="sitenav-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-primary text-primary-foreground px-3 py-2 rounded"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
