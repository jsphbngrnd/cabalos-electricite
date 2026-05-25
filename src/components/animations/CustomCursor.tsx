'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const isVisible = useRef(false)

  useEffect(() => {
    // Disable on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Hide native cursor on desktop
    document.documentElement.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      if (!isVisible.current) {
        isVisible.current = true
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 })
      }
      // Dot: instant
      gsap.set(dot, { x: e.clientX, y: e.clientY })
      // Ring: slightly lagged
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.12, ease: 'power2.out' })
    }

    const onLeave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.3 })
    const onEnter = () => {
      if (isVisible.current) gsap.to([dot, ring], { opacity: 1, duration: 0.2 })
    }

    const expand = () => {
      gsap.to(ring, { scale: 2.2, duration: 0.25, ease: 'power2.out' })
      gsap.to(dot, { scale: 0.4, duration: 0.2 })
    }
    const contract = () => {
      gsap.to(ring, { scale: 1, duration: 0.35, ease: 'elastic.out(1, 0.6)' })
      gsap.to(dot, { scale: 1, duration: 0.25 })
    }

    const attachHovers = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', contract)
        el.addEventListener('mouseenter', expand)
        el.addEventListener('mouseleave', contract)
      })
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    attachHovers()

    const obs = new MutationObserver(attachHovers)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.documentElement.style.cursor = ''
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary pointer-events-none z-[9999] opacity-0 will-change-transform"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary pointer-events-none z-[9999] opacity-0 will-change-transform"
      />
    </>
  )
}
