import Link from 'next/link'

type CTASectionProps = {
    title: string
    description: string
    primaryLabel: string
    secondaryLabel: string
}

export default function CTASection({ title, description, primaryLabel, secondaryLabel }: CTASectionProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="rounded-[2rem] bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 px-8 py-14 text-center text-white shadow-2xl sm:px-10 lg:px-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-emerald-50/90">{description}</p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
                        {primaryLabel}
                    </Link>
                    <Link href="/#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                        {secondaryLabel}
                    </Link>
                </div>
            </div>
        </section>
    )
}
