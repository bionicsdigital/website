import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";
export default function BlogHero() {
  return (
    <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 text-white">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-28 sm:px-8 lg:px-10 lg:pb-14 lg:pt-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[.18em] text-emerald-100">
          <Sparkles className="h-4 w-4" /> Bionics knowledge centre
        </p>
        <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Better decisions for every wastewater treatment plant.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-emerald-50/90 sm:text-lg sm:leading-8">
          Practical technical guidance on bioculture, ETP and STP operation,
          compliance and sustainable plant performance.
        </p>
        <Link
          href="#articles"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-emerald-900 hover:bg-emerald-50"
        >
          Explore articles <ArrowDown className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
