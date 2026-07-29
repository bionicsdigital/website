import Image from 'next/image'
import SectionHeading from './SectionHeading'

const recognitions = [
  {
    image: 'icar.jpg',
    title: 'ICAR Award',
    subtitle: 'Government Award',
    description:
      'Awarded by the Indian Council of Agricultural Research (ICAR) in 2001.',
  },
  {
    image: 'ugc.jpg',
    title: 'UGC-NET Recognition',
    subtitle: 'Research Recognition',
    description:
      'National Eligibility Test recognition awarded in June & December 2003.',
  },
  {
    image: 'asrb.jpg',
    title: 'ASRB Recognition',
    subtitle: 'Scientific Achievement',
    description:
      'Recognized by the Agricultural Scientists Recruitment Board for research excellence.',
  },
  {
    image: 'toi.jpg',
    title: 'Times of India',
    subtitle: 'Media Recognition',
    description:
      'Featured in The Times of India on May 28, 2009 for scientific innovation.',
  },
  {
    image: 'iso-9001.webp',
    title: 'ISO 9001:2015',
    subtitle: 'International Certification',
    description:
      'Certified Quality Management System ensuring consistent manufacturing excellence.',
  },
]

export default function Awards() {
  return (
    <section
      id="recognition"
      className="bg-white py-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <SectionHeading
          eyebrow="Recognition"
          title="Awards, Recognitions & Certifications"
          description="Government awards, research recognitions and internationally certified quality standards that demonstrate our commitment to scientific innovation."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-8 lg:grid-cols-3 xl:grid-cols-5">

          {recognitions.map((item) => (
            <div
              key={item.title}
              className="group grid grid-cols-[72px_minmax(0,1fr)] items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00C853] hover:shadow-2xl sm:block lg:p-6 lg:hover:-translate-y-2"
            >
              <div className="relative h-[72px] w-[72px] sm:mx-auto sm:h-32 sm:w-full">
                <Image
                  src={`/awards/${item.image}`}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="min-w-0 self-center sm:text-center">
                <div className="mb-2 inline-flex rounded-full bg-green-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#00C853] lg:mb-5 lg:text-xs">
                  {item.subtitle}
                </div>

                <h3 className="text-[17px] font-bold leading-snug text-slate-900 lg:mt-6 lg:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-[15px] leading-6 text-slate-600 lg:mt-3 lg:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
