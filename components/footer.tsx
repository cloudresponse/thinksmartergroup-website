import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { routes } from "@/lib/routes";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
    { name: "Facebook", icon: FaFacebook, href: "https://facebook.com" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 mt-48">
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Think Smarter Group</h3>
            <p className="text-sm text-muted-foreground">
              Expert advisory services, training and tech solutions, with a
              focus on the education, skills and employability sectors.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <nav className="flex flex-col space-y-2">
              {routes.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-gray-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-gray-100 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div> */}

          {/* <div>
            <h4 className="text-sm font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {footerLinks.social.map(social => {
                const Icon = social.icon;
                return (
                  <Button key={social.name} variant="ghost" size="icon" asChild>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div> */}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Think Smarter Group. All rights
            reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Made by{" "}
            <Link
              href="https://cloudresponse.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Cloud Response
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
