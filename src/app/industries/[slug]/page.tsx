import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, CircleCheckBig, Cpu, Droplets, Leaf, Recycle, ShieldCheck, Sparkles, Thermometer, TrendingUp, Waves, Wind, AlertTriangle, FlaskConical, Activity, Gauge, Microscope, SprayCan, Beaker, Factory } from 'lucide-react'
import CardGrid from '@/components/industry/CardGrid'
import CTASection from '@/components/industry/CTASection'
import FAQSection from '@/components/industry/FAQSection'
import InfoTable from '@/components/industry/InfoTable'
import MechanismTimeline from '@/components/industry/MechanismTimeline'
import OverviewSection from '@/components/industry/OverviewSection'
import PerformanceTable from '@/components/industry/PerformanceTable'
import ProcessFlow from '@/components/industry/ProcessFlow'
import ReactionCards from '@/components/industry/ReactionCards'
import RecommendationCard from '@/components/industry/RecommendationCard'
import industries, { getIndustryDetail } from '@/data/industries'
import ScrollToTop from '@/components/home/ScrollToTop'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb'

export function generateStaticParams() {
    return industries.map((industry) => ({ slug: industry.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Metadata {
    return {
        title: 'Industry Solution | Bionics Enviro Tech',
        description: 'Professional Nanozyme bioculture solutions for industrial wastewater treatment and effluent optimization.',
        keywords: ['Nanozyme', 'Industrial wastewater', 'ETP', 'CETP', 'bioculture', 'wastewater treatment'],
        openGraph: {
            title: 'Industry Solution | Bionics Enviro Tech',
            description: 'Advanced microbial solutions for industrial wastewater treatment and plant optimization.',
            type: 'website',
        },
    }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const industry = industries.find((item) => item.slug === slug)

    if (!industry) {
        return (
            <main className="min-h-screen bg-slate-50">
                <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8 lg:px-10">
                    <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">Industry not found</h1>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">The requested industry page is not available yet. Please explore our other wastewater treatment offerings.</p>
                    <Link href="/" className="mt-8 inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">Return Home</Link>
                </section>
            </main>
        )
    }

    const detail = getIndustryDetail(slug)

    return (<>
        <main className="min-h-screen bg-slate-50">
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_35%)]" />
                <div className="relative mx-auto grid max-w-7xl gap-6 px-4 pb-9 pt-24 sm:px-8 sm:pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-8 lg:px-10 lg:pb-20 lg:pt-28">
                    <div className="max-w-2xl">
                        <div className="mb-4"><PageBreadcrumb dark items={[{ label: 'Industries', href: '/#industries' }, { label: industry.name }]} /></div>
                        <p className="inline-flex max-w-full items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-emerald-100 sm:text-sm sm:tracking-[0.2em]">{detail.eyebrow}</p>
                        <h1 className="mt-5 text-3xl font-black leading-tight sm:text-5xl lg:mt-6 lg:text-6xl">{detail.title}</h1>
                        <p className="mt-3 text-base font-semibold text-emerald-100 sm:mt-4 sm:text-xl">{detail.subtitle}</p>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/90 sm:mt-5 sm:text-lg sm:leading-8">{detail.description}</p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50">Download Brochure <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            <Link href="/#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">Request Technical Consultation</Link>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {detail.badges.map((badge) => (
                                <span key={badge} className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-emerald-50 sm:text-sm">{badge}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur sm:rounded-[2rem] sm:p-4">
                        <div className="flex h-full min-h-[220px] w-full items-center justify-center overflow-hidden rounded-[1.25rem] bg-slate-950/20 sm:min-h-[340px] sm:rounded-[1.5rem]">
                            <Image src={detail.heroImage} alt={detail.title} width={700} height={520} priority className="max-h-[440px] w-full object-contain p-4 sm:p-6" />
                        </div>
                    </div>
                </div>
            </section>

            <OverviewSection title={industry.name} paragraphs={detail.overviewParagraphs} imageSrc={detail.heroImage} imageAlt={detail.title} />

            <InfoTable eyebrow="Wastewater Characteristics" title="Typical Effluent Profile" description="Engineered for plants that need to understand influent variability and operating conditions before process optimization." rows={detail.wastewaterCharacteristics} />

            <CardGrid eyebrow="Major Pollutants" title="Common Contaminants in Industrial Streams" description="The biological treatment approach targets the main pollutants that influence process reliability and discharge quality." items={detail.pollutants} columns={3} />

            <CardGrid eyebrow="Industry Challenges" title="Operational Constraints That Impact Performance" description="Traditional systems often struggle under fluctuating water quality, shock loading and inhibitory compounds." items={detail.challenges} columns={4} />

            <ProcessFlow eyebrow="How Nanozyme Works" title="Biological Treatment Pathway" description="A structured process designed to convert difficult wastewater streams into stable, treatable effluent." steps={detail.processFlow} />

            <MechanismTimeline eyebrow="Biological Treatment Mechanism" title="Stepwise Biological Conversion" description="Nanozyme supports the biological process from hydrolysis through mineralization." items={detail.mechanism} />

            <ReactionCards eyebrow="Scientific Reaction Section" title="Useful Engineering Reactions" description="Concise reaction pathways that support practical treatment understanding and plant engineering decisions." items={detail.reactions} />

            <CardGrid eyebrow="Why Nanozyme" title="Benefits for Plant Performance" description="Practical advantages that help operators improve stability, compliance and effluent quality." items={detail.whyNanozyme} columns={3} />

            <RecommendationCard title={detail.recommendation.title} availableForm={detail.recommendation.availableForm} bacterialCount={detail.recommendation.bacterialCount} shelfLife={detail.recommendation.shelfLife} recommendedDosage={detail.recommendation.recommendedDosage} incubationMethod={detail.recommendation.incubationMethod} suitableIndustries={detail.recommendation.suitableIndustries} preferredApplication={detail.recommendation.preferredApplication} />

            <PerformanceTable eyebrow="Performance Table" title="Typical Treatment Improvements" description="Representative performance outcomes observed in industrial wastewater treatment systems." rows={detail.performanceTable} />

            <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 lg:p-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Applications</p>
                        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">Where the Solution Is Applied</h2>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                        {detail.applications.map((application) => (
                            <span key={application} className="inline-flex h-11 items-center rounded-full border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">{application}</span>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection eyebrow="Frequently Asked Questions" title="Technical Answers for Plant Operators and Engineers" description="Clear answers to the most common implementation and performance questions." items={detail.faqs} />

            <CTASection title={detail.ctaTitle} description={detail.ctaDescription} primaryLabel="Get Technical Consultation" secondaryLabel="Contact Sales" />
        </main>
        <ScrollToTop />
        </>
    )
}
