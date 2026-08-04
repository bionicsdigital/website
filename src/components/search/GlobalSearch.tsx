'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { motion as framerMotion } from 'framer-motion'
import { Command, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import SearchExperience from './SearchExperience'

const motion = framerMotion as any

export default function GlobalSearch() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const show = () => setOpen(true)
    const shortcut = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen(true) } }
    window.addEventListener('bionics:open-search', show)
    window.addEventListener('keydown', shortcut)
    return () => { window.removeEventListener('bionics:open-search', show); window.removeEventListener('keydown', shortcut) }
  }, [])
  const navigateResults = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return
    const options = [...event.currentTarget.querySelectorAll<HTMLElement>('[role="option"]')]
    if (!options.length) return
    event.preventDefault()
    const current = options.indexOf(document.activeElement as HTMLElement)
    options[event.key === 'ArrowDown' ? (current + 1) % options.length : (current <= 0 ? options.length - 1 : current - 1)]?.focus()
  }
  return <Dialog open={open} onClose={setOpen} className="relative z-[85]"><div className="fixed inset-0 bg-slate-950/55 backdrop-blur-sm" aria-hidden="true" /><div className="fixed inset-0 overflow-y-auto p-3 sm:p-6"><div className="flex min-h-full items-start justify-center pt-[8vh]"><DialogPanel as={motion.div} initial={{ opacity: 0, scale: .97, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} onKeyDown={navigateResults} className="w-full max-w-2xl rounded-3xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:p-6"><div className="mb-4 flex items-center justify-between"><DialogTitle className="flex items-center gap-2 font-bold text-slate-950"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00C853] to-[#00B4D8] text-white"><Search className="h-4 w-4" /></span>Search Bionics</DialogTitle><div className="flex items-center gap-2"><span className="hidden items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 text-[10px] font-bold text-slate-400 sm:flex"><Command className="h-3 w-3" />K</span><button onClick={() => setOpen(false)} aria-label="Close search" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"><X className="h-5 w-5" /></button></div></div><SearchExperience compact onNavigate={() => setOpen(false)} /><p className="mt-4 text-center text-[11px] text-slate-400">Use Tab or arrow keys to navigate · Enter to open · Esc to close</p></DialogPanel></div></div></Dialog>
}
