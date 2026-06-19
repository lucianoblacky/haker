import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function AboutPage() {
  return (
    <section className="pm-section bg-pm-white">
      <div className="pm-container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-6">
            Our Story
          </h1>
          <p className="text-pm-gray-text leading-relaxed mb-4">
            We source and deliver authentic shilajit of the highest quality
            and produce natural wellness products based on this marvelous
            superfood.
          </p>
          <p className="text-pm-gray-text leading-relaxed">
            PeakModo hand-harvests Shilajit resin from the world&apos;s
            highest, most pristine altitudes — from the Himalayas to the
            Altai mountains — and tests every batch through independent
            laboratories before it ever reaches your door.
          </p>
        </div>
        <div className="relative aspect-square rounded-lg overflow-hidden bg-pm-fog">
          <Image
            src="/images/The_Purest_Himalayan_Shilajit_In_Australia_by_Mountaindrop3c92.jpg"
            alt="PeakModo harvest story"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
