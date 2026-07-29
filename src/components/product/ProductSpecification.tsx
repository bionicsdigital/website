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
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10 lg:py-12">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-10 lg:p-12">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Product Details</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    {description ? <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p> : null}
                </div>

                <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200 sm:mt-10">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200 text-left">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Parameter</th>
                                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {items.map((item) => (
                                    <tr key={item.label} className="hover:bg-slate-50/80">
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.label}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{item.value}</td>
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
