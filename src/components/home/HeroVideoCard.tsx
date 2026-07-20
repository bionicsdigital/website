'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'
import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function HeroVideoCard() {
  const reduceMotion = useReducedMotion()

  const videoRef = useRef<HTMLVideoElement>(null)

  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  const MotionDiv =
  motion.div as unknown as ComponentType<
    HTMLAttributes<HTMLDivElement> & MotionProps
  >

  return (
    <MotionDiv
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="
        mx-auto
        w-full
        max-w-[360px]

        sm:max-w-[540px]

        lg:max-w-[650px]
      "
    >
      <div className="relative overflow-hidden rounded-[24px] shadow-2xl">
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="
            absolute
            right-4
            top-4
            z-20

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full
            bg-white/90
            shadow-lg
            backdrop-blur
          "
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            w-full
            object-cover

            aspect-video

            max-h-[220px]

            sm:max-h-[320px]

            lg:max-h-none
          "
        >
          <source
            src="/videos/Intro Video.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </MotionDiv>
  )
}