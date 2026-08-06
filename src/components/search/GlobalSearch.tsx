'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Command, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import SearchExperience from './SearchExperience'

export default function GlobalSearch() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const show = () => setOpen(true)
    const shortcut = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen(true) } }
    window.addEventListener('bionics:open-search', show)
    window.addEventListener('keydown', shortcut)
    return () => { window.removeEventListener('bionics:open-search', show); window.removeEventListener('keydown', shortcut) }
  }, [])

  return open && <Dialog static open={open} onClose={setOpen} className="relative z-[85]">
    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-[3px]" aria-hidden="true"/>
    <div className="fixed inset-0 flex items-end justify-center sm:items-center sm:p-6">
      <DialogPanel className="flex max-h-[88dvh] w-full flex-col overflow-hidden rounded-t-[1.75rem] border border-white/60 bg-slate-50 shadow-2xl sm:max-h-[82vh] sm:max-w-3xl sm:rounded-[1.75rem]">
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 py-3 sm:px-5 sm:py-4">
          <DialogTitle className="flex items-center gap-3 font-black text-slate-950"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white"><Search className="h-5 w-5"/></span><span>Search Bionics</span></DialogTitle>
          <div className="flex items-center gap-2"><span className="hidden items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 text-[10px] font-bold text-slate-400 sm:flex"><Command className="h-3 w-3"/>K</span><button type="button" onClick={() => setOpen(false)} aria-label="Close search" className="grid h-10 w-10 place-items-center rounded-full text-slate-500 hover:bg-slate-100"><X className="h-5 w-5"/></button></div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden p-4 sm:p-5"><SearchExperience compact onNavigate={() => setOpen(false)}/></div>
        <p className="hidden shrink-0 border-t border-slate-200 bg-white py-2.5 text-center text-[11px] text-slate-400 sm:block">Arrow keys to navigate · Enter to open · Esc to close</p>
      </DialogPanel>
    </div>
  </Dialog>
}
