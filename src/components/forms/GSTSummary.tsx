'use client'

import { Badge } from 'lucide-react'

export default function GSTSummary({ subtotal, cgst, sgst, igst, grandTotal, state }: { subtotal: number; cgst: number; sgst: number; igst: number; grandTotal: number; state: string }) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">GST Summary</h3>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">{state || 'Pending'}</span>
            </div>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between"><span>Subtotal</span><span className="font-semibold text-slate-900">₹{subtotal.toLocaleString()}</span></div>
                <div className="flex items-center justify-between"><span>CGST</span><span className="font-semibold text-slate-900">₹{cgst.toLocaleString()}</span></div>
                <div className="flex items-center justify-between"><span>SGST</span><span className="font-semibold text-slate-900">₹{sgst.toLocaleString()}</span></div>
                <div className="flex items-center justify-between"><span>IGST</span><span className="font-semibold text-slate-900">₹{igst.toLocaleString()}</span></div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-900"><span>Grand Total</span><span>₹{grandTotal.toLocaleString()}</span></div>
            </div>
        </div>
    )
}
