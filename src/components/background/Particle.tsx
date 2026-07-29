'use client'

import { motion, useSpring, useTransform, type MotionProps, type MotionValue } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'
import type { ParticleSpec } from './particleUtils'

type ParticleProps = { particle: ParticleSpec; pointerX: MotionValue<number>; pointerY: MotionValue<number>; scrollY: MotionValue<number>; viewportWidth: MotionValue<number>; viewportHeight: MotionValue<number>; reduceMotion: boolean }
const MotionDiv = motion.div as unknown as ComponentType<Omit<HTMLAttributes<HTMLDivElement>, 'style'> & MotionProps>
const INTERACTION_RADIUS = 220

export default function Particle({ particle, pointerX, pointerY, scrollY, viewportWidth, viewportHeight, reduceMotion }: ParticleProps) {
  const responseX = useTransform(() => { if (reduceMotion) return 0; const originX = viewportWidth.get() * particle.x / 100; const originY = viewportHeight.get() * particle.y / 100; const dx = pointerX.get() - originX; const dy = pointerY.get() - originY; const distance = Math.hypot(dx, dy); if (!distance || distance > INTERACTION_RADIUS) return 0; return -(dx / distance) * (40 + (1 - distance / INTERACTION_RADIUS) * 40) })
  const responseY = useTransform(() => { if (reduceMotion) return 0; const originX = viewportWidth.get() * particle.x / 100; const originY = viewportHeight.get() * particle.y / 100; const dx = pointerX.get() - originX; const dy = pointerY.get() - originY; const distance = Math.hypot(dx, dy); const scrollDrift = -Math.min(scrollY.get(), 1000) * (particle.layer === 'foreground' ? 0.03 : 0.018); if (!distance || distance > INTERACTION_RADIUS) return scrollDrift; return scrollDrift - (dy / distance) * (40 + (1 - distance / INTERACTION_RADIUS) * 40) })
  const springX = useSpring(responseX, { stiffness: 150, damping: 24, mass: 0.75 }); const springY = useSpring(responseY, { stiffness: 150, damping: 24, mass: 0.75 })
  const layerClass = particle.layer === 'foreground' ? 'mix-blend-multiply' : particle.layer === 'middle' ? 'mix-blend-soft-light' : 'mix-blend-multiply'
  return <MotionDiv className={`absolute will-change-transform ${layerClass}`} style={{ left: `${particle.x}%`, top: `${particle.y}%` }} animate={reduceMotion ? { opacity: particle.opacity } : { x: [0, particle.amplitudeX, -particle.amplitudeX * 0.65, 0], y: [0, -particle.amplitudeY, particle.amplitudeY * 0.5, 0], rotate: [particle.rotation, particle.rotation + 16, particle.rotation - 10, particle.rotation], scale: [1, 1.05, 0.96, 1] }} transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}><MotionDiv className="will-change-transform" style={{ x: springX, y: springY }}><img src="/icons/bacteria.svg" alt="" aria-hidden="true" draggable={false} width={particle.size} height={particle.size} className="block select-none" style={{ opacity: particle.opacity, filter: `brightness(${particle.brightness}) blur(${particle.blur}px) drop-shadow(0 0 10px rgba(0, 200, 83, 0.16))`, transform: `scale(${particle.stretchX}, ${particle.stretchY})` }} /></MotionDiv></MotionDiv>
}
