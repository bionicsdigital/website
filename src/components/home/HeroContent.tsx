'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'
import HeroButtons from './HeroButtons'
import HeroTrustBar from './HeroTrustBar'

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export default function HeroContent() {
  const reduceMotion = useReducedMotion()
  const MotionDiv =
  motion.div as unknown as ComponentType<
    HTMLAttributes<HTMLDivElement> & MotionProps
  >

const MotionHeading =
  motion.h1 as unknown as ComponentType<
    HTMLAttributes<HTMLHeadingElement> & MotionProps
  >

  return (
    <MotionDiv
      className="w-full text-center lg:text-left"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.12,
          },
        },
      }}
    >
      <MotionHeading
        variants={item}
        transition={{ duration: 0.6 }}
        className="
          mt-2

          text-[40px]
          leading-[0.95]
          tracking-[-0.03em]
          font-black
          text-slate-900

          sm:text-6xl
          lg:text-7xl
          xl:text-[76px]
        "
      >
        <span className="block">SCIENTIFIC</span>

        <span className="block">
          INNOVATIVE
        </span>

        <span className="block bg-gradient-to-r from-[#00C853] to-[#00E676] bg-clip-text text-transparent">
          BIOCULTURE
        </span>

        <span className="block">
          MANUFACTURER
        </span>
      </MotionHeading>

      <MotionDiv
        variants={item}
        className="
          mt-4
          text-lg
          font-semibold
          text-[#16A34A]
          sm:text-2xl
        "
      >
        <span className="font-extrabold">
          Nanozyme Microbial Culture
        </span>{' '}
        for Industrial Wastewater Treatment
      </MotionDiv>

      <MotionDiv
        variants={item}
        className="
          mx-auto
          mt-5
          max-w-[360px]

          space-y-3

          text-[15px]
          leading-6
          text-slate-600

          sm:max-w-[620px]
          sm:text-lg

          lg:mx-0
        "
      >
        <p>
          World's Best Scientific Manufacturer of Nanozyme Bioculture for ETP,
          STP, CETP and Industrial Wastewater Treatment.
        </p>

        <p>
          Scientifically developed microbial cultures helping industries reduce
          COD, BOD, sludge generation, odour and operational costs.
        </p>
      </MotionDiv>

      <MotionDiv
        variants={item}
        className="mt-6"
      >
        <HeroButtons />
      </MotionDiv>

      <MotionDiv
        variants={item}
        className="mt-6"
      >
        <HeroTrustBar />
      </MotionDiv>
    </MotionDiv>
  )
}