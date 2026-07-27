import type { MetadataRoute } from 'next'
import { getAllBlogs } from '@/lib/blog'

export const dynamic = 'force-static'
const baseUrl = 'https://www.bionicsenviro.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.bionicsenviro.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...getAllBlogs().map((blog) => ({ url: `${baseUrl}/blogs/${blog.slug}`, lastModified: blog.updatedDate, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ]
}
