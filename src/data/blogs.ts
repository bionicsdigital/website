import { blogs as legacyBlogs } from '../../content/blog'
import type { BlogArticle, BlogCategory } from '@/types/blog'

const categoryMap: Record<string, BlogCategory> = {
  Bioculture: 'Bioculture', ETP: 'ETP', 'Wastewater Treatment': 'Wastewater Treatment', Products: 'STP',
}

const technicalAddendum = `

## Operating checklist

### How to use these checks

Use plant data to make decisions, rather than responding only after outlet quality changes. Record the following in the daily logbook.

| Parameter | Why it matters | Good practice |
| --- | --- | --- |
| pH and temperature | Determines microbial activity | Track every shift and investigate abrupt variation |
| DO and MLSS | Indicates biological capacity | Review with loading and return-sludge data |
| COD/BOD trend | Shows treatment direction | Compare influent, reactor and outlet samples |

> **Best-practice tip:** introduce any process change one at a time, document the dose and observe a complete treatment cycle before making the next adjustment.

## Conclusion

Reliable wastewater treatment comes from healthy biology, disciplined monitoring and a process plan matched to the actual effluent. A technical assessment can turn plant data into an achievable improvement programme.
`

/** Local repository. TODO: replace with MDX, Contentlayer, WordPress, Strapi, Sanity or Payload adapter. */
export const blogs: BlogArticle[] = legacyBlogs.map((blog) => ({
  id: blog.id,
  slug: blog.slug,
  title: blog.title,
  excerpt: blog.excerpt,
  description: blog.metaDescription,
  keywords: [...blog.tags, blog.category, 'Nanozyme Bioculture', 'wastewater treatment'],
  category: categoryMap[blog.category] ?? 'Industrial',
  tags: blog.tags,
  coverImage: blog.coverImage,
  publishedDate: blog.publishedDate,
  updatedDate: blog.updatedDate ?? blog.publishedDate,
  author: { name: blog.author, role: 'Wastewater Treatment Specialists', bio: 'The Bionics Enviro Tech team helps operators build resilient, compliant biological treatment systems.' },
  featured: blog.featured,
  readingTime: blog.readingTime,
  content: `${blog.content}${technicalAddendum}`,
  faq: blog.faq,
  relatedIndustries: blog.relatedIndustries,
  relatedProducts: blog.relatedProducts,
}))

export const blogCategories: BlogCategory[] = ['Bioculture', 'Wastewater Treatment', 'ETP', 'STP', 'Composting', 'Industrial', 'Textile', 'Chemical', 'Pharma', 'Sugar', 'Food & Beverage', 'Municipal']
