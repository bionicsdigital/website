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
        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Why It Works</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                {description ? <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p> : null}
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 sm:mt-6 lg:gap-4 xl:grid-cols-4">
                {benefits.map((benefit) => {
                    const Icon = benefit.icon

                    return (
                        <div key={benefit.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:block sm:rounded-3xl sm:p-6">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 sm:h-12 sm:w-12 sm:rounded-2xl">
                                <Icon className="h-6 w-6" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-base font-semibold text-slate-900 sm:mt-5 sm:text-lg">{benefit.title}</h3>
                                <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">{benefit.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
