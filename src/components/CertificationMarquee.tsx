"use client";

type CertificationMarqueeProps = {
  items: string[];
};

/**
 * Infinite horizontal marquee of trust badges, matching the source
 * site's "Slide 1 of 3" auto-scrolling certification ticker that runs
 * beneath the hero. The list is duplicated so the CSS animation can
 * loop seamlessly (translateX(-50%) on a track that's 2x the content).
 */
export default function CertificationMarquee({ items }: CertificationMarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="bg-pm-near-black border-t border-white/10 py-4 overflow-hidden">
      <div className="pm-marquee-track text-sm font-semibold uppercase tracking-wide text-pm-fog/90">
        {track.map((t, i) => (
          <span key={i} className="px-8 whitespace-nowrap flex items-center gap-2">
            <span className="pm-gold-text">✓</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
