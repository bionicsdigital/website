import { Building2, Factory, Globe2, Handshake } from 'lucide-react'
import { presenceStats } from '@/data/offices'
const icons = [Building2, Globe2, Factory, Handshake]
export default function PresenceStats() { return <div className="grid grid-cols-2 gap-3">{presenceStats.map((stat, index) => { const Icon = icons[index]; return <div key={stat.label} className="flex min-h-24 items-center gap-3 rounded-xl border border-white/[.12] bg-white/[.05] p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[.08]"><Icon className="h-5 w-5 shrink-0 text-emerald-400" /><span><b className="block text-xl leading-none text-white">{stat.value}</b><span className="mt-1.5 block text-xs leading-4 text-slate-300">{stat.label}</span></span></div> })}</div> }
