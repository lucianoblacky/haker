"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  SIZE_OPTIONS,
  FAQ_ITEMS,
  PRODUCT_TESTIMONIALS,
  CERTIFICATIONS,
} from "@/lib/content";
import { useCart } from "@/lib/cart-context";

const SIZES = ["25g", "40g", "65g"] as const;
type Size = (typeof SIZES)[number];
type PurchaseType = "one-time" | "subscribe";

export default function ProductDetailClient() {
  const [size, setSize] = useState<Size>("25g");
  const [purchaseType, setPurchaseType] = useState<PurchaseType>("one-time");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { addItem } = useCart();

  const sizeData = SIZE_OPTIONS.find((s) => s.size === size)!;
  const priceBlock =
    purchaseType === "one-time" ? sizeData.oneTime : sizeData.subscribe;

  function parsePrice(priceStr: string) {
    return parseFloat(priceStr.replace("€", "").replace(",", "."));
  }

  function handleAddToCart() {
    addItem({
      id: `peakmodo-himalayan-shilajit-resin-${size}-${purchaseType}`,
      name: `PeakModo Himalayan Shilajit Resin (${size})`,
      priceEur: parsePrice(priceBlock.price),
      image: "/images/Shilajit_PDP_Main_Image6024.jpg",
    });
  }

  return (
    <>
      {/* PRODUCT HERO */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container grid md:grid-cols-2 gap-10">
          {/* Gallery */}
          <div>
            <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-pm-fog mb-3">
              <Image
                src="/images/Shilajit_PDP_Main_Image6024.jpg"
                alt="PeakModo Himalayan Shilajit Resin"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                "/images/Dejan_Shilajit_PDP_Image6024.jpg",
                "/images/Himalaya_1061f.jpg",
                "/images/Mountaindrop_Himalayan_Shilajit487a.jpg",
                "/images/Shilajit_Jakob_PDP_Image6024.jpg",
              ].map((src) => (
                <div
                  key={src}
                  className="relative aspect-square rounded-md overflow-hidden bg-pm-fog border border-pm-fog"
                >
                  <Image
                    src={src}
                    alt="PeakModo Himalayan Shilajit Resin"
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info / Buy box */}
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
              PEAKMODO® HIMALAYAN SHILAJIT RESIN
            </h1>
            <p className="text-pm-gray-text text-sm mb-6">
              Food Supplement Original Shilajit Himalayas, 25g, 40g, 65g
            </p>

            <ul className="space-y-2 mb-6 text-sm">
              <li>
                ✓ Replenish 85+ essential nutrients depleted by modern diets
                and stress
              </li>
              <li>✓ High-fulvic acid content for optimal nutrient absorption and delivery</li>
              <li>✓ Restore cellular energy production at the mitochondrial level</li>
              <li>✓ Improves libido for better confidence and drive in the bedroom</li>
              <li>✓ Sharper focus, better stress management, and deeper sleep quality</li>
              <li>✓ Enhance absorption and effectiveness of nutrients from food and supplements</li>
              <li>✓ Pure Himalayan resin - the most potent and bioavailable form</li>
            </ul>

            {/* Size selector */}
            <div className="mb-5">
              <p className="text-sm font-semibold mb-2">Choose size:</p>
              <div className="flex gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 rounded border text-sm font-semibold ${
                      size === s
                        ? "border-pm-near-black bg-pm-near-black text-pm-white"
                        : "border-pm-border text-pm-near-black"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase type */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-2">Purchase Type:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setPurchaseType("one-time")}
                  className={`flex-1 text-left border rounded-lg p-4 ${
                    purchaseType === "one-time"
                      ? "border-pm-near-black"
                      : "border-pm-border"
                  }`}
                >
                  <span className="block text-sm font-semibold">
                    One-time Purchase
                  </span>
                  <span className="block text-lg font-extrabold">
                    {sizeData.oneTime.price}
                  </span>
                  <span className="block text-xs text-pm-gray-text">
                    ({sizeData.oneTime.perDay})
                  </span>
                </button>
                <button
                  onClick={() => setPurchaseType("subscribe")}
                  className={`flex-1 text-left border rounded-lg p-4 ${
                    purchaseType === "subscribe"
                      ? "border-pm-near-black"
                      : "border-pm-border"
                  }`}
                >
                  <span className="block text-sm font-semibold">
                    Subscribe &amp; Save 15%
                  </span>
                  <span className="block text-lg font-extrabold">
                    {sizeData.subscribe.price}
                  </span>
                  <span className="block text-xs text-pm-gray-text">
                    ({sizeData.subscribe.perDay})
                  </span>
                </button>
              </div>
            </div>

            {/* Jars */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-2">Jars</p>
              <div className="grid grid-cols-3 gap-2">
                {sizeData.jars.map((j) => (
                  <div
                    key={j.qty}
                    className="border border-pm-border rounded-lg p-3 text-center relative"
                  >
                    {j.badge && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-pm-gold text-pm-near-black text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">
                        {j.badge}
                      </span>
                    )}
                    <p className="text-sm font-semibold mt-2">{j.qty}</p>
                    <p className="text-sm font-extrabold mb-2">{j.price}</p>
                    <button className="pm-btn pm-btn-primary w-full text-xs py-2">
                      ADD TO CART
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={handleAddToCart} className="pm-btn pm-btn-gold w-full text-base py-4 mb-4">
              ADD TO CART — {priceBlock.price}
            </button>

            <div className="grid grid-cols-3 gap-3 text-center text-xs text-pm-gray-text border-t border-pm-fog pt-5">
              <div>Free Shipping (Over 90€)</div>
              <div>50-day Money-back Guarantee</div>
              <div>2-7 Day EU Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST ICONS STRIP */}
      <section className="pm-dark-section py-8">
        <div className="pm-container grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-xs font-semibold">
          <div>✓ Harvested Above 5000m</div>
          <div>✓ Triple Lab Tested</div>
          <div>✓ 85+ Trace Minerals</div>
          <div>✓ Zero Synthetic Fillers</div>
          <div>✓ Traditional Ayurvedic Process</div>
        </div>
      </section>

      {/* LAB RESULTS */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2">
            We Test Everything. And We Mean EVERYTHING.
          </h2>
          <p className="text-lg font-semibold mb-4">
            Here&apos;s Every Lab Result From Every Batch.
          </p>
          <p className="text-pm-gray-text mb-6 max-w-2xl">
            Unlike brands that hide behind &quot;proprietary blends&quot; and
            vague claims, we publish:
          </p>
          <ul className="space-y-2 mb-6 text-sm max-w-2xl">
            <li>
              <span className="font-semibold">Heavy metals analysis</span> —
              Lead, cadmium, mercury (all batches)
            </li>
            <li>
              <span className="font-semibold">Microbial testing</span> —
              Bacteria and pathogen screening
            </li>
            <li>
              <span className="font-semibold">Authenticity certificates</span>{" "}
              — Verified by J.S. Hamilton Laboratory
            </li>
            <li>
              <span className="font-semibold">Stability reports</span> —
              Proving efficacy over shelf life
            </li>
            <li>
              <span className="font-semibold">Quality &amp; safety analysis</span>{" "}
              — Every nutrient quantified
            </li>
          </ul>
          <p className="text-pm-gray-text mb-8 max-w-2xl">
            Most brands test once (if at all) and hope for the best. We test
            every single batch and publish the results publicly. Select your
            batch number above and see the actual lab certificates for the
            jar you&apos;re holding.
          </p>
          <div className="flex flex-wrap gap-3">
            {["LOT: 11112025H · January 2026", "LOT: 31072025H · October 2025", "LOT: 30062025H · July 2025"].map(
              (lot) => (
                <span
                  key={lot}
                  className="border border-pm-border rounded-full px-4 py-2 text-xs font-semibold"
                >
                  {lot}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* CLINICAL STUDY */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container">
          <p className="text-xs uppercase tracking-widest text-pm-gold font-bold mb-2">
            ✓ World&apos;s first brand-commissioned shilajit clinical study
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 max-w-2xl">
            We commissioned the first ever Shilajit clinical study
          </h2>
          <p className="text-pm-gray-text mb-10 max-w-2xl">
            We commissioned the world&apos;s first independent clinical
            study on a brand&apos;s own shilajit, 90 days, 33 participants,
            under internist supervision and ethical committee approval at
            J.S. Hamilton Poland. Not anecdotes. Actual data.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { pct: "100%", label: "improved hair density", sub: "avg +9% · all 23 subjects" },
              { pct: "96%", label: "improved skin elasticity", sub: "avg +4% · Cutometer device" },
              { pct: "93%", label: "reported better sleep quality", sub: "highest-rated benefit" },
              { pct: "87%", label: "improved energy & vitality", sub: "reduced fatigue too" },
              { pct: "87%", label: "reduced fatigue", sub: "" },
              { pct: "83%", label: "reduced brain fog", sub: "" },
              { pct: "80%", label: "improved mental clarity", sub: "" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold pm-gold-text">{s.pct}</div>
                <div className="text-xs font-semibold mt-1">{s.label}</div>
                {s.sub && <div className="text-[10px] text-pm-gray-text mt-1">{s.sub}</div>}
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="border border-pm-border rounded-lg p-5 bg-pm-white">
              <h3 className="font-bold text-sm mb-1">Internist supervised</h3>
              <p className="text-xs text-pm-gray-text">
                Dr. Dorota Polańska-Tamborek (Internal Medicine). Approved by
                ethical committee before the study began.
              </p>
            </div>
            <div className="border border-pm-border rounded-lg p-5 bg-pm-white">
              <h3 className="font-bold text-sm mb-1">90-day real-world conditions</h3>
              <p className="text-xs text-pm-gray-text">
                Participants used the product at home — no lab setting bias.
                Measured at day 0 and day 90.
              </p>
            </div>
            <div className="border border-pm-border rounded-lg p-5 bg-pm-white">
              <h3 className="font-bold text-sm mb-1">Fully independent laboratory</h3>
              <p className="text-xs text-pm-gray-text">
                J.S. Hamilton Poland — the same lab behind our 6+ safety
                certifications. No conflict of interest.
              </p>
            </div>
            <div className="border border-pm-border rounded-lg p-5 bg-pm-white">
              <h3 className="font-bold text-sm mb-1">Instrumental + subjective testing</h3>
              <p className="text-xs text-pm-gray-text">
                Cutometer MPA 580 for skin. Aramo ASW 300F for hair density.
                Plus physician evaluation and daily logs.
              </p>
            </div>
          </div>
          <button className="text-sm font-semibold underline">
            View full clinical report
          </button>
        </div>
      </section>

      {/* FULVIC ACID LAB TEST */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-pm-gold font-bold mb-2">
              Laboratory Verified
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
              The molecule that makes shilajit actually work
            </h2>
            <div className="flex gap-8 mb-6">
              <div>
                <div className="text-3xl font-extrabold">81%</div>
                <div className="text-xs text-pm-gray-text">Himalaya Fulvic Acid content</div>
              </div>
            </div>
            <p className="text-sm text-pm-gray-text mb-2">
              <span className="font-semibold">Method:</span> HPLC-UV
              analysis, the same pharmaceutical-grade standard used in
              clinical research
            </p>
            <p className="text-sm text-pm-gray-text mb-2">
              <span className="font-semibold">Laboratory:</span> Analytice,
              France, AFAQ/ISO 9001 certified analytical laboratory
            </p>
            <p className="text-sm text-pm-gray-text mb-4">
              <span className="font-semibold">Why it matters:</span> Most
              brands claim fulvic acid. Very few measure it. We publish
              numbers like these.
            </p>
            <p className="text-xs text-pm-gray-text mb-4">
              Fulvic Acid Analysis – Report R/26/32391 · Issued: March 12,
              2026 · Analytice, Strasbourg, France · Technique: HPLC-UV ·
              Standard: Sigma CAS 479-66-2
            </p>
            <button className="text-sm font-semibold underline">
              View full laboratory report
            </button>
          </div>
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
              src="/images/Reklame-Real-Shilajit-2061f.jpg"
              alt="Himalayan harvest"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Harvested Where Pollution Can&apos;t Even Reach
            </h2>
            <p className="text-pm-fog/85 mb-4 leading-relaxed">
              Most Shilajit is harvested at low altitudes—exposed to vehicle
              emissions, industrial runoff, and airborne pollutants. Not
              ours.
            </p>
            <p className="text-pm-fog/85 mb-4 leading-relaxed">
              PeakModo Himalayan Shilajit Resin is hand-collected above
              5,000 meters where the air is pristine, the environment
              untouched, and the mineral composition unmatched. This
              extreme altitude creates the purest, most potent Shilajit on
              Earth.
            </p>
            <p className="text-pm-fog/85 mb-6 leading-relaxed">
              If you&apos;ve tried Shilajit before and felt nothing, you
              weren&apos;t taking real Shilajit. Shilajit is what authentic
              resin should be: sticky, tar-like, dissolving completely in
              liquid, and delivering noticeable results within 1-3 weeks.
              This is the Shilajit that built empires. Now it&apos;s yours.
            </p>
            <Link href="#buy" className="pm-btn pm-btn-gold">
              EXPERIENCE HIMALAYAN PURITY →
            </Link>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="pm-section bg-pm-cream text-center">
        <div className="pm-container max-w-2xl">
          <h2 className="text-xl md:text-2xl font-extrabold mb-3">
            50 Day Money Back Guarantee
          </h2>
          <p className="text-pm-gray-text leading-relaxed">
            Most men feel the difference within 2-3 weeks. Some feel it
            quicker. Some take a bit longer because everyone&apos;s body is
            different. So the best thing you can do is give it a try and if
            you don&apos;t feel stronger, sharper, and more energized, you
            have 50 days to claim a refund and get your money back.
          </p>
        </div>
      </section>

      {/* HOW TO USE */}
      <section id="how-to-use" className="pm-section bg-pm-white">
        <div className="pm-container">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-10">
            4 Easy Steps for Maximum Results
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="border border-pm-fog rounded-lg p-5">
              <p className="font-bold mb-1">1. Measure</p>
              <p className="text-sm text-pm-gray-text">
                Follow the marks on the spoon to ensure an accurate dosage
                every time (0.2g per dose and 0.6g is the maximum daily
                intake). The recommended daily intake should not be
                exceeded.
              </p>
            </div>
            <div className="border border-pm-fog rounded-lg p-5">
              <p className="font-bold mb-1">2. Frequency</p>
              <p className="text-sm text-pm-gray-text">
                You can take Shilajit up to three times a day or all at
                once. However, we recommend not exceeding a total daily
                amount of 0.6 grams in most cases.
              </p>
            </div>
            <div className="border border-pm-fog rounded-lg p-5">
              <p className="font-bold mb-1">3. Dissolve</p>
              <p className="text-sm text-pm-gray-text">
                Position the spoon so that it hangs off the edge of the
                glass with the Shilajit submerged in the water. Allow at
                least 15 to 20 minutes for the Shilajit to fully dissolve.
              </p>
            </div>
            <div className="border border-pm-fog rounded-lg p-5">
              <p className="font-bold mb-1">4. Stir &amp; Drink</p>
              <p className="text-sm text-pm-gray-text">
                After the Shilajit is fully dissolved in the water, stir
                thoroughly to ensure it is well mixed. Now it&apos;s ready
                to be consumed.
              </p>
            </div>
          </div>
          <p className="text-sm font-semibold mb-2">
            Pro Tip: Take in the morning for sustained energy, or
            pre-workout for enhanced performance and faster recovery.
          </p>
          <p className="text-xs text-pm-gray-text mb-1">
            NOTES: Never use boiling liquids to dissolve Shilajit. The ideal
            temperature for dissolution should not exceed 39°C.
          </p>
          <p className="text-xs text-pm-gray-text mb-1">
            You can also consume the measured amount directly by mouth.
          </p>
          <p className="text-xs text-pm-gray-text">
            Store at ambient temperature and not directly exposed to the
            sun.
          </p>
        </div>
      </section>

      {/* INGREDIENTS TABLE */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container">
          <h2 className="text-2xl font-extrabold mb-6">
            Ingredients &amp; Declaration
          </h2>
          <p className="text-sm mb-6">
            <span className="font-semibold">Ingredients:</span> 100%
            Himalayan mountain resin shilajit — PeakModo® Shilajit
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-pm-border bg-pm-white">
              <thead>
                <tr className="bg-pm-fog text-left">
                  <th className="p-3">Size</th>
                  <th className="p-3">Min Dose</th>
                  <th className="p-3">Max Dose</th>
                  <th className="p-3">Min (mg)</th>
                  <th className="p-3">Max (mg)</th>
                  <th className="p-3">Portions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-pm-border">
                  <td className="p-3">25 g</td>
                  <td className="p-3">0.2 g</td>
                  <td className="p-3">0.6 g</td>
                  <td className="p-3">200 mg</td>
                  <td className="p-3">600 mg</td>
                  <td className="p-3">~42–125</td>
                </tr>
                <tr className="border-t border-pm-border">
                  <td className="p-3">40 g</td>
                  <td className="p-3">0.2 g</td>
                  <td className="p-3">0.6 g</td>
                  <td className="p-3">200 mg</td>
                  <td className="p-3">600 mg</td>
                  <td className="p-3">~67–200</td>
                </tr>
                <tr className="border-t border-pm-border">
                  <td className="p-3">65 g</td>
                  <td className="p-3">0.2 g</td>
                  <td className="p-3">0.6 g</td>
                  <td className="p-3">200 mg</td>
                  <td className="p-3">600 mg</td>
                  <td className="p-3">~108–325</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-pm-gray-text mt-2 mb-8">
            Shilajit: 200 mg to 600 mg per dosage | No established RDA
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold mb-1">How to Use</p>
              <p className="text-pm-gray-text">
                Take one measuring spoon of the content and completely
                dissolve in water or warm tea, with a temperature up to
                39°C.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">Storage</p>
              <p className="text-pm-gray-text">
                Store at room temperature and do not expose to direct
                sunlight.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">Warning</p>
              <p className="text-pm-gray-text">
                A dietary supplement is not a substitute for a balanced and
                varied diet. The recommended daily amounts or dosage should
                not be exceeded. Keep out of reach of children.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">Expiry</p>
              <p className="text-pm-gray-text">
                You can find the LOT number and expiration date on the
                bottom of the jar.
              </p>
            </div>
          </div>
          <p className="text-xs text-pm-gray-text mt-6">
            Manufactured and Filled by BTI KI TRENING d.o.o., Medveščkova
            ulica 8, 1000 Ljubljana, Slovenia, Europe
          </p>
          <p className="text-xs text-pm-gray-text">
            Net weight: 25 g / 40 g / 65 g | www.peakmodo.com
          </p>
        </div>
      </section>

      {/* TIMELINE / WHO THIS IS FOR */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
            Your Shilajit Journey
          </h2>
          <p className="text-pm-gray-text mb-1">
            What Men &amp; Women Actually Experience
          </p>
          <p className="text-pm-gray-text mb-8 max-w-2xl">
            This isn&apos;t a miracle pill. It&apos;s a biological
            optimization process. Here&apos;s the realistic timeline based
            on how your body responds.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="border border-pm-fog rounded-lg p-5">
              <p className="font-bold mb-2">This is for you if:</p>
              <ul className="space-y-2 text-sm text-pm-gray-text">
                <li>You want natural, sustained energy without stimulants</li>
                <li>You&apos;re tired of afternoon crashes and brain fog</li>
              </ul>
            </div>
            <div className="border border-pm-fog rounded-lg p-5">
              <p className="font-bold mb-2">This is for you if:</p>
              <ul className="space-y-2 text-sm text-pm-gray-text">
                <li>You value purity, transparency, and third-party testing</li>
                <li>You&apos;re ready to invest in long-term health</li>
              </ul>
            </div>
          </div>
          <Link href="#buy" className="pm-btn pm-btn-gold">
            TRY HIMALAYAN SHILAJIT TODAY →
          </Link>
        </div>
      </section>

      {/* GUARANTEE REPEAT */}
      <section className="pm-section bg-pm-cream text-center">
        <div className="pm-container max-w-2xl">
          <h2 className="text-xl md:text-2xl font-extrabold mb-3">
            50 Day Money Back Guarantee
          </h2>
          <p className="text-pm-gray-text leading-relaxed">
            Most men feel the difference within 2-3 weeks. Some feel it
            quicker. Some take a bit longer because everyone&apos;s body is
            different. So the best thing you can do is give it a try and if
            you don&apos;t feel stronger, sharper, and more energized, you
            have 50 days to claim a refund and get your money back.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL (static grid) */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
            10,000+ People Have Made The Switch.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {PRODUCT_TESTIMONIALS.map((t, i) => (
              <div key={i} className="border border-pm-fog rounded-lg p-5 bg-pm-cream">
                <p className="text-sm text-pm-gray-text leading-relaxed mb-3">
                  &quot;{t.quote}&quot;
                </p>
                <p className="text-sm font-semibold">
                  - {t.name}, {t.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENCE / MYTHS */}
      <section className="pm-dark-section pm-section">
        <div className="pm-container">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
            Unraveling Myths with Scientific Evidence
          </h2>
          <p className="text-pm-fog/80 mb-8 max-w-2xl">
            Published Research on Shilajit&apos;s Benefits for Everyone. —
            Asphaltum Punjabianum (Shilajit): Unraveling Myths with
            Scientific Evidence. Published 2025, International Journal of
            Ayurveda and Pharma Research (Peer-Reviewed). Researchers: Ashif
            Iqubal et al.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 rounded-lg p-5">
              <p className="text-sm font-bold mb-1">
                ❌ MYTH: &quot;Only men should take Shilajit&quot;
              </p>
              <p className="text-sm text-pm-fog/80">
                ✓ SCIENCE: Beneficial for both men and women—supports bone
                health, metabolism, antioxidant defense, and cognitive
                enhancement.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-5">
              <p className="text-sm font-bold mb-1">
                ❌ MYTH: &quot;It&apos;s only for sexual health&quot;
              </p>
              <p className="text-sm text-pm-fog/80">
                ✓ SCIENCE: Supports energy production, cognitive function,
                metabolic health, and overall vitality beyond reproductive
                benefits.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-5">
              <p className="text-sm font-bold mb-1">
                ❌ MYTH: &quot;It works immediately&quot;
              </p>
              <p className="text-sm text-pm-fog/80">
                ✓ SCIENCE: Shilajit functions as a slow-acting adaptogen
                that must be taken continuously over several weeks to
                produce observable physiological adaptations—not an acute
                stimulant.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-5">
              <p className="text-sm font-bold mb-1">
                ❌ MYTH: &quot;All Shilajit is contaminated&quot;
              </p>
              <p className="text-sm text-pm-fog/80">
                ✓ SCIENCE: Properly purified Shilajit is well-tolerated even
                at high doses. Certified products meeting global safety
                standards (like PeakModo&apos;s 6+ lab certificates) are
                safe and effective.
              </p>
            </div>
          </div>
          <p className="text-sm text-pm-fog/80 mb-6 max-w-2xl">
            WHAT THIS MEANS FOR YOU: PeakModo Himalayan Shilajit Resin is
            pharmaceutical-grade, properly purified, and third-party
            tested—delivering all the scientifically-validated benefits
            without the risks associated with low-quality products.
          </p>
          <Link href="#buy" className="pm-btn pm-btn-gold">
            TRY HIMALAYAN SHILAJIT TODAY →
          </Link>
        </div>
      </section>

      {/* MONEY BACK PROTECTION */}
      <section className="pm-section bg-pm-cream text-center">
        <div className="pm-container max-w-2xl">
          <h2 className="text-xl md:text-2xl font-extrabold mb-3">
            Your Purchase Is Protected By Our 50 Day 100% Money Back
            Guarantee
          </h2>
          <p className="text-pm-gray-text leading-relaxed">
            Here at PeakModo, we make sure our customers love their product
            or we will refund 100% of their investment. We&apos;re so
            confident you&apos;ll experience real results with the
            Himalayan Shilajit Resin that we&apos;ll bear all the risk.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="pm-section bg-pm-white">
        <div className="pm-container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-pm-fog border-t border-b border-pm-fog">
            {FAQ_ITEMS.map((item, i) => (
              <div key={item.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left font-semibold"
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <ChevronDown
                    size={18}
                    className={`transition-transform shrink-0 ml-3 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <p className="text-sm text-pm-gray-text pb-4 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CERTS LINK */}
      <section className="pm-section bg-pm-cream">
        <div className="pm-container grid sm:grid-cols-2 gap-6">
          {CERTIFICATIONS.slice(0, 2).map((c) => (
            <div key={c.title} className="border border-pm-border rounded-lg p-6 bg-pm-white">
              <h3 className="font-bold text-lg">{c.title}</h3>
              <p className="text-xs uppercase tracking-wide text-pm-gold font-bold mb-3">
                {c.sub}
              </p>
              <p className="text-sm text-pm-gray-text leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
