'use client'

import Link from 'next/link'
import { AnimatePresence, motion, type MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'
import {
  Building2,
  FlaskConical,
  Phone,
  Quote,
  ShoppingCart,
  X,
} from 'lucide-react'
import { useAssistant } from './AssistantProvider'

const MotionDiv =
  motion.div as unknown as ComponentType<
    Omit<HTMLAttributes<HTMLDivElement>, 'style'> & MotionProps
  >

const actions = [
  {
    label: 'Buy Products',
    href: '/products/buy',
    icon: ShoppingCart,
  },
  {
    label: 'Products',
    href: '/#products',
    icon: FlaskConical,
  },
  {
    label: 'Industries',
    href: '/#industries',
    icon: Building2,
  },
  {
    label: 'Contact Us',
    href: '/#contact',
    icon: Phone,
  },
]

export default function AssistantCard() {
  const { isOpen, close, openQuote } = useAssistant()

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          initial={{ opacity: 0, y: 18, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28, mass: 0.8 }}
          className="absolute bottom-[calc(100%+14px)] right-0 w-[min(calc(100vw-32px),22rem)] overflow-hidden rounded-3xl border border-white/70 bg-white/95 p-4 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl"
          role="dialog"
          aria-modal="false"
          aria-label="Bionics assistant help menu"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00C853] to-[#00E676]" />
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
                Bionics Assistant
              </p>
              <h2 className="mt-2 text-xl font-black text-slate-950">
                How may I help?
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Close assistant"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-5 grid gap-2">
            <Link
              href="/products/buy"
              onClick={close}
              className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <ShoppingCart className="h-4 w-4 text-emerald-600" />
              Buy Products
            </Link>
            <button
              type="button"
              onClick={openQuote}
              className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-left text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Quote className="h-4 w-4 text-emerald-600" />
              Request Quote
            </button>
            {actions.slice(1).map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                onClick={close}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <Icon className="h-4 w-4 text-emerald-600" />
                {label}
              </Link>
            ))}
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}
