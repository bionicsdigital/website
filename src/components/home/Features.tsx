import {
  Activity, BadgeDollarSign, BatteryCharging, Beaker, Droplets, Factory,
  FlaskConical, Leaf, Recycle, ShieldCheck, Sparkles, Trash2, Waves, Wind, Zap,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type Feature = { title: string; description: string; icon: LucideIcon };

const merits: Feature[] = [
  { title: "Low Cost Technology", description: "Cost-effective biological treatment that significantly lowers overall wastewater treatment expenses.", icon: BadgeDollarSign },
  { title: "Minimal Chemical Usage", description: "Reduces or eliminates primary treatment chemicals such as polymer and lime.", icon: Beaker },
  { title: "COD Reduction", description: "Achieves up to 95–98% COD reduction, typically below 50–100 mg/L.", icon: Zap },
  { title: "BOD Reduction", description: "Reduces Biological Oxygen Demand by up to 98–100% for improved treatment efficiency.", icon: Droplets },
  { title: "Increases Dissolved Oxygen", description: "Improves dissolved oxygen (DO) levels between 3–6 mg/L to support healthy microbial activity.", icon: Activity },
  { title: "Colour Reduction", description: "Removes 90–100% of wastewater colour depending on effluent characteristics.", icon: Sparkles },
  { title: "Odour Removal", description: "Eliminates unpleasant odours, often achieving complete removal within one day.", icon: Wind },
  { title: "Zero Sludge Process", description: "Minimizes sludge generation, reducing sludge handling, transportation, and disposal costs.", icon: Waves },
];

const industryBenefits: Feature[] = [
  { title: "Reduced Sludge Generation", description: "Significantly reduces excess biological sludge generation, minimizing sludge handling, dewatering, and disposal requirements.", icon: Trash2 },
  { title: "Low Energy Consumption", description: "Reduces blower operating time by 30–40%, lowering overall energy consumption and electricity costs by more than 50%.", icon: BatteryCharging },
  { title: "Shock Load Resistance", description: "Maintains stable microbial activity during sudden fluctuations in organic and hydraulic loading.", icon: ShieldCheck },
  { title: "Organic Pollutant & Heavy Metal Degradation", description: "Accelerates the degradation of organic pollutants while supporting the biological treatment of various heavy metal contaminants.", icon: Leaf },
  { title: "Suspended Solids Removal", description: "Removes suspended and floatable organic debris while reducing Total Suspended Solids (TSS) by up to 95%.", icon: Recycle },
  { title: "Anaerobic Digester Efficiency", description: "Enhances anaerobic digester performance, improves methane yield, and increases biogas production.", icon: Factory },
  { title: "Industrial Performance", description: "Scientifically manufactured Nanozyme Bioculture delivers reliable biological performance for industrial and municipal wastewater treatment plants.", icon: FlaskConical },
];

const performance = [
  ["Sludge Degradation", "Excellent"],
  ["Chemical Oxygen Demand (COD)", "95–98%"],
  ["Biological Oxygen Demand (BOD)", "98–100%"],
  ["Colour Reduction", "90–100%"],
  ["Odour Removal", "100%"],
  ["Suspended & Floatable Organic Debris", "100%"],
  ["Total Suspended Solids (TSS)", "92–95%"],
  ["Total Dissolved Solids (TDS)", "Depends on wastewater characteristics"],
  ["Dissolved Oxygen (DO)", "3–6 mg/L"],
];

function FeatureCards({ items, offset = 0 }: { items: Feature[]; offset?: number }) {
  return items.map((feature, index) => {
    const Icon = feature.icon;
    const alternate = (index + offset) % 2 === 1;
    return (
      <article key={feature.title} className={`group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00C853] hover:shadow-lg sm:block sm:rounded-3xl sm:p-5 sm:text-left ${alternate ? "flex-row-reverse text-right" : "text-left"}`}>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 transition-all duration-300 group-hover:bg-[#00C853] sm:h-12 sm:w-12 sm:rounded-2xl">
          <Icon size={23} className="text-[#00C853] transition-colors duration-300 group-hover:text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-bold leading-6 text-slate-900 sm:mt-4 sm:text-lg">{feature.title}</h3>
          <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:mt-2">{feature.description}</p>
        </div>
      </article>
    );
  });
}

export default function Features() {
  return (
    <section id="applications" className="bg-gradient-to-b from-white to-slate-50 py-9 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Nanozyme Advantages" title="Merits of Nanozyme Bioculture" description="Scientifically developed Nanozyme Bioculture improves biological wastewater treatment by reducing COD, BOD, colour, odour, sludge generation and operating costs while increasing treatment efficiency and dissolved oxygen." />

        <div className="mt-7 grid gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          <FeatureCards items={merits} />
        </div>

        <div className="mt-10 sm:mt-12">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-600">Industry Advantages</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Benefits to Industries by Using Nanozyme</h2>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          <FeatureCards items={industryBenefits} offset={8} />
        </div>

        <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md sm:mt-12 sm:rounded-3xl">
          <div className="border-b bg-gradient-to-r from-[#00C853] to-[#00E676] px-4 py-4 sm:px-6">
            <h3 className="text-lg font-bold leading-6 text-white sm:text-2xl">Role of Microbial Nanozyme in Wastewater Treatment Plants</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] text-left">
              <thead className="bg-slate-100"><tr>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-900 sm:px-6 sm:text-sm sm:normal-case sm:tracking-normal">Parameter</th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-900 sm:px-6 sm:text-sm sm:normal-case sm:tracking-normal">Performance</th>
              </tr></thead>
              <tbody className="divide-y divide-slate-100">
                {performance.map(([parameter, value]) => <tr key={parameter} className="transition-colors hover:bg-green-50">
                  <td className="w-[62%] px-4 py-3 text-sm font-medium leading-5 text-slate-700 sm:px-6">{parameter}</td>
                  <td className="px-4 py-3 text-sm font-bold leading-5 text-[#00A63E] sm:px-6">{value}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
