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
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


