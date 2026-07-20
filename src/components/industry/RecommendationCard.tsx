type RecommendationCardProps = {
    title: string
    availableForm: string
    bacterialCount: string
    shelfLife: string
    recommendedDosage: string
    incubationMethod: string
    suitableIndustries: string
    preferredApplication: string
}

export default function RecommendationCard({
    title,
    availableForm,
    bacterialCount,
    shelfLife,
    recommendedDosage,
    incubationMethod,
    suitableIndustries,
    preferredApplication,
}: RecommendationCardProps) {
    const rows = [
        { label: 'Available Form', value: availableForm },
        { label: 'Bacterial Count', value: bacterialCount },
        { label: 'Shelf Life', value: shelfLife },
        { label: 'Recommended Dosage', value: recommendedDosage },
        { label: 'Incubation Method', value: incubationMethod },
        { label: 'Suitable Industries', value: suitableIndustries },
        { label: 'Preferred Application', value: preferredApplication },
    ]

    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 p-8 text-white shadow-2xl sm:p-10 lg:p-12">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">Product Recommendation</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
                </div>
                <div className="mt-10 overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-white/10 text-left">
                            <tbody className="divide-y divide-white/10">
                                {rows.map((row) => (
                                    <tr key={row.label}>
                                        <td className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">{row.label}</td>
                                        <td className="px-6 py-4 text-sm text-emerald-50">{row.value}</td>
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
