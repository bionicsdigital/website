import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

const orderTitle = 'Buy Wastewater Bioculture'
const description =
  'Submit a bulk order request for Bionics Nanozyme bioculture products used in industrial ETP, STP, anaerobic treatment and organic composting.'
const canonical = `${siteConfig.url}/products/buy`
const image = `${siteConfig.url}${siteConfig.ogImage}`

export const metadata: Metadata = {
  title: orderTitle,
  description,
  keywords: [
    'buy bioculture',
    'ETP bioculture order',
    'STP bioculture order',
    'Nanozyme products',
    'wastewater treatment culture',
  ],
  alternates: { canonical },
  openGraph: {
    type: 'website',
    url: canonical,
    title: `${orderTitle} | ${siteConfig.shortName}`,
    description,
    siteName: siteConfig.shortName,
    images: [{ url: image }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${orderTitle} | ${siteConfig.shortName}`,
    description,
    images: [image],
  },
}

export default function ProductBuyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
