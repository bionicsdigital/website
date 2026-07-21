import type { LucideIcon } from 'lucide-react'

type CardItem = {
    title: string
    description: string
    icon: LucideIcon
}

type CardGridProps = {
    eyebrow: string
    title: string
    description?: string
    items: CardItem[]
    columns?: 2 | 3 | 4
}

export default function CardGrid({ eyebrow, title, description, items, columns = 3 }: CardGridProps) {
    const className = {
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-2 xl:grid-cols-3',
        4: 'md:grid-cols-2 xl:grid-cols-4',
    }[columns]

    return (
        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                {description ? <p className="mt-3 text-base leading-7 text-slate-600">{description}</p> : null}
            </div>

            <div className={`mt-7 grid gap-4 ${className}`}>
                {items.map((item) => {
                    const Icon = item.icon
                    return (
                        <div key={item.title} className="flex min-h-[104px] items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                <Icon className="h-5 w-5" />
                            </div>
                            <div><h3 className="text-base font-semibold text-slate-900">{item.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p></div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
