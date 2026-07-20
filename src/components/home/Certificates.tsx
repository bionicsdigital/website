import Image from 'next/image'
import SectionHeading from './SectionHeading'

const certificates = [
  {
    image: 'iso-9001.png',
    title: 'ISO 9001',
  },
  {
    image: 'iso-14001.png',
    title: 'ISO 14001',
  },
  {
    image: 'patent-certificate.png',
    title: 'Patent Certificate',
  },
  {
    image: 'quality-certification.png',
    title: 'Quality Certification',
  },
]

export default function Certificates() {
  return (
    <section
      id="certifications"
      className="bg-gradient-to-b from-white to-slate-50 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Certifications"
          title="Quality, Innovation & Documented Assurance"
        />

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {certificates.map((certificate) => (
            <article
              key={certificate.image}
              className="
                group
                overflow-hidden
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
              <div className="relative aspect-[4/3]">
                <Image
                  src={`/certificates/${certificate.image}`}
                  alt={certificate.title}
                  fill
                  loading="lazy"
                  className="
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <h3 className="mt-5 text-center text-base font-semibold text-slate-900">
                {certificate.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}