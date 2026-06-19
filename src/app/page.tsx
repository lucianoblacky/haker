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

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pm-dark-section relative overflow-hidden">
        <div className="pm-container pm-section grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 text-sm mb-4">
              <span className="pm-gold-text font-bold">4.7/5</span>
              <span className="text-pm-fog/80">by 1000+ Reviews</span>
            </div>
            <p className="text-xs text-pm-fog/60 mb-4">
              (Over 25,000 jars delivered worldwide)
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
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
            <Link href="/product/peakmodo-himalayan-shilajit-resin" className="pm-btn pm-btn-gold">
              SHOP AUTHENTIC SHILAJIT →
            </Link>
          </div>
          <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-pm-charcoal">
            <Image
              src="/images/Shilajit_PDP_Main_Image6024.jpg"
              alt="PeakModo Himalayan Shilajit Resin"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section className="bg-pm-near-black border-t border-white/10 py-4 overflow-hidden">
        <div className="pm-marquee-track text-sm font-semibold uppercase tracking-wide text-pm-fog/90">
          {[...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES].map((t, i) => (
            <span key={i} className="px-8 whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS / DIFFERENCE */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <p className="text-xs uppercase tracking-widest text-pm-gold font-bold mb-2">
            Certifications
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-12 max-w-2xl">
            Not All Shilajit Is Equal. Here&apos;s the Difference.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-bold text-lg mb-2">Altitude-Certified Sourcing</h3>
              <p className="text-pm-gray-text text-sm leading-relaxed">
                Harvested exclusively above 5000 meters in the Himalayas
                where pollution can&apos;t reach and purity is guaranteed.
              </p>
            </div>
            <div>
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
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Formulated by Ayurvedic Experts</h3>
              <p className="text-pm-gray-text text-sm leading-relaxed">
                Developed in partnership with researchers who&apos;ve spent
                decades studying traditional Himalayan medicine and modern
                bioavailability science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-10">
            Shop Our Best Sellers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BEST_SELLERS.map((p) => (
              <div
                key={p.slug}
                className="bg-pm-white rounded-lg overflow-hidden border border-pm-fog flex flex-col"
              >
                <div className="relative aspect-square bg-pm-fog">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <div className="flex items-center gap-2 mt-1 mb-3">
                    <span className="font-extrabold">{p.price}</span>
                    {p.rating && (
                      <span className="text-xs text-pm-gray-text">{p.rating}</span>
                    )}
                  </div>
                  <ul className="space-y-2 mb-5 flex-1">
                    {p.bullets.map((b) => (
                      <li key={b.title} className="text-sm">
                        <span className="font-semibold">{b.title}</span>
                        <span className="text-pm-gray-text"> — {b.body}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/product/${p.slug}`}
                    className="pm-btn pm-btn-primary w-full"
                  >
                    {p.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS ROW */}
      <section className="pm-dark-section py-10">
        <div className="pm-container grid grid-cols-3 text-center gap-4">
          {STATS_ROW.map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-4xl font-extrabold pm-gold-text">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-pm-fog/80 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2">
            Real, Lasting Improvements in Energy, Focus &amp; Vitality
          </h2>
          <p className="text-pm-gray-text mb-10">Over 10,000 People Made a Shift</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_TESTIMONIALS.slice(0, 6).map((t, i) => (
              <div
                key={i}
                className="border border-pm-fog rounded-lg p-5 bg-pm-cream"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm">{t.name}</span>
                  <span className="text-xs text-pm-gray-text">{t.date}</span>
                </div>
                <p className="font-bold text-sm mb-2">{t.title}</p>
                <p className="text-sm text-pm-gray-text leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUNDLES */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container">
          <div className="grid sm:grid-cols-3 gap-6">
            {BUNDLES.map((b) => (
              <div
                key={b.name}
                className="bg-pm-white rounded-lg overflow-hidden border border-pm-fog"
              >
                <div className="relative aspect-square bg-pm-fog">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    className="object-cover"
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
            ))}
          </div>
        </div>
      </section>

      {/* WHY SWITCH */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-10 max-w-2xl">
            5 Reasons Why People are Switching to PeakModo
          </h2>
          <div className="space-y-8">
            {WHY_SWITCH.map((w) => (
              <div key={w.title} className="border-b border-pm-fog pb-6">
                <h3 className="font-bold text-lg mb-2">{w.title}</h3>
                <p className="text-pm-gray-text leading-relaxed max-w-2xl">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRIENT STATS */}
      <section className="pm-dark-section pm-section">
        <div className="pm-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {NUTRIENT_STATS.map((n) => (
            <div key={n.label}>
              <div className="text-2xl md:text-4xl font-extrabold pm-gold-text">
                {n.value}
              </div>
              <div className="text-xs md:text-sm text-pm-fog/80 mt-1">
                {n.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS DETAIL */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2 max-w-2xl">
            International Certifications Back Every Jar We Make.
          </h2>
          <p className="text-pm-gray-text mb-10 max-w-2xl">
            Every batch meets the highest quality purity standards, verified
            by independent certification bodies, not marketing claims.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((c) => (
              <div key={c.title} className="border border-pm-fog rounded-lg p-6">
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

      {/* TRUST ICONS */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {TRUST_ICONS.map((t) => (
            <div key={t.label}>
              <p className="font-bold text-sm">✓ {t.label}</p>
              <p className="text-xs text-pm-gray-text mt-1">{t.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="pm-section bg-pm-white text-center">
        <div className="pm-container">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Contact us</h2>
          <p className="text-pm-gray-text mb-6">We&apos;ll be happy to help!</p>
          <Link href="/contact" className="pm-btn pm-btn-gold">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </>
  );
}
