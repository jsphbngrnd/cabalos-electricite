import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Un projet, une panne, ou simplement un doute ?",
  subtitle = "Devis gratuit après diagnostic sur place. Réponse sous 48 heures, hors urgences traitées le jour même.",
}: CTABannerProps) {
  return (
    <section className="px-6 lg:px-10 pb-16 lg:pb-24">
      <div className="max-w-[1440px] mx-auto rounded-[var(--radius)] border border-[var(--border)] p-8 lg:p-12 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        <div className="lg:col-span-8">
          <h3 className="font-display text-[28px] lg:text-[36px] font-medium leading-[1.1] text-balance">
            {title}
          </h3>
          <p className="mt-3 text-[15.5px] text-[var(--muted-foreground)] max-w-[60ch]">
            {subtitle}
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors rounded-[var(--radius)] h-12 px-6 text-[15px] bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
          >
            Demander un devis
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a
            href="tel:0632363563"
            className="inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors rounded-[var(--radius)] h-12 px-6 text-[15px] border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)]"
          >
            06 · 32 · 36 · 35 · 63
          </a>
        </div>
      </div>
    </section>
  );
}
