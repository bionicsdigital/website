type ReactionCard = {
    title: string
    equation: string
    description: string
}

type ReactionCardsProps = {
    eyebrow: string
    title: string
    description?: string
    items: ReactionCard[]
}

export default function ReactionCards({ eyebrow, title, description, items }: ReactionCardsProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                {description ? <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{description}</p> : null}
            </div>

            <div className="mt-5 grid gap-3 sm:mt-6 md:grid-cols-2 sm:gap-4 xl:grid-cols-4">
                {items.map((item) => (
                    <div key={item.title} className="min-h-[96px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3><p className="mt-2 text-sm font-semibold text-emerald-800">{item.equation}</p><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
