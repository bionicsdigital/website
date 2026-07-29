'use client'

import { useCallback, useEffect, useRef } from 'react'

export function useOutsideClick<T extends HTMLElement>(
  active: boolean,
  onOutsideClick: () => void
) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!active) return

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Node)) return
      if (!ref.current || ref.current.contains(target)) return
      onOutsideClick()
    }

    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [active, onOutsideClick])

  return ref
}

export function useEscapeKey(active: boolean, onEscape: () => void) {
  useEffect(() => {
    if (!active) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onEscape()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active, onEscape])
}

export function useStableCallback(callback: () => void) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return useCallback(() => callbackRef.current(), [])
}
