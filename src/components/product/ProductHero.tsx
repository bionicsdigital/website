import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type ProductHeroProps = {
    title: string
    subtitle: string
    heroImage: string
    overview: string
}

export default function ProductHero({ title, subtitle, heroImage, overview }: ProductHeroProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-800 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_35%)]" />
            <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
                <div className="flex flex-col justify-center">
                    <p className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium uppercase tracking-[0.2em] text-emerald-100">
                        Advanced Bioculture Solution
                    </p>
                    <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
                    <p className="mt-4 text-lg font-semibold text-emerald-100 sm:text-xl">{subtitle}</p>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50/90 sm:text-lg">{overview}</p>
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

                <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
                    <div className="overflow-hidden rounded-[1.5rem] bg-slate-950/20">
                        <Image
                            src={heroImage}
                            alt={title}
                            width={700}
                            height={560}
                            priority
                            className="h-[320px] w-full object-contain bg-white/5 p-6 sm:h-[400px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
