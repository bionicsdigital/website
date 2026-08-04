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
      className="bg-gradient-to-b from-slate-50 to-sky-50/30 py-10 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Our Process"
          title="From Wastewater Analysis to Sustainable Performance"
        />

        <ol className="relative mt-8 grid gap-4 lg:mt-10 lg:gap-5 lg:grid-cols-5">
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
                  hover:border-sky-400
                  hover:shadow-xl
                  lg:block
                  lg:p-6
                  lg:hover:-translate-y-2

                  lg:after:absolute
                  lg:after:left-full
                  lg:after:top-10
                  lg:after:h-[2px]
                  lg:after:w-8
                  lg:after:bg-gradient-to-r lg:after:from-blue-500 lg:after:to-emerald-500
                  last:after:hidden
                "
              >
                {/* Step Number */}

                <div className="flex shrink-0 items-center justify-between lg:block">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00C853] to-[#00B4D8] text-sm font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Icon */}

                <div className="science-icon mt-6 hidden h-16 w-16 items-center justify-center rounded-2xl transition group-hover:bg-blue-600 lg:flex">
                  <Icon
                    size={30}
                    className="text-blue-600 transition group-hover:text-white"
                  />
                </div>

                {/* Title */}

                <div className="min-w-0">
                  <div className="science-icon mb-2 flex h-10 w-10 items-center justify-center rounded-xl lg:hidden">
                    <Icon size={20} className="text-blue-600" />
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
