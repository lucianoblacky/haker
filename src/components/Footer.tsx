import Link from "next/link";
import { FOOTER_LINKS, BRAND } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="pm-dark-section">
      <div className="pm-container pm-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <div className="text-xl font-extrabold tracking-tight mb-4">
              PEAK<span className="pm-gold-text">MODO</span>
            </div>
            <p className="text-sm text-pm-fog/80 leading-relaxed max-w-xs">
              We source and deliver authentic shilajit of the highest quality
              and produce natural wellness products based on this marvelous
              superfood
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-4 pm-gold-text">
              About
            </h3>
            <ul className="space-y-2 text-sm text-pm-fog/90">
              {FOOTER_LINKS.about.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-pm-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-4 pm-gold-text">
              Store
            </h3>
            <ul className="space-y-2 text-sm text-pm-fog/90">
              {FOOTER_LINKS.store.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-pm-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-4 pm-gold-text">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-pm-fog/90">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-pm-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-pm-fog/60 flex flex-col md:flex-row justify-between gap-2">
          <span>
            Copyright {new Date().getFullYear()} © {BRAND.name}. All rights
            reserved.
          </span>
          <span>{BRAND.domain}</span>
        </div>
      </div>
    </footer>
  );
}
