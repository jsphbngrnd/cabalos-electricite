import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Palette, CheckCircle, Lightbulb, Sliders, Sparkles, Eye } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal, { Reveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Électricienne architecte intérieur Marseille — éclairage LED, ambiance, spots",
  description:
    "Emma Cabal collabore avec les architectes d'intérieur à Marseille : éclairage d'ambiance, LED encastrés, variateurs design, circuits dédiés, prises invisibles. L'électricité au service de votre vision déco.",
  keywords: [
    "électricienne architecte intérieur Marseille",
    "éclairage LED ambiance Marseille",
    "spots encastrés architecte intérieur",
    "variateurs design Marseille",
    "prises invisibles Marseille",
  ],
  alternates: {
    canonical: "/professionnels/architectes-interieur",
  },
  openGraph: {
    title: "Électricienne pour architectes d'intérieur Marseille — Cabalos Électricité",
    description:
      "LED, ambiance, éclairage indirect, variateurs design — Emma comprend l'enjeu lumineux de vos projets d'intérieur.",
    url: "/professionnels/architectes-interieur",
  },
};

const specialites = [
  {
    icon: Lightbulb,
    title: "Éclairage d'ambiance et fonctionnel",
    description: "Séparation des circuits d'éclairage fonctionnel (cuisine, salle de bain) et d'ambiance (salon, chambre) pour un contrôle précis de l'atmosphère.",
  },
  {
    icon: Sparkles,
    title: "LED encastrés, bandeaux, éclairages indirects",
    description: "Pose de spots LED encastrés de précision, bandeaux LED sous-meubles ou en faux-plafond, éclairages indirects pour des niches ou des corniches lumineuses.",
  },
  {
    icon: Eye,
    title: "Circuits dédiés personnalisés",
    description: "Éclairage de tableau, bibliothèque éclairée, îlot de cuisine, vitrine — chaque circuit est pensé pour servir votre concept décoratif.",
  },
  {
    icon: Sliders,
    title: "Variateurs et commandes murales design",
    description: "Variateurs encastrés aux finitions soignées, commandes murales compatibles avec les appareillages Legrand, Schneider, Bticino — pour harmoniser technique et esthétique.",
  },
  {
    icon: Palette,
    title: "Prises et interrupteurs discrets",
    description: "Prises encastrées dans le plan de travail, interrupteurs affleurants, solutions basses à lame de parquet — l'appareillage se fond dans le décor.",
  },
  {
    icon: CheckCircle,
    title: "Fil conducteur esthétique respecté",
    description: "Emma prend le temps de comprendre votre direction artistique avant de commencer. Chaque choix technique est validé avec vous pour rester cohérent avec votre brief.",
  },
];

const avantages = [
  "Compréhension du brief créatif dès la première réunion",
  "Communication fluide tout au long du chantier",
  "Travail propre et précis — aucune finition abîmée",
  "Flexibilité pour s'adapter aux modifications en cours de chantier",
  "Suggestions techniques compatibles avec votre vision",
];

const faqItems = [
  {
    question: "Comment intégrer des LED sans créer de points chauds ?",
    answer: "Le choix des spots est crucial : temperature de couleur adaptée (2700K-3000K pour une ambiance chaleureuse), IRC (indice de rendu des couleurs) élevé pour des matières et couleurs fidèles. Emma conseille sur les marques et références techniques, gère les espacements pour éviter les zones surchauffées ou sous-éclairées, et intègre des pilotes LED de qualité pour une durée de vie maximale.",
  },
  {
    question: "Quelles options pour des prises invisibles ?",
    answer: "Plusieurs solutions existent selon le contexte : prises affleurantes encastrées dans le meuble ou le plan de travail, prises à clapet dans les moulures, prises rétractables dans les îlots de cuisine, ou encore gaines vides dans les murs pour passer des câbles ultérieurement. Emma évalue avec vous la solution la plus adaptée à chaque pièce.",
  },
];

export default function ArchitectesInterieurPage() {
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
            <Palette className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Architectes d&apos;intérieur &amp; décorateurs
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-base-content mb-4">
            Électricienne pour architectes d&apos;intérieur à Marseille
          </h1>

          <p className="text-base-content/55 text-lg max-w-3xl mb-8">
            L&apos;électricité, c&apos;est 50% de l&apos;ambiance d&apos;un intérieur. Emma Cabal comprend les enjeux lumineux et esthétiques de votre métier. Une collaboration pensée pour sublimer vos projets — parce qu&apos;un éclairage bien conçu peut transformer une pièce ordinaire en un espace remarquable.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn btn-primary">
              Parler de votre projet déco
            </Link>
            <a href="tel:+33632363563" className="btn btn-outline text-neutral-content border-neutral-content/30 hover:border-primary hover:text-primary">
              06 32 36 35 63
            </a>
          </div>
        </div>
      </section>

      {/* Spécialités */}
      <section className="py-16 bg-base-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-base-content">
              Spécialités pour les archi d&apos;intérieur
            </h2>
            <p className="text-base-content/60 mt-2">
              Des compétences techniques au service de votre vision créative.
            </p>
          </Reveal>

          <ScrollReveal stagger staggerAmount={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialites.map((specialite) => {
              const Icon = specialite.icon;
              return (
                <div key={specialite.title} className="card bg-base-200 shadow-sm">
                  <div className="card-body p-5">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[4px] mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-base-content text-sm mb-1">
                      {specialite.title}
                    </h3>
                    <p className="text-base-content/60 text-sm leading-relaxed">
                      {specialite.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* Avantages + galerie mockée */}
      <section className="py-16 bg-base-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-base-content mb-4">
                Une collaboration fluide et précise
              </h2>
              <p className="text-base-content/60 text-sm leading-relaxed mb-6">
                Emma s&apos;intègre dans votre processus créatif comme une partenaire technique — pas comme une contrainte. Elle propose, questionne et s&apos;adapte pour que l&apos;électricité serve votre vision, jamais l&apos;inverse.
              </p>
              <ul className="space-y-3">
                {avantages.map((avantage) => (
                  <li key={avantage} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base-content/70 text-sm">{avantage}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn btn-primary">
                  Démarrer une collaboration
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Galerie mockée */}
            <div>
              <h3 className="font-heading font-semibold text-base-content mb-4">
                Réalisations lumineuses
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Salon avec éclairage indirect", bg: "bg-primary/10" },
                  { label: "Cuisine spots encastrés", bg: "bg-secondary/10" },
                  { label: "Chambre variateur design", bg: "bg-accent/10" },
                  { label: "Entrée éclairage balisage", bg: "bg-primary/5" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`${item.bg} aspect-square flex items-center justify-center p-4 border border-base-content/10`}
                  >
                    <p className="text-base-content/40 text-xs text-center font-medium">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-base-content/40 text-xs mt-3 text-center">
                Photos de réalisations à venir
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-base-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-medium text-base-content">
              Questions techniques éclairage &amp; déco
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
        title="Votre prochain projet d'intérieur à Marseille ?"
        subtitle="Emma Cabal, électricienne qui sublimera votre concept lumineux. Devis gratuit, échange direct sur votre brief."
        ctaText="Parler de votre projet déco"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}