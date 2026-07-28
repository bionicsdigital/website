export type ParticleLayer = 'background' | 'middle' | 'foreground'
export type ParticleSpec = { id: string; x: number; y: number; size: number; opacity: number; blur: number; brightness: number; rotation: number; duration: number; delay: number; amplitudeX: number; amplitudeY: number; stretchX: number; stretchY: number; layer: ParticleLayer }

function seededRandom(seed: number) { let value = seed >>> 0; return () => { value = (value * 1664525 + 1013904223) >>> 0; return value / 4294967296 } }

export function createParticles(total: number, seed = 20260728): ParticleSpec[] {
  const random = seededRandom(seed)
  return Array.from({ length: total }, (_, index) => {
    const layer: ParticleLayer = index % 7 === 0 ? 'foreground' : index % 3 === 0 ? 'middle' : 'background'
    const layerScale = layer === 'foreground' ? 1.25 : layer === 'middle' ? 1 : 0.72
    const columns = 16; const x = ((index * 7) % columns) * (100 / columns) + random() * 5 + 1; const y = (Math.floor(index / columns) * 17 + random() * 13) % 100
    return { id: `particle-${index}`, x: Math.min(x, 98), y, size: Math.round((18 + random() * 46) * layerScale), opacity: 0.05 + random() * (layer === 'foreground' ? 0.2 : 0.15), blur: layer === 'background' ? 0.4 + random() * 1.6 : random() * 0.75, brightness: 0.88 + random() * 0.35, rotation: Math.round(random() * 360), duration: 13 + random() * 20, delay: -random() * 16, amplitudeX: (8 + random() * 22) * layerScale, amplitudeY: (10 + random() * 26) * layerScale, stretchX: 0.86 + random() * 0.34, stretchY: 0.86 + random() * 0.34, layer }
  })
}

export function particleCountForWidth(width: number) { if (width < 640) return 40; if (width < 1024) return 70; if (width < 1440) return 100; return 140 }
