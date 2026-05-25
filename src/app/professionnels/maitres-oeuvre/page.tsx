import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, HardHat, CheckCircle, ClipboardList, Users, Clock, FileText } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal, { Reveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Sous-traitant électricien maître d'œuvre Marseille — coordination chantier",
  description:
    "Emma Cabal s'intègre dans vos équipes comme sous-traitante électricité fiable : lecture de plans, coordination corps de métier, respect des plannings, DOE complets. Marseille et alentours.",
  keywords: [
    "sous-traitant électricité maître d'œuvre Marseille",
    "électricienne sous-traitance BTP Marseille",
    "coordination électricité chantier Marseille",
    "DOE électrique Marseille",
    "rénovation lourde électricité Marseille",
  ],
  alternates: {
    canonical: "/professionnels/maitres-oeuvre",
  },
  openGraph: {
    title: "Sous-traitant électricité maître d'œuvre Marseille — Cabalos Électricité",
    description:
      "Emma Cabal, sous-traitante électricité pour maîtres d'œuvre à Marseille. Plans, coordination, plannings, DOE.",
    url: "/professionnels/maitres-oeuvre",
  },
};

const apports = [
  {
    icon: ClipboardList,
    title: "Lecture et respect des plans",
    description: "Emma lit et exécute vos plans d'électricité avec précision. Aucune interprétation hasardeuse — les schémas sont suivis à la lettre.",
  },
  {
    icon: Users,
    title: "Coordination corps de métier",
    description: "Coordination fluide avec les plaquistes, plombiers, maçons et peintres. Emma anticipe les interventions pour ne pas bloquer les autres corps.",
  },
  {
    icon: Clock,
    title: "Respect des plannings",
    description: "Ponctualité sur chantier, interventions dans les fenêtres prévues, pas de retard imposé aux autres corps de métier.",
  },
  {
    icon: CheckCircle,
    title: "Levées de réserves rapides",
    description: "En fin de chantier, les réserves électriques sont levées rapidement pour ne pas retarder la livraison.",
  },
  {
    icon: FileText,
    title: "DOE complets",
    description: "Dossiers de fin de chantier complets : schémas électriques, repérages, photos, attestations — tout ce qu'il faut pour votre DOE.",
  },
];

const typesChantiers = [
  "Rénovation lourde de logements",
  "Construction neuve individuelle",
  "Réhabilitation d'immeubles",
  "Marchés privés",
  "Locaux commerciaux",
  "Programmes immobiliers",
];

const faqItems = [
  {
    question: "Comment fonctionne la sous-traitance électricité avec Emma ?",
    answer: "Emma intervient comme sous-traitante sur vos chantiers, en coordination directe avec vous. Elle lit vos plans, suit les schémas définis, s'intègre dans votre planning et vous rend compte régulièrement de l'avancement. Le contrat de sous-traitance est établi conformément à la loi du 31 décembre 1975.",
  },
  {
    question: "Quels documents Emma fournit-elle en fin de chantier ?",
    answer: "En fin de chantier, Emma remet un dossier complet comprenant : schémas de l'installation réalisée (as-built), photos des tableaux et cheminements de câbles, attestations de conformité, rapports de tests et vérifications. Ces documents sont directement intégrables dans votre DOE.",
  },
];

export default function MaitresOeuvrePage() {
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
            <HardHat className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Maîtres d&apos;œuvre &amp; conducteurs de travaux
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-base-content mb-4">
            Sous-traitant électricité pour maîtres d&apos;œuvre à Marseille
          </h1>

          <p className="text-base-content/55 text-lg max-w-3xl mb-8">
            Emma Cabal s&apos;intègre dans vos équipes chantier comme sous-traitante électricité fiable. Coordination, respect des plannings, qualité d&apos;exécution — elle s&apos;adapte à vos méthodes de travail et à vos exigences pour que l&apos;électricité ne soit jamais le problème sur votre chantier.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn btn-primary">
              Discuter d&apos;un chantier
            </Link>
            <a href="tel:+33632363563" className="btn btn-outline text-neutral-content border-neutral-content/30 hover:border-primary hover:text-primary">
              06 32 36 35 63
            </a>
          </div>
        </div>
      </section>

      {/* Ce qu'Emma apporte */}
      <section className="py-16 bg-base-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-base-content">
              Ce qu&apos;Emma apporte sur vos chantiers
            </h2>
            <p className="text-base-content/60 mt-2">
              Une sous-traitante qui comprend les enjeux de la maîtrise d&apos;œuvre.
            </p>
          </Reveal>

          <ScrollReveal stagger staggerAmount={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apports.map((apport) => {
              const Icon = apport.icon;
              return (
                <div key={apport.title} className="card bg-base-200 shadow-sm">
                  <div className="card-body p-5">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[4px] mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-base-content text-sm mb-1">
                      {apport.title}
                    </h3>
                    <p className="text-base-content/60 text-sm leading-relaxed">
                      {apport.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* Types de chantiers */}
      <section className="py-16 bg-base-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-base-content mb-4">
                Types de chantiers
              </h2>
              <p className="text-base-content/60 text-sm leading-relaxed mb-6">
                Emma intervient sur tous types de chantiers en sous-traitance, des rénovations légères aux programmes immobiliers. Son expérience en chantier lui permet de s&apos;adapter rapidement à tout contexte.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {typesChantiers.map((type) => (
                  <li key={type} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-base-content/70 text-sm">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card bg-primary text-primary-content shadow-md">
              <div className="card-body">
                <h3 className="font-heading font-semibold text-xl mb-3">
                  Une sous-traitante qui parle votre langue
                </h3>
                <p className="text-primary-content/80 text-sm leading-relaxed mb-4">
                  Emma comprend le vocabulaire du chantier, les contraintes de planning et les enjeux de responsabilité. Elle sait quand escalader un problème et comment communiquer clairement avec le conducteur de travaux.
                </p>
                <p className="text-primary-content/80 text-sm leading-relaxed">
                  Pas de surprises, pas d&apos;excuses — juste du travail bien fait, dans les temps.
                </p>
                <div className="card-actions mt-4">
                  <Link href="/contact" className="btn btn-outline btn-sm text-primary-content border-primary-content/40 hover:bg-primary-content hover:text-primary">
                    Prendre contact
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-base-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-medium text-base-content">
              Questions sur la sous-traitance
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
        title="Un chantier à venir ? Parlons-en"
        subtitle="Emma Cabal est disponible pour discuter de vos chantiers à Marseille et dans la métropole. Contact direct, réponse rapide."
        ctaText="Discuter d'un chantier"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}