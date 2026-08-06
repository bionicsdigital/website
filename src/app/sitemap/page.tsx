import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Boxes, Building2, FileText, Home, Map, Scale } from 'lucide-react'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb'
import products from '@/data/products'
import industries from '@/data/industries'
import { getAllBlogs } from '@/lib/blog'
import { createMetadata } from '@/lib/site'

export const metadata: Metadata = createMetadata({ title: 'Website Sitemap | Bionics Enviro Tech', description: 'Browse the complete Bionics Enviro Tech website directory, including Nanozyme products, industry wastewater solutions, blogs, careers and policies.', path: '/sitemap', keywords: ['Bionics Enviro Tech sitemap','wastewater treatment pages','Nanozyme products directory'] })

const groups = [
  { title: 'Main Pages', icon: Home, links: [{ label: 'Home', href: '/' }, { label: 'About Bionics', href: '/#about' }, { label: 'Case Studies', href: '/case-studies' }, { label: 'Testimonials', href: '/testimonials' }, { label: 'Downloads', href: '/downloads' }, { label: 'Awards', href: '/awards' }, { label: 'Contact', href: '/#contact' }, { label: 'Careers', href: '/careers' }] },
  { title: 'Products', icon: Boxes, links: products.map((item) => ({ label: item.title, href: `/products/${item.slug}` })) },
  { title: 'Industries', icon: Building2, links: industries.map((item) => ({ label: item.name, href: `/industries/${item.slug}` })) },
  { title: 'Technical Articles', icon: BookOpen, links: [{ label: 'All Blogs', href: '/blogs' }, ...getAllBlogs().map((item) => ({ label: item.title, href: `/blogs/${item.slug}` }))] },
  { title: 'Legal & Compliance', icon: Scale, links: [{ label: 'Privacy Policy', href: '/privacy-policy' }, { label: 'Terms & Conditions', href: '/terms-and-conditions' }, { label: 'Cookie Policy', href: '/cookie-policy' }, { label: 'Disclaimer', href: '/disclaimer' }, { label: 'Refund Policy', href: '/refund-policy' }, { label: 'Shipping Policy', href: '/shipping-policy' }] },
]

export default function SitemapPage() {
  return <main className="relative z-10 pt-24 sm:pt-28"><section className="mx-3 rounded-[1.75rem] bg-[linear-gradient(135deg,#064e3b,#075985)] text-white sm:mx-5"><div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14"><PageBreadcrumb dark items={[{ label: 'Sitemap' }]} /><div className="mt-7 flex max-w-3xl gap-5"><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10"><Map className="h-7 w-7" /></span><div><h1 className="text-3xl font-extrabold sm:text-5xl">Explore Bionics</h1><p className="mt-3 text-white/75">A clear directory of our products, industry applications, technical articles and policies.</p></div></div></div></section><section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-10 lg:py-14">{groups.map((group) => { const Icon = group.icon; return <article key={group.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center gap-3 border-b border-slate-100 pb-4"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white"><Icon className="h-5 w-5" /></span><h2 className="font-bold text-slate-950">{group.title}</h2></div><ul className="mt-3 space-y-1">{group.links.map((link) => <li key={link.href + link.label}><Link href={link.href} className="flex items-start gap-2 rounded-xl px-2 py-2 text-sm leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"><FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />{link.label}</Link></li>)}</ul></article> })}</section></main>
}
