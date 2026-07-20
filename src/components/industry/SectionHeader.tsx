type SectionHeaderProps = {
    eyebrow: string
    title: string
    description?: string
    align?: 'left' | 'center'
}

export default function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
    const alignClass = align === 'center' ? 'mx-auto text-center' : ''

    return (
        <div className={`max-w-3xl ${alignClass}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
            {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
        </div>
    )
}
