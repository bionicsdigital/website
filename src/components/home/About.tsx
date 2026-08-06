import { Award, CheckCircle2, Download, FlaskConical, Globe2, Leaf, Microscope } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'

const stats = [{ value: '2014', label: 'Established' }, { value: '62+', label: 'Scientific cultures' }, { value: '50+', label: 'Team members' }, { value: 'Global', label: 'Supply capability' }]
const pillars = [
  { icon: Microscope, title: 'Research driven', text: 'Formulations developed through laboratory validation and practical field performance.' },
  { icon: FlaskConical, title: 'Nanozyme technology', text: 'Advanced microbial cultures engineered for dependable biological treatment.' },
  { icon: Leaf, title: 'Sustainable results', text: 'Support for COD, BOD, sludge and odour reduction with lower process intervention.' },
]

export default function About() {
  return <section id="about" className="relative overflow-hidden bg-white py-12 lg:py-20">
    <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(16,185,129,.1),transparent_28%),radial-gradient(circle_at_92%_88%,rgba(14,165,233,.08),transparent_28%)]"/>
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,.1)] lg:grid-cols-[1.15fr_.85fr]">
        <div className="p-6 sm:p-9 lg:p-12">
          <p className="text-xs font-black uppercase tracking-[.2em] text-emerald-700">About Bionics</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Engineering better biology for wastewater treatment</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg lg:leading-8"><strong className="text-slate-950">{siteConfig.name}</strong> is a scientific manufacturer of Nanozyme Bioculture for industrial and municipal wastewater treatment.</p>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">Our research-based microbial formulations support ETP, STP, CETP, anaerobic digestion and organic-waste composting applications while helping treatment teams improve biological stability.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.brochure} download className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700"><Download className="h-4 w-4"/>Company Profile</a>
            <Link href="/awards" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 text-sm font-bold text-slate-800 hover:border-emerald-500"><Award className="h-4 w-4"/>Awards & Certifications</Link>
          </div>
        </div>

        <aside className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#082a31] to-emerald-950 p-6 text-white sm:p-9 lg:p-12">
          <Globe2 aria-hidden="true" className="absolute -right-12 -top-12 h-56 w-56 text-white/[.04]"/>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-300">Why teams choose Bionics</p>
          <h3 className="mt-4 text-2xl font-black sm:text-3xl">Scientific innovation. Practical treatment support.</h3>
          <ul className="mt-7 grid gap-4 text-sm text-slate-200 sm:grid-cols-2 lg:grid-cols-1">
            {['Government-awarded technology', 'ISO 9001:2015 certified', 'Application-specific technical guidance', 'PAN India and export support'].map((item) => <li key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"/>{item}</li>)}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">{stats.map((stat) => <div key={stat.label} className="bg-white/[.05] p-4"><strong className="block text-2xl font-black text-emerald-300">{stat.value}</strong><span className="mt-1 block text-xs text-slate-300">{stat.label}</span></div>)}</div>
        </aside>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">{pillars.map(({ icon: Icon, title, text }) => <article key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-50 text-cyan-700"><Icon className="h-5 w-5"/></div><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div></article>)}</div>
    </div>
  </section>
}
