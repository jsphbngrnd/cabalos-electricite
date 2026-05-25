import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers, CheckCircle, Handshake, Calendar, MessageSquare, Star } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal, { Reveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Électricienne partenaire plaquiste Marseille — coordination, recommandations",
  description:
    "Emma Cabal s'associe aux plaquistes marseillais : passage de câbles avant pose des plaques, coordination des réservations, réactivité pour ne pas bloquer votre chantier. Partenariat de recommandation croisée.",
  keywords: [
    "électricienne partenaire plaquiste Marseille",
    "coordination électricité plaquiste Marseille",
    "passage câbles avant plaques Marseille",
    "réseau artisans Marseille",
    "partenariat recommandation plaquiste électricien",
  ],
  alternates: {
    canonical: "/professionnels/plaquistes",
  },
  openGraph: {
    title: "Électricienne partenaire des plaquistes à Marseille — Cabalos Électricité",
    description:
      "Emma Cabal et les plaquistes marseillais : coordination chantier, passage de câbles, réservations, recommandations croisées.",
    url: "/professionnels/plaquistes",
  },
};

const collaborationPoints = [
  {
    icon: Calendar,
    title: "Intervention avant pose des plaques",
    description: "Emma intervient dans la fenêtre qui vous convient pour passer câbles et gaines avant que vous ne posiez les plaques. Aucun retard imposé de son côté.",
  },
  {
    icon: Layers,
    title: "Réservations coordonnées",
    description: "Boîtiers encastrés, gaines techniques, trémies — Emma coordonne avec vous les réservations dès la phase préparatoire pour éviter les reprises coûteuses.",
  },
  {
    icon: MessageSquare,
    title: "Communication directe et efficace",
    description: "Pas de long email ni de jargon inutile. Emma communique directement, confirme les créneaux et prévient immédiatement en cas de décalage.",
  },
  {
    icon: CheckCircle,
    title: "Réactivité pour ne pas bloquer votre chantier",
    description: "Elle comprend que votre planning dépend aussi d'elle. Pas question de vous laisser attendre — elle s'organise pour être là quand vous en avez besoin.",
  },
];

const partnershipBenefits = [
  {
    icon: Handshake,
    title: "Recommandations croisées",
    description: "Vous recommandez Emma à vos clients qui ont des travaux électriques. Emma vous recommande à ses clients qui ont besoin d'un plaquiste. Un réseau local gagnant-gagnant.",
  },
  {
    icon: Star,
    title: "Tarifs partenaires",
    description: "Pour les chantiers récurrents, des conditions tarifaires avantageuses récompensent la fidélité et la collaboration régulière.",
  },
  {
    icon: Calendar,
    title: "Disponibilité adaptée",
    description: "Emma prend en compte vos plannings de chantier pour être disponible au bon moment — pas juste quand ça l'arrange.",
  },
];

const faqItems = [
  {
    question: "Comment fonctionne le partenariat de recommandation ?",
    answer: "C'est simple : quand un de vos clients vous demande s'il connaît un bon électricien, vous pensez à Emma. Et quand Emma intervient chez un client qui mentionne des travaux de cloisonnement ou d'isolation, elle pense à vous. Pas de commission cachée, juste un échange de confiance entre artisans locaux.",
  },
  {
    question: "Comment coordonner les interventions sur un chantier partagé ?",
    answer: "Emma est habituée à travailler en coordination avec des plaquistes. Elle intervient typiquement pour le passage de câbles et la pose des boîtiers après les gros œuvres et avant la pose des plaques, puis revient pour les finitions (pose des appareillages, tableau) après votre intervention. Un simple appel ou SMS suffit pour caler les créneaux.",
  },
];

export default function PlaquistesPage() {
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
            <Layers className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Plaquistes &amp; second œuvre
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-base-content mb-4">
            Électricienne partenaire des plaquistes à Marseille
          </h1>

          <p className="text-base-content/55 text-lg max-w-3xl mb-8">
            Plaquiste et électricien·ne, on se connaît bien. On travaille sur les mêmes chantiers, souvent dos à dos. Emma Cabal connaît vos contraintes : passage de câbles avant pose des plaques, coordination des réservations, interventions rapides pour ne pas bloquer votre planning. Construisons quelque chose ensemble.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn btn-primary">
              Devenir partenaire
            </Link>
            <a href="tel:+33632363563" className="btn btn-outline text-neutral-content border-neutral-content/30 hover:border-primary hover:text-primary">
              06 32 36 35 63
            </a>
          </div>
        </div>
      </section>

      {/* Collaboration fluide */}
      <section className="py-16 bg-base-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-base-content">
              Une collaboration fluide sur le chantier
            </h2>
            <p className="text-base-content/60 mt-2">
              Emma s&apos;adapte à votre rythme, pas l&apos;inverse.
            </p>
          </Reveal>

          <ScrollReveal stagger staggerAmount={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {collaborationPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="card bg-base-200 shadow-sm">
                  <div className="card-body p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-[4px]">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-base-content text-sm">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-base-content/60 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* Partenariat */}
      <section className="py-16 bg-base-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-base-content">
              Construisons un réseau
            </h2>
            <p className="text-base-content/60 mt-2 max-w-2xl mx-auto">
              Ensemble, on peut proposer à nos clients une offre complète rénovation — électricité + cloisonnement — en un seul réseau de confiance. Moins de tracas pour eux, plus de chantiers pour nous.
            </p>
          </div>

          <ScrollReveal stagger staggerAmount={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {partnershipBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="card bg-base-100 shadow-sm text-center">
                  <div className="card-body items-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-[4px] mb-3">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-base-content mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-base-content/60 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>

          <div className="card bg-primary text-primary-content shadow-md">
            <div className="card-body text-center">
              <h3 className="font-heading font-semibold text-2xl mb-3">
                Un réseau local, une offre complète
              </h3>
              <p className="text-primary-content/80 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
                Imaginez pouvoir dire à votre client : &laquo; Pour l&apos;électricité, j&apos;ai une super artisane à vous recommander — et elle peut aussi vous recommander quelqu&apos;un pour la plomberie. &raquo; C&apos;est exactement ce que propose ce partenariat. Un réseau artisanal local, de qualité, qui se soutient mutuellement.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="btn btn-outline text-primary-content border-primary-content/40 hover:bg-primary-content hover:text-primary gap-2"
                >
                  Devenir partenaire
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
              Questions sur le partenariat
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
        title="Construisons un partenariat à Marseille"
        subtitle="Emma Cabal cherche des plaquistes sérieux avec qui collaborer sur le long terme. Échange direct, sans formalités inutiles."
        ctaText="Devenir partenaire"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}