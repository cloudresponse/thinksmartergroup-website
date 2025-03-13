import { ContactForm } from "@/components/feature/ContactForm";
import { SectionHeader } from "../SectionHeader";

export function Contact() {
  return (
    <div
      id="contact"
      className="relative w-full max-w-6xl mx-auto py-16 h-[100vh] scroll-mt-16"
    >
      <SectionHeader title="Contact Us" />
      <ContactForm />
    </div>
  );
}
