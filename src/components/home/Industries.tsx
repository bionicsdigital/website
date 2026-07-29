import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import industries from '@/data/industries'
import SectionHeading from './SectionHeading'

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-gradient-to-b from-white to-slate-50 py-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for the Wastewater Demands of Every Industry"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-6 lg:grid-cols-4">
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
                  hover:border-green-500
                  hover:shadow-2xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-500
                  focus:ring-offset-2
                  lg:block
                  lg:p-6
                  lg:hover:-translate-y-2
                "
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 transition-colors duration-300 group-hover:bg-green-600 lg:mb-5 lg:h-14 lg:w-14">
                  <Icon
                    size={24}
                    className="text-green-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 lg:text-xl">
                    {industry.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 lg:mt-3">
                    {industry.desc}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-green-600 transition-all duration-300 group-hover:gap-3 lg:mt-6 lg:text-base">
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
