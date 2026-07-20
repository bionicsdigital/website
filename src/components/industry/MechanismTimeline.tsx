import type { LucideIcon } from 'lucide-react'
import { ArrowDown } from 'lucide-react'

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
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
                </div>

                <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:justify-between">
                    {items.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div key={item.title} className="flex flex-1 min-w-[200px] flex-col items-center rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                                {index < items.length - 1 ? <ArrowDown className="mt-4 h-4 w-4 text-emerald-600" /> : null}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
