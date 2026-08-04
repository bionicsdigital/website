import Image from "next/image";
import SectionHeading from "./SectionHeading";

const logos = [
  "client-01.jpg",
  "client-02.jpg",
  "client-03.jpg",
  "client-04.jpg",
  "client-05.jpg",
  "client-06.jpg",
  "client-07.jpg",
  "client-08.jpg",
  "client-09.jpg",
  "client-10.jpg",
  "client-11.jpg",
  "client-12.jpg",
  "client-13.jpg",
  "client-14.jpg",
  "client-15.jpg",
  "client-16.jpg",
  "client-17.jpg",
  "client-18.jpg",
  "client-19.jpg",
  "client-20.jpg",
  "client-21.jpg",
  "client-22.jpg",
  "client-23.jpg",
  "client-24.jpg",
  "client-25.jpg",
  "client-26.jpg",
  "client-27.jpg",
  "client-28.jpg",
  "client-29.jpg",
  "client-30.jpg",
];

const row1 = logos.slice(0,15);
const row2 = logos.slice(15);

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-slate-50 py-10 lg:py-16"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted By"
          title="Trusted by Industries Across India"
          description="Leading manufacturers, municipalities and wastewater treatment plants rely on Bionics Enviro Tech's Nanozyme Bioculture for consistent biological treatment performance."
        />

        {/* Row 1 */}
        <div className="mt-8 overflow-hidden lg:mt-10">
          <div className="marquee-left flex w-max gap-4 lg:gap-8">
            {[...row1, ...row1].map((logo, index) => (
              <div
                key={index}
                className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-md lg:h-32 lg:w-60 lg:rounded-3xl lg:p-6"
              >
                <div className="relative h-12 w-24 lg:h-20 lg:w-40">
                  <Image
                    src={`/clients/${logo}`}
                    alt="Client"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-4 overflow-hidden lg:mt-8">
          <div className="marquee-right flex w-max gap-4 lg:gap-8">
            {[...row2, ...row2].map((logo, index) => (
              <div
                key={index}
                className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-md lg:h-32 lg:w-60 lg:rounded-3xl lg:p-6"
              >
                <div className="relative h-12 w-24 lg:h-20 lg:w-40">
                  <Image
                    src={`/clients/${logo}`}
                    alt="Client"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 text-center lg:mt-9">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-600 lg:text-lg lg:leading-8">
            Serving industries including
            <span className="font-semibold text-slate-900">
              {" "}
              Textile, Sugar, Distillery, Pharma, Chemical, Food Processing,
              Municipal STP, CETP, ETP, Paper, Dairy, Hotels and Infrastructure
              Projects.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
