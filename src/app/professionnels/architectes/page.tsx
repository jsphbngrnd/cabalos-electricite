import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, PenTool, CheckCircle, Lightbulb, Eye, Cpu, Camera } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal, { Reveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Électricienne pour architectes Marseille — éclairage architectural, coordination",
  description:
    "Emma Cabal travaille avec les architectes à Marseille : exécution des schémas électriques, éclairage architectural, intégration discrète, domotique, respect des finitions. Collaboration de confiance.",
  keywords: [
    "électricienne architecte Marseille",
    "éclairage architectural Marseille",
    "électricienne exécution schémas architecte",
    "domotique architecte Marseille",
    "électricienne bâtiment classé Marseille",
  ],
  alternates: {
    canonical: "/professionnels/architectes",
  },
  openGraph: {
    title: "Électricienne de confiance pour architectes à Marseille — Cabalos Électricité",
    description:
      "Emma Cabal, électricienne qui comprend les exigences esthétiques et techniques des architectes. Éclairage architectural, intégration, finitions respectées.",
    url: "/professionnels/architectes",
  },
};

const propositions = [
  {
    icon: PenTool,
    title: "Lecture et exécution des schémas",
    description: "Emma lit et exécute vos schémas électriques avec rigueur. L'installation réalisée correspond exactement aux plans fournis.",
  },
  {
    icon: Lightbulb,
    title: "Éclairage architectural",
    description: "Spots encastrés, éclairages de mise en valeur, bandeaux LED, éclairage indirect — l'électricité au service de votre intention architecturale.",
  },
  {
    icon: Eye,
    title: "Intégration invisible",
    description: "Gaines encastrées, tableaux discrets, passages de câbles soignés — l'électricité se fait oublier visuellement.",
  },
  {
    icon: Cpu,
    title: "Domotique légère",
    description: "Commandes centralisées, variateurs, scènes d'ambiance — des solutions accessibles qui enrichissent vos projets.",
  },
  {
    icon: CheckCircle,
    title: "Respect des finitions",
    description: "Chaque intervention est réalisée avec le souci de ne pas abîmer ce qui existe. Les finitions des autres corps sont respectées.",
  },
  {
    icon: Camera,
    title: "Documentation photographique",
    description: "Photos des travaux avant encastrement, photos des tableaux, DOE complet — tout pour votre dossier et votre portefeuille.",
  },
];

const faqItems = [
  {
    question: "Comment Emma collabore-t-elle avec un architecte ?",
    answer: "La collaboration commence par un échange sur le projet et les plans. Emma prend connaissance de vos intentions esthétiques et techniques, pose des questions si nécessaire, puis propose une approche d'exécution. Elle communique régulièrement sur l'avancement et vous alerte immédiatement en cas de contrainte imprévue — sans jamais prendre de décision unilatérale.",
  },
  {
    question: "Peut-elle intervenir sur des bâtiments classés ?",
    answer: "Oui, Emma a l'expérience des contraintes des bâtiments à haute valeur patrimoniale. Elle s'adapte aux exigences des ABF (Architectes des Bâtiments de France), utilise des techniques d'encastrement respectueuses des matériaux anciens et peut coordonner avec les autres artisans intervenant sur le bâtiment.",
  },
];

export default function ArchitectesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-base-100 border-b border-base-300 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/professionnels"
            className="inline-flex items-center gap-2 text-base-content/40 hover:text-primary text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Espace professionnels
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <PenTool className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Architectes DPLG &amp; DEA
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-base-content mb-4">
            Électricienne de confiance pour architectes à Marseille
          </h1>

          <p className="text-base-content/55 text-lg max-w-3xl mb-8">
            Travailler avec un·e électricien·ne qui comprend vos exigences esthétiques et techniques — c&apos;est rare et précieux. Emma Cabal s&apos;adapte aux contraintes architecturales, respecte les finitions et communique avec rigueur. Elle exécute vos schémas comme vous les avez pensés.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn btn-primary">
              Échanger sur votre projet
            </Link>
            <a href="tel:+33632363563" className="btn btn-outline text-neutral-content border-neutral-content/30 hover:border-primary hover:text-primary">
              06 32 36 35 63
            </a>
          </div>
        </div>
      </section>

      {/* Ce qu'Emma propose */}
      <section className="py-16 bg-base-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-base-content">
              Ce qu&apos;Emma propose aux architectes
            </h2>
            <p className="text-base-content/60 mt-2">
              Une exécution à la hauteur de votre conception.
            </p>
          </Reveal>

          <ScrollReveal stagger staggerAmount={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {propositions.map((prop) => {
              const Icon = prop.icon;
              return (
                <div key={prop.title} className="card bg-base-200 shadow-sm">
                  <div className="card-body p-5">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[4px] mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-base-content text-sm mb-1">
                      {prop.title}
                    </h3>
                    <p className="text-base-content/60 text-sm leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* Pour vos clients */}
      <section className="py-16 bg-base-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="card bg-primary/5 border border-primary/20 shadow-sm">
              <div className="card-body">
                <h3 className="font-heading font-semibold text-base-content text-xl mb-3">
                  Pour vos clients aussi
                </h3>
                <p className="text-base-content/70 text-sm leading-relaxed mb-4">
                  Emma est à l&apos;aise avec les clients finaux des architectes. Elle sait s&apos;adresser à des propriétaires exigeants avec pédagogie et professionnalisme — sans jamais déroger à votre direction artistique.
                </p>
                <ul className="space-y-2">
                  {[
                    "Devis clairs et lisibles pour vos clients",
                    "Respect strict des budgets définis",
                    "Ponctualité sur les rendez-vous chantier",
                    "Communication directe avec le maître d'ouvrage si autorisé",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-base-content/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-base-content mb-4">
                Une collaboration pensée pour l&apos;exigence
              </h2>
              <p className="text-base-content/60 text-sm leading-relaxed mb-4">
                Emma ne se contente pas d&apos;exécuter — elle comprend pourquoi. La différence entre un électricien qui passe des câbles et un·e professionnel·le qui comprend l&apos;intention du projet, c&apos;est visible dans le résultat final.
              </p>
              <p className="text-base-content/60 text-sm leading-relaxed mb-6">
                Éclairage architectural, domotique, intégration discrète — Emma peut proposer des solutions techniques qui s&apos;alignent avec votre concept, pas seulement l&apos;exécuter mécaniquement.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Échanger sur votre projet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-base-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-medium text-base-content">
              Questions fréquentes
            </h2>
          </div>
          <ScrollReveal stagger staggerAmount={0.1} className="divide-y divide-base-300">
            {faqItems.map((item) => (
              <div key={item.question} className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
                  <h3 className="font-heading font-medium text-base-content">
                    {item.question}
                  </h3>
                  <p className="lg:col-span-2 text-base-content/60 text-sm leading-relaxed">
                    {item.answer}
                  </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        title="Un projet architectural à Marseille ?"
        subtitle="Emma Cabal, électricienne à l'écoute de vos exigences esthétiques et techniques. Devis gratuit, échange direct."
        ctaText="Échanger sur votre projet"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}