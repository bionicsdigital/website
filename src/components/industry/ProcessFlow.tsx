type ProcessFlowProps = {
    eyebrow: string
    title: string
    description?: string
    steps: string[]
}

export default function ProcessFlow({ eyebrow, title, description, steps }: ProcessFlowProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    {description ? <p className="mt-3 text-base leading-7 text-slate-600">{description}</p> : null}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                    {steps.map((step, index) => (
                        <div key={step} className="flex min-h-[112px] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">{index + 1}</div>
                            <p className="text-sm font-semibold leading-6 text-slate-800">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
