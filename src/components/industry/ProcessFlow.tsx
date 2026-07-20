type ProcessFlowProps = {
    eyebrow: string
    title: string
    description?: string
    steps: string[]
}

export default function ProcessFlow({ eyebrow, title, description, steps }: ProcessFlowProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
                </div>

                <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between">
                    {steps.map((step, index) => (
                        <div key={step} className="flex flex-1 min-w-[180px] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">{index + 1}</div>
                            <p className="font-semibold text-slate-800">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
