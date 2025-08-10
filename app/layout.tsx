import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { NavBar } from "@/components/feature/NavBar";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Think Smarter Group",
  description: "Think Smarter Group - Your Partner in Digital Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global monochrome background layers */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-black" />
          {/* Soft radial glow accents */}
          <div className="absolute inset-0 opacity-[0.15] [background:radial-gradient(600px_400px_at_20%_10%,rgba(0,0,0,0.12),transparent_40%),radial-gradient(700px_500px_at_80%_0%,rgba(0,0,0,0.08),transparent_40%)] dark:[background:radial-gradient(600px_400px_at_20%_10%,rgba(255,255,255,0.10),transparent_40%),radial-gradient(700px_500px_at_80%_0%,rgba(255,255,255,0.06),transparent_40%)]" />
          {/* Dotted texture */}
          <div className="absolute inset-0 opacity-[0.06] [background:radial-gradient(#000_0.6px,transparent_0.6px)] [background-size:16px_16px] dark:[background:radial-gradient(#fff_0.6px,transparent_0.6px)]" />
          {/* Top highlight line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent dark:via-white/20" />
        </div>

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
