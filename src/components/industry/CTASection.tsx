import Link from 'next/link'

type CTASectionProps = {
    title: string
    description: string
    primaryLabel: string
    secondaryLabel: string
}

export default function CTASection({ title, description, primaryLabel, secondaryLabel }: CTASectionProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-10 lg:py-20">
            <div className="rounded-[1.5rem] bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 px-5 py-10 text-center text-white shadow-2xl sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-16">
                <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{title}</h2>
                <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-emerald-50/90 sm:text-lg sm:leading-8">{description}</p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link href="/#contact" className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 sm:w-auto">
                        {primaryLabel}
                    </Link>
                    <Link href="/#contact" className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:w-auto">
                        {secondaryLabel}
                    </Link>
                </div>
            </div>
        </section>
    )
}
