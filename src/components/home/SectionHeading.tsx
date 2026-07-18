type SectionHeadingProps = { eyebrow: string; title: string; description?: string; align?: 'left' | 'center' }

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
    <p className='text-xs font-extrabold uppercase tracking-[.18em] text-green-600'>{eyebrow}</p>
    <h2 className='mt-3 text-3xl font-black tracking-[-.035em] text-slate-900 sm:text-5xl'>{title}</h2>
    {description && <p className='mt-5 text-base leading-7 text-slate-600 sm:text-lg'>{description}</p>}
  </div>
}
