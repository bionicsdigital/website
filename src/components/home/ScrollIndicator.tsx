'use client'

import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'

const MotionDiv = motion.div as unknown as ComponentType<
  HTMLAttributes<HTMLDivElement> & MotionProps
>

export default function ScrollIndicator() {
  return (
    <MotionDiv
      className='absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gray-300 sm:flex'
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden='true'
    >
      <span className='flex h-8 w-5 justify-center rounded-full border border-black/50 p-1'>
        <span className='h-1.5 w-1 rounded-full bg-[#00E676]' />
      </span>
      <span className='text-black-300'>SCROLL TO EXPLORE</span>
    </MotionDiv>
  )
}
