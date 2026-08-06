import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, CircleCheckBig, Cpu, Download, Droplets, Leaf, Recycle, ShieldCheck, Sparkles, Thermometer, TrendingUp, Waves, Wind, AlertTriangle, FlaskConical, Activity, Gauge, Microscope, SprayCan, Beaker, Factory } from 'lucide-react'
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
import { createMetadata, siteConfig } from '@/lib/site'
import { industryBenefits, testimonials } from '@/data/resource-content'
import TestimonialCard from '@/components/testimonials/TestimonialCard'

const industryKeywords: Record<string, string[]> = {
    'textile-processing-industry': ['Textile Wastewater Treatment', 'Textile ETP', 'Dye Effluent Treatment'],
    'dye-processing-industry': ['Dye Industry Wastewater Treatment', 'Dye Effluent Treatment', 'Colour Removal in ETP'],
    'sugar-industry': ['Sugar Industry ETP', 'Sugar Mill Wastewater', 'COD Reduction'],
    'distillery-industry': ['Distillery ETP', 'Distillery Wastewater Treatment', 'Spent Wash Treatment'],
    'chemical-industry': ['Chemical Industry Wastewater Treatment', 'Chemical ETP', 'Industrial Effluent Treatment'],
    'pharma-industry': ['Pharmaceutical Wastewater Treatment', 'API Wastewater', 'Pharma ETP'],
    'paper-and-pulp-mill': ['Paper Mill Wastewater Treatment', 'Pulp and Paper ETP', 'COD Reduction'],
    'food-processing-industry': ['Food Processing Wastewater Treatment', 'Food Industry ETP', 'BOD Reduction'],
    'dairy-industry': ['Dairy Wastewater Treatment', 'Milk Processing ETP', 'Food Processing Wastewater'],
    municipal: ['Municipal Solid Waste Composting', 'Organic Waste Composting', 'Compost Culture'],
    'industrial-etp': ['Industrial ETP', 'Industrial Wastewater Treatment', 'ETP Bioculture'],
    'domestic-and-commercial-stp': ['Domestic STP', 'Commercial STP', 'Sewage Treatment Bioculture'],
    cetp: ['CETP', 'Common Effluent Treatment Plant', 'CETP Bioculture'],
}

export function generateStaticParams() {
    return industries.map((industry) => ({ slug: industry.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const industry = industries.find(item => item.slug === slug)
    if (!industry) return { title: 'Industry Not Found', robots: { index: false, follow: false } }
    const detail = getIndustryDetail(slug)
    const primary = industryKeywords[slug]?.[0] ?? industry.name
    const title = `${primary} | Bionics Enviro Tech`
    const description = `${detail.description} Explore Nanozyme bioculture support and request a technical consultation for your treatment plant.`.slice(0, 160)
    return createMetadata({ title, description, path: `/industries/${slug}`, keywords: industryKeywords[slug] ?? [industry.name, 'Wastewater Treatment'], image: detail.heroImage })
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
    const upgradedBenefits = industryBenefits[slug] ?? ['Stable biological treatment', 'Lower COD and BOD', 'Reduced sludge', 'Improved compliance', 'Water reuse support']
    const isComposting = slug === 'municipal'
    const industryTestimonial = isComposting ? testimonials.find(item => item.id === 'food-organics')! : testimonials.find(item => item.industry.toLowerCase().includes(industry.name.split(' ')[0].toLowerCase())) ?? testimonials[0]
    const industryUrl = `${siteConfig.url}/industries/${industry.slug}`
    const schemas = [
        { '@context': 'https://schema.org', '@type': 'Service', '@id': `${industryUrl}#service`, name: detail.title, description: detail.description, url: industryUrl, image: `${siteConfig.url}${detail.heroImage}`, serviceType: `${industry.name} wastewater treatment`, provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url }, areaServed: { '@type': 'Country', name: 'India' }, audience: { '@type': 'BusinessAudience', audienceType: `${industry.name} plant owners, engineers and operators` } },
        { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${industryUrl}#webpage`, url: industryUrl, name: detail.title, description: detail.description, mainEntity: { '@id': `${industryUrl}#service` }, isPartOf: { '@type': 'WebSite', url: siteConfig.url, name: siteConfig.shortName } },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url }, { '@type': 'ListItem', position: 2, name: 'Industries', item: `${siteConfig.url}/#industries` }, { '@type': 'ListItem', position: 3, name: industry.name, item: industryUrl }] },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: detail.faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    ]

    return (<>
        {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
        <main className="min-h-screen bg-slate-50">
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_35%)]" />
                <div className="relative mx-auto grid max-w-7xl gap-6 px-4 pb-9 pt-24 sm:px-8 sm:pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-8 lg:px-10 lg:pb-20 lg:pt-28">
                    <div className="max-w-2xl">
                        <div className="mb-4"><PageBreadcrumb dark items={[{ label: 'Industries', href: '/industries' }, { label: industry.name }]} /></div>
                        <p className="inline-flex max-w-full items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-emerald-100 sm:text-sm sm:tracking-[0.2em]">{detail.eyebrow}</p>
                        <h1 className="mt-5 text-3xl font-black leading-tight sm:text-5xl lg:mt-6 lg:text-6xl">{detail.title}</h1>
                        <p className="mt-3 text-base font-semibold text-emerald-100 sm:mt-4 sm:text-xl">{detail.subtitle}</p>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/90 sm:mt-5 sm:text-lg sm:leading-8">{detail.description}</p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50">Request Brochure · Coming Soon <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            <Link href="/#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">Request Technical Consultation</Link>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {detail.badges.map((badge) => (
                                <span key={badge} className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-emerald-50 sm:text-sm">{badge}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex h-full rounded-[1.5rem] border border-white/25 bg-white/10 p-2.5 shadow-2xl backdrop-blur sm:rounded-[2rem] sm:p-3">
                        <div className="relative min-h-[280px] w-full overflow-hidden rounded-[1.15rem] border border-white/10 bg-emerald-950 sm:min-h-[420px] sm:rounded-[1.5rem]">
                            <Image
                                src={detail.heroImage}
                                alt={detail.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                className="object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/25 via-transparent to-white/5" />
                        </div>
                    </div>
                </div>
            </section>

            <OverviewSection title={industry.name} paragraphs={detail.overviewParagraphs} />

            <InfoTable eyebrow={isComposting ? 'Composting Parameters' : 'Wastewater Characteristics'} title={isComposting ? 'Typical Composting Conditions' : 'Typical Effluent Profile'} description={isComposting ? 'Key feedstock and environmental conditions that influence microbial activity and finished-compost quality.' : 'Engineered for plants that need to understand influent variability and operating conditions before process optimization.'} rows={detail.wastewaterCharacteristics} />

            <CardGrid eyebrow={isComposting ? 'Suitable Feedstock' : 'Major Pollutants'} title={isComposting ? 'Organic Materials for Controlled Composting' : 'Common Contaminants in Industrial Streams'} description={isComposting ? 'Segregated biodegradable materials can be blended to balance structure, moisture, carbon and nitrogen.' : 'The biological treatment approach targets the main pollutants that influence process reliability and discharge quality.'} items={detail.pollutants} columns={3} />

            <CardGrid eyebrow="Industry Challenges" title="Operational Constraints That Impact Performance" description="Traditional systems often struggle under fluctuating water quality, shock loading and inhibitory compounds." items={detail.challenges} columns={4} />

            <ProcessFlow eyebrow="How Nanozyme Works" title={isComposting ? 'Controlled Composting Pathway' : 'Biological Treatment Pathway'} description={isComposting ? 'A managed sequence from feedstock preparation through active decomposition, cooling and maturation.' : 'A structured process designed to convert difficult wastewater streams into stable, treatable effluent.'} steps={detail.processFlow} />

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

            <section className="mx-auto grid max-w-7xl gap-5 px-4 py-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-8"><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-700">Industry benefits</p><h2 className="mt-3 text-2xl font-black text-slate-950">Expected operational advantages</h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{upgradedBenefits.map(benefit => <div key={benefit} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />{benefit}</div>)}</div></div><TestimonialCard item={industryTestimonial} /></section>

            <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8"><div className="grid gap-5 rounded-3xl border border-cyan-200 bg-gradient-to-br from-white to-cyan-50 p-6 lg:grid-cols-[1fr_auto]"><div><p className="text-sm font-bold uppercase tracking-wider text-cyan-700">Downloads and related industries</p><h2 className="mt-2 text-2xl font-black text-slate-950">Technical information for {industry.name}</h2><div className="mt-4 flex flex-wrap gap-2">{industries.filter(item => item.slug !== slug).slice(0, 4).map(item => <Link key={item.slug} href={`/industries/${item.slug}`} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-emerald-400">{item.name}</Link>)}</div></div><div className="flex flex-col gap-2"><a href={siteConfig.brochure} download className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white"><Download className="h-4 w-4" />Company Profile</a><Link href="/#contact" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-emerald-600 px-5 text-sm font-bold text-emerald-700">Request Industry Brochure</Link><Link href="/downloads" className="text-center text-sm font-bold text-cyan-700">All downloads →</Link></div></div></section>

            <CTASection title={detail.ctaTitle} description={detail.ctaDescription} primaryLabel="Get Technical Consultation" secondaryLabel="Contact Sales" />
        </main>
        <ScrollToTop />
    </>
    )
}
