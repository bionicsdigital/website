import {
  Atom,
  BadgeDollarSign,
  Droplets,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Sparkles,
  Waves,
  Wind,
  Zap,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

const features = [
  {
    title: 'Scientific Nanozyme Technology',
    description: 'Advanced microbial formulations developed through scientific research.',
    icon: Atom,
  },
  {
    title: 'Solid State Fermentation',
    description: 'High-quality production process ensuring superior microbial activity.',
    icon: FlaskConical,
  },
  {
    title: 'Fast COD Reduction',
    description: 'Accelerates biological degradation of organic pollutants.',
    icon: Zap,
  },
  {
    title: 'Fast BOD Reduction',
    description: 'Improves biological treatment efficiency and process stability.',
    icon: Droplets,
  },
  {
    title: 'Odour Removal',
    description: 'Minimizes unpleasant odours in wastewater treatment plants.',
    icon: Wind,
  },
  {
    title: 'Colour Removal',
    description: 'Supports colour reduction in industrial wastewater.',
    icon: Sparkles,
  },
  {
    title: 'Shock Load Resistance',
    description: 'Maintains biological activity during sudden load fluctuations.',
    icon: ShieldCheck,
  },
  {
    title: 'Zero Sludge Process',
    description: 'Designed to reduce excess sludge generation and handling costs.',
    icon: Waves,
  },
  {
    title: 'Eco-Friendly',
    description: 'Safe biological solution with environmentally responsible performance.',
    icon: Leaf,
  },
  {
    title: 'Cost Effective',
    description: 'Reduces operational expenses while improving treatment efficiency.',
    icon: BadgeDollarSign,
  },
]

export default function Features() {
  return (
    <section
      id="applications"
      className="bg-gradient-to-b from-white to-slate-50 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Why Nanozyme"
          title="A Smarter Biological Foundation for Wastewater Treatment"
          description="Every Nanozyme formulation is engineered to deliver high microbial activity, consistent biological performance and lower operating costs across diverse industrial applications."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
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
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 transition-colors duration-300 group-hover:bg-green-600">
                  <Icon
                    size={28}
                    className="text-green-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold leading-6 text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}