'use client'

import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  stagger?: boolean
  staggerAmount?: number
  delay?: number
  y?: number
}

/** Returns true if the element's top is already within the visible viewport */
function isAlreadyInView(el: HTMLElement | null): boolean {
  if (!el) return true
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight
}

export default function ScrollReveal({
  children,
  className,
  stagger = false,
  staggerAmount = 0.1,
  delay = 0,
  y = 35,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Skip animation if already visible on load — avoids elements stuck at opacity:0
      if (isAlreadyInView(ref.current)) return

      const target = stagger
        ? Array.from(ref.current?.children ?? [])
        : ref.current

      if (!target || (Array.isArray(target) && target.length === 0)) return

      gsap.from(target, {
        opacity: 0,
        y,
        duration: 0.7,
        stagger: stagger ? staggerAmount : 0,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 72%',
          once: true,
        },
      })
    },
    { scope: ref, dependencies: [stagger, staggerAmount, delay, y] }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

/** Lightweight single-element reveal */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 30,
}: Omit<ScrollRevealProps, 'stagger' | 'staggerAmount'>) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (isAlreadyInView(ref.current)) return

      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration: 0.7,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 72%',
          once: true,
        },
      })
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
