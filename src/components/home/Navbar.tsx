'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import QuoteModal from '@/components/forms/QuoteModal'

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Applications', href: '/#applications' },
  { label: 'Case Studies', href: '/#process' },
  { label: 'Clients', href: '/#clients' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
        ? 'border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm'
        : 'bg-gradient-to-b from-black/45 via-black/20 to-transparent'
        }`}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Bionics Enviro Tech"
            width={220}
            height={60}
            priority
            className="h-12 w-auto lg:h-14"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 xl:flex">

          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`group relative text-[14px] font-semibold tracking-wide transition-colors duration-300 ${scrolled
                ? 'text-slate-700 hover:text-[#00C853]'
                : 'text-white hover:text-white'
                }`}
            >
              {link.label}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#00C853] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

        </nav>

        {/* CTA */}

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/products/buy"
            className="rounded-full bg-gradient-to-r from-[#00C853] to-[#00E676] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-green-500/40"
          >
            Buy Products
          </Link>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className={`rounded-lg p-2 xl:hidden ${scrolled ? 'text-slate-900' : 'text-white'
            }`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 xl:hidden ${open ? 'max-h-[600px]' : 'max-h-0'
          }`}
      >
        <nav className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-[1320px] flex-col py-4">

            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#00C853]"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 px-6 py-4">
              <Link
                href="/products/buy"
                className="flex justify-center rounded-full bg-gradient-to-r from-[#00C853] to-[#00E676] py-3 font-bold text-white shadow-lg"
              >
                Buy Products
              </Link>
            </div>

          </div>
        </nav>
      </div>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </header>
  )
}
