type InfoTableProps = {
    eyebrow: string
    title: string
    description?: string
    rows: Array<{ parameter: string; typicalRange: string }>
}

export default function InfoTable({ eyebrow, title, description, rows }: InfoTableProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    {description ? <p className="mt-3 text-base leading-7 text-slate-600">{description}</p> : null}
                </div>

                <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200 text-left">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="h-[58px] px-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Parameter</th>
                                    <th className="h-[58px] px-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Typical Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {rows.map((row) => (
                                    <tr key={row.parameter} className="hover:bg-slate-50/80">
                                        <td className="h-[54px] px-5 text-sm font-semibold text-slate-900">{row.parameter}</td>
                                        <td className="h-[54px] px-5 text-sm text-slate-600">{row.typicalRange}</td>
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
