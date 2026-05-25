import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import SectionHead from "@/components/site/section-head";
import CTABanner from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Électricienne pour maîtres d'œuvre – Marseille",
  description:
    "Emma Cabal en sous-traitance pour maîtres d'œuvre à Marseille : respect des délais, comptes-rendus de chantier, coordination avec les autres corps de métier.",
  alternates: { canonical: "/professionnels/maitres-oeuvre" },
  openGraph: {
    title: "Électricienne pour maîtres d'œuvre – Cabalos Électricité",
    description:
      "Sous-traitance électrique fiable pour maîtres d'œuvre à Marseille. Délais, reporting, coordination garantis.",
    url: "/professionnels/maitres-oeuvre",
    images: [{ url: "/OpenGraph.png", width: 1200, height: 630, alt: "Cabalos Électricité" }],
  },
};

const ENGAGEMENTS = [
  ["Respect strict des plannings", "Emma intègre votre planning dès la signature. Elle signale immédiatement tout risque de retard et s'adapte aux décalages des autres corps sans générer de surcoût injustifié."],
  ["Comptes-rendus d'avancement", "À chaque étape significative : photo, note d'avancement, alerte sur les réserves. Vous avez toujours une vue précise de l'état électrique du chantier."],
  ["Coordination inter-corps", "Emma coordonne naturellement avec plaquistes, plombiers et peintres pour les passages de gaines, les réservations et les phases d'intervention."],
  ["Devis clairs et traçables", "Chaque poste est détaillé. Les avenants sont soumis avant exécution, jamais après. Pas de surprise en facturation."],
  ["Certification et assurances", "Habilitation électrique à jour, RCPro en vigueur, attestation Consuel disponible. Tous les documents de chantier fournis en fin d'opération."],
  ["Réactivité sur site", "Disponible pour les réunions de chantier hebdomadaires et les urgences techniques. Un interlocuteur unique, joignable, qui décide."],
];

const FAQ = [
  ["Peut-elle gérer plusieurs chantiers simultanément ?", "Emma organise son planning pour assurer la qualité sur chaque chantier. Elle est transparente sur ses disponibilités dès la phase de consultation — si elle ne peut pas s'engager dans les délais requis, elle le dit avant, pas pendant."],
  ["Quels documents fournit-elle en fin de chantier ?", "DOE électrique (plans, schémas, notices), photos des tableaux et passages de gaines, attestation de conformité, attestation d'assurance. Un dossier complet pour votre archivage et vos clients."],
];

export default function MaitresOeuvrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Professionnels · Maîtres d'œuvre"
        title="Électricienne en sous-traitance pour vos chantiers à Marseille."
        intro="Respect des plannings, comptes-rendus d'avancement, coordination inter-corps. Un lot électrique géré de bout en bout."
      />

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="Engagements" title="Six engagements concrets sur chantier" />
          <div className="h-px bg-[var(--border)]" />
          {ENGAGEMENTS.map(([k, v], i) => (
            <div key={k} className="grid grid-cols-12 gap-6 lg:gap-10 py-7 lg:py-9 items-start border-b border-[var(--border)]">
              <div className="col-span-1 font-mono num text-[14px] text-[var(--muted-foreground)] pt-1">0{i + 1}</div>
              <h3 className="col-span-11 lg:col-span-4 font-display text-[20px] lg:text-[22px] font-medium leading-[1.15]">{k}</h3>
              <p className="col-start-2 col-span-11 lg:col-start-auto lg:col-span-7 text-[15.5px] leading-[1.55] text-[var(--muted-foreground)]">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="FAQ" title="Questions fréquentes" />
          <div className="h-px bg-[var(--border)]" />
          {FAQ.map(([q, a]) => (
            <div key={q} className="grid grid-cols-12 gap-6 lg:gap-10 py-7 lg:py-9 border-b border-[var(--border)]">
              <h3 className="col-span-12 lg:col-span-5 font-display text-[17px] lg:text-[19px] font-medium leading-[1.25]">{q}</h3>
              <p className="col-span-12 lg:col-span-7 text-[15px] leading-[1.6] text-[var(--muted-foreground)]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <Link href="/professionnels" className="text-[13px] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
            ← Tous les profils professionnels
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
