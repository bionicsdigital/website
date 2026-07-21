import type { LucideIcon } from 'lucide-react'

type Benefit = {
    title: string
    description: string
    icon: LucideIcon
}

type ProductBenefitsProps = {
    title: string
    description?: string
    benefits: Benefit[]
}

export default function ProductBenefits({ title, description, benefits }: ProductBenefitsProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Why It Works</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {benefits.map((benefit) => {
                    const Icon = benefit.icon

                    return (
                        <div key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-slate-900">{benefit.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
