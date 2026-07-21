import { blogs, blogCategories } from '@/data/blogs'

export const getAllBlogs = () => [...blogs].sort((a, b) => +new Date(b.publishedDate) - +new Date(a.publishedDate))
export const getBlogBySlug = (slug: string) => blogs.find((article) => article.slug === slug)
export const getFeaturedBlog = () => blogs.find((article) => article.featured) ?? blogs[0]
export const getBlogCategories = () => blogCategories
export const getRelatedBlogs = (slug: string) => {
  const article = getBlogBySlug(slug)
  return blogs.filter((item) => item.slug !== slug).sort((a, b) => Number(Boolean(b.tags.find((tag) => article?.tags.includes(tag)))) - Number(Boolean(a.tags.find((tag) => article?.tags.includes(tag))))).slice(0, 3)
}
export const getAdjacentBlogs = (slug: string) => {
  const items = getAllBlogs(); const index = items.findIndex((item) => item.slug === slug)
  return { previous: items[index + 1], next: items[index - 1] }
}
