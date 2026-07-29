import BlogCard from './BlogCard'
import type { BlogArticle } from '@/types/blog'

export default function RelatedPosts({ articles }: { articles: BlogArticle[] }) {
  return (
    <section className="mt-10 border-t border-slate-200 pt-8 sm:mt-14 sm:pt-12">
      <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
        Continue learning
      </p>
      <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
        Related articles
      </h2>
      <div className="mt-6 grid gap-5 sm:mt-7 md:grid-cols-3 md:gap-6">
        {articles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
