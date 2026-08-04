import Link from 'next/link'

type ProductCTAProps = {
    title: string
    description?: string
    buttonLabel?: string
}

export default function ProductCTA({ title, description, buttonLabel = 'Talk to Our Experts' }: ProductCTAProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8">
            <div className="science-gradient-bg rounded-[1.5rem] px-5 py-7 text-center text-white shadow-xl sm:rounded-[2rem] sm:px-8 sm:py-9 lg:px-12">
                <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{title}</h2>
                {description ? <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-emerald-50/90 sm:text-lg sm:leading-8">{description}</p> : null}

                <div className="mt-5 flex justify-center sm:mt-6">
                    <Link href="/#contact" className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 sm:w-auto">
                        {buttonLabel}
                    </Link>
                </div>
            </div>
        </section>
    )
}
