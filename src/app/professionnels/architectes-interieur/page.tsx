import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import SectionHead from "@/components/site/section-head";
import CTABanner from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Électricienne pour architectes d'intérieur – Marseille",
  description:
    "Emma Cabal collabore avec les architectes d'intérieur à Marseille : éclairage d'ambiance, LED encastrés, variateurs design, circuits dédiés, prises invisibles.",
  alternates: { canonical: "/professionnels/architectes-interieur" },
  openGraph: {
    title: "Électricienne pour architectes d'intérieur – Cabalos Électricité",
    description:
      "LED, ambiance, éclairage indirect, variateurs design — Emma comprend l'enjeu lumineux de vos projets d'intérieur.",
    url: "/professionnels/architectes-interieur",
    images: [{ url: "/OpenGraph.png", width: 1200, height: 630, alt: "Cabalos Électricité" }],
  },
};

const SPECIALITES = [
  ["Éclairage d'ambiance et fonctionnel", "Séparation des circuits d'éclairage fonctionnel et d'ambiance pour un contrôle précis de l'atmosphère selon les pièces."],
  ["LED encastrés, bandeaux, éclairages indirects", "Spots LED encastrés de précision, bandeaux sous-meubles ou en faux-plafond, éclairages indirects pour niches ou corniches lumineuses."],
  ["Circuits dédiés personnalisés", "Chaque espace a ses propres circuits indépendants : la cuisine ne partage pas avec le salon, la salle de bain est sécurisée séparément."],
  ["Variateurs et commandes design", "Intégration de variateurs flush, commandes centralisées, interrupteurs design compatibles avec vos choix de marques."],
  ["Prises et interrupteurs discrets", "Boîtiers encastrés à fleur de mur, prises de sol, prises escamotables dans les îlots — l'électricité se fait oublier."],
  ["Coordination avec les autres corps de métier", "Emma s'intègre dans votre planning chantier, coordonne avec les plaquistes et peintres pour intervenir au bon moment."],
];

const FAQ = [
  ["Peut-elle intégrer des marques spécifiques (Legrand, Schneider, Bticino…) ?", "Oui, Emma travaille avec les marques que vous spécifiez. Si vous avez sélectionné des interrupteurs ou variateurs particuliers, elle les intègre dans l'installation. Elle peut aussi vous conseiller sur la compatibilité technique selon les systèmes retenus."],
  ["Comment anticiper l'électricité dans un projet de rénovation intérieure ?", "Le mieux est d'impliquer Emma dès la phase esquisse ou avant travaux. Elle peut établir un avant-projet électrique qui intègre vos contraintes d'éclairage et d'usage, évitant des saignées supplémentaires une fois les enduits posés."],
];

export default function ArchitectesInterieurPage() {
  return (
    <>
      <PageHeader
        eyebrow="Professionnels · Architectes d'intérieur"
        title="Électricienne pour les projets d'architecture intérieure à Marseille."
        intro="Éclairage d'ambiance, LED encastrés, variateurs design, prises invisibles. L'électricité intégrée à votre vision décorative."
      />

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="Spécialités" title="Ce qu'Emma propose aux architectes d'intérieur" />
          <div className="h-px bg-[var(--border)]" />
          {SPECIALITES.map(([k, v], i) => (
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
