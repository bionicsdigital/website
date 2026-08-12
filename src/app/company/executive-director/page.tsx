import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Building2, FlaskConical, Newspaper } from 'lucide-react'

import PageBreadcrumb from '@/components/ui/PageBreadcrumb'
import { createMetadata, siteConfig } from '@/lib/site'

export const metadata: Metadata = createMetadata({
  title: 'Dr. M. Parameswari Sasikumar | Bionics Enviro Tech',
  description: 'Learn about Dr. M. Parameswari Sasikumar, Executive Director of Research and Development at Bionics Enviro Tech, and her wastewater research work.',
  path: '/company/executive-director',
  keywords: ['Dr M Parameswari Sasikumar', 'Bionics Enviro Tech executive director', 'industrial wastewater research'],
})

const internationalPublications = [
  'Evaluating the impact of textile and dye effluent irrigation and amendments on major nutrient nitrogen status of soil under maize crop — Elixir International Journal, 2013.',
  'Impact of textile and dye industry liquid and solid waste and amendments on potassium status of soil under sunflower crop — Elixir International Journal, 2013.',
  'Influence of textile and dye effluent irrigation and amendments on micronutrients iron and copper status in soil under maize crop — International Journal of Current Trends in Research, 2013.',
  'Impact of various concentrations of textile and dye effluent and sludge on soil fertility, growth and yield of maize crop — Rasayan Journal of Chemistry, 2012.',
  'Vermicomposting of textile and dye sludge with carbonaceous materials and its carbon and nitrogen status — Elixir International Journal, 2013.',
  'Textile and dye industry effluent, sludge and amendments on heavy metals in maize-cultivated soil — International Journal of Applied and Natural Sciences, 2013.',
]

const nationalPublications = [
  'Impact of textile and dye effluent irrigation on paddy and maize growth parameters — Journal of Environmental Science and Sustainability, 2013.',
  'Impact of textile and dye effluent irrigation on germination and growth in cereals — Research in Environment and Life Sciences, 2013.',
  'Phytoremediation efficiency of sunflower under textile and dye industry effluent and sludge application — Research in Environment and Life Sciences, 2013.',
  'Vermicomposting of textile and dye sludge with carbonaceous materials — Journal of Environmental Science and Sustainability, 2013.',
]

const researchThemes = [
  'Industrial effluent and wastewater treatment',
  'Textile and dye effluent management',
  'Biological treatment and microbial applications',
  'Solid and liquid waste management',
  'Composting, vermicomposting and soil response',
]

export default function ExecutiveDirectorPage() {
  const pageUrl = `${siteConfig.url}/company/executive-director`
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      url: pageUrl,
      name: 'Dr. M. Parameswari Sasikumar — Executive Director',
      mainEntity: {
        '@type': 'Person',
        name: 'Dr. M. Parameswari Sasikumar',
        jobTitle: 'Executive Director — Research & Development',
        worksFor: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
        knowsAbout: researchThemes,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Company', item: `${siteConfig.url}/#about` },
        { '@type': 'ListItem', position: 3, name: 'Executive Director', item: pageUrl },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 pb-16 pt-28">
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <PageBreadcrumb items={[{ label: 'Company', href: '/#about' }, { label: 'Executive Director' }]} />

        <header className="grid gap-8 py-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:py-14">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-emerald-700">Scientific leadership</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl">Dr. M. Parameswari Sasikumar</h1>
            <p className="mt-4 text-lg font-bold text-emerald-800 sm:text-xl">Executive Director — Research &amp; Development</p>
          </div>
          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Dr. M. Parameswari Sasikumar leads research and development at Bionics Enviro Tech, with more than 20 years of experience spanning university research, industrial research and the monitoring of industrial effluent treatment plants.</p>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4" aria-label="Executive profile overview">
          {[
            [FlaskConical, 'Research focus', 'Industrial wastewater treatment and biological applications'],
            [Building2, 'Current leadership', 'Research and development at Bionics Enviro Tech'],
            [BookOpen, 'Academic work', 'Effluent, sludge, soil response and waste-management research'],
            [Newspaper, 'Independent profile', 'Featured by The Times of India in May 2009'],
          ].map(([Icon, title, text]) => {
            const CardIcon = Icon as typeof FlaskConical
            return <article key={String(title)} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><CardIcon className="h-6 w-6 text-emerald-600" /><h2 className="mt-4 font-black text-slate-950">{String(title)}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{String(text)}</p></article>
          })}
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-black uppercase tracking-[.18em] text-emerald-700">Leadership profile</p>
            <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">Research transformed into industrial application</h2>
            <div className="mt-5 space-y-4 leading-7 text-slate-600">
              <p>Her academic and applied work covers industrial effluent, textile and dye wastewater, solid and liquid waste management, composting and biological treatment. At Bionics, she guides research associated with Nanozyme Bioculture and its application across industrial sectors.</p>
              <p>Her published work includes studies on effluent irrigation, sludge management, soil nutrients, phytoremediation, vermicomposting and microbial processes. She has also presented research through national and international seminars, conferences and technical programmes.</p>
            </div>
          </section>

          <aside className="rounded-3xl bg-gradient-to-br from-slate-950 via-[#07343b] to-emerald-900 p-6 text-white shadow-xl sm:p-8">
            <p className="text-xs font-black uppercase tracking-[.18em] text-emerald-300">Research themes</p>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-100">{researchThemes.map(theme => <li key={theme} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">{theme}</li>)}</ul>
          </aside>
        </div>

        <section className="mt-8 rounded-3xl border border-cyan-100 bg-cyan-50/70 p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[.18em] text-cyan-800">Media recognition</p>
          <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">“I use my knowledge gained during my PhD to recycle effluents”</h2>
          <p className="mt-2 text-sm font-bold text-slate-600">The Times of India — Chennai, Times City, 28 May 2009, page 4</p>
          <p className="mt-5 max-w-5xl leading-7 text-slate-700">The newspaper profile described her education in agriculture and environmental science, research into solid and liquid waste management, industrial consultancy experience and preference for applied environmental work. It also reported her work on microbial enzymes for recycling industrial effluents and consultancy in water treatment.</p>
          <p className="mt-4 text-xs leading-5 text-slate-500">Historical career information in this section is attributed to the 2009 newspaper profile and reflects her position at the time of publication.</p>
        </section>

        <section className="mt-8">
          <p className="text-xs font-black uppercase tracking-[.18em] text-emerald-700">Research record</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">Research publications</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">Highlights from the publication record supplied by Bionics Enviro Tech. Bibliographic details should be consulted for formal citation.</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {[['International publications', internationalPublications], ['National publications', nationalPublications]].map(([title, items]) => <article key={title as string} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h3 className="text-xl font-black text-slate-950">{title as string}</h3><ol className="mt-5 grid gap-4 text-sm leading-6 text-slate-600">{(items as string[]).map((item, index) => <li key={item} className="grid grid-cols-[auto_1fr] gap-3"><span className="font-black text-emerald-700">{String(index + 1).padStart(2, '0')}</span><span>{item}</span></li>)}</ol></article>)}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-cyan-600 p-6 text-white shadow-xl sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div><h2 className="text-2xl font-black sm:text-3xl">Discuss an industrial wastewater application</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">Share your plant conditions with the Bionics technical team for application-specific guidance.</p></div>
          <Link href="/#contact" className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-black text-emerald-800 lg:mt-0">Request a Quote<ArrowRight className="h-4 w-4" /></Link>
        </section>
      </div>
    </main>
  )
}
