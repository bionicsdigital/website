type SpecificationItem = {
    label: string
    value: string
}

type ProductSpecificationProps = {
    title: string
    description?: string
    items: SpecificationItem[]
}

export default function ProductSpecification({ title, description, items }: ProductSpecificationProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 lg:p-8">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Product Details</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    {description ? <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p> : null}
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 sm:mt-6">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200 text-left">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 sm:px-5">Parameter</th>
                                    <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 sm:px-5">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {items.map((item) => (
                                    <tr key={item.label} className="hover:bg-slate-50/80">
                                        <td className="px-4 py-3 text-sm font-semibold text-slate-900 sm:px-5">{item.label}</td>
                                        <td className="px-4 py-3 text-sm text-slate-600 sm:px-5">{item.value}</td>
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
