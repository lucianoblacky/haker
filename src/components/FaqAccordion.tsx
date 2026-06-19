"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/content";

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="divide-y divide-pm-fog border-t border-b border-pm-fog">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openFaq === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenFaq(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-4 text-left font-semibold"
              aria-expanded={isOpen}
            >
              {item.q}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="shrink-0 ml-3"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-pm-gray-text pb-4 leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
