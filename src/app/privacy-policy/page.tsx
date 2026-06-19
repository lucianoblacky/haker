import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pm-section bg-pm-white">
      <div className="pm-container max-w-2xl prose">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-8">
          Privacy Policy
        </h1>
        <p className="text-pm-gray-text leading-relaxed mb-4">
          This Privacy Policy describes how PeakModo (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses
          your personal information when you visit or make a purchase from
          peakmodo.com.
        </p>
        <p className="text-pm-gray-text leading-relaxed mb-4">
          Replace this placeholder with your finalized, legally reviewed
          privacy policy before going live, covering data collection,
          cookies, third-party processors (payment providers, analytics,
          email marketing), data retention, and your customers&apos; rights
          under GDPR.
        </p>
      </div>
    </section>
  );
}
