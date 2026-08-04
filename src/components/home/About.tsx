import {
  Microscope,
  FlaskConical,
  Leaf,
  Globe2,
  CheckCircle2,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

const stats = [
  { value: '2016', label: 'Established' },
  { value: '62+', label: 'Scientific Cultures' },
  { value: '50+', label: 'Employees' },
  { value: '100K+', label: 'Installations' },
  { value: '40+', label: 'Patents' },
  { value: 'Global', label: 'Exports' },
]

const features = [
  {
    icon: Microscope,
    title: 'Research Driven',
    text: 'Every Nanozyme formulation is developed through scientific research, laboratory validation and field performance.',
  },
  {
    icon: FlaskConical,
    title: 'Nanozyme Technology',
    text: 'Advanced microbial cultures engineered to improve biological treatment efficiency while reducing operating costs.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Treatment',
    text: 'Reduce COD, BOD, sludge generation, odour and pollutant load with environmentally responsible biological solutions.',
  },
  {
    icon: Globe2,
    title: 'Global Supply',
    text: 'Trusted by industries worldwide for ETP, STP, CETP, CSTP, anaerobic digesters and composting applications.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-10 lg:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#E9FFF1_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#F3FFF8_0%,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <SectionHeading
          align="left"
          eyebrow="About Bionics"
          title="Engineering Better Biology for Industrial Wastewater Treatment"
        />

        <div className="mt-8 grid gap-7 lg:mt-10 lg:gap-10 lg:grid-cols-[1.35fr_0.85fr]">

          {/* Left */}

          <div>

            <p className="text-base leading-7 text-slate-700 lg:text-lg lg:leading-8">
              <strong className="text-slate-900">
                Bionics Enviro Tech Pvt. Ltd.
              </strong>{' '}
              is a scientific manufacturer and global supplier of
              <strong className="text-green-600">
                {' '}Nanozyme Bioculture
              </strong>{' '}
              developed for industrial wastewater treatment. Our advanced
              microbial formulations improve biological treatment efficiency,
              reduce sludge generation and help industries achieve reliable
              compliance with environmental regulations.
            </p>

            <p className="mt-4 leading-7 text-slate-600 lg:mt-6 lg:leading-8">
              Backed by continuous research and innovation, our solutions are
              designed for ETP, STP, CETP, CSTP, anaerobic digesters and organic
              waste composting. We help industries reduce COD, BOD, colour,
              odour and pollutant load while improving treatment performance and
              lowering operational costs.
            </p>

            <p className="mt-4 leading-7 text-slate-600 lg:mt-6 lg:leading-8">
              Today, Bionics Enviro Tech serves clients across India and global
              markets with scientifically proven microbial cultures trusted by
              textile, pharmaceutical, chemical, food processing, sugar,
              distillery, paper, leather and municipal wastewater treatment
              facilities.
            </p>

          </div>

          {/* Right Card */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl lg:p-8">

            <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Company Overview
            </span>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Scientific Innovation.
              <br />
              Sustainable Results.
            </h3>

            <div className="mt-6 space-y-3 lg:mt-8 lg:space-y-4">

              {[
                'Government Awarded Technology',
                'ISO 9001:2015 Certified',
                'Research-Based Nanozyme Technology',
                'Trusted Across Multiple Industries',
                'Global Export Capability',
                'Environment Friendly Solutions',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-green-600"
                    size={20}
                  />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-10 lg:grid-cols-3 xl:grid-cols-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg lg:p-5"
            >
              <h3 className="text-2xl font-extrabold text-green-600 lg:text-3xl">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

        {/* Features */}

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:gap-5 xl:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group flex items-start gap-4 rounded-3xl border border-sky-100 bg-white p-5 transition duration-300 odd:flex-row even:flex-row-reverse hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl lg:block lg:p-6"
              >
                <div className="science-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl lg:h-14 lg:w-14">
                  <Icon
                    size={24}
                    className="text-blue-600"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 lg:mt-6 lg:text-xl">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 lg:mt-3 lg:text-base lg:leading-7">
                    {feature.text}
                  </p>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
