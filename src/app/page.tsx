import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, VALUES, CERTIFICATIONS, FAQ, REVIEWS } from "@/lib/content";
import JsonLd from "@/components/seo/json-ld";
import { organizationSchema, faqSchema } from "@/lib/schemas";
import StatsRow from "@/components/site/stats-row";
import ReviewsSlider from "@/components/site/reviews-slider";
import CTABanner from "@/components/site/cta-banner";
import SectionHead from "@/components/site/section-head";

export const metadata: Metadata = {
  title: "Électricienne à Marseille – Cabalos électricité",
  description:
    "Cabalos électricité, électricienne professionnelle à Marseille. Installation, rénovation, mise aux normes NF C 15-100, tableau électrique, dépannage urgence. Devis gratuit.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cabalos-electricite.fr/#business",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(REVIEWS.length),
      bestRating: "5",
    },
    review: REVIEWS.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.who },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: r.body,
    })),
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema(FAQ)} />
      <JsonLd data={reviewsSchema} />
      {/* Hero */}
      <section className="px-6 lg:px-10 pt-16 lg:pt-24 pb-12 lg:pb-16">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="eyebrow">Électricienne Marseille</div>
            <h1 className="mt-6 text-[44px] sm:text-[56px] lg:text-[78px] leading-[1.02] font-medium tracking-[-.018em] text-balance">
              Électricienne{" "}
              <span style={{ color: "var(--primary)" }}>indépendante</span> à
              Marseille,{" "}
              <span className="text-[var(--muted-foreground)]">
                pour les particuliers et les professionnels.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end gap-6">
            <p className="text-[15.5px] leading-[1.55] text-[var(--muted-foreground)] max-w-[40ch] text-pretty">
              Emma Cabal — CAP Électricien, habilitations NF C 15-100, RC Pro
              assurée. Diagnostic sur place, devis détaillé en 48 heures,
              intervention dans Marseille et 30 km autour.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors rounded-[var(--radius)] h-10 px-4 text-[14px] bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
              >
                Demander un devis
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/prestations"
                className="inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors rounded-[var(--radius)] h-10 px-4 text-[14px] border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)]"
              >
                Voir les prestations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento — identité / certifications / clients / valeurs */}
      <section id="identite" className="px-6 lg:px-10 py-10 lg:py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-4">

            {/* Identité */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-6 lg:p-8 flex flex-col justify-between gap-8">
              <div className="eyebrow">01 · Identité</div>
              <div>
                <h3 className="font-display text-[28px] lg:text-[34px] font-medium leading-[1.05] mb-3">
                  Emma Cabal
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-[var(--muted-foreground)]">
                  Électricienne indépendante à Marseille — 16 arrondissements et 30 km autour. Depuis la reconversion, chaque chantier est traité avec le soin d'une artisane.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-6 lg:p-8 flex flex-col gap-6">
              <div className="eyebrow">02 · Certifications</div>
              <ul className="flex flex-col gap-3">
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-[14px]">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--border)" }}
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Clients — spans 2 rows */}
            <div className="lg:row-span-2 bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-6 lg:p-8 flex flex-col gap-8">
              <div className="eyebrow">03 · Clients</div>
              <div className="flex flex-col gap-7">
                <div>
                  <div className="eyebrow mb-3">Particuliers</div>
                  <ul className="space-y-2 text-[14.5px] text-[var(--muted-foreground)]">
                    {["Appartements & maisons", "Studios", "Résidences secondaires"].map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="eyebrow mb-3">Professionnels</div>
                  <ul className="space-y-2 text-[14.5px] text-[var(--muted-foreground)]">
                    {["Syndics de copropriété", "Architectes", "Maîtres d'œuvre", "Architectes d'intérieur", "Plaquistes & artisans"].map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Valeurs — spans 2 columns */}
            <div className="lg:col-span-2 bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-6 lg:p-8">
              <div className="eyebrow mb-6">04 · Valeurs</div>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
                {VALUES.map(([k], i) => (
                  <div key={k}>
                    <div className="font-mono num text-[11px] text-[var(--muted-foreground)] mb-2">0{i + 1}</div>
                    <div className="font-display text-[16px] font-medium leading-snug">{k}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section id="prestations" className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead
            n="Prestations"
            title="Huit prestations couvrant tous les travaux électriques."
            intro="Pour les particuliers comme pour les professionnels, à Marseille et dans un rayon de 30 km."
          />
          <div className="h-px bg-[var(--border)]" />
          {SERVICES.map((s) => (
            <Link key={s.n} href={`/prestations#${s.slug}`} className="block">
              <div className="row grid grid-cols-12 gap-4 lg:gap-10 py-6 lg:py-7 items-start border-b border-[var(--border)]">
                <div className="col-span-1">
                  <span className="font-mono num text-[14px] text-[var(--muted-foreground)]">{s.n}</span>
                </div>
                <h3 className="col-span-11 lg:col-span-4 font-display text-[19px] lg:text-[22px] font-medium leading-snug">
                  {s.t}
                </h3>
                <div className="col-start-2 col-span-11 lg:col-start-auto lg:col-span-5 text-[15px] leading-[1.55] text-[var(--muted-foreground)] max-w-[52ch]">
                  {s.d}
                  {s.price && (
                    <div className="mt-1.5 font-mono text-[12px] text-[var(--foreground)]">{s.price}</div>
                  )}
                </div>
                <div className="col-start-2 col-span-11 lg:col-start-auto lg:col-span-2 lg:text-right text-[13.5px]">
                  <span className="link font-medium inline-flex items-center gap-1.5">
                    Détail{" "}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <StatsRow />

      {/* Avis */}
      <section id="avis" className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead
            n="Avis"
            title="Quelques retours"
            intro="Sélection de témoignages clients récents — particuliers et professionnels confondus."
          />
          <ReviewsSlider />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
