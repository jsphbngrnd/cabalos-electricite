'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export default function PageReveal() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    // Brief logo flash, then slide away
    tl.from(logoRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: 'back.out(2)',
    })
      .to(logoRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.25,
        ease: 'power2.in',
        delay: 0.15,
      })
      .to(
        overlayRef.current,
        {
          yPercent: -100,
          duration: 0.7,
          ease: 'expo.inOut',
          onComplete: () => {
            if (overlayRef.current) overlayRef.current.style.display = 'none'
          },
        },
        '-=0.1'
      )
  })

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="fixed inset-0 z-[9998] bg-secondary flex items-center justify-center pointer-events-none"
    >
      <div ref={logoRef} className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center w-14 h-14 bg-primary">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
        <span className="font-heading font-semibold text-xl text-secondary-content">
          Cabalos électricité
        </span>
      </div>
    </div>
  )
}
