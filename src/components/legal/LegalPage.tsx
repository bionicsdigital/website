import Link from 'next/link'
import { Clock3, Mail, Phone, Sparkles } from 'lucide-react'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb'
import type { LegalPageData } from '@/data/legal-pages'
import LegalToc from './LegalToc'
import { siteConfig } from '@/lib/site'

const siteUrl = siteConfig.url

export default function LegalPage({ page }: { page: LegalPageData }) {
  const Icon = page.icon
  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'Organization', name: 'Bionics Enviro Tech Pvt. Ltd.', url: siteUrl, logo: `${siteUrl}/logo.png`, email: 'bionicsenvirotech@gmail.com', telephone: '+91 90950 00090' },
    { '@context': 'https://schema.org', '@type': 'WebPage', name: page.title, description: page.description, url: `${siteUrl}/${page.slug}`, dateModified: '2026-08-01', isPartOf: { '@type': 'WebSite', name: 'Bionics Enviro Tech', url: siteUrl } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: page.title, item: `${siteUrl}/${page.slug}` }] },
  ]

  return <main className="relative z-10 pt-24 sm:pt-28">
    <a href="#legal-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950">Skip to legal content</a>
    <section className="mx-3 overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#064e3b_0%,#075985_100%)] text-white sm:mx-5 lg:mx-auto lg:max-w-[calc(100%-3rem)]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <PageBreadcrumb dark items={[{ label: page.title }]} />
        <div className="mt-7 max-w-3xl">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10"><Icon className="h-7 w-7" aria-hidden="true" /></div>
          {page.status && <p className="mb-3 inline-flex rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1 text-xs font-bold uppercase tracking-[.12em] text-cyan-100">{page.status}</p>}
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{page.title}</h1>
          <p className="mt-3 text-lg font-semibold text-emerald-100 sm:text-xl">{page.subtitle}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">{page.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/80"><span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">Last updated: {page.updated}</span><span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5"><Clock3 className="h-3.5 w-3.5" />{page.readingTime}</span></div>
        </div>
      </div>
    </section>

    <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10 lg:px-10 lg:py-14">
      <div><LegalToc items={page.sections.map(({ id, title }) => ({ id, title }))} /></div>
      <article id="legal-content" className="min-w-0 rounded-3xl border border-slate-200 bg-white px-5 py-2 shadow-sm sm:px-8 lg:px-10">
        {page.sections.map((section, index) => <section id={section.id} key={section.id} className="scroll-mt-28 border-b border-slate-100 py-7 last:border-0 sm:py-8">
          <div className="flex gap-4"><span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-xs font-bold text-white">{index + 1}</span><div className="min-w-0"><h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">{section.title}</h2>{section.paragraphs?.map((text) => <p key={text} className="mt-4 text-[15px] leading-7 text-slate-600">{text}</p>)}{section.bullets && <ul className="mt-4 space-y-2.5">{section.bullets.map((item) => <li key={item} className="flex gap-3 text-[15px] leading-7 text-slate-600"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />{item}</li>)}</ul>}{section.notice && <div className="mt-5 rounded-2xl border-l-4 border-cyan-500 bg-cyan-50 px-4 py-3 text-sm font-medium leading-6 text-cyan-950">{section.notice}</div>}</div></div>
        </section>)}
      </article>
    </div>

    <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-10 lg:pb-16"><div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#00C853,#00B4D8)] p-6 text-white shadow-xl shadow-emerald-900/10 sm:flex sm:items-center sm:justify-between sm:p-8"><div><p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[.13em]"><Sparkles className="h-4 w-4" />Need help?</p><h2 className="mt-2 text-2xl font-bold">Talk with the Bionics team</h2><p className="mt-2 max-w-xl text-sm text-white/85">For policy questions, quotations or technical assistance, contact our team directly.</p></div><div className="mt-5 flex flex-wrap gap-3 sm:mt-0 sm:justify-end"><a href="mailto:bionicsenvirotech@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-emerald-700 shadow-sm"><Mail className="h-4 w-4" />Email Us</a><a href="tel:+919095000090" className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-sm font-bold text-white"><Phone className="h-4 w-4" />Call Us</a><Link href="/#contact" className="inline-flex items-center rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-sm font-bold text-white">Request Quote</Link></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </main>
}
