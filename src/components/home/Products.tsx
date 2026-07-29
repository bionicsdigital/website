import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const products = [
  {
    slug: 'aerobic-bioculture',
    name: 'Aerobic Bioculture',
    description:
      'High-performance Nanozyme microbial culture for aerobic wastewater treatment systems, ensuring faster COD & BOD reduction with stable biological performance.',
    image: 'aerobic-bioculture.png',
  },
  {
    slug: 'anaerobic-bioculture',
    name: 'Anaerobic Bioculture',
    description:
      'Scientifically engineered microbial formulation for anaerobic digesters, improving biogas generation, sludge reduction and treatment efficiency.',
    image: 'anaerobic-bioculture.png',
  },
  {
    slug: 'stp-bioculture',
    name: 'STP Bioculture',
    description:
      'Advanced microbial culture developed for sewage treatment plants (STP/CSTP), providing odour control, faster degradation and consistent treatment results.',
    image: 'stp-bioculture.png',
  },
  {
    slug: 'etp-bioculture',
    name: 'ETP Bioculture',
    description:
      'Specialized Nanozyme culture for industrial Effluent Treatment Plants (ETP/CETP), helping industries achieve PCB compliance while reducing operating costs.',
    image: 'etp-bioculture.png',
  },
  {
    slug: 'sugar-distillery-bioculture',
    name: 'Sugar & Distillery Bioculture',
    description:
      'High-strength microbial culture specially formulated for sugar factories and distilleries, delivering superior COD reduction, enhanced anaerobic digestion and improved wastewater treatment stability.',
    image: 'sugar-distillery-bioculture.png',
  },
  {
    slug: 'organic-compost-culture',
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
      className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Our Products"
          title="Nanozyme Bioculture Solutions for Every Wastewater Treatment Process"
          description="Scientifically engineered microbial cultures developed for superior biological performance, reduced operating costs and sustainable wastewater treatment."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-16 lg:gap-8 xl:grid-cols-3">

          {products.map((product) => (

            <article
              key={product.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-[#00C853] hover:shadow-2xl lg:hover:-translate-y-2"
            >

              {/* Product Image */}

              <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 lg:aspect-square">
                <Link
                  href={`/products/${product.slug}`}
                  className="absolute inset-0 block"
                  aria-label={`View ${product.name}`}
                >
                <Image
                  src={`/products/${product.image}`}
                  alt={product.name}
                  fill
                  priority={false}
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                </Link>
              </div>

              {/* Content */}

              <div className="p-5 lg:p-7">

                <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 lg:mt-4 lg:text-[15px] lg:leading-7">
                  {product.description}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[#00C853] transition-all duration-300 hover:gap-3 hover:text-green-700 lg:mt-7"
                >
                  Learn More
                  <ArrowUpRight size={18} />
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  )
}
