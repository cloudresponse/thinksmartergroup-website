import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Think Smarter Group",
  description:
    "Discover advisory, product and technology, and training services from Think Smarter Group.",
  alternates: {
    canonical: "https://thinksmartergroup.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Services - Think Smarter Group",
    description:
      "Discover advisory, product and technology, and training services from Think Smarter Group.",
    url: "https://thinksmartergroup.com/services",
    type: "website",
    images: [
      {
        url: "https://thinksmartergroup.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Think Smarter Group Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Think Smarter Group",
    description:
      "Discover advisory, product and technology, and training services from Think Smarter Group.",
    images: [
      "https://thinksmartergroup.com/opengraph-image",
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


