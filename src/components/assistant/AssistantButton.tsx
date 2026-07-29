'use client'

import { motion, useReducedMotion, type MotionProps } from 'framer-motion'
import type { ButtonHTMLAttributes, ComponentType, HTMLAttributes } from 'react'
import { assistantImages } from './AssistantState'
import { useAssistant } from './AssistantProvider'

const MotionButton =
  motion.button as unknown as ComponentType<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> & MotionProps
  >

const MotionDiv =
  motion.div as unknown as ComponentType<
    Omit<HTMLAttributes<HTMLDivElement>, 'style'> & MotionProps
  >

export default function AssistantButton() {
  const reduceMotion = useReducedMotion()
  const {
    currentExpression,
    hovered,
    thinking,
    setHovered,
    toggleOpen,
  } = useAssistant()

  return (
    <MotionButton
      type="button"
      aria-label="Open Bionics assistant"
      onClick={toggleOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.7 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22, mass: 0.75 }}
      // Assistant mascot size: edit h-32/w-32 for mobile and sm:h-40/sm:w-40 for larger screens.
      className="group relative flex h-32 w-32 cursor-pointer items-center justify-center rounded-full outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50 sm:h-40 sm:w-40"
    >
      <MotionDiv
        aria-hidden="true"
        className="absolute inset-2 rounded-full bg-emerald-400/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        animate={{ opacity: hovered ? 0.95 : 0.45 }}
      />
      <MotionDiv
        className="relative flex h-full w-full items-center justify-center"
        animate={
          reduceMotion
            ? {}
            : {
                y: hovered ? [0, -5, 0] : [0, -10, 0],
                rotate: thinking ? [-3, 3, 0] : hovered ? 0 : [-2, 2, -2],
                scale: hovered ? 1.08 : [1, 1.03, 1],
              }
        }
        transition={
          hovered
            ? { duration: 0.45, ease: 'easeInOut' }
            : { duration: thinking ? 1.2 : 4, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <img
          src={assistantImages[currentExpression]}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="h-full w-full select-none object-contain drop-shadow-[0_18px_30px_rgba(0,86,55,0.25)]"
        />
      </MotionDiv>
    </MotionButton>
  )
}
