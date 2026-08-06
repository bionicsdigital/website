import { Building2, MapPin } from "lucide-react";
import { offices } from "@/data/offices";

export default function Offices() {
  return (
    <section className="relative overflow-hidden bg-[#071b12] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(16,185,129,.18),transparent_32%),radial-gradient(circle_at_88%_80%,rgba(14,165,233,.1),transparent_30%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] text-emerald-400 md:text-sm md:tracking-[.22em]">
            <span className="h-px w-6 bg-emerald-400 md:w-8" />
            Our offices
          </p>
          <h2 className="mt-1.5 text-2xl font-black tracking-tight md:text-3xl">
            Erode and Chennai offices
          </h2>
          <p className="mt-1.5 text-sm leading-6 text-slate-300">
            Visit our head office or corporate office in Tamil Nadu.
          </p>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2 md:gap-4">
          {offices.map((office, index) => {
            return (
              <article
                key={office.id}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[.055] p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/35 hover:bg-white/[.075] md:p-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-1 text-5xl font-black text-white/[.035] md:right-6 md:text-7xl"
                >
                  0{index + 1}
                </span>

                <div className="relative flex items-start gap-3 md:gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-400 md:h-11 md:w-11 md:rounded-xl">
                    <Building2 className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[.16em] text-emerald-400 md:text-xs md:tracking-[.18em]">
                      {office.type}
                    </p>
                    <h3 className="mt-0.5 text-lg font-bold md:text-xl">
                      {office.city}
                    </h3>
                  </div>
                </div>

                <div className="relative mt-3 flex items-start gap-2.5 border-t border-white/10 pt-3 md:gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400 md:h-5 md:w-5"
                    aria-hidden="true"
                  />
                  <address className="text-xs not-italic leading-5 text-slate-300 md:text-sm md:leading-6">
                    {office.address.map((line, lineIndex) => (
                      <span key={line} className="inline md:block">
                        {line}
                        {lineIndex < office.address.length - 1 && (
                          <span className="md:hidden">, </span>
                        )}
                      </span>
                    ))}
                  </address>
                </div>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
