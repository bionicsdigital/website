type PerformanceRow = {
    parameter: string
    before: string
    after: string
    reduction: string
}

type PerformanceTableProps = {
    eyebrow: string
    title: string
    description?: string
    rows: PerformanceRow[]
}

export default function PerformanceTable({ eyebrow, title, description, rows }: PerformanceTableProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
                </div>

                <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200 text-left">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Parameter</th>
                                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Before</th>
                                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">After</th>
                                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Reduction %</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {rows.map((row) => (
                                    <tr key={row.parameter} className="hover:bg-slate-50/80">
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-900">{row.parameter}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{row.before}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{row.after}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{row.reduction}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
