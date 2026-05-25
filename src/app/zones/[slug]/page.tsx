import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getZoneBySlug, generateZoneStaticParams } from "@/lib/zones";
import { SERVICES } from "@/lib/content";
import PageHeader from "@/components/site/page-header";
import CTABanner from "@/components/site/cta-banner";
import JsonLd from "@/components/seo/json-ld";
import { zonePageSchema, breadcrumbSchema } from "@/lib/schemas";

export async function generateStaticParams() {
  return generateZoneStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const zone = getZoneBySlug(slug);
  if (!zone) return { title: "Zone introuvable" };

  return {
    title: `Électricienne à ${zone.shortName} — Cabalos Électricité`,
    description: `Emma Cabal, électricienne artisane intervient à ${zone.shortName}. Installation, rénovation, mise aux normes NF C 15-100. Devis gratuit.`,
    keywords: [
      `électricienne ${zone.shortName}`,
      `électricien ${zone.shortName}`,
      ...zone.keywords,
      "Cabalos électricité",
      "Emma Cabal",
    ],
    alternates: { canonical: `/zones/${zone.slug}` },
  };
}

export default async function ZonePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const zone = getZoneBySlug(slug);
  if (!zone) notFound();

  const faqItems = [
    {
      q: `Intervenez-vous à ${zone.shortName} ?`,
      a: `Oui, Emma Cabal intervient régulièrement à ${zone.shortName}. Installation neuve, rénovation, mise aux normes NF C 15-100 ou dépannage d'urgence — elle se déplace rapidement sur place.`,
    },
    {
      q: `Quels sont les délais d'intervention à ${zone.shortName} ?`,
      a: `Pour un devis, comptez 48 h maximum. En cas de dépannage urgent à ${zone.shortName}, elle intervient aussi vite que possible selon les disponibilités — appel le matin, intervention l'après-midi quand c'est possible.`,
    },
    {
      q: `Quel budget prévoir pour une intervention à ${zone.shortName} ?`,
      a: `Les tarifs dépendent de la nature des travaux. Emma établit un devis gratuit et détaillé avant toute intervention. Pour le dépannage : à partir de 80 € TTC en journée. Pas de mauvaise surprise : le prix annoncé est le prix facturé.`,
    },
  ];

  return (
    <>
      <JsonLd data={zonePageSchema(zone.shortName, zone.postalCode, zone.slug)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Zones", url: "/zones" },
        { name: zone.shortName, url: `/zones/${zone.slug}` },
      ])} />
      <PageHeader
        eyebrow={`Zone · ${zone.type === "arrondissement" ? "Arrondissement" : "Commune"} ${zone.postalCode}`}
        title={`Électricienne à ${zone.shortName}.`}
        intro={zone.description}
      />

      {/* Quartiers */}
      {zone.neighborhoods && zone.neighborhoods.length > 0 && (
        <section className="px-6 lg:px-10 pb-8">
          <div className="max-w-[1440px] mx-auto flex flex-wrap gap-2">
            {zone.neighborhoods.map((n) => (
              <span
                key={n}
                className="text-[12px] font-mono px-2.5 py-1 border border-[var(--border)] rounded-full text-[var(--muted-foreground)]"
              >
                {n}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Services */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="eyebrow mb-8">Prestations disponibles à {zone.shortName}</div>
          <div className="h-px bg-[var(--border)]" />
          {SERVICES.slice(0, 6).map((s) => (
            <div
              key={s.n}
              className="grid grid-cols-12 gap-4 lg:gap-10 py-6 lg:py-7 border-b border-[var(--border)]"
            >
              <div className="col-span-2 lg:col-span-1">
                <span className="font-mono num text-[14px] text-[var(--muted-foreground)]">{s.n}</span>
              </div>
              <h3 className="col-span-10 lg:col-span-4 font-display text-[18px] lg:text-[20px] font-medium leading-snug">
                {s.t}
              </h3>
              <div className="col-span-12 lg:col-span-5 text-[14.5px] leading-[1.55] text-[var(--muted-foreground)] max-w-[52ch]">
                {s.d}
              </div>
              <div className="col-span-12 lg:col-span-2 lg:text-right">
                <Link href="/contact" className="link text-[13.5px] font-medium inline-flex items-center gap-1.5">
                  Devis
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
          <div className="pt-6">
            <Link href="/prestations" className="link text-[14px] font-medium inline-flex items-center gap-1.5">
              Voir toutes les prestations
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ locale */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="eyebrow mb-8">Questions fréquentes — {zone.shortName}</div>
          <div className="h-px bg-[var(--border)]" />
          {faqItems.map(({ q, a }) => (
            <div key={q} className="grid grid-cols-12 gap-6 lg:gap-10 py-7 border-b border-[var(--border)]">
              <h3 className="col-span-12 lg:col-span-4 font-display text-[16px] lg:text-[18px] font-medium leading-snug">
                {q}
              </h3>
              <div className="col-span-12 lg:col-span-8 text-[15px] leading-[1.55] text-[var(--muted-foreground)] max-w-[64ch]">
                {a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="px-6 lg:px-10 pb-8">
        <div className="max-w-[1440px] mx-auto">
          <Link
            href="/zones"
            className="text-[13.5px] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1.5"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Toutes les zones d'intervention
          </Link>
        </div>
      </section>

      <CTABanner
        title={`Besoin d'un électricien à ${zone.shortName} ?`}
        subtitle={`Emma Cabal intervient à ${zone.shortName} pour tous vos travaux électriques. Devis gratuit sous 48 h.`}
      />
    </>
  );
}
