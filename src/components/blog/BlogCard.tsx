import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react'
import type { BlogArticle } from '@/types/blog'

export default function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blogs/${article.slug}`}
      className="block h-full min-w-0"
    >
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Image
        src={article.coverImage}
        alt={article.title}
        width={800}
        height={480}
        className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
          {article.category}
        </p>
        <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 sm:text-xl">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {article.excerpt}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" />
            {new Date(article.publishedDate).toLocaleDateString('en-IN', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock3 className="h-3.5 w-3.5" />
            {article.readingTime}
          </span>
        </div>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
          Read article <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
    </Link>
  )
}
