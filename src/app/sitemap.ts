import type { MetadataRoute } from "next";
import { BEST_SELLERS } from "@/lib/content";

const BASE_URL = "https://peakmodo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/certificates",
    "/faq",
    "/contact",
    "/about",
    "/privacy-policy",
    "/terms-conditions",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const productRoutes = BEST_SELLERS.map((p) => ({
    url: `${BASE_URL}/product/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
