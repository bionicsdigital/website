import { Building2, X } from 'lucide-react'
import type { Office } from '@/data/offices'

type Props = {
  office: Office
  mobile?: boolean
  onClose?: () => void
}

export default function OfficeTooltip({
  office,
  mobile = false,
  onClose,
}: Props) {
  return (
    <article
      className={
        mobile
          ? 'rounded-t-3xl bg-white p-5 text-slate-900 shadow-2xl'
          : 'w-52 rounded-xl border border-slate-200 bg-white p-4 shadow-2xl'
      }
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-700">
            <Building2 className="h-3.5 w-3.5" />
            {office.type}
          </p>

          <h3 className="mt-1 text-lg font-bold text-slate-900">
            {office.city}
          </h3>
        </div>

        {mobile && (
          <button
            onClick={onClose}
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <address className="mt-3 space-y-1 text-xs leading-5 not-italic text-slate-600">
        {office.address.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </address>
    </article>
  )
}