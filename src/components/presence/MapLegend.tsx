import { offices } from '@/data/offices'

export default function MapLegend({ activeId, onSelect }: { activeId: string | null; onSelect: (id: string) => void }) {
  return <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-300">
    {offices.map((office) => (
      <button
        key={office.id}
        type="button"
        onClick={() => onSelect(office.id)}
        className={`inline-flex items-center gap-2 rounded-full px-2 py-1 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 ${activeId === office.id ? 'bg-white/10 text-white' : ''}`}
      >
        <span
          className="h-2.5 w-2.5 rounded-full shadow-[0_0_0_3px_rgba(255,255,255,.12)]"
          style={{ backgroundColor: office.pinColor }}
          aria-hidden="true"
        />
        <span>{office.type} · {office.city}</span>
      </button>
    ))}
  </div>
}
