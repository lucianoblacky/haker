import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the PeakModo team.",
};

export default function ContactPage() {
  return (
    <section className="pm-section bg-pm-white">
      <div className="pm-container">
        <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-10">
          Contact
        </h1>
        <ContactForm />
      </div>
    </section>
  );
}
