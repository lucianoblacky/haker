"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

const NAV_LINKS = [
  { label: "Shop", href: "/product/peakmodo-himalayan-shilajit-resin" },
  { label: "Certificates", href: "/certificates" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-pm-white border-b border-pm-fog">
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

      {open && (
        <nav className="md:hidden border-t border-pm-fog px-5 py-4 flex flex-col gap-4 text-sm font-semibold uppercase tracking-wide">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
