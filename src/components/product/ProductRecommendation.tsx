type RecommendationItem = {
    title: string
    description: string
}

type ProductRecommendationProps = {
    title: string
    description?: string
    items: RecommendationItem[]
}

export default function ProductRecommendation({ title, description, items }: ProductRecommendationProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-10 lg:py-20">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-10 lg:p-12">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Recommendation</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    {description ? <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p> : null}
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-2 lg:mt-10 xl:grid-cols-3">
                    {items.map((item) => (
                        <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
