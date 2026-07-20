import Image from 'next/image'

type OverviewSectionProps = {
    title: string
    paragraphs: string[]
    imageSrc: string
    imageAlt: string
}

export default function OverviewSection({ title, paragraphs, imageSrc, imageAlt }: OverviewSectionProps) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image src={imageSrc} alt={imageAlt} width={700} height={520} className="h-full min-h-[320px] w-full object-cover" />
                </div>
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Industry Overview</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    <div className="mt-6 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
                        {paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
