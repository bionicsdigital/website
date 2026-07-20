'use client'

import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'

const MotionDiv =
  motion.div as unknown as ComponentType<
    HTMLAttributes<HTMLDivElement> & MotionProps
  >

const MotionSpan =
  motion.span as unknown as ComponentType<
    HTMLAttributes<HTMLSpanElement> & MotionProps
  >

export default function ScrollIndicator() {
  return (
    <MotionDiv
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      aria-hidden="true"
    >
      {/* Mouse */}

      <div className="flex h-11 w-7 justify-center rounded-full border-2 border-slate-500">
        <MotionSpan
          className="mt-2 h-2 w-2 rounded-full bg-[#00E676]"
          animate={{
            y: [0, 12, 0],
            opacity: [1, 0.4, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Text */}

      <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-700">
        Scroll to Explore
      </span>
    </MotionDiv>
  )
}