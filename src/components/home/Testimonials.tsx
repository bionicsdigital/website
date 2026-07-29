'use client'

import { MessageSquareQuote, Star } from 'lucide-react'
import { motion, type MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    role: 'Plant Head - Textile Industry',
    quote:
      'The Nanozyme Bioculture stabilized our biological treatment process and significantly reduced operational interventions while improving treatment consistency.',
  },
  {
    role: 'Operations Director - Food Processing',
    quote:
      'The technical support team provided detailed analysis and implementation guidance, helping us improve wastewater treatment efficiency.',
  },
  {
    role: 'Technical Manager - Chemical Industry',
    quote:
      'The microbial culture performed reliably during fluctuating organic loads and supported stable ETP performance throughout the production cycle.',
  },
]

const MotionFigure =
  motion.figure as unknown as ComponentType<
    HTMLAttributes<HTMLElement> & MotionProps
  >

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Client Experience"
          title="Trusted by industries for reliable biological wastewater treatment."
        />

        <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-6">
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
                p-5
                shadow-lg
                transition-all
                duration-300
                hover:border-green-300
                hover:shadow-2xl
                lg:p-8
              "
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-100 opacity-60 blur-3xl" />

              <div className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00C853] to-[#00E676] text-white shadow-lg lg:mb-5 lg:h-12 lg:w-12">
                <MessageSquareQuote size={20} />
              </div>

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

              <blockquote className="relative mt-4 text-sm leading-7 text-slate-600 lg:mt-6 lg:text-[15px] lg:leading-8">
                "{item.quote}"
              </blockquote>

              <figcaption className="relative mt-5 border-t border-slate-100 pt-4 lg:mt-8 lg:pt-5">
                <p className="font-bold text-green-700">{item.role}</p>

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
