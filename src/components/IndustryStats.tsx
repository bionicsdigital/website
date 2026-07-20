type Stat = {
    value: string
    label: string
}

type IndustryStatsProps = {
    heading: string
    description?: string
    stats: Stat[]
}

export default function IndustryStats({ heading, description, stats }: IndustryStatsProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 p-8 text-white shadow-2xl sm:p-10 lg:p-12">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
                    {description ? (
                        <p className="mt-4 text-lg leading-8 text-emerald-50/90">{description}</p>
                    ) : null}
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                            <p className="text-4xl font-black text-white sm:text-5xl">{stat.value}</p>
                            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
