"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || "");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.slice(1);
    }
    return pathname === href;
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-shadow",
        scrolled && "shadow-sm",
      )}
    >
      <nav className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto">
        {/* Logo */}
        <Link href="/" className="font-semibold text-2xl tracking-tight">
          Think Smarter Group
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <NavigationMenuLink
                    asChild
                    data-active={isActive(route.href)}
                    className="group inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Link
                      href={route.href}
                      aria-current={isActive(route.href) ? "page" : undefined}
                      className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground/60 after:transition-all group-hover:after:w-full"
                    >
                      {route.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="#contact" className="ml-2">
            <Button size="sm">Contact Us</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent id="mobile-menu" side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Think Smarter Group</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-6 mx-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "group flex items-center py-2 text-xl font-medium transition-colors hover:text-primary",
                    isActive(route.href) && "text-primary",
                  )}
                  aria-current={isActive(route.href) ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground/60 after:transition-all group-hover:after:w-full">
                    {route.label}
                  </span>
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 mt-4 border-t">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full" size="sm">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
