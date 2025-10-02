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
};

export default function InvestmentsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}



