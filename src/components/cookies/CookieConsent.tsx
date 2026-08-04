'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { AnimatePresence, motion as framerMotion } from 'framer-motion'
import { BarChart3, Cookie, Gauge, Megaphone, Settings2, ShieldCheck, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { allPreferences, defaultPreferences, readConsent, saveConsent, type CookiePreferences } from '@/lib/cookies/consent'

// Framer Motion v11's intrinsic element types are narrower than React 19's DOM attributes.
const motion = framerMotion as any

const categories = [
  { key: 'necessary', title: 'Necessary Cookies', text: 'Required for security, forms and core website functions.', icon: ShieldCheck },
  { key: 'analytics', title: 'Analytics', text: 'Helps us understand aggregate website usage.', icon: BarChart3 },
  { key: 'marketing', title: 'Marketing', text: 'Supports relevant campaign and enquiry measurement.', icon: Megaphone },
  { key: 'preferences', title: 'Preferences', text: 'Remembers choices that improve your experience.', icon: Settings2 },
  { key: 'performance', title: 'Performance', text: 'Measures speed and reliability so we can improve the site.', icon: Gauge },
] as const

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [modal, setModal] = useState(false)
  const [prefs, setPrefs] = useState<CookiePreferences>(defaultPreferences)

  useEffect(() => {
    const saved = readConsent()
    if (saved) setPrefs(saved)
    else {
      const dnt = navigator.doNotTrack === '1'
      setPrefs(dnt ? defaultPreferences : defaultPreferences)
      setVisible(true)
    }
    const open = () => { setPrefs(readConsent() ?? defaultPreferences); setModal(true) }
    window.addEventListener('bionics:open-cookie-settings', open)
    return () => window.removeEventListener('bionics:open-cookie-settings', open)
  }, [])

  const apply = (value: CookiePreferences) => { saveConsent(value); setPrefs(value); setVisible(false); setModal(false) }

  return <>
    <AnimatePresence>{visible && <motion.aside initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} className="fixed bottom-4 left-3 right-3 z-[80] mx-auto max-w-5xl rounded-3xl border border-white/70 bg-white/90 p-5 shadow-2xl shadow-slate-900/20 backdrop-blur-xl sm:bottom-6 sm:p-6" aria-label="Cookie consent"><div className="flex flex-col gap-5 lg:flex-row lg:items-center"><div className="flex min-w-0 flex-1 gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00C853] to-[#00B4D8] text-white"><Cookie className="h-5 w-5" /></span><div><h2 className="font-bold text-slate-950">We Value Your Privacy</h2><p className="mt-1 text-sm leading-6 text-slate-600">We use cookies to improve your experience, analyze website traffic, and personalize content.</p><p className="mt-2 text-xs text-slate-500"><Link href="/privacy-policy" className="font-semibold text-emerald-700 hover:underline">Privacy Policy</Link><span className="mx-2">•</span><Link href="/cookie-policy" className="font-semibold text-emerald-700 hover:underline">Cookie Policy</Link></p></div></div><div className="grid grid-cols-2 gap-2 sm:flex"><button onClick={() => apply(defaultPreferences)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700">Reject All</button><button onClick={() => setModal(true)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700">Customize</button><button onClick={() => apply(allPreferences)} className="col-span-2 rounded-xl bg-gradient-to-r from-[#00C853] to-[#00B4D8] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">Accept All</button></div></div></motion.aside>}</AnimatePresence>
    <Dialog open={modal} onClose={() => setModal(false)} className="relative z-[90]"><div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" aria-hidden="true" /><div className="fixed inset-0 overflow-y-auto p-4"><div className="flex min-h-full items-center justify-center"><DialogPanel as={motion.div} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl rounded-3xl bg-white p-5 shadow-2xl sm:p-7"><div className="flex items-start justify-between"><div><DialogTitle className="text-xl font-bold text-slate-950">Cookie Preferences</DialogTitle><p className="mt-1 text-sm text-slate-600">Choose which optional cookies you allow. Necessary cookies remain enabled.</p></div><button onClick={() => setModal(false)} aria-label="Close cookie preferences" className="rounded-xl p-2 text-slate-500 hover:bg-slate-100"><X className="h-5 w-5" /></button></div><div className="mt-5 space-y-2">{categories.map((category) => { const Icon = category.icon; const enabled = prefs[category.key]; return <div key={category.key} className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3.5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><Icon className="h-5 w-5" /></span><div className="min-w-0 flex-1"><h3 className="text-sm font-bold text-slate-950">{category.title}</h3><p className="text-xs leading-5 text-slate-500">{category.text}</p></div><button role="switch" aria-checked={enabled} disabled={category.key === 'necessary'} onClick={() => category.key !== 'necessary' && setPrefs((current) => ({ ...current, [category.key]: !enabled }))} className={`relative h-7 w-12 shrink-0 rounded-full transition focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${enabled ? 'bg-gradient-to-r from-[#00C853] to-[#00B4D8]' : 'bg-slate-300'} disabled:cursor-not-allowed`}><span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${enabled ? 'left-6' : 'left-1'}`} /><span className="sr-only">{enabled ? 'Enabled' : 'Disabled'}</span></button></div> })}</div><div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:justify-end"><button onClick={() => setModal(false)} className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-600">Cancel</button><button onClick={() => apply(defaultPreferences)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700">Reject All</button><button onClick={() => apply(prefs)} className="rounded-xl border border-emerald-200 px-4 py-2.5 text-sm font-bold text-emerald-700">Save Preferences</button><button onClick={() => apply(allPreferences)} className="col-span-2 rounded-xl bg-gradient-to-r from-[#00C853] to-[#00B4D8] px-5 py-2.5 text-sm font-bold text-white">Accept All</button></div></DialogPanel></div></div></Dialog>
  </>
}
