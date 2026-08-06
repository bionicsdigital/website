type OverviewSectionProps = { title: string; paragraphs: string[] }
export default function OverviewSection({ title, paragraphs }: OverviewSectionProps) {
  return <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8"><div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 lg:p-9"><div className="grid gap-6 lg:grid-cols-[.42fr_1fr] lg:gap-10"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-600">Industry overview</p><h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">{title}</h2></div><div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></div></section>
}
