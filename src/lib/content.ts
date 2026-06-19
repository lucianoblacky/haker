// Central content store for PeakModo.
// Text content is preserved from the source site (mountaindrop.com),
// with only brand/product names swapped per the rebrand spec:
//   Mountaindrop -> PeakModo
//   Himalayan Shilajit -> PeakModo Himalayan Shilajit Resin
//   Prime -> PeakModo Capsules
//   Flourish -> PeakModo Gummies
//   Genius -> PeakModo Powder

export const BRAND = {
  name: "PeakModo",
  tagline: "World's Purest Shilajit",
  domain: "peakmodo.com",
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  price: string;
  priceValue: number;
  rating?: string;
  badge?: string;
  image: string;
  bullets: { title: string; body: string }[];
  cta: string;
};

export const BEST_SELLERS: Product[] = [
  {
    slug: "peakmodo-capsules",
    name: "PeakModo Capsules",
    shortName: "Capsules",
    price: "€105,00",
    priceValue: 105.0,
    image: "/images/Prime_1_a114bb77-2c08-47d5-a49e-b288defe32bb995c.jpg",
    bullets: [
      {
        title: "Reclaim Your Edge",
        body: "Natural testosterone support for strength, energy, and drive",
      },
      {
        title: "Clinically-Dosed Ingredients",
        body: "No proprietary blends, just proven compounds at effective levels",
      },
      {
        title: "Feel the Difference in Weeks",
        body: "Customers report better performance, focus, and recovery",
      },
    ],
    cta: "SHOP CAPSULES",
  },
  {
    slug: "peakmodo-gummies",
    name: "PeakModo Gummies",
    shortName: "Gummies",
    price: "€105,00",
    priceValue: 105.0,
    image: "/images/MD_Flourish_Jar_front_shadow_white-scaledf869.png",
    bullets: [
      {
        title: "Balance Your Hormones Naturally",
        body: "14 botanicals reduce PMS, hot flashes, and mood swings",
      },
      {
        title: "Root Cause Support",
        body: "Addresses hormonal imbalance at the source, not just symptoms",
      },
      {
        title: "Feel Like Yourself Again",
        body: "Customers report better energy, clarity, and emotional stability",
      },
    ],
    cta: "SHOP GUMMIES",
  },
  {
    slug: "peakmodo-himalayan-shilajit-resin",
    name: "PeakModo Himalayan Shilajit Resin",
    shortName: "Himalayan Shilajit Resin",
    price: "€79,95",
    priceValue: 79.95,
    image: "/images/Shilajit_PDP_Main_Image6024.jpg",
    bullets: [
      {
        title: "Pure Himalayan Power",
        body: "Harvested at 5,000m+ for maximum potency & authenticity",
      },
      {
        title: "85+ Trace Minerals",
        body: "Natural energy, mental clarity, and vitality without crashes",
      },
      {
        title: "The Gold Standard",
        body: "4+ lab certificates prove purity, potency, and safety",
      },
    ],
    cta: "SHOP HIMALAYAN SHILAJIT RESIN",
  },
  {
    slug: "peakmodo-altai-shilajit",
    name: "Altai Shilajit",
    shortName: "Altai Shilajit",
    price: "€44,95",
    priceValue: 44.95,
    rating: "4.8 (985 Reviews)",
    image: "/images/Altai_10eb1.jpg",
    bullets: [
      {
        title: "Legendary Altai Source",
        body: "Sourced at 3,000m+ in pristine mountain conditions",
      },
      {
        title: "All-Day Energy & Focus",
        body: "Sustained vitality and mental sharpness you can feel",
      },
      {
        title: "Pharmaceutical-Grade Purity",
        body: "Third-party tested, GMP certified, violet glass protected",
      },
    ],
    cta: "SHOP ALTAI SHILAJIT",
  },
  {
    slug: "peakmodo-powder",
    name: "PeakModo Powder",
    shortName: "Powder",
    price: "€115,00",
    priceValue: 115.0,
    rating: "4.8 (985 Reviews)",
    image: "/images/GENIUS_Box-MD_600g5b20.png",
    bullets: [
      {
        title: "Sharpen Your Mind",
        body: "17 nootropics for memory, focus, and mental energy",
      },
      {
        title: "No Stimulants, No Crashes",
        body: "Natural adaptogens support sustained mental performance",
      },
      {
        title: "Brain Fog Eliminated",
        body: "Customers report clearer thinking and better concentration",
      },
    ],
    cta: "SHOP POWDER",
  },
];

export const UPSELL_PRODUCTS: Product[] = [
  BEST_SELLERS.find((p) => p.slug === "peakmodo-capsules")!,
  BEST_SELLERS.find((p) => p.slug === "peakmodo-gummies")!,
  BEST_SELLERS.find((p) => p.slug === "peakmodo-powder")!,
];

export const BUNDLES = [
  { name: "Power Couple", image: "/images/PowerCouple_1cddc.jpg" },
  { name: "Testosterone Titan", image: "/images/Testosterone_Titan_f7bdc960-b204-4bb4-acef-2600ca728304394a.jpg" },
  { name: "Feminine Revival", image: "/images/Feminine_Revival_1_81bddf66-8496-4fd2-a6f4-46ef41dff2ab9a40.jpg" },
];

export const HOME_TESTIMONIALS = [
  {
    name: "Orel Mieussens",
    date: "October 16, 2025",
    title: "Great product. Excellent company",
    body: "I am very satisfied with the company and its products. I am a repeat customer of Shilajit; it's one of my regular superfood supplements. I've tried many brands, and over the years, this is one of the best, if not the best, I've gotten. A reliable company and delivered to your market.",
  },
  {
    name: "Nataša Arčnik Pavlin",
    date: "September 27, 2025",
    title: "Since I was in my Mena Period",
    body: "Since I was in my Mena Period, I needed a supplement to help me feel better. I tried PeakModo Gummies. I was skeptical at first, but after 5 days of taking it, I started to see a difference. It was amazing. My energy went up, I'm having regular bowel movements again, and my libido went up, which affected my marriage with my husband. Thank you so much!",
  },
  {
    name: "Big Mo",
    date: "September 24, 2024",
    title: "The quality of all their products are THE BEST",
    body: "The quality of all their products are top notch... Highly trustworthy. I've physically noticed changes and benefits unlike with other brands that I don't want to name. Don't hesitate and purchase one or a two of their blends at the least.",
  },
  {
    name: "Juraime",
    date: "October 4, 2025",
    title: "Good job I can feel the effect",
    body: "Good job I can feel the effect, thanks a lot.",
  },
  {
    name: "Dvantonin Anorak",
    date: "September 24, 2025",
    title: "So grateful I found this company.",
    body: "These products are life changing. I feel healthier and happier. So grateful I found them!",
  },
  {
    name: "Bruno Palić",
    date: "August 13, 2025",
    title: "The best shilajit ever",
    body: "Shilajit its awsome soo much better thean other companies, the taste, the texture, smell and bioavability you get its amazing. You need to try it. The best shilajit ever",
  },
  {
    name: "Chris Englund",
    date: "July 3, 2025",
    title: "It really does give a mental boost.",
    body: "It really does give a mental boost. Only 8 days in and im lifting more, more focused, more energized",
  },
  {
    name: "Steven Brown",
    date: "July 1, 2025",
    title: "Exceptional Shilajit",
    body: "This is an excellent product and does what it claims, absolutely amazing stuff, excellent before workouts lots of energy and great focus. Fast delivery, thank you from Australia.",
  },
  {
    name: "Brennen Jackson",
    date: "June 29, 2025",
    title: "Best shilajit on the market",
    body: "Best shilajit on the market, full stop. I've tried several different shilajit brands and this is the best one by far.",
  },
  {
    name: "Alexx",
    date: "April 15, 2025",
    title: "Amazing products!",
    body: "I've been using PeakModo products for a month now, and I'm loving them so far. I have more energy, my anxiety is more under control, and my sleep has improved. Even my friends and coworkers have noticed the benefits! I highly recommend these products.",
  },
];

export const PRODUCT_TESTIMONIALS = [
  {
    quote:
      "The absolute BEST shilajit you can buy anywhere in the world! No exaggeration. The quality surpasses all others I've tried and this is the one that I will continue to purchase as long as the quality remains so pure and the price still beats everywhere else I've researched.",
    name: "Victoria",
    meta: "37, Using for 12 weeks",
  },
  {
    quote:
      "Everything speaks of quality even at first sight. Then when I first opened it, I sensed a potent smell. The Shilajit dissolves easily and personally I like the taste of it. I felt quick mood boost, then could feel the subtle vitality spreading throughout the body and a sense of balance.",
    name: "Vladimir",
    meta: "51, Using for 14 weeks",
  },
  {
    quote:
      "Shilajit is thick, dark, dissolves well in water with the help of the provided spoon. After it, my thoughts are clearer, I feel rested and I have more energy. I love it!",
    name: "Saša P.",
    meta: "52, Using for 5 months",
  },
  {
    quote:
      "I've been taking this Shilajit for the past 5 days now & I'm starting to feel great results. My energy levels have definitely improved and I've also noticed that my mood has improved too. I would highly recommend this Shilajit to anyone on the fence.",
    name: "Alan C.",
    meta: "49, using for 1 week",
  },
];

export const FAQ_ITEMS = [
  {
    q: "How do I use this product?",
    a: "Take one measuring spoon (0.2g/200mg) and dissolve in water, warm tea, juice, milk, or coffee (under 39°C). You can also take it directly. Use daily for best results—Shilajit works as a slow-acting adaptogen over time.",
  },
  {
    q: "Is Shilajit safe to use?",
    a: "Yes. Our Himalayan Shilajit Resin is properly purified, third-party tested with 6+ lab certificates, GMP certified, and tested for heavy metals. Research shows purified Shilajit is well-tolerated even at high doses. If you have medical conditions or take medications, consult your healthcare provider first.",
  },
  {
    q: "Is this only for men, or can women take it too?",
    a: 'Shilajit is beneficial for both men and women. Recent scientific research debunks the "men only" myth. It supports bone health, metabolic function, energy production, cognitive enhancement, and overall vitality in all adults. Women particularly benefit from energy support, stress resilience, and healthy aging.',
  },
  {
    q: "Can I take it with other supplements?",
    a: "Yes. Shilajit actually enhances the absorption of other nutrients by 60-80% thanks to fulvic acid. Many customers combine it with omega-3s, vitamin D, or magnesium. Avoid taking with blood thinners or if you have hemochromatosis (iron overload) - consult your doctor.",
  },
  {
    q: "How long does one jar last?",
    a: "The 65g jar lasts approximately 10-11 months with daily use (325 servings). The 40g jar lasts about 6.5 months (200 servings). The 25g jar lasts about 4 months (125 servings).",
  },
  {
    q: "How should I store it?",
    a: "Store in a cool, dry place. Our violet glass container protects the resin from light degradation and preserves its potency naturally.",
  },
];

export const TRUST_BADGES = [
  "6+ independent lab certifications",
  "Zero synthetic filler or additives",
  "Harvested above 3000m altitude",
];

export const TRUST_ICONS = [
  { label: "Harvested Above 3000m", sub: "Altitude-Certified Purity" },
  { label: "Triple Lab Tested", sub: "Heavy Metals Verified Safe" },
  { label: "85+ Trace Minerals", sub: "Full-Spectrum Bioavailability" },
  { label: "Zero Synthetic Fillers", sub: "Pure Resin, Nothing Added" },
  { label: "Traditional Ayurvedic Process", sub: "3,000 Years of Proven Use" },
];

export const WHY_SWITCH = [
  {
    title: "1. Harvested where purity is guaranteed",
    body: "Our shilajit comes exclusively from above 5,000 meters in the Himalayas where pollution can't reach and authenticity is verified through altitude certification.",
  },
  {
    title: "2. Triple-tested for what matters most",
    body: "Most supplements reach your door with a single quality check at best. Ours passes through three independent labs before earning the PeakModo name, because what you can't see matters most.",
  },
  {
    title: "3. The same substance used for 3,000 years",
    body: "Long before modern supplements existed, mountain communities relied on shilajit for vitality and endurance. Three millennia later, we're still harvesting it the same way, because some things don't need improving.",
  },
  {
    title: "4. Formulated using traditional Ayurvedic wisdom",
    body: "We don't cut corners with powders or capsules that destroy bioavailability. Our authentic resin form preserves the full spectrum of nutrients and fulvic acid exactly as nature intended.",
  },
  {
    title: "5. Try it risk-free with our 50-Day Guarantee",
    body: "If you don't feel a noticeable difference in your energy, focus, or recovery within 50 days, we'll refund every cent. More than 1,000 five-star reviews say you won't need it.",
  },
];

export const NUTRIENT_STATS = [
  { value: "85+", label: "Beneficial Nutrients" },
  { value: "53+", label: "DBP & DCP" },
  { value: "18+", label: "Amino Acids" },
  { value: "Rich in", label: "Fulvic Acid" },
];

export const CERTIFICATIONS = [
  {
    title: "GMP Certification",
    sub: "Higher Level HACCP Approved",
    body: "Our manufacturing facility holds GMP (Good Manufacturing Practice) certification, the international gold standard for pharmaceutical-grade production standards. This means every step of our production process meets strict quality and safety protocols.",
  },
  {
    title: "HACCP Certification",
    sub: "Hazard Analysis Critical Control Point",
    body: "We maintain HACCP certification for food safety management, ensuring systematic prevention of biological, chemical, and physical hazards across every batch. Our processes are audited regularly by independent certification bodies.",
  },
  {
    title: "IFS Certification",
    sub: "International Featured Standards",
    body: "Recognized by major European retailers, IFS Global Markets Food sets rigorous benchmarks for food safety and quality. From raw material sourcing to final packaging, every step of our production meets these internationally accepted standards, verified through regular third-party audits.",
  },
  {
    title: "ISO 9001:2015 Quality Management",
    sub: "IQNET Internationally Recognized",
    body: "We maintain ISO 9001:2015 certification for quality management systems, ensuring consistent, traceable, and verifiable quality across every batch. Our processes are audited annually by independent certification bodies.",
  },
];

export const STATS_ROW = [
  { value: "1000+", label: "Trustpilot reviews" },
  { value: "20,000+", label: "customers served" },
  { value: "25,000+", label: "jars delivered" },
];

export const FOOTER_LINKS = {
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Our Shilajit", href: "/product/peakmodo-himalayan-shilajit-resin" },
    { label: "How to use", href: "/product/peakmodo-himalayan-shilajit-resin#how-to-use" },
    { label: "Contact us", href: "/contact" },
  ],
  store: [
    { label: "Shop", href: "/product/peakmodo-himalayan-shilajit-resin" },
    { label: "Certificates", href: "/certificates" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms, Conditions & Agreements", href: "/terms-conditions" },
  ],
};

export const SIZE_OPTIONS = [
  {
    size: "25g",
    oneTime: { price: "44,95€", perDay: "2.1€ per day" },
    subscribe: { price: "38,21€", perDay: "1.79€ per day" },
    jars: [
      { qty: "1 Jar", price: "44,95€", badge: "BEST SELLER" },
      { qty: "2 Jars", price: "39,56€ each", badge: "BEST VALUE" },
      { qty: "3 Jars", price: "39,86€ each" },
    ],
  },
  {
    size: "40g",
    oneTime: { price: "63,95€", perDay: "2.1€ per day" },
    subscribe: { price: "54,36€", perDay: "1.79€ per day" },
    jars: [
      { qty: "1 Jar", price: "63,95€", badge: "BEST SELLER" },
      { qty: "2 Jars", price: "56,27€ each", badge: "BEST VALUE" },
      { qty: "3 Jars", price: "52,44€ each" },
    ],
  },
  {
    size: "65g",
    oneTime: { price: "89,95€", perDay: "2.1€ per day" },
    subscribe: { price: "76,46€", perDay: "1.79€ per day" },
    jars: [
      { qty: "1 Jar", price: "89,95€", badge: "BEST SELLER" },
      { qty: "2 Jars", price: "79,15€ each", badge: "BEST VALUE" },
      { qty: "3 Jars", price: "73,79€ each" },
    ],
  },
];
