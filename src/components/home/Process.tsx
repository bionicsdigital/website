import {
  Activity,
  Beaker,
  ClipboardCheck,
  SearchCheck,
  Settings2,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

const steps = [
  {
    title: "Requirement Assessment",
    description:
      "Understand the wastewater characteristics, treatment process and operational challenges.",
    icon: ClipboardCheck,
  },
  {
    title: "Water Analysis",
    description:
      "Evaluate influent characteristics, COD, BOD and biological conditions.",
    icon: Beaker,
  },
  {
    title: "Product Recommendation",
    description:
      "Recommend the appropriate Nanozyme Bioculture based on treatment requirements.",
    icon: SearchCheck,
  },
  {
    title: "Implementation",
    description:
      "Provide dosing guidelines and support during product application and commissioning.",
    icon: Settings2,
  },
  {
    title: "Performance Monitoring",
    description:
      "Track biological treatment performance and recommend improvements where required.",
    icon: Activity,
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="bg-slate-50 py-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Our Process"
          title="From Wastewater Analysis to Sustainable Performance"
        />

        <ol className="relative mt-10 grid gap-4 lg:mt-16 lg:gap-8 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <li
                key={step.title}
                className="
                  relative
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
                  hover:-translate-y-1
                  hover:border-green-500
                  hover:shadow-xl
                  lg:block
                  lg:p-6
                  lg:hover:-translate-y-2

                  lg:after:absolute
                  lg:after:left-full
                  lg:after:top-10
                  lg:after:h-[2px]
                  lg:after:w-8
                  lg:after:bg-green-500
                  last:after:hidden
                "
              >
                {/* Step Number */}

                <div className="flex shrink-0 items-center justify-between lg:block">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Icon */}

                <div className="mt-6 hidden h-16 w-16 items-center justify-center rounded-2xl bg-green-50 transition group-hover:bg-green-600 lg:flex">
                  <Icon
                    size={30}
                    className="text-green-600 transition"
                  />
                </div>

                {/* Title */}

                <div className="min-w-0">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 lg:hidden">
                    <Icon size={20} className="text-green-600" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 lg:mt-6 lg:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 lg:mt-3">
                    {step.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
