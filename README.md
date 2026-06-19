# PeakModo

Premium Shilajit e-commerce site, rebuilt with Next.js 15, React, TypeScript,
Tailwind CSS, and Framer Motion. Structure, layout, copy, images, and
conversion flow are replicated from the original MountainDrop site, with
branding swapped to **PeakModo**.

## Pages

- `/` — Homepage
- `/product/peakmodo-himalayan-shilajit-resin` — Flagship product page
- `/product/[slug]` — Other products (Capsules, Gummies, Powder, Altai Shilajit)
- `/certificates` — Lab certifications
- `/faq` — FAQ
- `/contact` — Contact form
- `/cart`, `/checkout/success` — Cart + checkout flow (required for purchases to work)
- `/about`, `/privacy-policy`, `/terms-conditions` — Footer/legal pages (kept so footer links aren't broken)

Removed: Rewards, Distributors, Blog, Login, Register.

## Reusable components

- `HeroVideoBackground` — full-bleed hero background; tries `/videos/hero.mp4`
  first, falls back automatically to `/images/...jpg` if no video is present.
- `TrustpilotBar` — the rating / review count / jars-delivered line in the hero.
- `CertificationMarquee` — infinite-scrolling trust badge ticker.
- `ProductCarousel` — swipeable best-seller product carousel (Embla).
- `ReviewsCarousel` — swipeable, autoplaying testimonial carousel (Embla).
- `FaqAccordion` — animated accordion (Framer Motion height animation), shared
  between the FAQ page and the product page.
- `StickyHeader` / `MobileMenu` — scroll-aware sticky nav with animated mobile menu.
- `FadeIn` — scroll-triggered fade/slide-in wrapper used throughout for entrance animation.
- `AnimatedButton` — button with consistent hover/press micro-animation.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in your real keys
npm run dev
```

Open http://localhost:3000.

## Hero video

The hero is built to support a video background exactly like the original
site's cinematic hero treatment:

1. Drop a file at `public/videos/hero.mp4`.
2. `HeroVideoBackground` will detect it automatically (via a `HEAD` request)
   and fade in the video over the fallback image — no code changes needed.
3. If no file is present, the hero silently behaves as an image-only hero.

## Images

All images are the original site's real assets, copied with their original
filenames into `/public/images/`. Nothing has been replaced with placeholders.
Swap a file in place (same filename) to update it, or change the path in
`src/lib/content.ts` / the relevant component.

## Payments

Stripe, PayPal, Apple Pay, and Google Pay are wired up via environment
variables only — no hardcoded keys.

1. Copy `.env.local.example` to `.env.local`.
2. Fill in:
   - `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`
   - `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_ENV`
3. Apple Pay / Google Pay activate automatically inside Stripe Checkout once
   enabled in your Stripe Dashboard — no extra keys needed.
4. For local Stripe webhook testing: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

API routes:
- `POST /api/checkout/stripe` — creates a Stripe Checkout session
- `POST /api/webhooks/stripe` — handles `checkout.session.completed`
- `POST /api/checkout/paypal/create-order` — creates a PayPal order
- `POST /api/checkout/paypal/capture-order` — captures a PayPal order
- `POST /api/contact` — handles the contact form (wire to your email provider)

## Deploying to Netlify

This repo includes `netlify.toml` configured for the official Next.js runtime
(`@netlify/plugin-nextjs`).

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project** → select the repo.
3. Build command: `npm run build` (already set in `netlify.toml`).
4. Add the environment variables from `.env.local.example` under
   **Site settings → Environment variables**.
5. Deploy.

## Content

All page text content and structure is centralized in `src/lib/content.ts`,
extracted verbatim from the original site with only brand/product names swapped:

- Mountaindrop → PeakModo
- Himalayan Shilajit → PeakModo Himalayan Shilajit Resin
- Prime → PeakModo Capsules
- Flourish → PeakModo Gummies
- Genius → PeakModo Powder
