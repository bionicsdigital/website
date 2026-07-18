'use client'

type HeroStatsCardProps = {
    value: string
    label: string
    className?: string
}

export default function HeroStatsCard({ value, label, className = '' }: HeroStatsCardProps) {
    return (
        <div className={`rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl ${className}`}>
            <p className='text-lg font-black tracking-tight text-slate-900'>{value}</p>
            <p className='mt-1 text-sm font-semibold text-slate-600'>{label}</p>
        </div>
    )
}
