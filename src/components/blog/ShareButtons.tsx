'use client'

import { useEffect, useState } from 'react'
import { Link2, Share2 } from 'lucide-react'

export default function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const share = async () => {
    const shareUrl = url || window.location.href

    if (navigator.share) {
      await navigator.share({ title, url: shareUrl })
      return
    }

    await navigator.clipboard.writeText(shareUrl)
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 inline-flex items-center gap-1 text-sm font-semibold text-slate-600">
        <Share2 className="h-4 w-4" />
        Share
      </span>
      <button
        type="button"
        onClick={share}
        className="rounded-full border border-slate-200 p-2.5 text-slate-600 hover:text-emerald-700"
        aria-label="Copy or share article link"
      >
        <Link2 className="h-4 w-4" />
      </button>
      <a
        href={
          url
            ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
            : undefined
        }
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-200 px-3 py-2 text-xs font-black text-slate-600 hover:text-emerald-700"
        aria-label="Share on LinkedIn"
      >
        in
      </a>
    </div>
  )
}
