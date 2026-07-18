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
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#E9FFF1_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#F3FFF8_0%,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <SectionHeading
          align="left"
          eyebrow="About Bionics"
          title="Engineering Better Biology for Industrial Wastewater Treatment"
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.35fr_0.85fr]">

          {/* Left */}

          <div>

            <p className="text-lg leading-8 text-slate-700">
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

            <p className="mt-6 leading-8 text-slate-600">
              Backed by continuous research and innovation, our solutions are
              designed for ETP, STP, CETP, CSTP, anaerobic digesters and organic
              waste composting. We help industries reduce COD, BOD, colour,
              odour and pollutant load while improving treatment performance and
              lowering operational costs.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Today, Bionics Enviro Tech serves clients across India and global
              markets with scientifically proven microbial cultures trusted by
              textile, pharmaceutical, chemical, food processing, sugar,
              distillery, paper, leather and municipal wastewater treatment
              facilities.
            </p>

          </div>

          {/* Right Card */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

            <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Company Overview
            </span>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Scientific Innovation.
              <br />
              Sustainable Results.
            </h3>

            <div className="mt-8 space-y-4">

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

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
            >
              <h3 className="text-3xl font-extrabold text-green-600">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

        {/* Features */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <Icon
                    size={28}
                    className="text-green-600"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.text}
                </p>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}