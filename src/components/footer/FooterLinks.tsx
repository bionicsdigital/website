import Link from 'next/link'
import type { FooterLinkGroup } from '@/data/footer-links'
export default function FooterLinks({ group }: { group: FooterLinkGroup }) { return <nav aria-label={group.title}><h3 className="text-sm font-bold uppercase tracking-[.13em] text-emerald-300">{group.title}</h3><ul className="mt-5 space-y-2.5">{group.links.map((link) => <li key={link.label}><Link href={link.href} className="text-sm text-slate-300 transition hover:text-emerald-300">{link.label}</Link></li>)}</ul></nav> }
