'use client'

import { useEffect, useState } from 'react'
import { useMotionValue, useReducedMotion } from 'framer-motion'
import Particle from './Particle'
import { createParticles, particleCountForWidth } from './particleUtils'
import { usePointer } from './usePointer'
import { useScrollMotion } from './useScrollMotion'

const PARTICLES = createParticles(140)

export default function BackgroundParticles() {
  const [count, setCount] = useState(40); const viewportWidth = useMotionValue(0); const viewportHeight = useMotionValue(0); const reduceMotion = useReducedMotion(); const { pointerX, pointerY } = usePointer(); const scrollY = useScrollMotion()
  useEffect(() => { let frame = 0; const update = () => { frame = 0; viewportWidth.set(window.innerWidth); viewportHeight.set(window.innerHeight); setCount((current) => { const next = particleCountForWidth(window.innerWidth); return current === next ? current : next }) }; update(); const onResize = () => { if (!frame) frame = window.requestAnimationFrame(update) }; window.addEventListener('resize', onResize, { passive: true }); return () => { window.removeEventListener('resize', onResize); if (frame) window.cancelAnimationFrame(frame) } }, [viewportHeight, viewportWidth])
  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"><div className="absolute inset-0 opacity-80">{PARTICLES.slice(0, count).map((particle) => <Particle key={particle.id} particle={particle} pointerX={pointerX} pointerY={pointerY} scrollY={scrollY} viewportWidth={viewportWidth} viewportHeight={viewportHeight} reduceMotion={Boolean(reduceMotion)} />)}</div></div>
}
