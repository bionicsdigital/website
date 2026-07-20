'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'
import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    value: 40,
    suffix: '+',
    label: 'Patents',
  },
  {
    value: 1000000,
    suffix: '+',
    label: 'Installations',
  },
  {
    value: 1500,
    suffix: '+',
    label: 'Trained Service Engineers',
  },
  {
    value: 11,
    suffix: '',
    label: 'Manufacturing Units',
  },
]

function Counter({
  value,
  suffix,
}: {
  value: number
  suffix: string
}) {
  const reduceMotion = useReducedMotion()

  const [count, setCount] = useState(
    reduceMotion ? value : 0
  )

  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (reduceMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const start = performance.now()

        const animate = (time: number) => {
          const progress = Math.min(
            (time - start) / 1500,
            1
          )

          const eased =
            1 - Math.pow(1 - progress, 3)

          setCount(Math.floor(value * eased))

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        requestAnimationFrame(animate)

        observer.disconnect()
      },
      {
        threshold: 0.4,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, reduceMotion])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
    const MotionDiv =
  motion.div as unknown as ComponentType<
    HTMLAttributes<HTMLDivElement> & MotionProps
  >
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#006D3A] via-[#00C853] to-[#00E676] py-20">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.15),transparent_60%)]" />

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((item, index) => (
            <MotionDiv
              key={item.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="
                rounded-3xl
                border
                border-white/20
                bg-white/10
                p-6
                text-center
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/15
                hover:shadow-2xl
              "
            >
              <h3 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                <Counter
                  value={item.value}
                  suffix={item.suffix}
                />
              </h3>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-green-100 sm:text-sm">
                {item.label}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}