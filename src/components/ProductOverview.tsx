type ProductOverviewProps = {
    title: string
    description: string
    image: string
}

export default function ProductOverview({ title, description, image }: ProductOverviewProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <img src={image} alt={title} className="h-full min-h-[320px] w-full object-contain bg-white p-6" />
                </div>
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Product Overview</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">{description}</p>
                </div>
            </div>
        </section>
    )
}
