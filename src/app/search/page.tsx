import type { Metadata } from 'next'
import { Search } from 'lucide-react'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb'
import SearchExperience from '@/components/search/SearchExperience'

const siteUrl = 'https://www.bionicsenviro.com'
export const metadata: Metadata = { title: 'Search | Bionics Enviro Tech', description: 'Search Bionics products, industry solutions, technical articles, FAQs and careers.', alternates: { canonical: '/search' }, openGraph: { title: 'Search Bionics Enviro Tech', description: 'Find products, solutions and technical resources.', url: `${siteUrl}/search`, type: 'website' }, twitter: { card: 'summary', title: 'Search Bionics Enviro Tech', description: 'Find products, solutions and technical resources.' } }

export default function SearchPage() {
  const schemas = [{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Search', url: `${siteUrl}/search`, potentialAction: { '@type': 'SearchAction', target: `${siteUrl}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' } }, { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Search', item: `${siteUrl}/search` }] }]
  return <main className="relative z-10 min-h-screen pt-24 sm:pt-28"><section className="mx-3 rounded-[1.75rem] bg-[linear-gradient(135deg,#064e3b,#075985)] text-white sm:mx-5"><div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14"><PageBreadcrumb dark items={[{ label: 'Search' }]} /><div className="mt-7 flex items-center gap-4"><span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10"><Search className="h-7 w-7" /></span><div><h1 className="text-3xl font-extrabold sm:text-5xl">Search Bionics</h1><p className="mt-2 text-white/70">Find the right product, industry solution or technical answer.</p></div></div></div></section><section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:py-14"><SearchExperience /></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} /></main>
}
