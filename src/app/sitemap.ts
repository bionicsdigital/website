import type { MetadataRoute } from 'next'
import { getAllBlogs } from '@/lib/blog'
import products from '@/data/products'
import industries from '@/data/industries'
import { legalSlugs } from '@/data/legal-pages'
import { siteConfig } from '@/lib/site'

export const dynamic = 'force-static'
const baseUrl = siteConfig.url

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1 },
    ...products.map((product) => ({ url: `${baseUrl}/products/${product.slug}`, lastModified, changeFrequency: 'weekly' as const, priority: 0.95 })),
    { url: `${baseUrl}/products/buy`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    ...industries.map((industry) => ({ url: `${baseUrl}/industries/${industry.slug}`, lastModified, changeFrequency: 'weekly' as const, priority: 0.95 })),
    { url: `${baseUrl}/blogs`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    ...getAllBlogs().map((blog) => ({ url: `${baseUrl}/blogs/${blog.slug}`, lastModified: blog.updatedDate ? new Date(blog.updatedDate) : lastModified, changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: `${baseUrl}/careers`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/sitemap`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/search`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    ...legalSlugs.map((slug) => ({ url: `${baseUrl}/${slug}`, lastModified, changeFrequency: 'yearly' as const, priority: 0.3 })),
  ]
}
