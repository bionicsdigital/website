'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, BriefcaseBusiness, Building2, FileQuestion, FileText, PackageSearch, Search, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { searchSite, type SearchCategory, type SearchItem } from '@/lib/search'

const filters: Array<SearchCategory | 'Everything'> = ['Everything', 'Product', 'Industry', 'Blog', 'FAQ', 'Career', 'Page']
const icons = { Product: PackageSearch, Industry: Building2, Blog: BookOpen, FAQ: FileQuestion, Career: BriefcaseBusiness, Page: FileText }
const popular = ['Aerobic Bioculture', 'COD reduction', 'Textile wastewater', 'Careers']

function mark(text: string, query: string) {
  if (!query.trim()) return text
  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const parts = text.split(new RegExp(`(${escaped})`, 'ig'))
  return parts.map((part, index) => part.toLowerCase() === query.trim().toLowerCase() ? <mark key={index} className="rounded bg-emerald-100 text-emerald-950">{part}</mark> : part)
}

export function useRecentSearches() {
  const [recent, setRecent] = useState<string[]>([])
  useEffect(() => { try { setRecent(JSON.parse(localStorage.getItem('bionics_recent_searches') ?? '[]')) } catch {} }, [])
  const remember = (value: string) => { if (!value.trim()) return; const next = [value.trim(), ...recent.filter((item) => item !== value.trim())].slice(0, 5); setRecent(next); localStorage.setItem('bionics_recent_searches', JSON.stringify(next)) }
  return { recent, remember }
}

export default function SearchExperience({ compact = false, onNavigate }: { compact?: boolean; onNavigate?: () => void }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<SearchCategory | 'Everything'>('Everything')
  const { recent, remember } = useRecentSearches()
  const results = useMemo(() => searchSite(query, filter), [query, filter])
  return <div>
    <label className="relative block"><span className="sr-only">Search the Bionics website</span><Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-600" /><input autoFocus={compact} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, industries, blogs and more..." className={`w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-11 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 ${compact ? 'h-14 text-sm' : 'h-16 text-base shadow-lg'}`} />{query && <button onClick={() => setQuery('')} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 hover:bg-slate-100"><X className="h-4 w-4" /></button>}</label>
    <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Search filters">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-bold transition ${filter === item ? 'border-transparent bg-gradient-to-r from-[#00C853] to-[#00B4D8] text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-300'}`}>{item}</button>)}</div>
    {!query && <div className="mt-5"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{recent.length ? 'Recent searches' : 'Popular searches'}</p><div className="mt-2 flex flex-wrap gap-2">{(recent.length ? recent : popular).map((item) => <button key={item} onClick={() => setQuery(item)} className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800">{item}</button>)}</div></div>}
    <div className={`mt-5 space-y-2 overflow-y-auto ${compact ? 'max-h-[48vh]' : ''}`} role="listbox" aria-label="Search results">{results.length ? results.map((item: SearchItem) => { const Icon = icons[item.category]; return <Link key={item.id} href={item.href} onClick={() => { remember(query || item.title); onNavigate?.() }} className="group flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md" role="option"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-cyan-50 text-emerald-700"><Icon className="h-5 w-5" /></span><span className="min-w-0 flex-1"><span className="block font-bold text-slate-950">{mark(item.title, query)}</span><span className="mt-0.5 line-clamp-2 block text-xs leading-5 text-slate-500">{item.description}</span><span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-emerald-600">{item.category}</span></span><ArrowRight className="mt-3 h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-cyan-500" /></Link> }) : <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center"><Search className="mx-auto h-8 w-8 text-slate-300" /><h2 className="mt-3 font-bold text-slate-950">No results found</h2><p className="mt-1 text-sm text-slate-500">Try a broader term or another filter.</p></div>}</div>
  </div>
}
