'use client'

import { CheckCircle2 } from 'lucide-react'

const points = ['Government Awarded', 'ISO Certified', '62 Scientific Cultures', 'Global Supplier']

export default function HeroTrustBar() {
    return (
        <ul className='flex flex-wrap justify-center gap-x-4 gap-y-3 lg:justify-start' aria-label='Bionics Enviro Tech credentials'>
            {points.map((point) => (
                <li key={point} className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm'>
                    <CheckCircle2 size={16} className='text-[#00C853]' aria-hidden='true' />
                    {point}
                </li>
            ))}
        </ul>
    )
}
