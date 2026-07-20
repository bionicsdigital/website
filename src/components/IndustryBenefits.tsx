import { CheckCircle2, type LucideIcon } from 'lucide-react'

type BenefitItem = {
    title: string
    description: string
    icon: LucideIcon
}

type IndustryBenefitsProps = {
    heading: string
    description?: string
    items: BenefitItem[]
    columns?: 2 | 3 | 4
}

export default function IndustryBenefits({
    heading,
    description,
    items,
    columns = 2,
}: IndustryBenefitsProps) {
    const columnClass = {
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
    }[columns]

    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {heading}
                </h2>
                {description ? (
                    <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
                ) : null}
            </div>

            <div className={`mt-10 grid gap-5 md:grid-cols-2 ${columnClass}`}>
                {items.map((item) => {
                    const Icon = item.icon

                    return (
                        <div
                            key={item.title}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
