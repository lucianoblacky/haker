"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/content";

type ProductCarouselProps = {
  products: Product[];
};

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-pm-gray-text uppercase tracking-wide">
          Slide {selectedIndex + 1} of {products.length}
        </span>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous product"
            className="p-2 rounded-full border border-pm-border hover:border-pm-gold transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next product"
            className="p-2 rounded-full border border-pm-border hover:border-pm-gold transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
              className="min-w-[280px] sm:min-w-[320px] flex-shrink-0 bg-pm-white rounded-lg overflow-hidden border border-pm-fog flex flex-col"
            >
              <div className="relative aspect-square bg-pm-fog">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="320px"
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
