type ProductItem = {
    name: string
    application: string
}

type IndustryProductsProps = {
    heading: string
    description?: string
    products: ProductItem[]
}

export default function IndustryProducts({ heading, description, products }: IndustryProductsProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{heading}</h2>
                {description ? (
                    <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
                ) : null}
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 text-left">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                                    Product
                                </th>
                                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                                    Application
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {products.map((product) => (
                                <tr key={product.name} className="hover:bg-slate-50/80">
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{product.name}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{product.application}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
