import { ContactForm } from "@/components/feature/ContactForm";
import { SectionHeader } from "../SectionHeader";

export function Contact() {
  return (
    <div id="contact" className="w-full max-w-6xl mx-auto py-16">
      <SectionHeader title="Contact Us" />
      <ContactForm />
    </div>
  );
}
