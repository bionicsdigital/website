'use client'

import { ArrowRight, Check, Mail, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import QuoteModal from '@/components/forms/QuoteModal'

const phoneNumbers = [
  { label: '90950 0090', value: '+91909500090' },
  { label: '95663 76690', value: '+919566376690' },
  { label: '94848 44000', value: '+919484844000' },
]

const highlights = [
  'Scientific Manufacturer',
  'PAN India Service',
  'Expert Consultation',
]

export default function CTA() {
  const [open, setOpen] = useState(false)

  return (
    <section id="contact" className="bg-white py-8 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="science-gradient-bg relative overflow-hidden rounded-3xl px-5 py-8 shadow-[0_20px_60px_rgba(14,165,233,0.18)] sm:px-10 lg:px-14 lg:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.22),transparent_60%)]" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-black/10 blur-3xl" />

          <div className="relative text-center text-white">
            <h2 className="mx-auto max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Improve Your
              <br />
              Wastewater Treatment?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-green-50 sm:text-base sm:leading-7">
              Speak with our technical experts and discover how Nanozyme
              Bioculture can reduce COD, BOD, sludge generation and operating
              costs for your treatment plant.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:gap-4">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-green-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:min-w-48"
              >
                <Mail size={19} />
                Request Quote
                <ArrowRight size={17} />
              </button>

              <a
                href="https://wa.me/919095000090"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-green-700 sm:min-w-48"
              >
                <MessageCircle size={19} />
                WhatsApp Us
              </a>
            </div>

            <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-white/20 bg-black/10 p-3 backdrop-blur-sm sm:p-4">
              <div className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-green-50 sm:text-sm">
                <Phone size={16} />
                Call for inquiry &amp; support
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                {phoneNumbers.map((phone) => (
                  <a
                    key={phone.value}
                    href={`tel:${phone.value}`}
                    className="rounded-xl bg-white/10 px-3 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-green-700 sm:text-base"
                  >
                    +91 {phone.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-green-100">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <Check size={14} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
