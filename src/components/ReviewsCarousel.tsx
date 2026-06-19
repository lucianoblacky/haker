"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export type Review = {
  name: string;
  date: string;
  title: string;
  body: string;
};

type ReviewsCarouselProps = {
  reviews: Review[];
};

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", slidesToScroll: 1, containScroll: "trimSnaps" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
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
          Slide {selectedIndex + 1} of {reviews.length}
        </span>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous review"
            className="p-2 rounded-full border border-pm-border hover:border-pm-gold transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next review"
            className="p-2 rounded-full border border-pm-border hover:border-pm-gold transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {reviews.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: "easeOut" }}
              className="min-w-[280px] sm:min-w-[340px] flex-shrink-0 border border-pm-fog rounded-lg p-5 bg-pm-cream"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm">{t.name}</span>
                <span className="text-xs text-pm-gray-text">{t.date}</span>
              </div>
              <p className="font-bold text-sm mb-2">{t.title}</p>
              <p className="text-sm text-pm-gray-text leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
