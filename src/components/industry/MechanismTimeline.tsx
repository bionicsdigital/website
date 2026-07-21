import type { LucideIcon } from 'lucide-react'

type MechanismItem = {
    title: string
    description: string
    icon: LucideIcon
}

type MechanismTimelineProps = {
    eyebrow: string
    title: string
    description?: string
    items: MechanismItem[]
}

export default function MechanismTimeline({ eyebrow, title, description, items }: MechanismTimelineProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    {description ? <p className="mt-3 text-base leading-7 text-slate-600">{description}</p> : null}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {items.map((item) => {
                        const Icon = item.icon
                        return (
                            <div key={item.title} className="flex min-h-[110px] items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div><h3 className="text-base font-semibold text-slate-900">{item.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
