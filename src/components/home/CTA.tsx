'use client'

import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import QuoteModal from '@/components/forms/QuoteModal'

export default function CTA() {
  const [open, setOpen] = useState(false)
  return (
    <section
      id="contact"
      className="bg-white py-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-r
            from-[#006D3A]
            via-[#00A94F]
            to-[#00E676]
            px-6
            py-10
            shadow-[0_25px_80px_rgba(0,0,0,0.18)]
            sm:px-12
            lg:px-16
            lg:py-14
          "
        >
          {/* Background Glow */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.22),transparent_60%)]" />

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-black/10 blur-3xl" />

          <div className="relative text-center text-white">
            {/* <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] backdrop-blur">
              FREE TECHNICAL CONSULTATION
            </span> */}

            <h2 className="mx-auto max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:mt-6 lg:text-6xl">
              Ready to Improve Your
              <br />
              Wastewater Treatment?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-green-50 sm:text-lg">
              Speak with our technical experts and discover how Nanozyme
              Bioculture can reduce COD, BOD, sludge generation and operating
              costs for your treatment plant.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:mt-10 lg:gap-4">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-7
                  py-3.5
                  font-bold
                  text-green-700
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                  sm:min-w-48
                  lg:py-4
                "
              >
                <Mail size={20} />
                Request Quote
                <ArrowRight size={18} />
              </button>

              <a
                href="https://wa.me/919095000090"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/40
                  bg-white/10
                  px-7
                  py-3.5
                  font-bold
                  text-white
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-green-700
                  sm:min-w-48
                  lg:py-4
                "
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>

            {/* Trust Bar */}

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-green-100 lg:mt-10 lg:gap-8 lg:text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                Technical Support
              </div>

              <div>✔ Scientific Manufacturer</div>

              <div>✔ PAN India Service</div>

              <div>✔ Expert Consultation</div>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
