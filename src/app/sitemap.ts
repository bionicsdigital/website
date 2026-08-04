import type { MetadataRoute } from 'next'
import { getAllBlogs } from '@/lib/blog'
import products from '@/data/products'
import industries from '@/data/industries'
import { legalSlugs } from '@/data/legal-pages'

export const dynamic = 'force-static'
const baseUrl = 'https://www.bionicsenvirotech.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/careers`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blogs`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/sitemap`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/search`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    ...products.map((product) => ({ url: `${baseUrl}/products/${product.slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...industries.map((industry) => ({ url: `${baseUrl}/industries/${industry.slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...legalSlugs.map((slug) => ({ url: `${baseUrl}/${slug}`, lastModified, changeFrequency: 'yearly' as const, priority: 0.3 })),
    ...getAllBlogs().map((blog) => ({ url: `${baseUrl}/blogs/${blog.slug}`, lastModified: blog.updatedDate, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ]
}
