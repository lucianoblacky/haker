"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type NavLink = { label: string; href: string };

type MobileMenuProps = {
  open: boolean;
  links: NavLink[];
  onClose: () => void;
};

export default function MobileMenu({ open, links, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="md:hidden border-t border-pm-fog overflow-hidden"
        >
          <div className="px-5 py-4 flex flex-col gap-4 text-sm font-semibold uppercase tracking-wide">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
              >
                <Link href={link.href} onClick={onClose} className="py-1 block">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
