import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about PeakModo Himalayan Shilajit Resin — usage, safety, dosage, and storage.",
};

export default function FaqPage() {
  return (
    <>
      <section className="pm-dark-section pm-section text-center">
        <div className="pm-container max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-pm-fog/85 leading-relaxed">
            Everything you need to know about PeakModo Himalayan Shilajit
            Resin — how to use it, safety, dosage, and storage.
          </p>
        </div>
      </section>

      <section className="pm-section bg-pm-white">
        <div className="pm-container max-w-3xl">
          <FaqAccordion />

          <div className="mt-12 text-center">
            <p className="text-pm-gray-text mb-4">
              Still have questions? We&apos;ll be happy to help!
            </p>
            <Link href="/contact" className="pm-btn pm-btn-gold">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
