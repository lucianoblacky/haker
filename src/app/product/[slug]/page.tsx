import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BEST_SELLERS } from "@/lib/content";
import ProductDetailClient from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return BEST_SELLERS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = BEST_SELLERS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.name} — ${product.bullets[0]?.body ?? ""}`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = BEST_SELLERS.find((p) => p.slug === slug);
  if (!product) notFound();

  // The flagship product (Himalayan Shilajit Resin) gets the full
  // long-form template replicated from the source site. Other
  // best-seller products reuse the same proven template/structure.
  return <ProductDetailClient />;
}
