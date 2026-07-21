/** CMS-neutral article contract. Replace the local repository in lib/blog.ts when a CMS is added. */
export type BlogCategory = 'Bioculture' | 'Wastewater Treatment' | 'ETP' | 'STP' | 'Composting' | 'Industrial' | 'Textile' | 'Chemical' | 'Pharma' | 'Sugar' | 'Food & Beverage' | 'Municipal'

export interface BlogFaq { question: string; answer: string }
export interface BlogArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  description: string
  keywords: string[]
  category: BlogCategory
  tags: string[]
  coverImage: string
  publishedDate: string
  updatedDate: string
  author: { name: string; role: string; bio: string }
  featured: boolean
  readingTime: string
  content: string
  faq: BlogFaq[]
  relatedIndustries: string[]
  relatedProducts: string[]
}
