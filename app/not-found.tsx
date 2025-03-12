import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

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
      {/* <div className="fixed inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] -z-10"></div> */}

      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Page not found
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/" aria-label="Return to homepage">
            <Button size="lg">Go back home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
