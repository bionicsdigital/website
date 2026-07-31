import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

type BreadcrumbItem = {
    label: string
    href?: string
}

export default function PageBreadcrumb({ items, dark = false }: { items: BreadcrumbItem[]; dark?: boolean }) {
    return (
        <nav aria-label="Breadcrumb" className={`inline-flex max-w-full items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur ${dark ? 'border-white/20 bg-white/10 text-emerald-50' : 'border-slate-200 bg-slate-100/90 text-slate-600'}`}>
            <Link href="/" aria-label="Home" className={`shrink-0 transition ${dark ? 'hover:text-white' : 'hover:text-emerald-700'}`}>
                <Home className="h-3.5 w-3.5" />
            </Link>
            {items.map((item) => (
                <span key={item.label} className="flex min-w-0 items-center gap-1">
                    <ChevronRight className={`h-3.5 w-3.5 shrink-0 ${dark ? 'text-white/50' : 'text-slate-400'}`} />
                    {item.href ? (
                        <Link href={item.href} className={`whitespace-nowrap transition ${dark ? 'hover:text-white' : 'hover:text-emerald-700'}`}>{item.label}</Link>
                    ) : (
                        <span className={`max-w-52 truncate ${dark ? 'text-white' : 'text-slate-900'}`}>{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    )
}
