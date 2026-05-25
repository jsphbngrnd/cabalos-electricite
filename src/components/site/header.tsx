"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md border-b border-[var(--border)]"
      style={{ background: "color-mix(in oklab, var(--background) 90%, transparent)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 focus-ring rounded-[var(--radius)]">
          {/* Logo in rounded container */}
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
          {/* Wordmark */}
          <div className="font-display flex flex-col leading-[.9]">
            <span className="text-[15px]" style={{ color: "var(--primary)" }}>Cabalos</span>
            <span className="text-[15px]" style={{ color: "var(--primary)" }}>Électricité</span>
          </div>
        </Link>

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

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors rounded-[var(--radius)] h-8 px-3 text-[13px] bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
        >
          Devis gratuit
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </header>
  );
}
