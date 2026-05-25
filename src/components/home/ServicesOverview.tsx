import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { Reveal } from '@/components/animations/ScrollReveal'

const services = [
  {
    href: '/prestations#depannage',
    title: 'Dépannage & recherche de panne',
    description: 'Prise HS, disjoncteur qui saute, odeur de chaud, différentiel qui déclenche — diagnostic précis et réparation en toute sécurité.',
  },
  {
    href: '/prestations#mise-aux-normes',
    title: 'Mise aux normes & sécurité',
    description: 'Absence de terre, tableau obsolète, protections insuffisantes — correction des anomalies pour sécuriser votre logement.',
  },
  {
    href: '/prestations#renovation-complete',
    title: 'Rénovation électrique complète',
    description: 'Lors d\'un achat ou réaménagement : nouveaux circuits, redistribution des prises, câblage propre et repéré.',
  },
  {
    href: '/prestations#installation-appareils',
    title: 'Installation de nouveaux appareils',
    description: 'Plaques de cuisson, chauffe-eau, climatisation, VMC, radiateurs — circuit dédié dimensionné et conforme.',
  },
  {
    href: '/prestations#tableau-electrique',
    title: 'Création ou modification du tableau',
    description: 'Remplacement d\'un tableau ancien, ajout de disjoncteurs, interrupteurs différentiels, repérage complet.',
  },
  {
    href: '/prestations#petits-travaux',
    title: 'Prises, éclairages & petits travaux',
    description: 'Ajout de prises, pose de luminaires, interrupteurs, circuits extérieurs — rapide et dans les règles de l\'art.',
  },
  {
    href: '/prestations#renovation-globale',
    title: 'Préparation d\'un projet de rénovation',
    description: 'Coordination avec architectes, artisans du bâtiment et designers pour un plan électrique cohérent.',
  },
  {
    href: '/prestations#securisation-vente',
    title: 'Sécurisation avant vente ou location',
    description: 'Contrôle de l\'installation, corrections ciblées et remise en conformité avant mise en location ou revente.',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-base-100 border-b border-base-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-3">
              Prestations
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-base-content">
              Ce que je fais
            </h2>
          </div>
          <Link
            href="/prestations"
            className="inline-flex items-center gap-1.5 text-sm text-base-content/50 hover:text-primary transition-colors shrink-0"
          >
            Toutes les prestations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

        {/* Grid */}
        <ScrollReveal
          stagger
          staggerAmount={0.07}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-base-300"
        >
          {services.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              className="bg-base-100 p-8 group hover:bg-base-200 transition-colors duration-200"
            >
              <p className="text-xs font-medium text-primary/50 mb-4 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-heading text-lg font-medium text-base-content mb-3 group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm text-base-content/55 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}

          {/* Filler cell to complete the last row (8 items → 3+3+2, needs 1 filler) */}
          <div className="hidden lg:block bg-base-100" aria-hidden="true" />
        </ScrollReveal>

      </div>
    </section>
  )
}
