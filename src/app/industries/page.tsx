import type { Metadata } from 'next'
import Industries from '@/components/home/Industries'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb'
import { createMetadata, siteConfig } from '@/lib/site'

export const metadata: Metadata = createMetadata({
  title: 'Industrial Wastewater Treatment Industries | Bionics Enviro Tech',
  description: 'Explore Nanozyme wastewater solutions for textile, sugar, distillery, chemical, pharmaceutical, dairy, food, paper, ETP, STP and CETP plants.',
  path: '/industries',
  keywords: ['Industrial Wastewater Treatment', 'Industry Wastewater Solutions', 'Nanozyme Bioculture'],
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Industries Served',
  url: `${siteConfig.url}/industries`,
  description: 'Industrial sectors served by Bionics Enviro Tech wastewater treatment solutions.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: `${siteConfig.url}/industries` },
    ],
  },
}

export default function IndustriesPage() {
  return (
    <main className="pt-24 lg:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <PageBreadcrumb items={[{ label: 'Industries' }]} />
      </div>
      <Industries />
    </main>
  )
}
