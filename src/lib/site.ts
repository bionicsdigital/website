import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Bionics Enviro Tech Pvt. Ltd.',
  shortName: 'Bionics Enviro Tech',
  url: 'https://www.bionicsenvirotech.com',
  description: 'Scientific Nanozyme bioculture manufacturer for industrial and municipal wastewater treatment, ETP, STP and CETP applications in India.',
  logo: '/logo.png',
  ogImage: '/industries/Industrial ETP.png',
  authors: [{ name: 'Bionics Enviro Tech Technical Team', url: 'https://www.bionicsenvirotech.com' }],
} as const

type SeoInput = { title: string; description: string; path: string; keywords: string[]; image?: string; type?: 'website' | 'article'; publishedTime?: string; modifiedTime?: string }

export function createMetadata({ title, description, path, keywords, image = siteConfig.ogImage, type = 'website', publishedTime, modifiedTime }: SeoInput): Metadata {
  const seoTitle = title.length > 60 ? `${title.slice(0, 57).trimEnd()}...` : title
  const expandedDescription = description.length < 150 ? `${description} Learn more from Bionics Enviro Tech and contact our technical team for application-specific guidance.` : description
  const seoDescription = expandedDescription.length > 160 ? `${expandedDescription.slice(0, 157).trimEnd()}...` : expandedDescription
  const url = `${siteConfig.url}${path === '/' ? '' : path}`
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`
  return {
    title: { absolute: seoTitle },
    description: seoDescription,
    keywords,
    authors: [...siteConfig.authors],
    creator: siteConfig.shortName,
    publisher: siteConfig.name,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
    alternates: { canonical: url },
    openGraph: { type, url, title: seoTitle, description: seoDescription, siteName: siteConfig.shortName, images: [{ url: imageUrl, alt: seoTitle }], ...(type === 'article' ? { publishedTime, modifiedTime } : {}) },
    twitter: { card: 'summary_large_image', title: seoTitle, description: seoDescription, images: [imageUrl] },
  }
}
