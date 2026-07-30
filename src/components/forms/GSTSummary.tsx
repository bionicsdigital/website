'use client'

export default function GSTSummary({
    subtotal,
    cgst,
    sgst,
    igst,
    grandTotal,
    state,
}: {
    subtotal: number
    cgst: number
    sgst: number
    igst: number
    grandTotal: number
    state: string
}) {
    const formatCurrency = (value: number) => `₹${Math.round(value).toLocaleString('en-IN')}`
    const isTamilNadu = state === 'Tamil Nadu'

    return (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">GST Summary</h3>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">{state || 'Pending'}</span>
            </div>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between"><span>Subtotal</span><span className="font-semibold text-slate-900">{formatCurrency(subtotal)}</span></div>
                {isTamilNadu ? (
                    <>
                        <div className="flex items-center justify-between"><span>CGST 9%</span><span className="font-semibold text-slate-900">{formatCurrency(cgst)}</span></div>
                        <div className="flex items-center justify-between"><span>SGST 9%</span><span className="font-semibold text-slate-900">{formatCurrency(sgst)}</span></div>
                    </>
                ) : (
                    <div className="flex items-center justify-between"><span>IGST 18%</span><span className="font-semibold text-slate-900">{formatCurrency(igst)}</span></div>
                )}
                <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-900"><span>Grand Total</span><span>{formatCurrency(grandTotal)}</span></div>
            </div>
        </div>
    )
}
