'use client'

import Link from 'next/link'
import { AlertTriangle, Home, Mail, RefreshCw } from 'lucide-react'
import { useEffect } from 'react'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error('Bionics application error', { message: error.message, digest: error.digest, stack: error.stack }) }, [error])
  return <main className="relative z-10 flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-5 py-28"><section className="w-full max-w-xl rounded-3xl border border-white bg-white/90 p-7 text-center shadow-2xl shadow-slate-900/10 backdrop-blur sm:p-10"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 text-white"><AlertTriangle className="h-8 w-8" /></span><h1 className="mt-6 text-3xl font-extrabold text-slate-950">Something Went Wrong</h1><p className="mt-3 text-slate-600">An unexpected error occurred. Please retry, or contact our team if the issue continues.</p><div className="mt-7 grid gap-3 sm:grid-cols-2"><button onClick={reset} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00C853] to-[#00B4D8] px-5 py-3 text-sm font-bold text-white"><RefreshCw className="h-4 w-4" />Retry</button><Link href="/" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700"><Home className="h-4 w-4" />Home</Link><a href="mailto:bionicsenvirotech@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700"><Mail className="h-4 w-4" />Contact Support</a><Link href="/#contact" className="inline-flex items-center justify-center rounded-xl border border-emerald-200 px-5 py-3 text-sm font-bold text-emerald-700">Request Quote</Link></div></section></main>
}
