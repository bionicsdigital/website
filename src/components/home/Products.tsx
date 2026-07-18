import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const products = [
  {
    name: 'Aerobic Bioculture',
    description:
      'High-performance Nanozyme microbial culture for aerobic wastewater treatment systems, ensuring faster COD & BOD reduction with stable biological performance.',
    image: 'aerobic-bioculture.png',
  },
  {
    name: 'Anaerobic Bioculture',
    description:
      'Scientifically engineered microbial formulation for anaerobic digesters, improving biogas generation, sludge reduction and treatment efficiency.',
    image: 'anaerobic-bioculture.png',
  },
  {
    name: 'STP Bioculture',
    description:
      'Advanced microbial culture developed for sewage treatment plants (STP/CSTP), providing odour control, faster degradation and consistent treatment results.',
    image: 'stp-bioculture.png',
  },
  {
    name: 'ETP Bioculture',
    description:
      'Specialized Nanozyme culture for industrial Effluent Treatment Plants (ETP/CETP), helping industries achieve PCB compliance while reducing operating costs.',
    image: 'etp-bioculture.png',
  },
  {
    name: 'Sugar & Distillery Bioculture',
    description:
      'High-strength microbial culture specially formulated for sugar factories and distilleries, delivering superior COD reduction, enhanced anaerobic digestion and improved wastewater treatment stability.',
    image: 'sugar-distillery-bioculture.png',
  },
  {
    name: 'Organic Compost Culture',
    description:
      'Accelerates decomposition of organic solid waste into nutrient-rich compost while reducing odour and composting time through advanced microbial technology.',
    image: 'compost-culture.png',
  },
]

export default function Products() {
  return (
    <section
      id="products"
      className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <SectionHeading
          eyebrow="Our Products"
          title="Nanozyme Bioculture Solutions for Every Wastewater Treatment Process"
          description="Scientifically engineered microbial cultures developed for superior biological performance, reduced operating costs and sustainable wastewater treatment."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product) => (

            <article
              key={product.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#00C853] hover:shadow-2xl"
            >

              {/* Product Image */}

              <div className="relative aspect-square overflow-hidden rounded-t-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">

                <Image
                  src={`/products/${product.image}`}
                  alt={product.name}
                  fill
                  priority={false}
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {product.description}
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-[#00C853] transition-all duration-300 hover:gap-3 hover:text-green-700"
                >
                  Learn More
                  <ArrowUpRight size={18} />
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  )
}