"use client";

import { motion } from "framer-motion";

type TrustpilotBarProps = {
  rating: string;
  reviewCount: string;
  jarsDelivered: string;
};

export default function TrustpilotBar({
  rating,
  reviewCount,
  jarsDelivered,
}: TrustpilotBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 text-sm mb-4">
        <span className="pm-gold-text font-bold">{rating}</span>
        <span className="text-pm-fog/80">{reviewCount}</span>
      </div>
      <p className="text-xs text-pm-fog/60 mb-4">{jarsDelivered}</p>
    </motion.div>
  );
}
