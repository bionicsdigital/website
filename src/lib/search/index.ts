import products from '@/data/products'
import industries from '@/data/industries'
import { blogs } from '@/data/blogs'
import { jobs } from '@/data/careers'

export type SearchCategory = 'Product' | 'Industry' | 'Blog' | 'FAQ' | 'Career' | 'Page'
export type SearchItem = { id: string; title: string; description: string; href: string; category: SearchCategory; keywords: string }

const pages: SearchItem[] = [
  ['home', 'Home', 'Scientific Nanozyme bioculture manufacturer', '/', 'Page'], ['about', 'About Bionics', 'Research, innovation and wastewater treatment expertise', '/#about', 'Page'], ['contact', 'Contact Us', 'Request technical support or a quotation', '/#contact', 'Page'], ['careers', 'Careers', 'Build your career with Bionics Enviro Tech', '/careers', 'Page'], ['legal', 'Legal & Compliance', 'Privacy, terms, cookies and company policies', '/sitemap', 'Page'],
].map(([id, title, description, href, category]) => ({ id, title, description, href, category: category as SearchCategory, keywords: `${title} ${description}`.toLowerCase() }))

const homeFaqs = [
  ['What is Nanozyme Bioculture?', 'A scientific microbial formulation used to support biological wastewater treatment.'],
  ['Can Nanozyme be used in ETP and STP plants?', 'Nanozyme products support industrial effluent and sewage treatment applications.'],
  ['How does Nanozyme reduce COD and BOD?', 'It strengthens microbial activity and biological organic-load removal.'],
]

export const searchItems: SearchItem[] = [
  ...pages,
  ...products.map((item) => ({ id: `product-${item.slug}`, title: item.title, description: item.subtitle, href: `/products/${item.slug}`, category: 'Product' as const, keywords: `${item.title} ${item.subtitle} ${item.applications.join(' ')}`.toLowerCase() })),
  ...industries.map((item) => ({ id: `industry-${item.slug}`, title: item.name, description: `Nanozyme solutions for ${item.name}`, href: `/industries/${item.slug}`, category: 'Industry' as const, keywords: `${item.name} wastewater effluent nanozyme`.toLowerCase() })),
  ...blogs.map((item) => ({ id: `blog-${item.slug}`, title: item.title, description: item.excerpt, href: `/blogs/${item.slug}`, category: 'Blog' as const, keywords: `${item.title} ${item.excerpt} ${item.tags.join(' ')}`.toLowerCase() })),
  ...jobs.map((item) => ({ id: `career-${item.slug}`, title: item.title, description: `${item.department} · ${item.location}`, href: `/careers#open-positions`, category: 'Career' as const, keywords: `${item.title} ${item.department} ${item.summary}`.toLowerCase() })),
  ...homeFaqs.map(([title, description], index) => ({ id: `faq-${index}`, title, description, href: '/#faq', category: 'FAQ' as const, keywords: `${title} ${description}`.toLowerCase() })),
]

export function searchSite(query: string, category: SearchCategory | 'Everything' = 'Everything') {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  return searchItems.filter((item) => (category === 'Everything' || item.category === category) && (!terms.length || terms.every((term) => item.keywords.includes(term)))).slice(0, 40)
}
