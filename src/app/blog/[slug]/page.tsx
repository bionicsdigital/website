import { redirect } from 'next/navigation'
export default async function LegacyBlogArticle({ params }: { params: Promise<{ slug: string }> }) { redirect(`/blogs/${(await params).slug}`) }
