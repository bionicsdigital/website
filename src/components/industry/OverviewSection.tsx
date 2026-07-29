import Image from 'next/image'

type OverviewSectionProps = {
    title: string
    paragraphs: string[]
    imageSrc: string
    imageAlt: string
}

export default function OverviewSection({ title, paragraphs, imageSrc, imageAlt }: OverviewSectionProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-14">
            <div className="grid gap-6 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:p-10">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image src={imageSrc} alt={imageAlt} width={700} height={520} className="h-full min-h-[220px] w-full object-cover sm:min-h-[260px]" />
                </div>
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Industry Overview</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:mt-5 sm:space-y-4 sm:text-base">
                        {paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
