import Link from "next/link";
import { NAV_LINKS, SERVICES } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="px-6 lg:px-10 pt-10 pb-10 border-t border-[var(--border)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 py-6">
          {/* Brand */}
          <div className="col-span-12 lg:col-span-3 flex flex-col leading-[.9]">
            <span className="font-display text-[16px]" style={{ color: "var(--primary)" }}>Cabalos</span>
            <span className="font-display text-[16px]" style={{ color: "var(--primary)" }}>Électricité</span>
            <span className="font-display text-[16px]" style={{ color: "var(--primary)" }}>Marseille</span>
            <span className="mt-4 text-[13px] text-[var(--muted-foreground)] max-w-[28ch]">
              Emma Cabal — électricienne indépendante. Marseille (16 arrondissements) + 30 km autour.
            </span>
          </div>

          {/* Nav */}
          <div className="col-span-6 lg:col-span-2">
            <div className="eyebrow mb-3">Index</div>
            <ul className="space-y-1.5 text-[13.5px]">
              {NAV_LINKS.map(({ slug, label }) => (
                <li key={slug}>
                  <Link href={slug} className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/realisations" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Réalisations</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-6 lg:col-span-3">
            <div className="eyebrow mb-3">Prestations</div>
            <ul className="space-y-1.5 text-[13.5px]">
              {SERVICES.map((s) => (
                <li key={s.n} className="flex gap-2.5">
                  <span className="font-mono num text-[var(--muted-foreground)]">{s.n}</span>
                  <Link
                    href={`/prestations#${s.slug}`}
                    className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {s.t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-12 lg:col-span-4">
            <div className="eyebrow mb-3">Coordonnées</div>
            <div className="space-y-1.5 text-[13.5px]">
              <div>
                <a href="tel:0632363563" className="hover:text-[var(--primary)] transition-colors">
                  06 · 32 · 36 · 35 · 63
                </a>
              </div>
              <div>
                <a href="mailto:cabal.emma@gmail.com" className="hover:text-[var(--primary)] transition-colors">
                  cabal.emma@gmail.com
                </a>
              </div>
              <div className="text-[var(--muted-foreground)]">Lun → Ven · 8h–18h</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { label: "Instagram", href: "https://instagram.com/cabalos_elec" },
                { label: "Fabricoleuses", href: "https://les-fabricoleuses.com/fabricoleuse/emma-cabal/" },
                { label: "Google", href: "https://maps.google.com/?q=Cabalos+Electricite+Marseille" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] px-2.5 py-1 border border-[var(--border)] rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:border-[var(--foreground)] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-[var(--border)]" />
        <div className="pt-5 flex flex-wrap items-center justify-between gap-4 text-[11.5px] text-[var(--muted-foreground)] font-mono uppercase tracking-[.16em]">
          <div>© 2026 Cabalos Électricité</div>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="hover:text-[var(--foreground)] transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-[var(--foreground)] transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
