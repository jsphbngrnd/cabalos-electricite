import type { Metadata } from "next";
import Link from "next/link";
import { zones } from "@/lib/zones";
import PageHeader from "@/components/site/page-header";
import CTABanner from "@/components/site/cta-banner";
import JsonLd from "@/components/seo/json-ld";
import { organizationSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Zones d'intervention — Cabalos Électricité",
  description:
    "Cabalos Électricité intervient dans tous les arrondissements de Marseille et les communes alentours : Aubagne, Aix-en-Provence, Martigues, Allauch, La Ciotat, Gardanne. Devis gratuit.",
  alternates: { canonical: "/zones" },
};

const arrondissements = zones.filter((z) => z.type === "arrondissement");
const villes = zones.filter((z) => z.type === "ville");

function ZoneCard({ zone }: { zone: (typeof zones)[number] }) {
  return (
    <Link
      href={`/zones/${zone.slug}`}
      className="group border border-[var(--border)] rounded-[var(--radius)] p-6 hover:bg-[var(--muted)] transition-colors block"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="font-mono num text-[12px] text-[var(--muted-foreground)] border border-[var(--border)] px-2 py-0.5 rounded">
          {zone.postalCode}
        </span>
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          className="flex-shrink-0 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors"
        >
          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="font-display text-[17px] font-medium mb-2 group-hover:text-[var(--primary)] transition-colors">
        {zone.name}
      </h3>
      <p className="text-[13px] text-[var(--muted-foreground)] leading-[1.5] line-clamp-2">
        {zone.description}
      </p>
    </Link>
  );
}

export default function ZonesPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <PageHeader
        eyebrow="Zones · Marseille & alentours"
        title="Intervention dans 16 arrondissements et 30 km autour."
        intro="Emma Cabal se déplace à Marseille et dans les communes de la métropole Aix-Marseille-Provence. Jusqu'à Toulon au Sud."
      />

      {/* Arrondissements */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="h-px bg-[var(--border)] mb-8" />
          <div className="eyebrow mb-6">Arrondissements de Marseille</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {arrondissements.map((zone) => (
              <ZoneCard key={zone.slug} zone={zone} />
            ))}
          </div>
        </div>
      </section>

      {/* Communes */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="eyebrow mb-6">Communes alentours</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {villes.map((zone) => (
              <ZoneCard key={zone.slug} zone={zone} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
