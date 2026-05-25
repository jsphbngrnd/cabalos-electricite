import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stats = [
  { label: 'Zones couvertes', value: '28+' },
  { label: 'Arrondissements Marseille', value: '16' },
  { label: 'Délai devis gratuit', value: '48h' },
  { label: 'Avis Google', value: '5 ★' },
]

export default function Hero() {
  return (
    <section className="bg-base-100 border-b border-base-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-0 lg:pt-20">

        {/* Overline */}
        <p className="text-[10px] tracking-[0.22em] uppercase text-base-content/35 mb-8">
          Électricienne qualifiée · Fabricoleuses · Marseille
        </p>

        {/* Statement heading — max 64px */}
        <h1
          className="font-heading font-medium text-base-content leading-[1.02] mb-10"
          style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}
        >
          Votre électricienne,<br />
          <span className="text-primary">à Marseille.</span>
        </h1>

        {/* Description + CTAs */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16">
          <p className="text-sm text-base-content/50 leading-relaxed max-w-sm">
            Mise aux normes NF&nbsp;C&nbsp;15-100, tableau électrique,
            rénovation, dépannage. Devis gratuit après diagnostic.
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact" className="btn btn-primary gap-2 px-6">
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/prestations" className="btn btn-ghost gap-2 px-6">
              Voir les prestations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* Stats strip — full-width border */}
      <div className="border-t border-base-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-5 ${i > 0 ? 'pl-6 border-l border-base-300' : ''}`}
            >
              <p className="font-heading text-xl font-medium text-primary mb-0.5">{stat.value}</p>
              <p className="text-[10px] text-base-content/35 tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
