import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.bionicsenviro.com'

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/', '/maintenance'] }, sitemap: `${baseUrl}/sitemap.xml`, host: baseUrl }
}
