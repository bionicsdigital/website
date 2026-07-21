'use client'

import type { Office } from '@/data/offices'

type MapPinProps = {
  office: Office
  active: boolean
  onActivate: (office: Office) => void
}

export default function MapPin({
  office,
  active,
  onActivate,
}: MapPinProps) {
  return (
    <button
      type="button"
      aria-label={`${office.type} - ${office.city}`}
      aria-pressed={active}
      onClick={(e) => {
        e.stopPropagation()
        onActivate(office)
      }}
      onMouseEnter={() => onActivate(office)}
      className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 outline-none"
      style={{
        left: `${office.x}%`,
        top: `${office.y}%`,
      }}
    >
      {/* Animated pulse */}
      <span
        className={`absolute inset-0 rounded-full ${
          active ? 'animate-ping' : 'group-hover:animate-ping'
        } opacity-40`}
        style={{
          backgroundColor: office.pinColor,
        }}
      />

      {/* Outer Glow */}
      <span
        className="absolute inset-0 rounded-full blur-md opacity-70"
        style={{
          backgroundColor: office.pinColor,
        }}
      />

      {/* Pin */}
      <span
        className={`relative flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-white shadow-xl transition-all duration-300 ${
          active ? 'scale-125' : 'group-hover:scale-110'
        }`}
        style={{
          backgroundColor: office.pinColor,
        }}
      />

      {/* City label */}
      <span
        className={`
          absolute
          left-1/2
          top-7
          -translate-x-1/2
          whitespace-nowrap
          rounded-full
          bg-slate-900/90
          px-2
          py-1
          text-[10px]
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          ${
            active
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
          }
        `}
      >
        {office.city}
      </span>

      <span className="sr-only">
        {office.type} - {office.city}
      </span>
    </button>
  )
}