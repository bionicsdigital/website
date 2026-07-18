'use client'

import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import { ArrowRight, Play, X } from 'lucide-react'
import type { AnchorHTMLAttributes, ComponentType } from 'react'
import { useState } from 'react'

const MotionAnchor = motion.a as unknown as ComponentType<AnchorHTMLAttributes<HTMLAnchorElement> & MotionProps>

export default function HeroButtons() {
  const [open, setOpen] = useState(false)
  return <div className='flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:justify-start'><MotionAnchor href='mailto:info@bionicsenviro.com?subject=Free%20Quote%20Request' className='inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#00C853] to-[#00E676] px-7 text-base font-extrabold text-white shadow-lg shadow-green-500/30 transition-shadow hover:shadow-xl hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:ring-offset-2 focus:ring-offset-white' whileHover={{ y: -4 }} whileTap={{ scale: .98 }}>Get Quote <ArrowRight size={18} aria-hidden='true' /></MotionAnchor>
    {open && <div className='fixed inset-0 z-[100] grid place-items-center bg-slate-950/80 p-5 backdrop-blur-sm' role='dialog' aria-modal='true' aria-label='Bionics Enviro Tech product video'><div className='relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl'><button type='button' onClick={() => setOpen(false)} className='absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white' aria-label='Close video'><X size={18} /></button><video autoPlay controls playsInline className='aspect-video w-full object-cover'><source src='/videos/Intro Video.mp4' type='video/mp4' /></video></div></div>}</div>
}
