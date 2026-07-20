'use client'

import HeroContent from './HeroContent'
import HeroVideoCard from './HeroVideoCard'
import ScrollIndicator from './ScrollIndicator'

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Bionics Enviro Tech introduction"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,200,83,0.08),transparent_70%)]"
      />

      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-green-100 blur-3xl opacity-50" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-40" />

      <div
        className="
          relative
          mx-auto
          max-w-7xl

          px-5
          sm:px-8
          lg:px-10

          pt-20
          sm:pt-24
          lg:pt-36

          pb-10
          sm:pb-16
          lg:pb-24

          grid
          items-center
          gap-8
          lg:gap-12
          lg:grid-cols-[52%_48%]
        "
      >
        {/* Content First on Mobile */}
        <div className="order-1">
          <HeroContent />
        </div>

        {/* Video */}
        <div className="order-2 flex justify-center">
          <HeroVideoCard />
        </div>
      </div>

      <div className="hidden lg:block">
        <ScrollIndicator />
      </div>
    </section>
  )
}