"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type HeroVideoBackgroundProps = {
  videoSrc?: string;
  imageSrc: string;
  alt: string;
  priority?: boolean;
};

/**
 * Renders a full-bleed hero background.
 *
 * Tries the video source first (e.g. /videos/hero.mp4). If the file
 * doesn't exist or fails to load, it falls back automatically to the
 * static image (e.g. /images/hero.jpg) with no layout shift and no
 * visible error — this lets the same component serve a video-led hero
 * the moment a video file is dropped in, while looking and behaving
 * exactly like an image hero until then.
 */
export default function HeroVideoBackground({
  videoSrc,
  imageSrc,
  alt,
  priority = true,
}: HeroVideoBackgroundProps) {
  const [videoFailed, setVideoFailed] = useState(!videoSrc);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!videoSrc) {
      setVideoFailed(true);
      return;
    }
    // Confirm the video resource actually resolves before swapping it in.
    fetch(videoSrc, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) setVideoFailed(true);
      })
      .catch(() => setVideoFailed(true));
  }, [videoSrc]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Image layer — always present underneath as the guaranteed fallback */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover transition-opacity duration-700 ${
          videoReady && !videoFailed ? "opacity-0" : "opacity-100"
        }`}
        sizes="100vw"
      />

      {/* Video layer — fades in on top once it can actually play */}
      {!videoFailed && videoSrc && (
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
