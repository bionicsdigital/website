type ProductOverviewProps = {
    title: string
    description: string
    image: string
}

export default function ProductOverview({ title, description, image }: ProductOverviewProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8">
            <div className="grid gap-5 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:p-8">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <img src={image} alt={title} className="h-full min-h-[220px] w-full object-contain bg-white p-4 sm:min-h-[320px] sm:p-6" />
                </div>
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Product Overview</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-700 sm:mt-5 sm:text-lg sm:leading-8">{description}</p>
                </div>
            </div>
        </section>
    )
}
