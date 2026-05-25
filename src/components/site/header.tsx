"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-40 backdrop-blur-md border-b border-[var(--border)]"
        style={{ background: "color-mix(in oklab, var(--background) 90%, transparent)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 focus-ring rounded-[var(--radius)]">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border border-[var(--border)]">
              <Image
                src="/logo.png"
                alt="Cabalos Électricité"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="font-display flex flex-col leading-[.9]">
              <span className="text-[15px]" style={{ color: "var(--primary)" }}>Cabalos</span>
              <span className="text-[15px]" style={{ color: "var(--primary)" }}>Électricité</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px]">
            {NAV_LINKS.map(({ slug, label }) => (
              <Link
                key={slug}
                href={slug}
                className={cn(
                  "transition-colors",
                  pathname === slug || (slug !== "/" && pathname?.startsWith(slug))
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors rounded-[var(--radius)] h-8 px-3 text-[13px] bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
            >
              Devis gratuit
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Hamburger button */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] focus-ring rounded-[var(--radius)]"
            >
              <span className={cn("block w-5 h-0.5 bg-[var(--foreground)] transition-all duration-300 origin-center", open && "translate-y-[7px] rotate-45")} />
              <span className={cn("block w-5 h-0.5 bg-[var(--foreground)] transition-all duration-300", open && "opacity-0")} />
              <span className={cn("block w-5 h-0.5 bg-[var(--foreground)] transition-all duration-300 origin-center", open && "-translate-y-[7px] -rotate-45")} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed top-[57px] inset-x-0 bottom-0 z-30 lg:hidden flex flex-col transition-all duration-300",
          open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
        )}
        style={{ background: "var(--background)" }}
      >
        <nav className="flex flex-col flex-1 px-6 pt-6 overflow-y-auto">
          {NAV_LINKS.map(({ slug, label }) => (
            <Link
              key={slug}
              href={slug}
              onClick={() => setOpen(false)}
              className={cn(
                "py-5 text-[26px] font-medium border-b border-[var(--border)] transition-colors",
                pathname === slug || (slug !== "/" && pathname?.startsWith(slug))
                  ? "text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)]"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-6 py-6 border-t border-[var(--border)]">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 font-medium tracking-tight transition-colors rounded-[var(--radius)] h-12 w-full text-[15px] bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
          >
            Demander un devis
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className="mt-4 flex items-center justify-between text-[13px] text-[var(--muted-foreground)]">
            <a href="tel:0632363563" className="hover:text-[var(--foreground)] transition-colors">
              06 · 32 · 36 · 35 · 63
            </a>
            <span>Lun → Ven · 8h–18h</span>
          </div>
        </div>
      </div>
    </>
  );
}
