'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'
import { MessageSquareQuote, Star } from 'lucide-react'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    role: 'Plant Head • Textile Industry',
    quote:
      'The Nanozyme Bioculture stabilized our biological treatment process and significantly reduced operational interventions while improving treatment consistency.',
  },
  {
    role: 'Operations Director • Food Processing',
    quote:
      'The technical support team provided detailed analysis and implementation guidance, helping us improve wastewater treatment efficiency.',
  },
  {
    role: 'Technical Manager • Chemical Industry',
    quote:
      'The microbial culture performed reliably during fluctuating organic loads and supported stable ETP performance throughout the production cycle.',
  },
]

export default function Testimonials() {
  const MotionFigure =
  motion.figure as unknown as ComponentType<
    HTMLAttributes<HTMLDivElement> & MotionProps
  >
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Client Experience"
          title="Trusted by industries for reliable biological wastewater treatment."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <MotionFigure
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:border-green-300
                hover:shadow-2xl
              "
            >
              {/* Decorative Glow */}

              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-100 blur-3xl opacity-60" />

              {/* Quote Icon */}

              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00C853] to-[#00E676] text-white shadow-lg">
                <MessageSquareQuote size={22} />
              </div>

              {/* Rating */}

              <div className="relative flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    className="text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}

              <blockquote className="relative mt-6 text-[15px] leading-8 text-slate-600">
                “{item.quote}”
              </blockquote>

              {/* Author */}

              <figcaption className="relative mt-8 border-t border-slate-100 pt-5">
                <p className="font-bold text-green-700">
                  {item.role}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Verified Industrial Client
                </p>
              </figcaption>
            </MotionFigure>
          ))}
        </div>
      </div>
    </section>
  )
}