"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Shop", href: "/product/peakmodo-himalayan-shilajit-resin" },
  { label: "Certificates", href: "/certificates" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function StickyHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full bg-pm-white transition-shadow ${
        scrolled ? "shadow-sm border-b border-pm-fog" : "border-b border-transparent"
      }`}
    >
      <div className="pm-container flex items-center justify-between h-16 md:h-20">
        <button
          className="md:hidden p-2 -ml-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link
          href="/"
          className="text-xl md:text-2xl font-extrabold tracking-tight text-pm-near-black"
        >
          PEAK<span className="pm-gold-text">MODO</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-pm-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <button aria-label="Search" className="p-2 hidden sm:inline-flex">
            <Search size={20} />
          </button>
          <Link href="/cart" aria-label="Cart" className="p-2 relative">
            <ShoppingCart size={20} />
          </Link>
        </div>
      </div>

      <MobileMenu open={open} links={NAV_LINKS} onClose={() => setOpen(false)} />
    </motion.header>
  );
}
