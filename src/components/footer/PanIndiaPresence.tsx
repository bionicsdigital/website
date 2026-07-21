'use client'

import Link from 'next/link'
import { useState } from 'react'
import IndiaMap from '@/components/presence/IndiaMap'
import PresenceStats from '@/components/presence/PresenceStats'
import QuoteModal from '@/components/forms/QuoteModal'

export default function PanIndiaPresence() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  return <section className="bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,.2),transparent_35%),linear-gradient(120deg,#061c11,#0b2b1c)] text-white lg:min-h-[650px]">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[2fr_3fr] lg:items-center lg:px-10 lg:py-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-400">
        Our Presence Across India
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Regional Technical Support<br />for Industry Across India
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
          Serving industries across India with regional technical support, onsite consultation, wastewater treatment expertise and nationwide service support.
        </p>
        <div className="mt-8 max-w-xl">
          <PresenceStats />
        </div>
        
        </div>
        
        <div>
          <IndiaMap />
        </div>
        </div>
          <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />

  </section>
}
