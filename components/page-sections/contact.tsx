import { ContactForm } from "@/components/feature/ContactForm";
import { SectionHeader } from "../SectionHeader";

export function Contact() {
  return (
    <div
      id="contact"
      className="relative w-full max-w-6xl mx-auto py-16 h-[100vh]"
    >
      <SectionHeader title="Contact Us" />
      <ContactForm />
    </div>
  );
}
