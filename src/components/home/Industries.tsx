import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import industries from '@/data/industries'
import SectionHeading from './SectionHeading'

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-gradient-to-b from-white to-slate-50 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for the Wastewater Demands of Every Industry"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon

            return (
              <article
                key={industry.name}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-green-500
                  hover:shadow-2xl
                "
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 transition group-hover:bg-green-600">
                  <Icon
                    size={28}
                    className="text-green-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {industry.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {industry.desc}
                </p>

                <Link
                  href={`/industries/${industry.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600 transition hover:gap-3"
                >
                  Learn More
                  <ArrowUpRight size={18} />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}