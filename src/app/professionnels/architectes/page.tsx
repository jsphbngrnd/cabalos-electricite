import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import SectionHead from "@/components/site/section-head";
import CTABanner from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Électricienne pour architectes – Marseille",
  description:
    "Emma Cabal travaille avec les architectes à Marseille : exécution des schémas électriques, éclairage architectural, intégration discrète, domotique, respect des finitions.",
  alternates: { canonical: "/professionnels/architectes" },
  openGraph: {
    title: "Électricienne de confiance pour architectes – Cabalos Électricité",
    description:
      "Emma Cabal, électricienne qui comprend les exigences esthétiques et techniques des architectes. Éclairage architectural, intégration, finitions respectées.",
    url: "/professionnels/architectes",
    images: [{ url: "/OpenGraph.png", width: 1200, height: 630, alt: "Cabalos Électricité" }],
  },
};

const PROPOSITIONS = [
  ["Lecture et exécution des schémas", "Emma lit et exécute vos schémas avec rigueur. L'installation réalisée correspond exactement aux plans fournis."],
  ["Éclairage architectural", "Spots encastrés, éclairages de mise en valeur, bandeaux LED, éclairage indirect — l'électricité au service de votre intention."],
  ["Intégration invisible", "Gaines encastrées, tableaux discrets, passages de câbles soignés — l'électricité se fait oublier visuellement."],
  ["Domotique légère", "Commandes centralisées, variateurs, scènes d'ambiance — des solutions accessibles qui enrichissent vos projets."],
  ["Respect des finitions", "Chaque intervention est réalisée avec le souci de ne pas abîmer ce qui existe. Les finitions des autres corps sont respectées."],
  ["Documentation photographique", "Photos avant encastrement, photos des tableaux, DOE complet — tout pour votre dossier et votre portefeuille."],
];

const FAQ = [
  ["Comment Emma collabore-t-elle avec un architecte ?", "La collaboration commence par un échange sur le projet et les plans. Emma prend connaissance de vos intentions, pose des questions si nécessaire, puis propose une approche d'exécution. Elle communique régulièrement sur l'avancement et alerte immédiatement en cas de contrainte imprévue — sans jamais prendre de décision unilatérale."],
  ["Peut-elle intervenir sur des bâtiments classés ?", "Oui, Emma a l'expérience des contraintes des bâtiments à haute valeur patrimoniale. Elle s'adapte aux exigences des ABF, utilise des techniques d'encastrement respectueuses des matériaux anciens et peut coordonner avec les autres artisans."],
];

export default function ArchitectesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Professionnels · Architectes DPLG & DEA"
        title="Électricienne de confiance pour architectes à Marseille."
        intro="Exécution des schémas, éclairage architectural, intégration discrète, respect des finitions. Un binôme qui comprend votre intention de projet."
      />

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="Prestations" title="Ce qu'Emma propose aux architectes" />
          <div className="h-px bg-[var(--border)]" />
          {PROPOSITIONS.map(([k, v], i) => (
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
