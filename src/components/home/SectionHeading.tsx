'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const MotionDiv =
  motion.div as unknown as ComponentType<
    HTMLAttributes<HTMLDivElement> & MotionProps
  >
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        max-w-3xl
        ${align === 'center'
          ? 'mx-auto text-center'
          : 'text-left'}
      `}
    >
      {/* Eyebrow */}

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-green-200
          bg-green-50
          px-4
          py-1.5
          text-xs
          font-bold
          uppercase
          tracking-[0.2em]
          text-green-700
        "
      >
        {eyebrow}
      </span>

      {/* Title */}

      <h2
        className="
          mt-5
          text-3xl
          font-black
          leading-tight
          tracking-[-0.03em]
          text-slate-900
          sm:text-4xl
          lg:text-5xl
        "
      >
        {title}
      </h2>

      {/* Decorative Line */}

      <div
        className={`
          mt-6
          h-1
          w-20
          rounded-full
          bg-gradient-to-r
          from-[#00C853]
          to-[#00E676]
          ${
            align === 'center'
              ? 'mx-auto'
              : ''
          }
        `}
      />

      {/* Description */}

      {description && (
        <p
          className="
            mt-6
            text-base
            leading-8
            text-slate-600
            sm:text-lg
          "
        >
          {description}
        </p>
      )}
    </MotionDiv>
  )
}