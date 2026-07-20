import Link from 'next/link'

type IndustryCTAProps = {
    title: string
    buttonLabel: string
    buttonHref?: string
}

export default function IndustryCTA({ title, buttonLabel, buttonHref = '/#contact' }: IndustryCTAProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="rounded-[2rem] bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 px-8 py-14 text-center text-white shadow-2xl sm:px-10 lg:px-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
                <div className="mt-8 flex justify-center">
                    <Link
                        href={buttonHref}
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                    >
                        {buttonLabel}
                    </Link>
                </div>
            </div>
        </section>
    )
}
