import type { Metadata } from 'next'
import TestimonialCard from '@/components/testimonials/TestimonialCard'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb'
import { testimonials } from '@/data/resource-content'
import { createMetadata, siteConfig } from '@/lib/site'

export const metadata: Metadata = createMetadata({ title: 'Industrial Client Testimonials | Bionics Enviro Tech', description: 'Read verified industrial client experiences with Nanozyme bioculture programmes for textile, chemical, dairy, distillery and municipal treatment plants.', path: '/testimonials', keywords: ['Nanozyme testimonials', 'wastewater treatment client reviews', 'industrial ETP results'] })

export default function TestimonialsPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Industrial Client Testimonials', url: `${siteConfig.url}/testimonials`, mainEntity: { '@type': 'ItemList', itemListElement: testimonials.map((item, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'Review', reviewBody: item.recommendation, reviewRating: { '@type': 'Rating', ratingValue: item.rating, bestRating: 5 }, author: { '@type': 'Person', name: item.clientName }, itemReviewed: { '@type': 'Organization', name: siteConfig.shortName } } })) } }
  return <main className="min-h-screen bg-slate-50 pb-16 pt-28"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><PageBreadcrumb items={[{ label: 'Testimonials' }]} /><header className="max-w-4xl py-10 lg:py-12"><p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700">Verified industrial experience</p><h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-6xl">Client Testimonials</h1><p className="mt-5 text-lg leading-8 text-slate-600">Representative client experiences showing the value of plant assessment, biological support and disciplined operating control.</p></header><section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{testimonials.map((item) => <TestimonialCard key={item.id} item={item} />)}</section></div></main>
}
