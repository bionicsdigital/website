'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import type { ComponentType, HTMLAttributes } from 'react'
import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function HeroVideoCard() {
  const reduceMotion = useReducedMotion()

  const videoRef = useRef<HTMLVideoElement>(null)
  const autoplayAttempted = useRef(false)

  const [isMuted, setIsMuted] = useState(false)

  const playWithAudio = async () => {
    const video = videoRef.current
    if (!video || autoplayAttempted.current) return

    autoplayAttempted.current = true
    video.muted = false

    try {
      await video.play()
      setIsMuted(false)
    } catch {
      // Browsers often block autoplay with sound until the user interacts.
      video.muted = true
      setIsMuted(true)
      await video.play().catch(() => undefined)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  const MotionDiv =
  motion.div as unknown as ComponentType<
    HTMLAttributes<HTMLDivElement> & MotionProps
  >

  // VIDEO SIZE CONTROLS: edit the max-w values and lg:w percentage below.
  // lg:w-[112%] lets the video grow beyond the hero's right grid column on large screens.
  return (
    <MotionDiv
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="
        mx-auto
        w-full
        max-w-[400px]

        sm:max-w-[600px]

        lg:w-[112%]
        lg:max-w-[720px]
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
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          onCanPlay={playWithAudio}
          className="
            w-full
            object-cover

            aspect-video

            max-h-[245px]

            sm:max-h-[380px]

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
