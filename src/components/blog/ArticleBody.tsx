import type { ReactNode } from 'react'
import ArticleCta from './ArticleCta'
import ShareButtons from './ShareButtons'
import type { BlogArticle } from '@/types/blog'

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function contentNodes(content: string): ReactNode[] {
  return content.trim().split(/\n\n/).map((block, index) => {
    if (block.startsWith('## ')) {
      const title = block.slice(3)
      return (
        <h2
          id={slugify(title)}
          key={index}
          className="mt-8 scroll-mt-28 text-xl font-black text-slate-900 sm:text-3xl lg:mt-10"
        >
          {title}
        </h2>
      )
    }

    if (block.startsWith('### ')) {
      const title = block.slice(4)
      return (
        <h3
          key={index}
          className="mt-6 text-lg font-bold text-slate-900 sm:text-xl lg:mt-7"
        >
          {title}
        </h3>
      )
    }

    if (block.startsWith('> ')) {
      return (
        <aside
          key={index}
          className="mt-6 rounded-r-2xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-7 text-emerald-950 sm:p-5 sm:text-base"
        >
          {block.slice(2).replace(/\*\*/g, '')}
        </aside>
      )
    }

    if (block.startsWith('- ')) {
      return (
        <ul
          key={index}
          className="mt-4 space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base"
        >
          {block.split('\n').map((line) => (
            <li key={line} className="list-disc">
              {line.slice(2)}
            </li>
          ))}
        </ul>
      )
    }

    if (block.startsWith('| ')) {
      const rows = block
        .split('\n')
        .filter((line) => !line.includes('---'))
        .map((line) => line.split('|').slice(1, -1).map((cell) => cell.trim()))

      return (
        <div
          key={index}
          className="mt-5 overflow-x-auto rounded-xl border border-slate-200"
        >
          <table className="w-full min-w-[520px] text-left text-sm">
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={
                    rowIndex === 0
                      ? 'bg-slate-100 font-bold text-slate-900'
                      : 'border-t border-slate-200 text-slate-700'
                  }
                >
                  {row.map((cell, col) => (
                    <td key={col} className="p-3 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    return (
      <p
        key={index}
        className="mt-4 text-[15px] leading-7 text-slate-700 sm:text-lg sm:leading-8"
      >
        {block}
      </p>
    )
  })
}

export default function ArticleBody({ article }: { article: BlogArticle }) {
  return (
    <article className="min-w-0">
      <div className="border-b border-slate-200 pb-6 sm:pb-7">
        <p className="text-xs font-bold uppercase tracking-[.15em] text-emerald-700">
          {article.category}
        </p>
        <h1 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
          {article.excerpt}
        </p>
        <div className="mt-5 flex flex-col items-start gap-4 text-sm text-slate-500 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <span>
            By <b className="text-slate-700">{article.author.name}</b> -{' '}
            {new Date(article.publishedDate).toLocaleDateString('en-IN', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}{' '}
            - {article.readingTime}
          </span>
          <ShareButtons title={article.title} />
        </div>
      </div>

      <div className="article-content">{contentNodes(article.content)}</div>

      <section className="mt-10 rounded-3xl bg-slate-50 p-5 sm:mt-12 sm:p-8">
        <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
          Frequently asked questions
        </h2>
        <div className="mt-5 space-y-3">
          {article.faq.map((item) => (
            <details
              key={item.question}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <summary className="cursor-pointer text-sm font-bold text-slate-900 sm:text-base">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 p-5 sm:mt-10 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
          About the author
        </p>
        <h2 className="mt-2 text-xl font-black text-slate-900">
          {article.author.name}
        </h2>
        <p className="mt-2 text-sm font-semibold text-slate-500">
          {article.author.role}
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {article.author.bio}
        </p>
      </section>

      <ArticleCta />
    </article>
  )
}
