import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
  title: "Page Not Found - Think Smarter Group",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] relative overflow-hidden flex items-center justify-center">
      {/* Main gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 -z-10"></div>

      {/* Subtle pattern overlay */}
      <div className="fixed inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] -z-10"></div>

      <div className="text-center px-6 py-16 lg:px-8">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10">
          <Link href="/" aria-label="Return to homepage">
            <Button>Go back home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
