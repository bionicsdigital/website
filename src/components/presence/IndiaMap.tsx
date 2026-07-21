'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { offices, type Office } from '@/data/offices'

import MapLegend from './MapLegend'
import MapPin from './MapPin'
import OfficeTooltip from './OfficeTooltip'

function getTooltipStyle(office: Office) {
  switch (office.id) {
    case 'erode':
      return {
        left: `${office.x}%`,
        top: `${office.y}%`,
        transform: 'translate(-110%, -55%)',
      }

    case 'chennai':
      return {
        left: `${office.x}%`,
        top: `${office.y}%`,
        transform: 'translate(20px, -55%)',
      }

    case 'jaunpur':
      return {
        left: `${office.x}%`,
        top: `${office.y}%`,
        transform: 'translate(-50%, -115%)',
      }

    default:
      return {
        left: `${office.x}%`,
        top: `${office.y}%`,
        transform: 'translate(-50%, -110%)',
      }
  }
}

export default function IndiaMap() {
  const [active, setActive] = useState<Office | null>(null)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }

    const closeOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setActive(null)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('mousedown', closeOutside)

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('mousedown', closeOutside)
    }
  }, [])

  return (
    <div ref={ref}>
      <div
        className="relative h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur sm:h-[460px] lg:h-[590px]"
        onClick={() => setActive(null)}
      >
        <Image
          src="/india-map.svg"
          alt="India Map"
          fill
          className="object-contain p-5 sm:p-7"
          sizes="(max-width:1024px)100vw,60vw"
        />

        {offices.map((office) => (
          <MapPin
            key={office.id}
            office={office}
            active={active?.id === office.id}
            onActivate={setActive}
          />
        ))}

        {/* Desktop Tooltip */}
        {active && (
          <div
            className="absolute z-40 hidden lg:block"
            style={getTooltipStyle(active)}
            onClick={(e) => e.stopPropagation()}
          >
            <OfficeTooltip office={active} />
          </div>
        )}
      </div>

      <div className="mt-5">
        <MapLegend
          activeId={active?.id ?? null}
          onSelect={(id) =>
            setActive(
              offices.find((office) => office.id === id) ?? null
            )
          }
        />
      </div>

      {/* Mobile Bottom Sheet */}
      {active && (
        <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 -top-[100vh] bg-black/40"
            onClick={() => setActive(null)}
          />

          <div className="relative">
            <OfficeTooltip
              office={active}
              mobile
              onClose={() => setActive(null)}
            />
          </div>
        </div>
      )}
    </div>
  )
}