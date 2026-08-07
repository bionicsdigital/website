'use client'

import { AnimatePresence, motion, type MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'
import { useAssistant } from './AssistantProvider'

const MotionDiv =
  motion.div as unknown as ComponentType<
    Omit<HTMLAttributes<HTMLDivElement>, 'style'> & MotionProps
  >

export default function AssistantBubble() {
  const { currentMessage, hovered, thinking, isOpen } = useAssistant()

  if (isOpen) return null

  return (
    <AnimatePresence mode="wait">
      <MotionDiv
        key={`${currentMessage}-${hovered}-${thinking}`}
        initial={{ opacity: 0, y: 8, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 4, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[calc(100%-4px)] right-2 hidden max-w-[210px] rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm font-semibold leading-5 text-slate-800 shadow-xl shadow-emerald-950/10 sm:block"
        role="status"
        aria-live="polite"
      >
        {currentMessage}
        <span className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 border-b border-r border-emerald-100 bg-white" />
      </MotionDiv>
    </AnimatePresence>
  )
}
