import Link from 'next/link'
import { Download, MessageCircle, PhoneCall } from 'lucide-react'
import { siteConfig } from '@/lib/site'

type CTASectionProps = {
    title: string
    description: string
    primaryLabel: string
    secondaryLabel: string
}

export default function CTASection({ title, description, primaryLabel, secondaryLabel }: CTASectionProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8">
            <div className="science-gradient-bg rounded-[1.5rem] px-5 py-7 text-center text-white shadow-xl sm:rounded-[2rem] sm:px-8 sm:py-9 lg:px-12">
                <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{title}</h2>
                <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-emerald-50/90 sm:text-lg sm:leading-8">{description}</p>
                <div className="mt-5 flex flex-col justify-center gap-3 sm:mt-6 sm:flex-row">
                    <Link href="/#contact" className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 sm:w-auto">
                        {primaryLabel}
                    </Link>
                    <Link href="/#contact" className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:w-auto">
                        {secondaryLabel}
                    </Link>
                    <a href={siteConfig.brochure} download className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 px-5 text-sm font-bold"><Download className="h-4 w-4"/>Company Profile</a>
                    <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 px-5 text-sm font-bold"><PhoneCall className="h-4 w-4"/>Call Now</a>
                    <a href="https://wa.me/919095000090" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 px-5 text-sm font-bold"><MessageCircle className="h-4 w-4"/>WhatsApp</a>
                </div>
            </div>
        </section>
    )
}
