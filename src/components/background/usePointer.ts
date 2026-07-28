'use client'

import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

export function usePointer() {
  const pointerX = useMotionValue(-1000); const pointerY = useMotionValue(-1000)
  useEffect(() => { const update = (event: PointerEvent) => { pointerX.set(event.clientX); pointerY.set(event.clientY) }; const reset = () => { pointerX.set(-1000); pointerY.set(-1000) }; window.addEventListener('pointermove', update, { passive: true }); window.addEventListener('blur', reset); return () => { window.removeEventListener('pointermove', update); window.removeEventListener('blur', reset) } }, [pointerX, pointerY])
  return { pointerX, pointerY }
}
