import Image from "next/image";
import Link from "next/link";
import {
  BEST_SELLERS,
  BUNDLES,
  HOME_TESTIMONIALS,
  TRUST_BADGES,
  TRUST_ICONS,
  WHY_SWITCH,
  NUTRIENT_STATS,
  CERTIFICATIONS,
  STATS_ROW,
} from "@/lib/content";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import TrustpilotBar from "@/components/TrustpilotBar";
import CertificationMarquee from "@/components/CertificationMarquee";
import ProductCarousel from "@/components/ProductCarousel";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <>
      {/* HERO — full screen, video-capable with image fallback */}
      <section className="relative min-h-[100vh] md:min-h-[92vh] flex items-center overflow-hidden pm-dark-section">
        <HeroVideoBackground
          videoSrc="/videos/hero.mp4"
          imageSrc="/images/Shilajit_PDP_Main_Image6024.jpg"
          alt="PeakModo Himalayan Shilajit Resin"
        />
        {/* Dark cinematic overlay so text stays legible over video/image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

        <div className="pm-container relative z-10 grid md:grid-cols-2 gap-10 items-center py-24 md:py-0">
          <FadeIn>
            <TrustpilotBar
              rating="4.7/5"
              reviewCount="by 1000+ Reviews"
              jarsDelivered="(Over 25,000 jars delivered worldwide)"
            />
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-pm-white">
              Unlock The Energy You&apos;ve Been Missing with the{" "}
              <span className="pm-gold-text">World&apos;s Purest Shilajit</span>
            </h1>
            <p className="text-sm uppercase tracking-wide text-pm-fog/70 mb-4 font-semibold">
              3rd Party Lab Tested, Trusted Worldwide
            </p>
            <p className="text-pm-fog/85 mb-8 max-w-md leading-relaxed">
              PeakModo® delivers 100% authentic, lab-tested Shilajit resin
              hand-harvested from 3000-5000m altitudes, free from additives,
              chemicals, and processing. Only the purest form. Only real
              results.
            </p>
            <Link
              href="/product/peakmodo-himalayan-shilajit-resin"
              className="pm-btn pm-btn-gold"
            >
              SHOP AUTHENTIC SHILAJIT →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <CertificationMarquee items={TRUST_BADGES} />

      {/* CERTIFICATIONS / DIFFERENCE */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-pm-gold font-bold mb-2">
              Certifications
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-12 max-w-2xl">
              Not All Shilajit Is Equal. Here&apos;s the Difference.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            <FadeIn delay={0.05}>
              <h3 className="font-bold text-lg mb-2">Altitude-Certified Sourcing</h3>
              <p className="text-pm-gray-text text-sm leading-relaxed">
                Harvested exclusively above 5000 meters in the Himalayas
                where pollution can&apos;t reach and purity is guaranteed.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h3 className="font-bold text-lg mb-2">Triple-Purified &amp; Lab-Tested</h3>
              <p className="text-pm-gray-text text-sm leading-relaxed mb-3">
                Every batch undergoes three-stage purification and
                independent third-party testing, and we&apos;re the only
                brand conducting long-term stability testing to ensure
                safety and potency over time.
              </p>
              <Link href="/certificates" className="text-sm font-semibold underline">
                See lab results
              </Link>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h3 className="font-bold text-lg mb-2">Formulated by Ayurvedic Experts</h3>
              <p className="text-pm-gray-text text-sm leading-relaxed">
                Developed in partnership with researchers who&apos;ve spent
                decades studying traditional Himalayan medicine and modern
                bioavailability science.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BEST SELLERS — real carousel */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-10">
              Shop Our Best Sellers
            </h2>
          </FadeIn>
          <ProductCarousel products={BEST_SELLERS} />
        </div>
      </section>

      {/* STATS ROW */}
      <section className="pm-dark-section py-10">
        <div className="pm-container grid grid-cols-3 text-center gap-4">
          {STATS_ROW.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.05}>
              <div className="text-2xl md:text-4xl font-extrabold pm-gold-text">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-pm-fog/80 mt-1">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — real carousel */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2">
              Real, Lasting Improvements in Energy, Focus &amp; Vitality
            </h2>
            <p className="text-pm-gray-text mb-10">Over 10,000 People Made a Shift</p>
          </FadeIn>
          <ReviewsCarousel reviews={HOME_TESTIMONIALS} />
        </div>
      </section>

      {/* BUNDLES */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container">
          <div className="grid sm:grid-cols-3 gap-6">
            {BUNDLES.map((b, i) => (
              <FadeIn key={b.name} delay={i * 0.05}>
                <div className="bg-pm-white rounded-lg overflow-hidden border border-pm-fog h-full flex flex-col">
                  <div className="relative aspect-square bg-pm-fog">
                    <Image
                      src={b.image}
                      alt={b.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-3">{b.name}</h3>
                    <Link
                      href="/product/peakmodo-himalayan-shilajit-resin"
                      className="pm-btn pm-btn-primary w-full"
                    >
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SWITCH */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-10 max-w-2xl">
              5 Reasons Why People are Switching to PeakModo
            </h2>
          </FadeIn>
          <div className="space-y-8">
            {WHY_SWITCH.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.04}>
                <div className="border-b border-pm-fog pb-6">
                  <h3 className="font-bold text-lg mb-2">{w.title}</h3>
                  <p className="text-pm-gray-text leading-relaxed max-w-2xl">
                    {w.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRIENT STATS */}
      <section className="pm-dark-section pm-section">
        <div className="pm-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {NUTRIENT_STATS.map((n, i) => (
            <FadeIn key={n.label} delay={i * 0.05}>
              <div className="text-2xl md:text-4xl font-extrabold pm-gold-text">
                {n.value}
              </div>
              <div className="text-xs md:text-sm text-pm-fog/80 mt-1">
                {n.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS DETAIL */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2 max-w-2xl">
              International Certifications Back Every Jar We Make.
            </h2>
            <p className="text-pm-gray-text mb-10 max-w-2xl">
              Every batch meets the highest quality purity standards, verified
              by independent certification bodies, not marketing claims.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.05}>
                <div className="border border-pm-fog rounded-lg p-6 h-full">
                  <h3 className="font-bold text-lg">{c.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-pm-gold font-bold mb-3">
                    {c.sub}
                  </p>
                  <p className="text-sm text-pm-gray-text leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST ICONS */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {TRUST_ICONS.map((t, i) => (
            <FadeIn key={t.label} delay={i * 0.04}>
              <p className="font-bold text-sm">✓ {t.label}</p>
              <p className="text-xs text-pm-gray-text mt-1">{t.sub}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="pm-section bg-pm-white text-center">
        <div className="pm-container">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Contact us</h2>
            <p className="text-pm-gray-text mb-6">We&apos;ll be happy to help!</p>
            <Link href="/contact" className="pm-btn pm-btn-gold">
              GET IN TOUCH
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
