'use client'

import { useRef, useCallback } from 'react'
import { gsap } from '@/lib/gsap'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export default function MagneticButton({ children, className, strength = 0.28 }: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = wrapperRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) * strength
      const y = (e.clientY - rect.top - rect.height / 2) * strength
      gsap.to(el, { x, y, duration: 0.4, ease: 'power2.out' })
    },
    [strength]
  )

  const onLeave = useCallback(() => {
    gsap.to(wrapperRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    })
  }, [])

  return (
    <div
      ref={wrapperRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </div>
  )
}
