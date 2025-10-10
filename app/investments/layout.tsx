import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Investments - Think Smarter Group",
  description:
    "Explore Think Smarter Group's portfolio of early-stage investments across education, skills, and employability sectors.",
  alternates: {
    canonical: "https://thinksmartergroup.com/investments",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Investments - Think Smarter Group",
    description:
      "Explore Think Smarter Group's portfolio of early-stage investments across education, skills, and employability sectors.",
    url: "https://thinksmartergroup.com/investments",
    type: "website",
    images: [
      {
        url: "https://thinksmartergroup.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Think Smarter Group Investments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investments - Think Smarter Group",
    description:
      "Explore Think Smarter Group's portfolio of early-stage investments across education, skills, and employability sectors.",
    images: [
      "https://thinksmartergroup.com/opengraph-image",
    ],
  },
};

export default function InvestmentsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}



