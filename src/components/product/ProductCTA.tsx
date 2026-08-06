import Link from 'next/link'
import { MessageCircle, PhoneCall, Send } from 'lucide-react'
import { siteConfig } from '@/lib/site'

type ProductCTAProps = { title: string; description?: string }

export default function ProductCTA({ title, description }: ProductCTAProps) {
  const whatsapp = siteConfig.phoneHref.replace(/\D/g, '')
  return <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8"><div className="science-gradient-bg rounded-[1.5rem] px-5 py-7 text-center text-white shadow-xl sm:rounded-[2rem] sm:px-8 sm:py-9"><h2 className="text-2xl font-black tracking-tight sm:text-4xl">{title}</h2>{description && <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-emerald-50/90 sm:text-base">{description}</p>}<div className="mt-6 grid gap-3 sm:flex sm:justify-center"><a href={`tel:${siteConfig.phoneHref}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-emerald-700"><PhoneCall className="h-4 w-4"/>Talk to Our Expert</a><Link href="/#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 text-sm font-bold"><Send className="h-4 w-4"/>Request Quote</Link><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 text-sm font-bold"><MessageCircle className="h-4 w-4"/>WhatsApp</a></div></div></section>
}
