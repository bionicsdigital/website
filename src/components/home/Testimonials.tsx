'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import TestimonialCard from '@/components/testimonials/TestimonialCard'
import { testimonials } from '@/data/resource-content'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  const track = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const move = (direction: 1 | -1) => {
    const element = track.current
    if (!element) return
    const card = element.firstElementChild as HTMLElement | null
    element.scrollBy({ left: direction * ((card?.offsetWidth ?? 300) + 16), behavior: 'smooth' })
  }

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => {
      const element = track.current
      if (!element) return
      const card = element.firstElementChild as HTMLElement | null
      const step = (card?.offsetWidth ?? 300) + 16
      if (element.scrollLeft + element.clientWidth >= element.scrollWidth - step) element.scrollTo({ left: 0, behavior: 'smooth' })
      else element.scrollBy({ left: step, behavior: 'smooth' })
    }, 5000)
    return () => clearInterval(timer)
  }, [paused])

  return <section id="testimonials" className="bg-gradient-to-b from-slate-50 to-white py-10 lg:py-16">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="flex items-end justify-between gap-5">
        <SectionHeading align="left" eyebrow="Client Experience" title="Industrial teams trust Bionics for practical biological treatment support." />
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonials" className="grid h-12 w-12 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm transition hover:border-emerald-500 hover:text-emerald-700"><ArrowLeft /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonials" className="grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-white shadow-lg transition hover:bg-emerald-600"><ArrowRight /></button>
        </div>
      </div>
      <div ref={track} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] lg:mt-10" aria-label="Client testimonials carousel">
        {testimonials.map((item) => <div key={item.id} className="min-w-[90%] snap-start sm:min-w-[48%] lg:min-w-[32%]"><TestimonialCard item={item} /></div>)}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 sm:justify-center">
        <div className="flex gap-2 sm:hidden"><button type="button" onClick={() => move(-1)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white"><ArrowLeft className="h-5 w-5" /></button><button type="button" onClick={() => move(1)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-white"><ArrowRight className="h-5 w-5" /></button></div>
        <Link href="/testimonials" className="inline-flex min-h-11 items-center rounded-full border border-emerald-600 px-5 py-2 text-sm font-bold text-emerald-700 hover:bg-emerald-50">View all testimonials</Link>
      </div>
    </div>
  </section>
}
