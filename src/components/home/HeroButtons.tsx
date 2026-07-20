'use client'

import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ComponentType } from 'react'
import { useState } from 'react'
import QuoteModal from '@/components/forms/QuoteModal'

const MotionAnchor =
  motion.a as unknown as ComponentType<
    AnchorHTMLAttributes<HTMLAnchorElement> & MotionProps
  >

const MotionButton =
  motion.button as unknown as ComponentType<
    ButtonHTMLAttributes<HTMLButtonElement> & MotionProps
  >

export default function HeroButtons() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
        <MotionButton
          type="button"
          onClick={() => setOpen(true)}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="
            inline-flex
            min-h-[56px]
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-[#00C853]
            to-[#00E676]
            px-8
            font-bold
            text-white
            shadow-lg
            shadow-green-500/30
            transition-all
            hover:shadow-green-500/50
          "
        >
          Get Quote
          <ArrowRight size={18} />
        </MotionButton>
      </div>

      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}