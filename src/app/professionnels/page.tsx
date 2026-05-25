import type { Metadata } from "next";
import Link from "next/link";
import { PROS, PROS_DIFF } from "@/lib/content";
import JsonLd from "@/components/seo/json-ld";
import { organizationSchema, breadcrumbSchema } from "@/lib/schemas";
import PageHeader from "@/components/site/page-header";
import SectionHead from "@/components/site/section-head";
import CTABanner from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Prestations pour les professionnels",
  description:
    "Électricienne en sous-traitance pour architectes, maîtres d'œuvre, syndics et artisans à Marseille. Réactivité, certification, communication, qualité d'exécution.",
  alternates: { canonical: "/professionnels" },
};

export default function ProfessionnelsPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Professionnels", url: "/professionnels" }])} />
      <PageHeader
        eyebrow="Page · Professionnels"
        title="Une électricienne en sous-traitance pour vos chantiers et vos copropriétés."
        intro="Pour les architectes, maîtres d'œuvre, syndics et autres artisans qui cherchent un binôme fiable côté électricité."
      />

      {/* Profils */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="Profils" title="Cinq profils accompagnés au quotidien" />
          <div className="h-px bg-[var(--border)]" />
          {PROS.map(([k, v], i) => (
            <div
              key={k}
              className="row grid grid-cols-12 gap-6 lg:gap-10 py-7 lg:py-9 items-start border-b border-[var(--border)]"
            >
              <div className="col-span-2 lg:col-span-1 font-mono num text-[14px] text-[var(--muted-foreground)] pt-1">
                0{i + 1}
              </div>
              <h3 className="col-span-10 lg:col-span-4 font-display text-[20px] lg:text-[24px] font-medium leading-[1.15]">
                {k}
              </h3>
              <div className="col-span-12 lg:col-span-5 text-[15.5px] leading-[1.55] text-[var(--muted-foreground)] max-w-[52ch]">
                {v}
              </div>
              <div className="col-span-12 lg:col-span-2 lg:text-right text-[13.5px]">
                <Link href="/contact" className="link font-medium inline-flex items-center gap-1.5">
                  Contacter
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Différenciation */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead
            n="Différenciation"
            title="Ce qui fait la différence sur un chantier"
            intro="Quatre engagements concrets, vérifiables, qui structurent chaque collaboration."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden">
            {PROS_DIFF.map(([k, v], i) => (
              <div key={k} className="bg-[var(--card)] p-6 lg:p-8 flex flex-col">
                <div className="font-mono num text-[12px] text-[var(--muted-foreground)] mb-4">0{i + 1}</div>
                <h4 className="font-display text-[20px] font-medium mb-3">{k}</h4>
                <div className="text-[14px] text-[var(--muted-foreground)] leading-[1.55]">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
