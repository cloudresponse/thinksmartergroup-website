import { ContactForm } from "@/components/feature/ContactForm";

export function Contact() {
  return (
    <div id="contact" className="w-full max-w-6xl mx-auto py-16">
      <h2 className="text-5xl font-bold text-center mb-16">Contact Us</h2>
      <ContactForm />
    </div>
  );
}
