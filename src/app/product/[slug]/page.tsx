import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BEST_SELLERS } from "@/lib/content";
import { himalayanShilajitResin } from "@/lib/products/himalayan-shilajit-resin";
import { altaiShilajit } from "@/lib/products/altai-shilajit";
import ShilajitProductPage from "@/components/ShilajitProductPage";
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

  // Each product has its own real, extracted page content. Himalayan
  // Shilajit Resin and Altai Shilajit are fully wired to the new
  // structured template. Capsules, Gummies, and Powder are pending
  // (still served by the legacy template) and will be wired next.
  if (slug === "peakmodo-himalayan-shilajit-resin") {
    return <ShilajitProductPage data={himalayanShilajitResin} />;
  }
  if (slug === "peakmodo-altai-shilajit") {
    return <ShilajitProductPage data={altaiShilajit} />;
  }

  return <ProductDetailClient />;
}
