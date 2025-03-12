"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { routes } from "@/lib/routes";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <nav className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto">
        {/* Logo */}
        <Link href="/" className="font-semibold text-2xl tracking-tight">
          Think Smarter Group
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <NavigationMenuLink
                    href={route.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {route.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="#contact" className="cursor-">
            <Button size="sm">Contact Us</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="ml-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Think Smarter Group</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-6 mx-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="group flex items-center py-2 text-xl font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative">
                    {route.label}
                    <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-primary transition-all group-hover:w-full" />
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
