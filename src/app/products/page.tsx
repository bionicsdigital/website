import type { Metadata } from 'next'
import Products from '@/components/home/Products'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb'
import { createMetadata, siteConfig } from '@/lib/site'

export const metadata: Metadata = createMetadata({
  title: 'Nanozyme Bioculture Products | Bionics Enviro Tech',
  description: 'Explore Nanozyme bioculture products for aerobic, anaerobic, ETP, STP, sugar, distillery and organic composting applications.',
  path: '/products',
  keywords: ['Nanozyme Bioculture Products', 'ETP Bioculture', 'STP Bioculture'],
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Nanozyme Bioculture Products',
  url: `${siteConfig.url}/products`,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteConfig.url}/products` },
    ],
  },
}

export default function ProductsPage() {
  return (
    <main className="pt-24 lg:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <PageBreadcrumb items={[{ label: 'Products' }]} />
      </div>
      <Products />
    </main>
  )
}
