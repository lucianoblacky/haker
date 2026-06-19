import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms, Conditions & Agreements",
};

export default function TermsPage() {
  return (
    <section className="pm-section bg-pm-white">
      <div className="pm-container max-w-2xl prose">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-8">
          Terms, Conditions &amp; Agreements
        </h1>
        <p className="text-pm-gray-text leading-relaxed mb-4">
          These Terms and Conditions govern your use of peakmodo.com and any
          purchases made through it.
        </p>
        <p className="text-pm-gray-text leading-relaxed mb-4">
          Replace this placeholder with your finalized terms covering
          orders, pricing, shipping, returns/refunds (including the 50-day
          money-back guarantee), subscriptions, and limitation of liability
          before going live.
        </p>
      </div>
    </section>
  );
}
