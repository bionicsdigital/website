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
            min-h-[50px]
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-[#00C853]
            to-[#00B4D8]
            px-7
            font-bold
            text-white
            shadow-lg
            shadow-blue-500/25
            transition-all
            hover:shadow-cyan-500/35
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
