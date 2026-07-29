type DosageRow = {
    day: string
    preparedBroth: string
    dailyDosage: string
}

type ProductDosageProps = {
    title: string
    description?: string
    rows: DosageRow[]
}

export default function ProductDosage({ title, description, rows }: ProductDosageProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-10 lg:py-20">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-slate-50 p-5 sm:p-10 lg:p-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Dosage Guidance</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    {description ? <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p> : null}
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 text-left">
                        <thead className="bg-white">
                            <tr>
                                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Day</th>
                                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Prepared Broth</th>
                                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Daily Dosage</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                            {rows.map((row) => (
                                <tr key={row.day} className="hover:bg-slate-50/80">
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{row.day}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{row.preparedBroth}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{row.dailyDosage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
