"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/content";

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="divide-y divide-pm-fog border-t border-b border-pm-fog">
      {FAQ_ITEMS.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left font-semibold"
            aria-expanded={openFaq === i}
          >
            {item.q}
            <ChevronDown
              size={18}
              className={`transition-transform shrink-0 ml-3 ${
                openFaq === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openFaq === i && (
            <p className="text-sm text-pm-gray-text pb-4 leading-relaxed">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
