"use client";

import HeroContent from "./HeroContent";
import HeroVideoCard from "./HeroVideoCard";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Bionics Enviro Tech introduction"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Background Gradient */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[6] bg-[radial-gradient(circle_at_center,rgba(0,200,83,0.08),transparent_70%)]" />

      {/* Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-20 z-[6] h-64 w-64 rounded-full bg-green-100 opacity-50 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-[6] h-72 w-72 rounded-full bg-blue-100 opacity-40 blur-3xl" />

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-8
          px-5
          pt-20
          pb-10
          sm:px-8
          sm:pt-24
          sm:pb-16
          lg:grid-cols-[52%_48%]
          lg:gap-12
          lg:px-10
          lg:pt-36
          lg:pb-24
        "
      >
        {/* Left */}
        <div className="order-1">
          <HeroContent />
        </div>

        {/* Right */}
        <div className="order-2 flex justify-center">
          <HeroVideoCard />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 hidden lg:block">
        <ScrollIndicator />
      </div>
    </section>
  );
}
