# PeakModo

Premium Shilajit e-commerce site, rebuilt with Next.js 15, React, TypeScript,
and Tailwind CSS. Structure, layout, copy, and conversion flow are replicated
from the original site, with branding swapped to **PeakModo**.

## Pages

- `/` — Homepage
- `/product/peakmodo-himalayan-shilajit-resin` — Flagship product page
- `/product/[slug]` — Other products (Capsules, Gummies, Powder, Altai Shilajit)
- `/certificates` — Lab certifications
- `/faq` — FAQ
- `/contact` — Contact form
- `/cart`, `/checkout/success` — Cart + checkout flow
- `/about`, `/privacy-policy`, `/terms-conditions` — Supporting pages

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in your real keys
npm run dev
```

Open http://localhost:3000.

## Images

All images are placeholders pointing to `/public/images/*.jpg`. Replace these
files with real product photography — keep the same filenames or update the
references in `src/lib/content.ts` and the page components.

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

All page text content and structure is centralized in `src/lib/content.ts`.
