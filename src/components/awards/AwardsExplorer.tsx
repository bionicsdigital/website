'use client'

import Image from 'next/image'
import { Award, Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { awardRecords } from '@/data/awards'

const categories = ['All', 'Awards', 'Certificates', 'Recognitions']

export default function AwardsExplorer() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [preview, setPreview] = useState<(typeof awardRecords)[number] | null>(null)
  const items = useMemo(() => awardRecords.filter((item) =>
    (category === 'All' || item.category === category) &&
    `${item.title} ${item.description} ${item.year}`.toLowerCase().includes(query.toLowerCase()),
  ), [query, category])

  return <>
    <div className="sticky top-24 z-20 grid gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:grid-cols-[1fr_auto]">
      <label className="relative"><span className="sr-only">Search awards and certificates</span><Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-600"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search recognition" className="min-h-12 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"/></label>
      <div className="flex gap-2 overflow-x-auto" aria-label="Filter recognition by category">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`min-h-11 whitespace-nowrap rounded-full px-4 text-sm font-bold ${category === item ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`}>{item}</button>)}</div>
    </div>
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <article key={item.id} className="group flex flex-col overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <button type="button" onClick={() => setPreview(item)} className="flex h-56 items-center justify-center bg-gradient-to-br from-slate-50 to-cyan-50 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500" aria-label={`Preview ${item.title}`}><Image src={item.image} alt={`${item.title} certificate or recognition`} width={520} height={320} loading="lazy" className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"/></button>
      <div className="flex flex-1 flex-col p-5"><p className="text-xs font-bold uppercase tracking-[.14em] text-emerald-700">{item.category} · {item.year}</p><h2 className="mt-2 text-xl font-black text-slate-950">{item.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.description}</p><button type="button" onClick={() => setPreview(item)} className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 text-sm font-bold text-slate-800 hover:border-emerald-500 hover:text-emerald-700"><Award className="h-4 w-4"/>View certificate</button></div>
    </article>)}</div>
    {!items.length && <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">No recognition matches your search.</div>}
    {preview && <div role="dialog" aria-modal="true" aria-label={`${preview.title} preview`} className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/85 p-4" onClick={() => setPreview(null)}><div className="relative max-w-4xl rounded-3xl bg-white p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => setPreview(null)} aria-label="Close preview" className="absolute right-3 top-3 z-10 rounded-full bg-slate-950 p-2 text-white"><X/></button><Image src={preview.image} alt={`${preview.title} full preview`} width={1000} height={700} className="max-h-[80vh] w-auto object-contain"/></div></div>}
  </>
}
