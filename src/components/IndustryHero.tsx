import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

type CtaLink = {
    label: string
    href: string
}

type IndustryHeroProps = {
    eyebrow: string
    title: string
    subtitle: string
    description: string
    primaryCta: CtaLink
    secondaryCta?: CtaLink
    imageSrc?: string
    imageAlt?: string
    icon?: LucideIcon
}

export default function IndustryHero({
    eyebrow,
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    imageSrc,
    imageAlt,
    icon: Icon,
}: IndustryHeroProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_40%)]" />
            <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
                <div className="max-w-2xl">
                    <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium tracking-[0.2em] text-emerald-100 uppercase">
                        {eyebrow}
                    </p>
                    <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-4 text-lg font-semibold text-emerald-100 sm:text-xl">
                        {subtitle}
                    </p>
                    <p className="mt-5 max-w-xl text-base leading-8 text-emerald-50/90 sm:text-lg">
                        {description}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href={primaryCta.href}
                            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
                        >
                            {primaryCta.label}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        {secondaryCta ? (
                            <Link
                                href={secondaryCta.href}
                                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                            >
                                {secondaryCta.label}
                            </Link>
                        ) : null}
                    </div>
                </div>

                <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
                    <div className="overflow-hidden rounded-[1.5rem] bg-slate-950/30">
                        {imageSrc ? (
                            <img
                                src={imageSrc}
                                alt={imageAlt ?? title}
                                className="h-[320px] w-full object-cover sm:h-[380px]"
                            />
                        ) : (
                            <div className="flex h-[320px] flex-col items-center justify-center bg-gradient-to-br from-emerald-600/90 to-green-700/90 p-8 text-center sm:h-[380px]">
                                {Icon ? (
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                ) : null}
                                <p className="text-lg font-semibold text-white">Scientific bioculture for complex textile loads</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
