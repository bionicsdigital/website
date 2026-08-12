'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

import QuoteModal from '@/components/forms/QuoteModal'

export default function QuoteCtaButton({ className, label = 'Get Quote' }: { className: string; label?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
        <ArrowRight className="h-5 w-5" />
      </button>
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
