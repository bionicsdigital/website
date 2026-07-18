'use client'

import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  'Home',
  'About',
  'Products',
  'Industries',
  'Applications',
  'Case Studies',
  'Clients',
  'Blog',
  'Contact',
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm'
          : 'bg-gradient-to-b from-black/45 via-black/20 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <a href="#home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Bionics Enviro Tech"
            width={220}
            height={60}
            priority
            className="h-12 w-auto lg:h-14"
          />
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 xl:flex">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
              className={`group relative text-[14px] font-semibold tracking-wide transition-colors duration-300 ${
                scrolled
                  ? 'text-slate-700 hover:text-[#00C853]'
                  : 'text-white hover:text-white'
              }`}
            >
              {link}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#00C853] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

        </nav>

        {/* CTA */}

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-[#00C853] to-[#00E676] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-green-500/40 lg:inline-flex"
        >
          Buy Products
        </a>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className={`rounded-lg p-2 xl:hidden ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 xl:hidden ${
          open ? 'max-h-[600px]' : 'max-h-0'
        }`}
      >
        <nav className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-[1320px] flex-col py-4">

            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                onClick={() => setOpen(false)}
                className="px-6 py-4 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#00C853]"
              >
                {link}
              </a>
            ))}

            <div className="px-6 py-4">
              <a
                href="#contact"
                className="flex justify-center rounded-full bg-gradient-to-r from-[#00C853] to-[#00E676] py-3 font-bold text-white shadow-lg"
              >
                Buy Products
              </a>
            </div>

          </div>
        </nav>
      </div>
    </header>
  )
}