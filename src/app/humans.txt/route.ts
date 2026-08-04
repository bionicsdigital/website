import { siteConfig } from '@/lib/site'

export function GET() {
  const content = `/* COMPANY */
Company: Bionics Enviro Tech Pvt Ltd
Website: ${siteConfig.url}

/* TECHNOLOGY */
Next.js
TypeScript
TailwindCSS
Framer Motion
shadcn/ui design conventions
Resend

/* DESIGN */
Scientific Green-Blue Theme

/* SEO */
Enterprise Optimized

/* DEVELOPER */
Name: Configure before deployment
Contact: Configure before deployment
`
  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' } })
}
