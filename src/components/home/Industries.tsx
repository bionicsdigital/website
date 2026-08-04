import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import industries from '@/data/industries'
import SectionHeading from './SectionHeading'

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-gradient-to-b from-white to-slate-50 py-10 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for the Wastewater Demands of Every Industry"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon

            return (
              <Link
                key={industry.name}
                href={`/industries/${industry.slug}`}
                className="
                  group
                  flex
                  items-start
                  gap-4
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  odd:flex-row
                  even:flex-row-reverse
                  hover:-translate-y-1
                  hover:border-sky-400
                  hover:shadow-2xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-500
                  focus:ring-offset-2
                  lg:block
                  lg:p-5
                "
              >
                <div className="science-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white lg:mb-4">
                  <Icon
                    size={24}
                    className="text-blue-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 lg:text-xl">
                    {industry.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 lg:mt-3">
                    {industry.desc}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3 group-hover:text-emerald-600 lg:mt-5">
                    Learn More
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
