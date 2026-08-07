import products from '@/data/products'
import industries from '@/data/industries'
import { blogs } from '@/data/blogs'
import { jobs } from '@/data/careers'
import { legalPages } from '@/data/legal-pages'

export type SearchCategory = 'Product' | 'Industry' | 'Blog' | 'FAQ' | 'Career' | 'Page'
export type SearchItem = { id: string; title: string; description: string; href: string; category: SearchCategory; keywords: string }

const pages: SearchItem[] = [
  ['bioculture-manufacturer-india', 'Bioculture Manufacturer in India', 'Nanozyme bioculture specifications, benefits, comparison and application guidance', '/bioculture-manufacturer-in-india', 'Page'],
  ['home', 'Home', 'Scientific Nanozyme bioculture manufacturer', '/', 'Page'], ['about', 'About Bionics', 'Research, innovation and wastewater treatment expertise', '/#about', 'Page'], ['industries', 'Industries', 'Wastewater treatment solutions for every industry we serve', '/industries', 'Page'], ['contact', 'Contact Us', 'Request technical support or a quotation', '/#contact', 'Page'], ['careers', 'Careers', 'Build your career with Bionics Enviro Tech', '/careers', 'Page'], ['testimonials', 'Client Testimonials', 'Industrial client wastewater treatment experiences', '/testimonials', 'Page'], ['case-studies', 'Case Studies', 'Industrial wastewater implementation and results', '/case-studies', 'Page'], ['downloads', 'Downloads Center', 'Company profile brochures and technical documents', '/downloads', 'Page'], ['faqs', 'Bioculture FAQs', 'Answers about ETP, STP, aerobic, anaerobic and septic tank bioculture', '/faqs', 'FAQ'], ['awards', 'Awards and Certificates', 'Scientific awards certificates and recognition', '/awards', 'Page'], ['legal', 'Legal & Compliance', 'Privacy, terms, cookies and company policies', '/sitemap', 'Page'],
].map(([id, title, description, href, category]) => ({ id, title, description, href, category: category as SearchCategory, keywords: `${title} ${description}`.toLowerCase() }))

const legalItems: SearchItem[] = Object.values(legalPages).map((item) => ({ id: `legal-${item.slug}`, title: item.title, description: item.description, href: `/${item.slug}`, category: 'Page', keywords: `${item.title} ${item.description} legal policy compliance`.toLowerCase() }))

const homeFaqs = [
  ['What is Nanozyme Bioculture?', 'A scientific microbial formulation used to support biological wastewater treatment.'],
  ['Can Nanozyme be used in ETP and STP plants?', 'Nanozyme products support industrial effluent and sewage treatment applications.'],
  ['How does Nanozyme reduce COD and BOD?', 'It strengthens microbial activity and biological organic-load removal.'],
]

export const searchItems: SearchItem[] = [
  ...pages,
  ...legalItems,
  ...products.map((item) => ({ id: `product-${item.slug}`, title: item.title, description: item.subtitle, href: `/products/${item.slug}`, category: 'Product' as const, keywords: `${item.title} ${item.subtitle} ${item.applications.join(' ')}`.toLowerCase() })),
  ...industries.map((item) => {
    const isChemical = item.slug === 'chemical-industry-wastewater-treatment'
    return { id: `industry-${item.slug}`, title: isChemical ? 'Chemical Industry Wastewater Treatment' : item.name, description: isChemical ? 'Nanozyme bioculture support for chemical ETP and biological wastewater treatment' : `Nanozyme solutions for ${item.name}`, href: `/industries/${item.slug}`, category: 'Industry' as const, keywords: `${item.name} wastewater effluent nanozyme`.toLowerCase() }
  }),
  ...blogs.map((item) => ({ id: `blog-${item.slug}`, title: item.title, description: item.excerpt, href: `/blogs/${item.slug}`, category: 'Blog' as const, keywords: `${item.title} ${item.excerpt} ${item.tags.join(' ')}`.toLowerCase() })),
  ...jobs.map((item) => ({ id: `career-${item.slug}`, title: item.title, description: `${item.department} · ${item.location}`, href: `/careers#open-positions`, category: 'Career' as const, keywords: `${item.title} ${item.department} ${item.summary}`.toLowerCase() })),
  ...homeFaqs.map(([title, description], index) => ({ id: `faq-${index}`, title, description, href: '/faqs', category: 'FAQ' as const, keywords: `${title} ${description}`.toLowerCase() })),
]

export function searchSite(query: string, category: SearchCategory | 'Everything' = 'Everything') {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  const fuzzyScore = (text: string, term: string) => {
    const direct = text.indexOf(term)
    if (direct >= 0) return 100 - Math.min(direct, 50)
    let textIndex = 0
    let matched = 0
    for (const character of term) {
      textIndex = text.indexOf(character, textIndex)
      if (textIndex < 0) break
      matched += 1
      textIndex += 1
    }
    return matched / term.length >= 0.75 ? Math.round((matched / term.length) * 50) : 0
  }
  return searchItems
    .filter((item) => category === 'Everything' || item.category === category)
    .map((item) => ({ item, score: terms.reduce((total, term) => total + fuzzyScore(`${item.title.toLowerCase()} ${item.keywords}`, term), 0) }))
    .filter(({ score }) => !terms.length || score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, 40)
    .map(({ item }) => item)
}
