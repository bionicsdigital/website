import Image from 'next/image'
import SectionHeading from './SectionHeading'

const logos = [
  'client-01.jpg',
  'client-02.jpg',
  'client-03.jpg',
  'client-04.jpg',
  'client-05.jpg',
  'client-06.jpg',
  'client-07.jpg',
  'client-08.jpg',
  'client-09.jpg',
  'client-10.jpg',
  'client-11.jpg',
  'client-12.jpg',
  'client-13.jpg',
  'client-14.jpg',
  'client-15.jpg',
  'client-16.jpg',
  'client-17.jpg',
  'client-18.jpg',
  'client-19.jpg',
  'client-20.jpg',
  'client-21.jpg',
  'client-22.jpg',
  'client-23.jpg',
  'client-24.jpg',
  'client-25.jpg',
  'client-26.jpg',
  'client-27.jpg',
  'client-28.jpg',
  'client-29.jpg',
  'client-30.jpg',
  'client-31.jpg',
  'client-32.jpg',
  'client-33.jpg',
  'client-34.jpg',
  'client-35.jpg',
  'client-36.jpg',
  'client-37.jpg',
]

const repeated = [...logos, ...logos]

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-40" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <SectionHeading
          eyebrow="Trusted By"
          title="Trusted by Industries Across India"
          description="Leading manufacturers, municipalities and wastewater treatment plants rely on Bionics Enviro Tech's Nanozyme Bioculture for consistent biological treatment performance."
        />

        <div className="mt-16 overflow-hidden">

          <div className="marquee-track flex w-max gap-8">

            {repeated.map((logo, index) => (

              <div
                key={`${logo}-${index}`}
                className="group flex h-32 w-60 shrink-0 items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00C853] hover:shadow-xl"
              >

                <div className="relative h-20 w-40">

                  <Image
                    src={`/clients/${logo}`}
                    alt="Bionics Enviro Tech Client"
                    fill
                    className="object-contain"
                    />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom Text */}

        <div className="mt-14 text-center">

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            Serving industries including
            <span className="font-semibold text-slate-900">
              {' '}Textile, Sugar, Distillery, Pharma, Chemical,
              Food Processing, Municipal STP, CETP, ETP,
              Paper, Dairy, Hotels and Infrastructure Projects.
            </span>
          </p>

        </div>

      </div>
    </section>
  )
}