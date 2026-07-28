'use client'

import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

export function useScrollMotion() {
  const scrollY = useMotionValue(0); const smoothScrollY = useSpring(scrollY, { stiffness: 60, damping: 24, mass: 0.8 })
  useEffect(() => { let frame = 0; const update = () => { frame = 0; scrollY.set(window.scrollY) }; const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update) }; update(); window.addEventListener('scroll', onScroll, { passive: true }); return () => { window.removeEventListener('scroll', onScroll); if (frame) window.cancelAnimationFrame(frame) } }, [scrollY])
  return smoothScrollY
}
