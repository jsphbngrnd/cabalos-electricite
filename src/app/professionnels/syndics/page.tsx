import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, CheckCircle, ShieldCheck, Lightbulb, Wrench, Zap, AlertTriangle } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal, { Reveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Électricienne pour syndics copropriété Marseille — parties communes",
  description:
    "Cabalos Électricité intervient pour les syndics de copropriété à Marseille : maintenance parties communes, BAES, mise aux normes. Facturation pro, devis rapide.",
  keywords: [
    "électricienne syndic copropriété Marseille",
    "maintenance électrique parties communes",
    "mise aux normes copropriété Marseille",
    "BAES copropriété Marseille",
  ],
  alternates: {
    canonical: "/professionnels/syndics",
  },
  openGraph: {
    title: "Électricienne pour syndics copropriété Marseille — Cabalos Électricité",
    description:
      "Maintenance, BAES, mise aux normes des parties communes. Emma Cabal, partenaire des syndics à Marseille.",
    url: "/professionnels/syndics",
  },
};

const services = [
  {
    icon: Wrench,
    title: "Maintenance et dépannage parties communes",
    description: "Intervention rapide sur panne d'éclairage, tableaux généraux défaillants ou problèmes électriques dans les halls, parkings et espaces extérieurs.",
  },
  {
    icon: ShieldCheck,
    title: "Mise aux normes éclairage parties communes",
    description: "Vérification et mise en conformité des installations électriques des parties communes selon la réglementation en vigueur.",
  },
  {
    icon: Zap,
    title: "Diagnostic électrique parties communes",
    description: "Diagnostic obligatoire pour toute vente de copropriété. Rapport complet, clair et opposable pour les démarches notariales.",
  },
  {
    icon: AlertTriangle,
    title: "Remplacement tableaux électriques généraux",
    description: "Mise à niveau des tableaux généraux de l'immeuble, intégration des protections modernes, étiquetage et documentation complète.",
  },
  {
    icon: Lightbulb,
    title: "Éclairage de sécurité (BAES)",
    description: "Installation, remplacement et vérification annuelle des blocs autonomes d'éclairage de sécurité, obligatoires dans les parties communes.",
  },
];

const avantages = [
  "Artisane certifiée, travaux conformes aux normes en vigueur",
  "Devis rapide adapté aux délais de convocation d'AG",
  "Facturation professionnelle (TVA, acomptes, situations de travaux)",
  "Disponibilité et réactivité pour les interventions urgentes",
  "Relation durable avec votre copropriété — un interlocuteur unique",
  "Rapports d'intervention détaillés pour vos archives de syndic",
];

const faqItems = [
  {
    question: "Quels documents Emma fournit-elle pour le dossier syndic ?",
    answer: "Emma Cabal remet systématiquement un rapport d'intervention détaillé avec photos, les attestations de conformité nécessaires et tout document utile à vos archives de copropriété. Ses devis sont structurés pour être directement présentables en Assemblée Générale.",
  },
  {
    question: "Quel budget prévoir pour la mise aux normes des parties communes ?",
    answer: "Le budget dépend de l'état de l'installation existante et de l'ampleur des travaux. Emma établit un diagnostic préalable gratuit et un devis détaillé présentable en Assemblée Générale. Les travaux peuvent être étalés selon les priorités et le budget voté par les copropriétaires.",
  },
  {
    question: "Quelles certifications pour travailler avec un syndic ?",
    answer: "Emma Cabal est électricienne qualifiée avec toutes les habilitations nécessaires pour intervenir en copropriété. Elle fournit les attestations et documents nécessaires à vos dossiers de syndic.",
  },
];

export default function SyndicsPage() {
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
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Syndics de copropriété
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-base-content mb-4">
            Électricienne partenaire des syndics de copropriété à Marseille
          </h1>

          <p className="text-base-content/55 text-lg max-w-3xl mb-8">
            Gestion des parties communes, interventions rapides, facturation adaptée aux syndics — Emma Cabal est l&apos;électricienne de confiance pour les copropriétés marseillaises. Que ce soit pour la maintenance courante ou une mise aux normes, elle s&apos;adapte à vos contraintes de gestionnaire.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn btn-primary">
              Parler de votre copropriété
            </Link>
            <a href="tel:+33632363563" className="btn btn-outline text-neutral-content border-neutral-content/30 hover:border-primary hover:text-primary">
              06 32 36 35 63
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-base-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-base-content">
              Services pour syndics
            </h2>
            <p className="text-base-content/60 mt-2">
              Des prestations pensées pour les besoins spécifiques des copropriétés.
            </p>
          </Reveal>

          <ScrollReveal stagger staggerAmount={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="card bg-base-200 shadow-sm">
                  <div className="card-body p-5">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[4px] mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-base-content text-sm mb-1">
                      {service.title}
                    </h3>
                    <p className="text-base-content/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-base-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-base-content mb-4">
                Avantages pour les syndics
              </h2>
              <p className="text-base-content/60 text-sm leading-relaxed mb-6">
                Travailler avec une artisane locale et réactive simplifie la gestion des chantiers en copropriété. Emma comprend les contraintes des syndics : délais d&apos;AG, copropriétaires exigeants, documentation rigoureuse.
              </p>
              <ul className="space-y-3">
                {avantages.map((avantage) => (
                  <li key={avantage} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base-content/70 text-sm">{avantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card bg-primary/5 border border-primary/20 shadow-sm">
              <div className="card-body">
                <h3 className="font-heading font-semibold text-base-content text-lg mb-3">
                  À propos d&apos;Emma Cabal
                </h3>
                <p className="text-base-content/60 text-sm leading-relaxed">
                  Électricienne indépendante basée à Marseille, Emma intervient régulièrement en copropriété. Elle connaît les exigences des syndics : réactivité, documentation soignée et relations humaines de qualité avec les occupants.
                </p>
                <p className="text-base-content/70 text-sm leading-relaxed mt-3">
                  Ses interventions sont documentées (photos, rapports) et ses devis sont structurés pour être présentables en Assemblée Générale.
                </p>
                <div className="mt-4">
                  <Link href="/contact" className="btn btn-primary btn-sm">
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
              Questions fréquentes des syndics
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
        title="Votre copropriété mérite une électricienne de confiance"
        subtitle="Contactez Emma Cabal pour un devis adapté à vos besoins de syndic. Réponse sous 48h."
        ctaText="Parler de votre copropriété"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}