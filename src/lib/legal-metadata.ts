import type { Metadata } from 'next'
import { legalPages } from '@/data/legal-pages'

const siteUrl = 'https://www.bionicsenviro.com'

export function createLegalMetadata(slug: string): Metadata {
  const page = legalPages[slug]
  return { title: `${page.title} | Bionics Enviro Tech`, description: page.description, alternates: { canonical: `/${slug}` }, openGraph: { title: page.title, description: page.description, url: `${siteUrl}/${slug}`, siteName: 'Bionics Enviro Tech', type: 'website' }, twitter: { card: 'summary', title: page.title, description: page.description } }
}
