import { getAllBlogs } from '@/lib/blog'
import { siteConfig } from '@/lib/site'

const siteUrl = siteConfig.url
const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character]!)
export async function GET() {
  const items = getAllBlogs().map((blog) => `<item><title>${escapeXml(blog.title)}</title><link>${siteUrl}/blogs/${blog.slug}</link><guid isPermaLink="true">${siteUrl}/blogs/${blog.slug}</guid><description>${escapeXml(blog.description)}</description><pubDate>${new Date(blog.publishedDate).toUTCString()}</pubDate><author>${escapeXml(blog.author.name)}</author><category>${escapeXml(blog.category)}</category></item>`).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Bionics Enviro Tech Knowledge Centre</title><link>${siteUrl}/blogs</link><description>Technical guidance on Nanozyme bioculture and wastewater treatment.</description><language>en-IN</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate><atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } })
}
