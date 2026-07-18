'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'
import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const MotionDiv = motion.div as unknown as ComponentType<
  HTMLAttributes<HTMLDivElement> & MotionProps
>

export default function HeroVideoCard() {
  const reduceMotion = useReducedMotion()

  const videoRef = useRef<HTMLVideoElement>(null)

  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  return (
    <MotionDiv
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="mx-auto w-full max-w-[650px]"
    >
      <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(15,23,42,0.18)]">

        {/* Mute Button */}

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition hover:bg-white"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        {/* Video */}

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="aspect-video w-full object-cover"
        >
          <source
            src="/videos/Intro Video.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      </div>
    </MotionDiv>
  )
}