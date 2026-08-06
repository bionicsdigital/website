import type { Metadata } from 'next'
import AwardsExplorer from '@/components/awards/AwardsExplorer'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb'
import { awardRecords } from '@/data/awards'
import { createMetadata, siteConfig } from '@/lib/site'

export const metadata: Metadata = createMetadata({
  title: 'Awards and Certifications | Bionics Enviro Tech',
  description: 'Explore Bionics Enviro Tech awards, scientific recognitions, quality certificates and media features supporting our environmental biotechnology expertise.',
  path: '/awards',
  keywords: ['Bionics awards', 'ISO 9001 certificate', 'scientific recognition', 'environmental biotechnology awards'],
})

export default function AwardsPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Awards and Certifications', url: `${siteConfig.url}/awards`, hasPart: awardRecords.map((item) => ({ '@type': 'CreativeWork', name: item.title, description: item.description, image: `${siteConfig.url}${item.image}` })) }
  return <main className="min-h-screen bg-slate-50 pb-16 pt-28">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <PageBreadcrumb items={[{ label: 'Awards' }]}/>
      <header className="max-w-4xl py-10 lg:py-12">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700">Scientific recognition</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-6xl">Awards, Certificates and Recognitions</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">Explore the awards, certifications and independent recognition supporting our scientific manufacturing journey.</p>
      </header>
      <AwardsExplorer/>
    </div>
  </main>
}
