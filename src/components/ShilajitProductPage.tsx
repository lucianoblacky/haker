"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AnimatedButton from "@/components/AnimatedButton";
import { useCart } from "@/lib/cart-context";

type SizeOption = {
  size: string;
  oneTime: { price: string; perDay: string };
  subscribe: { price: string; perDay: string };
  jars: { qty: string; price: string; badge?: string }[];
};

type ShilajitProductData = {
  slug: string;
  name: string;
  hero: {
    eyebrow: string;
    headline: string;
    bullets: string[];
    title: string;
    subtitle: string;
    productBullets: string[];
    gallery: string[];
  };
  sizes: SizeOption[];
  trustStrip: string[];
  trustIcons: string[];
  labResults: {
    title: string;
    subtitle: string;
    intro: string;
    items: { title: string; body: string }[];
    closing: string;
    lots: string[];
  };
  clinicalStudy: {
    eyebrow: string;
    reportNo: string;
    title: string;
    intro: string;
    stats: { pct: string; label: string; sub: string }[];
    methodology: { title: string; body: string }[];
  };
  goldStandard: {
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  };
  fulvicAcidTest: {
    eyebrow: string;
    title: string;
    himalayaPct: string;
    altaiPct: string;
    method: string;
    laboratory: string;
    whyItMatters: string;
    reportLine: string;
  };
  harvestStory: {
    eyebrow?: string | null;
    bigStat?: string | null;
    statLabel?: string | null;
    title: string;
    paragraphs: string[];
    cta: string;
  };
  guarantee: { title: string; body: string };
  reviewsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    reviews: { quote: string; name: string; meta: string }[];
  };
  howToUse: {
    title: string;
    steps: { title: string; body: string }[];
    proTip: string;
    notes: string[];
  };
  ingredients: {
    declaration: string;
    table: { headers: string[]; rows: string[][] };
    footnote: string;
    info: { title: string; body: string }[];
    manufacturer: string;
    netWeight: string;
  };
  journey: {
    title: string;
    subtitle: string;
    intro: string;
    forYouIf: string[][];
    cta: string;
  };
  myths: {
    title: string;
    subtitle: string;
    citation: string;
    published: string;
    researchers: string;
    items: { myth: string; science: string }[];
    benefitsList: string[];
    whatThisMeans: string;
    cta: string;
  };
  moneyBackProtection: { title: string; body: string };
  faq: { q: string; a: string }[];
};

export default function ShilajitProductPage({ data }: { data: ShilajitProductData }) {
  const [size, setSize] = useState(data.sizes[0].size);
  const [purchaseType, setPurchaseType] = useState<"one-time" | "subscribe">("one-time");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { addItem } = useCart();

  const sizeData = data.sizes.find((s) => s.size === size)!;
  const priceBlock = purchaseType === "one-time" ? sizeData.oneTime : sizeData.subscribe;

  function parsePrice(priceStr: string) {
    return parseFloat(priceStr.replace("€", "").replace(",", "."));
  }

  function handleAddToCart() {
    addItem({
      id: `${data.slug}-${size}-${purchaseType}`,
      name: `${data.name} (${size})`,
      priceEur: parsePrice(priceBlock.price),
      image: data.hero.gallery[0],
    });
  }

  return (
    <>
      {/* PRODUCT HERO */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container grid md:grid-cols-2 gap-10">
          <div>
            <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-pm-fog mb-3">
              <Image
                src={data.hero.gallery[0]}
                alt={data.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {data.hero.gallery.slice(1).map((src) => (
                <div
                  key={src}
                  className="relative aspect-square rounded-md overflow-hidden bg-pm-fog border border-pm-fog"
                >
                  <Image src={src} alt={data.name} fill className="object-cover" sizes="120px" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-2">{data.hero.title}</h1>
            <p className="text-pm-gray-text text-sm mb-6">{data.hero.subtitle}</p>

            <ul className="space-y-2 mb-6 text-sm">
              {data.hero.productBullets.map((b) => (
                <li key={b}>✓ {b}</li>
              ))}
            </ul>

            <div className="mb-5">
              <p className="text-sm font-semibold mb-2">Choose size:</p>
              <div className="flex gap-2">
                {data.sizes.map((s) => (
                  <button
                    key={s.size}
                    onClick={() => setSize(s.size)}
                    className={`px-4 py-2 rounded border text-sm font-semibold ${
                      size === s.size
                        ? "border-pm-near-black bg-pm-near-black text-pm-white"
                        : "border-pm-border text-pm-near-black"
                    }`}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold mb-2">Purchase Type:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setPurchaseType("one-time")}
                  className={`flex-1 text-left border rounded-lg p-4 ${
                    purchaseType === "one-time" ? "border-pm-near-black" : "border-pm-border"
                  }`}
                >
                  <span className="block text-sm font-semibold">One-time Purchase</span>
                  <span className="block text-lg font-extrabold">{sizeData.oneTime.price}</span>
                  <span className="block text-xs text-pm-gray-text">({sizeData.oneTime.perDay})</span>
                </button>
                <button
                  onClick={() => setPurchaseType("subscribe")}
                  className={`flex-1 text-left border rounded-lg p-4 ${
                    purchaseType === "subscribe" ? "border-pm-near-black" : "border-pm-border"
                  }`}
                >
                  <span className="block text-sm font-semibold">Subscribe &amp; Save 15%</span>
                  <span className="block text-lg font-extrabold">{sizeData.subscribe.price}</span>
                  <span className="block text-xs text-pm-gray-text">({sizeData.subscribe.perDay})</span>
                </button>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold mb-2">Jars</p>
              <div className="grid grid-cols-3 gap-2">
                {sizeData.jars.map((j) => (
                  <div key={j.qty} className="border border-pm-border rounded-lg p-3 text-center relative">
                    {j.badge && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-pm-gold text-pm-near-black text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">
                        {j.badge}
                      </span>
                    )}
                    <p className="text-sm font-semibold mt-2">{j.qty}</p>
                    <p className="text-sm font-extrabold mb-2">{j.price}</p>
                    <button className="pm-btn pm-btn-primary w-full text-xs py-2">ADD TO CART</button>
                  </div>
                ))}
              </div>
            </div>

            <AnimatedButton onClick={handleAddToCart} variant="gold" className="w-full text-base py-4 mb-4">
              ADD TO CART — {priceBlock.price}
            </AnimatedButton>

            <div className="grid grid-cols-3 gap-3 text-center text-xs text-pm-gray-text border-t border-pm-fog pt-5">
              {data.trustStrip.slice(0, 3).map((t) => (
                <div key={t}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST ICONS STRIP */}
      <section className="pm-dark-section py-8">
        <div className="pm-container grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-xs font-semibold">
          {data.trustIcons.map((t) => (
            <div key={t}>{t}</div>
          ))}
        </div>
      </section>

      {/* LAB RESULTS */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2">{data.labResults.title}</h2>
            <p className="text-lg font-semibold mb-4">{data.labResults.subtitle}</p>
            <p className="text-pm-gray-text mb-6 max-w-2xl">{data.labResults.intro}</p>
            <ul className="space-y-2 mb-6 text-sm max-w-2xl">
              {data.labResults.items.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold">{item.title}</span> — {item.body}
                </li>
              ))}
            </ul>
            <p className="text-pm-gray-text mb-8 max-w-2xl">{data.labResults.closing}</p>
            <div className="flex flex-wrap gap-3">
              {data.labResults.lots.map((lot) => (
                <span key={lot} className="border border-pm-border rounded-full px-4 py-2 text-xs font-semibold">
                  {lot}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CLINICAL STUDY */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-pm-gold font-bold mb-2">
              {data.clinicalStudy.eyebrow}
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 max-w-2xl">{data.clinicalStudy.title}</h2>
            <p className="text-pm-gray-text mb-10 max-w-2xl">{data.clinicalStudy.intro}</p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {data.clinicalStudy.stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.03}>
                <div className="text-center">
                  <div className="text-3xl font-extrabold pm-gold-text">{s.pct}</div>
                  <div className="text-xs font-semibold mt-1">{s.label}</div>
                  {s.sub && <div className="text-[10px] text-pm-gray-text mt-1">{s.sub}</div>}
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {data.clinicalStudy.methodology.map((m) => (
              <div key={m.title} className="border border-pm-border rounded-lg p-5 bg-pm-white">
                <h3 className="font-bold text-sm mb-1">{m.title}</h3>
                <p className="text-xs text-pm-gray-text">{m.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-pm-gray-text">{data.clinicalStudy.reportNo}</p>
        </div>
      </section>

      {/* GOLD STANDARD */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 max-w-2xl">{data.goldStandard.title}</h2>
            <p className="text-pm-gray-text mb-8 max-w-2xl">{data.goldStandard.intro}</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {data.goldStandard.items.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.04}>
                <div className="border border-pm-fog rounded-lg p-5 h-full">
                  <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-sm text-pm-gray-text">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FULVIC ACID LAB TEST */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container grid md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-pm-gold font-bold mb-2">
              {data.fulvicAcidTest.eyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">{data.fulvicAcidTest.title}</h2>
            <div className="flex gap-8 mb-6">
              <div>
                <div className="text-3xl font-extrabold">{data.fulvicAcidTest.himalayaPct}</div>
                <div className="text-xs text-pm-gray-text">Himalaya Fulvic Acid content</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">{data.fulvicAcidTest.altaiPct}</div>
                <div className="text-xs text-pm-gray-text">Altai Fulvic Acid content</div>
              </div>
            </div>
            <p className="text-sm text-pm-gray-text mb-2">
              <span className="font-semibold">Method:</span> {data.fulvicAcidTest.method}
            </p>
            <p className="text-sm text-pm-gray-text mb-2">
              <span className="font-semibold">Laboratory:</span> {data.fulvicAcidTest.laboratory}
            </p>
            <p className="text-sm text-pm-gray-text mb-4">
              <span className="font-semibold">Why it matters:</span> {data.fulvicAcidTest.whyItMatters}
            </p>
            <p className="text-xs text-pm-gray-text">{data.fulvicAcidTest.reportLine}</p>
          </FadeIn>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-pm-fog">
            <Image
              src="/images/Shilajit_Lab_Tests_and_Certificates6024.png"
              alt="Fulvic acid lab certificate"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* HARVEST STORY */}
      <section className="pm-dark-section pm-section">
        <div className="pm-container grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src={data.hero.gallery[2] ?? data.hero.gallery[0]}
              alt={data.hero.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <FadeIn className="order-1 md:order-2">
            {data.harvestStory.bigStat && (
              <p className="text-3xl font-extrabold pm-gold-text mb-1">{data.harvestStory.bigStat}</p>
            )}
            {data.harvestStory.statLabel && (
              <p className="text-xs text-pm-fog/70 mb-4">{data.harvestStory.statLabel}</p>
            )}
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">{data.harvestStory.title}</h2>
            {data.harvestStory.paragraphs.map((p) => (
              <p key={p} className="text-pm-fog/85 mb-4 leading-relaxed">
                {p}
              </p>
            ))}
            <Link href="#buy" className="pm-btn pm-btn-gold">
              {data.harvestStory.cta}
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="pm-section bg-pm-cream text-center">
        <div className="pm-container max-w-2xl">
          <h2 className="text-xl md:text-2xl font-extrabold mb-3">{data.guarantee.title}</h2>
          <p className="text-pm-gray-text leading-relaxed">{data.guarantee.body}</p>
        </div>
      </section>

      {/* HOW TO USE */}
      <section id="how-to-use" className="pm-section bg-pm-white">
        <div className="pm-container">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-10">{data.howToUse.title}</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {data.howToUse.steps.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.04}>
                <div className="border border-pm-fog rounded-lg p-5 h-full">
                  <p className="font-bold mb-1">{s.title}</p>
                  <p className="text-sm text-pm-gray-text">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-sm font-semibold mb-2">Pro Tip: {data.howToUse.proTip}</p>
          {data.howToUse.notes.map((n) => (
            <p key={n} className="text-xs text-pm-gray-text mb-1">
              {n}
            </p>
          ))}
        </div>
      </section>

      {/* INGREDIENTS TABLE */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container">
          <h2 className="text-2xl font-extrabold mb-6">Ingredients &amp; Declaration</h2>
          <p className="text-sm mb-6">
            <span className="font-semibold">Ingredients:</span> {data.ingredients.declaration}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-pm-border bg-pm-white">
              <thead>
                <tr className="bg-pm-fog text-left">
                  {data.ingredients.table.headers.map((h) => (
                    <th key={h} className="p-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.ingredients.table.rows.map((row, i) => (
                  <tr key={i} className="border-t border-pm-border">
                    {row.map((cell, j) => (
                      <td key={j} className="p-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-pm-gray-text mt-2 mb-8">{data.ingredients.footnote}</p>

          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            {data.ingredients.info.map((info) => (
              <div key={info.title}>
                <p className="font-semibold mb-1">{info.title}</p>
                <p className="text-pm-gray-text">{info.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-pm-gray-text mt-6">{data.ingredients.manufacturer}</p>
          <p className="text-xs text-pm-gray-text">{data.ingredients.netWeight}</p>
        </div>
      </section>

      {/* JOURNEY / WHO THIS IS FOR */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{data.journey.title}</h2>
            <p className="text-pm-gray-text mb-1">{data.journey.subtitle}</p>
            <p className="text-pm-gray-text mb-8 max-w-2xl">{data.journey.intro}</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {data.journey.forYouIf.map((group, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="border border-pm-fog rounded-lg p-5 h-full">
                  <p className="font-bold mb-2">This is for you if:</p>
                  <ul className="space-y-2 text-sm text-pm-gray-text">
                    {group.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
          <Link href="#buy" className="pm-btn pm-btn-gold">
            {data.journey.cta}
          </Link>
        </div>
      </section>

      {/* GUARANTEE REPEAT */}
      <section className="pm-section bg-pm-cream text-center">
        <div className="pm-container max-w-2xl">
          <h2 className="text-xl md:text-2xl font-extrabold mb-3">{data.guarantee.title}</h2>
          <p className="text-pm-gray-text leading-relaxed">{data.guarantee.body}</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-pm-gold font-bold mb-2">
              {data.reviewsSection.eyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{data.reviewsSection.title}</h2>
            <p className="text-sm text-pm-gray-text mb-8">{data.reviewsSection.subtitle}</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {data.reviewsSection.reviews.map((t, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="border border-pm-fog rounded-lg p-5 bg-pm-cream h-full">
                  <p className="text-sm text-pm-gray-text leading-relaxed mb-3">&quot;{t.quote}&quot;</p>
                  <p className="text-sm font-semibold">
                    - {t.name}, {t.meta}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENCE / MYTHS */}
      <section className="pm-dark-section pm-section">
        <div className="pm-container">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{data.myths.title}</h2>
            <p className="text-pm-fog/80 mb-2 max-w-2xl">{data.myths.subtitle}</p>
            <p className="text-pm-fog/70 text-sm mb-8 max-w-2xl">
              {data.myths.citation}. Published {data.myths.published}. Researchers: {data.myths.researchers}
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {data.myths.items.map((item, i) => (
              <FadeIn key={item.myth} delay={i * 0.04}>
                <div className="bg-white/5 rounded-lg p-5 h-full">
                  <p className="text-sm font-bold mb-1">❌ MYTH: {item.myth}</p>
                  <p className="text-sm text-pm-fog/80">✓ SCIENCE: {item.science}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-sm text-pm-fog/80 mb-6 max-w-2xl">{data.myths.whatThisMeans}</p>
          <Link href="#buy" className="pm-btn pm-btn-gold">
            {data.myths.cta}
          </Link>
        </div>
      </section>

      {/* MONEY BACK PROTECTION */}
      <section className="pm-section bg-pm-cream text-center">
        <div className="pm-container max-w-2xl">
          <h2 className="text-xl md:text-2xl font-extrabold mb-3">{data.moneyBackProtection.title}</h2>
          <p className="text-pm-gray-text leading-relaxed">{data.moneyBackProtection.body}</p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Frequently Asked Questions</h2>
          <div className="divide-y divide-pm-fog border-t border-b border-pm-fog">
            {data.faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left font-semibold"
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <ChevronDown
                      size={18}
                      className={`transition-transform shrink-0 ml-3 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="text-sm text-pm-gray-text pb-4 leading-relaxed">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
