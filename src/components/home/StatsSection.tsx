'use client'

import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

const stats = [
  { raw: 1, suffix: ' an', label: "Années d'expérience", description: "Dans le secteur de l'électricité à Marseille" },
  { raw: 10, suffix: ' chantiers', label: 'Chantiers réalisés', description: 'Particuliers, copropriétés et professionnels' },
  { raw: 100, suffix: '%', label: 'Clients satisfaits', description: 'Qualité et sérieux garantis sur chaque intervention' },
  { raw: 60, suffix: ' km', label: "Zone d'intervention", description: 'Marseille et ses alentours (Aubagne, Cassis, La Ciotat, Toulon…)' },
]

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.stat-item', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%', once: true },
      })

      containerRef.current?.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const target = parseFloat(el.dataset.count || '0')
        const suffix = el.dataset.suffix || ''
        const obj = { val: 0 }

        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate() {
            el.textContent = `${Math.round(obj.val)}${suffix}`
          },
          onComplete() {
            el.textContent = `${target}${suffix}`
          },
        })
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-base-100 border-b border-base-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-base-300">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item py-10 px-6 first:pl-0 last:pr-0">
              <p className="font-heading text-5xl font-medium text-primary mb-2 tabular-nums">
                <span data-count={stat.raw} data-suffix={stat.suffix}>
                  0{stat.suffix}
                </span>
              </p>
              <p className="text-sm font-medium text-base-content mb-1">{stat.label}</p>
              <p className="text-xs text-base-content/45 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
