import type { Metadata } from "next";
import { VALUES, STEPS, CERTIFICATIONS, PARCOURS } from "@/lib/content";
import JsonLd from "@/components/seo/json-ld";
import { personSchema, organizationSchema, breadcrumbSchema } from "@/lib/schemas";
import PageHeader from "@/components/site/page-header";
import SectionHead from "@/components/site/section-head";
import CTABanner from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "À propos — Emma Cabal, électricienne",
  description:
    "Découvrez Emma Cabal, électricienne indépendante à Marseille. CAP Électricien, habilitation BR et B1V, RC Pro. Méthode de travail en 5 étapes, valeurs et certifications.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos – Emma Cabal, électricienne indépendante à Marseille",
    description: "De Beaux-Arts à l'électricité — le parcours d'Emma Cabal, électricienne artisane à Marseille. CAP, habilitation BR et B1V, RC Pro.",
    url: "/a-propos",
    images: [{ url: "/OpenGraph.png", width: 1200, height: 630, alt: "Emma Cabal – Cabalos Électricité" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos – Emma Cabal, électricienne indépendante à Marseille",
    description: "De Beaux-Arts à l'électricité — le parcours d'Emma Cabal, électricienne artisane à Marseille.",
    images: ["/OpenGraph.png"],
  },
};

export default function AProposPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "À propos", url: "/a-propos" }])} />
      <PageHeader
        eyebrow="Page · Méthode & À propos"
        title="Une méthode en cinq étapes, identique pour chaque chantier."
        intro="Pour ne rien oublier, ne rien sur-facturer, et toujours laisser une installation lisible derrière soi."
      />

      {/* Étapes */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="h-px bg-[var(--border)]" />
          {STEPS.map(([t, d], i) => (
            <div
              key={t}
              className="grid grid-cols-12 gap-6 lg:gap-10 py-7 lg:py-9 items-start border-b border-[var(--border)]"
            >
              <div className="col-span-2 lg:col-span-1 font-mono num text-[14px] text-[var(--muted-foreground)] pt-1">
                0{i + 1}
              </div>
              <h3 className="col-span-10 lg:col-span-3 font-display text-[20px] lg:text-[24px] font-medium leading-[1.15]">
                {t}
              </h3>
              <div className="col-span-12 lg:col-span-8 text-[15.5px] leading-[1.55] text-[var(--muted-foreground)] max-w-[64ch]">
                {d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parcours — biographie */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="Parcours" title="Travail manuel, Beaux-Arts, enseignement — et l'électricité." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden">
            {PARCOURS.map((p, i) => (
              <div key={p.titre} className="bg-[var(--card)] p-7 lg:p-8">
                <div className="font-mono num text-[12px] text-[var(--muted-foreground)] mb-4">0{i + 1}</div>
                <h3 className="font-display text-[18px] lg:text-[20px] font-medium mb-3">{p.titre}</h3>
                <p className="text-[14.5px] leading-[1.6] text-[var(--muted-foreground)]">{p.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="Valeurs" title="Cinq principes qui structurent le travail" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden">
            {VALUES.map(([k, v], i) => (
              <div key={k} className="bg-[var(--card)] p-6 lg:p-7">
                <div className="font-mono num text-[12px] text-[var(--muted-foreground)] mb-3">0{i + 1}</div>
                <h4 className="font-display text-[18px] font-medium mb-2">{k}</h4>
                <div className="text-[14px] text-[var(--muted-foreground)] leading-[1.5]">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto rounded-[var(--radius)] bg-[var(--muted)] p-8 lg:p-10 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="eyebrow">Certifications</div>
            <h3 className="font-display mt-2 text-[22px] font-medium leading-[1.2]">
              Tout ce qui est requis,<br />et un peu plus.
            </h3>
          </div>
          <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-4 text-[15px]">
            {CERTIFICATIONS.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span
                  className="mt-2 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--primary)" }}
                />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
