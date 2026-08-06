import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb'

type ProductHeroProps = {
    title: string
    subtitle: string
    heroImage: string
    overview: string
}

export default function ProductHero({ title, subtitle, heroImage, overview }: ProductHeroProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_35%)]" />
            <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-28 sm:px-8 sm:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
                <div className="flex flex-col justify-center">
                    <div className="mb-4"><PageBreadcrumb dark items={[{ label: 'Products', href: '/products' }, { label: title }]} /></div>
                    <p className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-emerald-100 sm:text-sm sm:tracking-[0.2em]">
                        Advanced Bioculture Solution
                    </p>
                    <h1 className="mt-5 text-3xl font-black leading-tight sm:text-5xl lg:mt-6 lg:text-6xl">{title}</h1>
                    <p className="mt-3 text-base font-semibold text-emerald-100 sm:mt-4 sm:text-xl">{subtitle}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/90 sm:mt-5 sm:text-lg sm:leading-8">{overview}</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50">
                            Request Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link href="/#products" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                            View Other Products
                        </Link>
                    </div>
                </div>

                <div className="overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur sm:rounded-[2rem]">
                    <div className="h-full min-h-[280px] overflow-hidden sm:min-h-[430px]">
                        <Image
                            src={heroImage}
                            alt={title}
                            width={700}
                            height={560}
                            priority
                            className="h-full min-h-[280px] w-full object-cover sm:min-h-[430px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
