import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import SectionHead from "@/components/site/section-head";
import CTABanner from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Électricienne partenaire pour plaquistes – Marseille",
  description:
    "Emma Cabal travaille en binôme avec les plaquistes à Marseille : coordination des gaines avant fermeture des cloisons, réservations, planning synchronisé.",
  alternates: { canonical: "/professionnels/plaquistes" },
  openGraph: {
    title: "Électricienne partenaire pour plaquistes – Cabalos Électricité",
    description:
      "Gaines avant fermeture, réservations boîtes, coordination planning. Un binôme qui évite les reprises.",
    url: "/professionnels/plaquistes",
    images: [{ url: "/OpenGraph.png", width: 1200, height: 630, alt: "Cabalos Électricité" }],
  },
};

const COORDINATIONS = [
  ["Passage de gaines avant fermeture", "Emma intervient avant la pose des plaques pour passer l'ensemble des gaines, boîtiers et câbles. Zéro reprise après fermeture des cloisons."],
  ["Plan de réservations partagé", "Un plan simplifié des réservations boîtes et trémies est transmis avant votre intervention. Chaque emplacement est marqué sur site."],
  ["Synchronisation des plannings", "Emma s'adapte à votre avancement. Si vous prenez du retard, elle décale ; si vous avancez, elle est joignable pour s'adapter."],
  ["Respect des cloisons posées", "Après fermeture, Emma intervient avec une perceuse plongeuse et une aspiration intégrée. Pas de poussière, pas d'impact sur votre travail fini."],
  ["Communication directe", "Un seul numéro, un seul interlocuteur. Emma répond au téléphone en journée et confirme les rendez-vous par SMS la veille."],
];

const FAQ = [
  ["Comment coordonner le passage de gaines avec la pose des rails ?", "Le plus simple est de faire un point téléphonique avant le démarrage des travaux. Emma peut venir sur site avant votre intervention pour marquer les emplacements de boîtes et valider le tracé des gaines avec vous. Cela prend 30 minutes et évite toutes les incompréhensions."],
  ["Que faire si une gaine a été oubliée après fermeture ?", "Emma peut intervenir avec des techniques d'encastrement limitées (endoscope, aspirateur intégré) pour minimiser les dégâts sur vos cloisons. Elle évalue d'abord si une solution alternative (moulure, repiquage partiel) est préférable à une reprise complète."],
];

export default function PlaqistesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Professionnels · Plaquistes"
        title="Électricienne coordonnée avec les plaquistes à Marseille."
        intro="Passage de gaines avant fermeture, plan de réservations partagé, planning synchronisé. Un binôme qui évite les reprises et les tensions sur chantier."
      />

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="Coordination" title="Comment Emma travaille avec les plaquistes" />
          <div className="h-px bg-[var(--border)]" />
          {COORDINATIONS.map(([k, v], i) => (
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
