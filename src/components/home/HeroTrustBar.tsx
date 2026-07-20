'use client'

import { CheckCircle2 } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'

const points = [
  'ISO Certified Manufacturer',
  'Government Awarded',
  '62+ Scientific Microbial Cultures',
  'Global Supplier',
]

export default function HeroTrustBar() {
const MotionUl =
  motion.ul as unknown as ComponentType<
    HTMLAttributes<HTMLUListElement> & MotionProps
  >
const MotionLi =
  motion.li as unknown as ComponentType<
    HTMLAttributes<HTMLLIElement> & MotionProps
  >
  return (
    <MotionUl
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      aria-label="Bionics Enviro Tech credentials"
      className="flex flex-wrap justify-center gap-3 lg:justify-start"
    >
      {points.map((point) => (
        <MotionLi   
          key={point}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white
            px-4
            py-2.5
            text-sm
            font-semibold
            text-slate-700
            shadow-sm
            transition-all
            duration-300
            hover:border-[#00C853]
            hover:bg-green-50
            hover:shadow-lg
          "
        >
          <CheckCircle2
            size={17}
            className="text-[#00C853]"
          />

          <span>{point}</span>
        </MotionLi>
      ))}
    </MotionUl>
  )
}