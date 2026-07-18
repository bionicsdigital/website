'use client'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from './SectionHeading'
const questions = [
  ['What is Nanozyme Bioculture?', 'Nanozyme Bioculture is a scientific microbial formulation developed to strengthen biological wastewater treatment, helping plants achieve efficient organic load reduction and stable performance.'],
  ['Can bioculture be used in both ETP and STP plants?', 'Yes. Our formulations are selected according to wastewater characteristics and can support industrial effluent treatment plants, sewage treatment plants, CETPs and other biological treatment applications.'],
  ['How does bioculture help reduce COD and BOD?', 'Active, application-specific microbial cultures help enhance the biological breakdown of biodegradable pollutants, supporting faster and more resilient COD and BOD reduction.'],
  ['Does Nanozyme Bioculture produce more sludge?', 'Nanozyme solutions are designed to encourage efficient biological conversion and support reduced sludge generation when used with an appropriately operated treatment process.'],
  ['How do I choose the right product for my plant?', 'Our technical team begins with your water analysis, process configuration and performance goals before recommending a suitable culture and implementation approach.'],
]
export default function FAQ() { const [open, setOpen] = useState(0); return <section id='blog' className='bg-white py-24'><div className='mx-auto max-w-[850px] px-5 sm:px-8'><SectionHeading eyebrow='Frequently asked questions' title='Wastewater treatment questions, answered.' /><div className='mt-12 divide-y divide-gray-200 rounded-3xl border border-gray-200 bg-white shadow-lg'>{questions.map(([q, a], i) => <div key={q}><button onClick={() => setOpen(open === i ? -1 : i)} className='flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold text-slate-900' aria-expanded={open === i}><span>{q}</span><ChevronDown size={19} className={`shrink-0 text-green-600 transition ${open === i ? 'rotate-180' : ''}`} /></button>{open === i && <p className='px-5 pb-5 text-sm leading-7 text-slate-600'>{a}</p>}</div>)}</div></div></section> }
