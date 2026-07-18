import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
const testimonials = [
  ['Plant Head, Textile ETP', 'The culture stabilized our biological treatment performance and supported a measurable reduction in operating interventions.'],
  ['Operations Director, Food Processing', 'Bionics brought scientific clarity to a difficult wastewater issue. The support from analysis through monitoring was excellent.'],
  ['Technical Manager, Chemical Plant', 'Nanozyme Bioculture has been a dependable addition to our ETP process, particularly during fluctuating load conditions.'],
]
export default function Testimonials() { return <section className='bg-slate-50 py-24'><div className='mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10'><SectionHeading eyebrow='Client experience' title='Trusted by teams responsible for critical treatment outcomes.' /><div className='mt-12 grid gap-5 lg:grid-cols-3'>{testimonials.map(([role, quote]) => <figure key={role} className='rounded-3xl border border-gray-200 bg-white p-7 shadow-lg transition hover:-translate-y-1.5 hover:shadow-2xl'><div className='flex gap-1 text-amber-400'>{Array.from({length: 5}).map((_, i) => <Star key={i} size={15} fill='currentColor' />)}</div><blockquote className='mt-5 text-base leading-7 text-slate-600'>“{quote}”</blockquote><figcaption className='mt-6 text-sm font-extrabold text-green-600'>{role}</figcaption></figure>)}</div></div></section> }
