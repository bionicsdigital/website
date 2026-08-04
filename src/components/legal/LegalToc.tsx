'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, ListTree } from 'lucide-react'

type TocItem = { id: string; title: string }

function TocLinks({ items, active }: { items: TocItem[]; active: string }) {
  return <ol className="space-y-1.5">{items.map((item, index) => <li key={item.id}><a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} className={`flex gap-2 rounded-xl px-3 py-2 text-sm transition ${active === item.id ? 'bg-emerald-50 font-semibold text-emerald-800' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`}><span className="text-xs text-slate-400">{String(index + 1).padStart(2, '0')}</span><span>{item.title}</span></a></li>)}</ol>
}

export default function LegalToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '')
  useEffect(() => {
    const sections = items.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActive(visible[0].target.id)
    }, { rootMargin: '-18% 0px -68% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])
  return <><details className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:hidden"><summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-950"><span className="flex items-center gap-2"><ListTree className="h-4 w-4 text-emerald-600" />On this page</span><ChevronDown className="h-4 w-4 transition group-open:rotate-180" /></summary><div className="mt-4 border-t border-slate-100 pt-3"><TocLinks items={items} active={active} /></div></details><aside className="sticky top-28 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:block" aria-label="On this page"><p className="mb-3 flex items-center gap-2 px-3 text-sm font-bold text-slate-950"><ListTree className="h-4 w-4 text-emerald-600" />On this page</p><TocLinks items={items} active={active} /></aside></>
}
