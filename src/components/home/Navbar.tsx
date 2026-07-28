'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll, type MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'
import { useState } from 'react'
import QuoteModal from '@/components/forms/QuoteModal'

const links = [
  { label: 'Home', href: '/#home' }, { label: 'About', href: '/#about' }, { label: 'Products', href: '/#products' }, { label: 'Industries', href: '/#industries' }, { label: 'Applications', href: '/#applications' }, { label: 'Case Studies', href: '/#process' }, { label: 'Clients', href: '/#clients' }, { label: 'Blog', href: '/blogs' }, { label: 'Contact', href: '/#contact' },
]

const MotionDiv = motion.div as unknown as ComponentType<Omit<HTMLAttributes<HTMLDivElement>, 'style'> & MotionProps>

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const shouldFloat = latest > 40
    setScrolled((current) => current === shouldFloat ? current : shouldFloat)
  })

  return <header className="fixed inset-x-0 top-0 z-50 px-0" aria-label="Main navigation">
    <MotionDiv
      layout
      initial={false}
      animate={scrolled ? { width: '94%', maxWidth: 1380, top: 12, borderRadius: 999, paddingLeft: 12, paddingRight: 12, boxShadow: '0 20px 45px rgba(15, 23, 42, 0.14)' } : { width: '100%', maxWidth: '100%', top: 0, borderRadius: 0, paddingLeft: 0, paddingRight: 0, boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)' }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto border border-transparent bg-white text-slate-900"
      style={{ borderColor: scrolled ? 'rgba(15, 23, 42, 0.08)' : 'transparent', backdropFilter: scrolled ? 'blur(24px)' : 'none', backgroundColor: scrolled ? 'rgba(255,255,255,0.96)' : '#ffffff' }}
    >
      <MotionDiv layout="position" animate={{ height: scrolled ? 72 : 84, paddingLeft: scrolled ? 12 : 24, paddingRight: scrolled ? 12 : 24, maxWidth: scrolled ? 1380 : 1320 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="mx-auto flex w-full items-center justify-between lg:px-0">
        <Link href="/" className="flex items-center" aria-label="Bionics Enviro Tech home">
          <Image src="/logo.png" alt="Bionics Enviro Tech" width={220} height={60} priority className="h-12 w-auto lg:h-14" />
        </Link>

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.label} href={link.href} className="group relative text-[14px] font-semibold tracking-wide text-slate-700 transition-colors duration-300 hover:text-[#00C853]"><span>{link.label}</span><span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#00C853] transition-all duration-300 group-hover:w-full" /></Link>)}
        </nav>

        <div className="hidden items-center gap-3 lg:flex"><Link href="/products/buy" className="rounded-full bg-gradient-to-r from-[#00C853] to-[#00E676] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-green-500/40">Buy Products</Link></div>

        <button onClick={() => setOpen((current) => !current)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} className="rounded-lg p-2 text-slate-900 xl:hidden">{open ? <X size={26} /> : <Menu size={26} />}</button>
      </MotionDiv>

      <div className={`overflow-hidden xl:hidden ${open ? 'max-h-[600px]' : 'max-h-0'}`}>
        <nav className="border-t border-slate-200 bg-white" aria-label="Mobile navigation"><div className="mx-auto flex max-w-[1320px] flex-col py-4">{links.map((link) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="px-6 py-4 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#00C853]">{link.label}</Link>)}<div className="flex flex-col gap-3 px-6 py-4"><Link href="/products/buy" className="flex justify-center rounded-full bg-gradient-to-r from-[#00C853] to-[#00E676] py-3 font-bold text-white shadow-lg">Buy Products</Link></div></div></nav>
      </div>
    </MotionDiv>
    <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
  </header>
}
