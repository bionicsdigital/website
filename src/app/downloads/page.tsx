import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, Download, Eye, FileText, LockKeyhole } from 'lucide-react'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb'
import { downloads, type DownloadItem } from '@/data/resource-content'
import { createMetadata, siteConfig } from '@/lib/site'

export const metadata: Metadata = createMetadata({
  title: 'Wastewater Treatment Brochures & Downloads | Bionics Enviro Tech',
  description: 'Download Bionics company, textile, sugar, distillery, food, dairy and pharmaceutical wastewater treatment profiles and Nanozyme resources.',
  path: '/downloads',
  keywords: ['wastewater treatment brochure', 'Nanozyme brochure', 'industry wastewater profile', 'Bionics company profile'],
})

function DownloadCard({ item, compact = false }: { item: DownloadItem; compact?: boolean }) {
  return <article id={item.id} className={`group flex h-full flex-col rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${item.fallback ? 'border-amber-200' : 'border-slate-200'} ${compact ? 'p-5' : 'p-6'}`}>
    <div className="flex items-start justify-between gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-emerald-700">{item.category === 'Industry Profile' ? <Building2 className="h-5 w-5" /> : item.href ? <FileText className="h-5 w-5" /> : <LockKeyhole className="h-5 w-5" />}</div>
      {item.fallback && <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-800">Company profile fallback</span>}
    </div>
    <p className="mt-5 text-xs font-bold uppercase tracking-wider text-cyan-700">{item.category}</p>
    <h2 className="mt-2 text-xl font-black text-slate-950">{item.title}</h2>
    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.description}</p>
    <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-xs"><div><dt className="font-bold text-slate-500">Format</dt><dd className="mt-1 text-slate-800">{item.size}</dd></div><div><dt className="font-bold text-slate-500">Status</dt><dd className="mt-1 text-slate-800">{item.updated}</dd></div></dl>
    <div className="mt-5 flex gap-2">{item.href ? <><a href={item.href} download className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 text-sm font-bold text-white transition hover:bg-emerald-700"><Download className="h-4 w-4" />Download</a><a href={item.href} target="_blank" rel="noreferrer" aria-label={`Preview ${item.title}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 px-3 text-sm font-bold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"><Eye className="h-4 w-4" />Preview</a></> : <><span className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-slate-100 px-3 text-sm font-bold text-slate-500">Coming Soon</span><Link href="/#contact" className="inline-flex min-h-11 items-center rounded-xl border border-emerald-600 px-3 text-sm font-bold text-emerald-700">Request</Link></>}</div>
  </article>
}

export default function DownloadsPage() {
  const general = downloads.filter(item => item.category === 'General Brochure')
  const industries = downloads.filter(item => item.category === 'Industry Profile')
  const planned = downloads.filter(item => item.category !== 'General Brochure' && item.category !== 'Industry Profile')
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Bionics Wastewater Treatment Downloads', url: `${siteConfig.url}/downloads`, hasPart: downloads.filter(item => item.href).map(item => ({ '@type': 'DigitalDocument', name: item.title, description: item.description, url: `${siteConfig.url}${item.href}` })) }
  return <main className="min-h-screen bg-slate-50 pb-20 pt-28">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <PageBreadcrumb items={[{ label: 'Downloads' }]} />
      <header className="grid gap-8 py-10 lg:grid-cols-[1fr_.55fr] lg:items-end lg:py-14"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700">Brochures, profiles and technical resources</p><h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Wastewater Treatment Downloads</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Access current Bionics company and industry profiles. Dedicated profiles are labelled clearly; the company profile is provided as an interim resource where an industry brochure is still being prepared.</p></div><Link href="/faqs" className="inline-flex min-h-12 items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 px-5 font-bold text-emerald-800">Read technical FAQs <ArrowRight className="h-5 w-5" /></Link></header>

      <section aria-labelledby="general-downloads"><p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-700">Start here</p><h2 id="general-downloads" className="mt-2 text-3xl font-black text-slate-950">Company and General Brochure</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{general.map(item => <DownloadCard key={item.id} item={item} />)}</div></section>

      <section className="mt-14" aria-labelledby="industry-downloads"><p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700">Industry-wise downloads</p><h2 id="industry-downloads" className="mt-2 text-3xl font-black text-slate-950">Wastewater Treatment Industry Profiles</h2><p className="mt-3 max-w-3xl text-slate-600">Choose the profile closest to your plant. Application and dosage recommendations still require wastewater analysis and technical assessment.</p><div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{industries.map(item => <DownloadCard key={item.id} item={item} compact />)}</div></section>

      <section className="mt-14" aria-labelledby="planned-downloads"><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">Controlled documents</p><h2 id="planned-downloads" className="mt-2 text-3xl font-black text-slate-950">Planned Technical Resources</h2><p className="mt-3 max-w-3xl text-slate-600">Product, research, safety and application documents will become downloadable after technical review and publication approval.</p><div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{planned.map(item => <DownloadCard key={item.id} item={item} compact />)}</div></section>
    </div>
  </main>
}
