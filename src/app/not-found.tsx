import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Home, PackageSearch, Search } from 'lucide-react'

export const metadata: Metadata = { title: 'Page Not Found | Bionics Enviro Tech', robots: { index: false, follow: true } }

const actions = [
  { label: 'Back Home', href: '/', icon: Home, primary: true },
  { label: 'Browse Products', href: '/#products', icon: PackageSearch },
  { label: 'Explore Industries', href: '/#industries', icon: Building2 },
  { label: 'Search Website', href: '/search', icon: Search },
]

export default function NotFound() {
  return <main className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50 px-5 py-28 text-center"><div className="pointer-events-none absolute inset-0" aria-hidden="true">{[...Array(9)].map((_, index) => <span key={index} className="absolute h-3 w-3 animate-pulse rounded-full bg-gradient-to-br from-emerald-300 to-cyan-300 opacity-40" style={{ left: `${8 + index * 11}%`, top: `${18 + (index % 4) * 19}%`, animationDelay: `${index * 180}ms` }} />)}</div><section className="relative max-w-2xl"><p className="bg-gradient-to-r from-[#00C853] to-[#00B4D8] bg-clip-text text-[7rem] font-black leading-none text-transparent sm:text-[10rem]">404</p><p className="mt-2 text-sm font-bold uppercase tracking-[.2em] text-emerald-600">Oops!</p><h1 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-5xl">Page Not Found</h1><p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">Looks like the page you&apos;re looking for doesn&apos;t exist.</p><div className="mt-8 flex flex-wrap justify-center gap-3">{actions.map(({ label, href, icon: Icon, primary }) => <Link key={label} href={href} className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold ${primary ? 'bg-gradient-to-r from-[#00C853] to-[#00B4D8] text-white shadow-lg' : 'border border-slate-200 bg-white text-slate-700'}`}><Icon className="h-4 w-4" />{label}</Link>)}</div></section></main>
}
