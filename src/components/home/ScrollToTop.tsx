'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    toggleVisibility()
    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-bionics-green to-bionics-mint text-white shadow-[0_10px_30px_rgba(0,200,83,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,200,83,0.35)] ${isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
