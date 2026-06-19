import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CERTIFICATIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "At PeakModo, we are committed to excellence and transparency in delivering the highest quality Shilajit. Our certifications are a testament to our dedication to purity and safety.",
};

export default function CertificatesPage() {
  return (
    <>
      <section className="pm-dark-section pm-section text-center">
        <div className="pm-container max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-pm-gold font-bold mb-2">
            Our Commitment to Excellence
          </p>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            Certificates
          </h1>
          <p className="text-pm-fog/85 leading-relaxed">
            At PeakModo, we are committed to excellence and transparency in
            delivering the highest quality Shilajit. Our certifications are
            a testament to our dedication to purity and safety, ensuring
            that you receive a product that meets rigorous standards. With
            our certified Shilajit, indulge in nature&apos;s goodness with
            confidence.
          </p>
          <Link
            href="/product/peakmodo-himalayan-shilajit-resin"
            className="pm-btn pm-btn-gold mt-6"
          >
            VISIT OUR STORE
          </Link>
        </div>
      </section>

      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10">
            Manufacturing Certificates
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "/images/HAMILTON-Lab-test-report-Himalayas-lot-30062025H-july2025-1_19ad2.jpg",
              "/images/HAMILTON-certificate-of-quality-and-safety-07.00700-march25__1_-1_1a55e.jpg",
              "/images/HAMILTON-certificate-of-quality-and-safety-21112024-november24-1_151d4.jpg",
              "/images/NZLOH-certificate-of-quality-and-safety-02092024-avg2024__1_-4_1e3a6.jpg",
            ].map((src, i) => (
                <div
                  key={src}
                  className="border border-pm-fog rounded-lg overflow-hidden"
                >
                  <div className="relative aspect-[3/4] bg-pm-fog">
                    <Image
                      src={src}
                      alt={`PeakModo manufacturing certificate ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section bg-pm-cream">
        <div className="pm-container">
          <h2 className="text-2xl font-extrabold mb-2">Stability Tests</h2>
          <p className="text-pm-gray-text leading-relaxed max-w-2xl mb-10">
            These reports showcase whether the quality of the product is
            deteriorated during its shelf life. PeakModo Shilajit has been
            tested and certified by J. S. Hamilton Testing Laboratory. We
            are proud to report that the samples tested didn&apos;t lose
            their efficacy or beneficial properties during their shelf
            life.
          </p>

          <h2 className="text-2xl font-extrabold mb-6">Certifications</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((c) => (
              <div key={c.title} className="border border-pm-border rounded-lg p-6 bg-pm-white">
                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="text-xs uppercase tracking-wide text-pm-gold font-bold mb-3">
                  {c.sub}
                </p>
                <p className="text-sm text-pm-gray-text leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section bg-pm-white">
        <div className="pm-container grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-pm-fog">
            <Image
              src="/images/Prime_Lab_Tests_and_Certificates685f.png"
              alt="Bio certificate"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-pm-gold font-bold mb-2">
              Secrets Unlocked
            </p>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4">
              GMP Unleashed: The Rigorous Standards Behind Quality Of Our
              Premium Shilajit
            </h2>
            <button className="text-sm font-semibold underline">
              Read article
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
