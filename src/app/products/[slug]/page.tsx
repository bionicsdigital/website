import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDown, ArrowRight, Droplets, FlaskConical, ShieldCheck, Sparkles, TrendingUp, Waves } from 'lucide-react'
import ProductBenefits from '@/components/product/ProductBenefits'
import ProductCTA from '@/components/product/ProductCTA'
import ProductDosage from '@/components/product/ProductDosage'
import ProductFAQ from '@/components/product/ProductFAQ'
import ProductHero from '@/components/product/ProductHero'
import ProductOverview from '@/components/product/ProductOverview'
import ProductRecommendation from '@/components/product/ProductRecommendation'
import ProductSpecification from '@/components/product/ProductSpecification'
import products from '@/data/products'
import ScrollToTop from '@/components/home/ScrollToTop'

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Metadata {
    return {
        title: 'Product Details | Bionics Enviro Tech',
        description: 'Scientific microbial products for industrial wastewater treatment.',
    }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const product = products.find((item) => item.slug === slug)

    if (!product) {
        return (
            <main className="min-h-screen bg-slate-50">
                <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8 lg:px-10">
                    <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">Product not found</h1>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">The requested product is not available. Please browse our product range and return to the main catalog.</p>
                    <Link href="/" className="mt-8 inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                        Return Home
                    </Link>
                </section>
            </main>
        )
    }

    const mechanismSteps = [
        'Analysis of wastewater characteristics',
        'Selection of suitable microbial strain',
        'Activation in controlled biological conditions',
        'Application to the treatment system',
        'Monitoring and performance optimization',
    ]

    return (<>
        <main className="min-h-screen bg-slate-50">
            <ProductHero title={product.title} subtitle={product.subtitle} heroImage={product.heroImage} overview={product.overview} />

            <ProductOverview title={product.title} description={product.overview} image={product.image} />

            <ProductSpecification title="Product Details" description="Designed for efficient performance and practical field use across industrial wastewater systems." items={product.specifications} />

            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10 lg:py-12">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-10 lg:p-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Impact on Effluent</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">Improved Treatment Performance</h2>
                    <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200 sm:mt-10">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-200 text-left">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Parameter</th>
                                        <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Effect</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white">
                                    {[
                                        { label: 'COD', value: 'Reduced significantly' },
                                        { label: 'BOD', value: 'Improved biological removal' },
                                        { label: 'Colour', value: 'Enhanced treatment stability' },
                                        { label: 'Odour', value: 'Greater process control' },
                                    ].map((row) => (
                                        <tr key={row.label} className="hover:bg-slate-50/80">
                                            <td className="px-6 py-4 text-sm font-semibold text-slate-900">{row.label}</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <ProductBenefits title="Product Benefits" description="Engineered to provide reliable, field-ready biological treatment support." benefits={product.benefits} />

            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10 lg:py-12">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-10 lg:p-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Applications</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">Where It Performs</h2>
                    <div className="mt-7 grid gap-3 md:grid-cols-2 sm:mt-10 sm:gap-4 xl:grid-cols-3">
                        {product.applications.map((application) => (
                            <div key={application} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 sm:rounded-3xl sm:p-6">
                                {application}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-10 lg:py-20">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-10 lg:p-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Working Mechanism</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">How the Product Works</h2>
                    <div className="mt-7 flex flex-col gap-3 md:flex-row md:items-center md:justify-between sm:mt-10 sm:gap-4">
                        {mechanismSteps.map((step, index) => (
                            <div key={step} className="flex flex-1 flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center sm:rounded-3xl sm:p-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">{index + 1}</div>
                                <p className="mt-4 text-sm font-semibold text-slate-700">{step}</p>
                                {index < mechanismSteps.length - 1 ? <ArrowDown className="mt-4 h-4 w-4 text-emerald-600" /> : null}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ProductRecommendation title="Product Recommendation" description="Suggested for plants that require dependable biological treatment support and stable operation." items={[
                { title: 'For Existing Plants', description: 'Ideal for retrofitting into current treatment systems with minimal disruption.' },
                { title: 'For New Installations', description: 'Supports faster startup and better early performance during commissioning.' },
                { title: 'For Compliance Focus', description: 'Useful where treatment performance and discharge quality are critical.' },
            ]} />

            <ProductDosage title="Dosage Table" description="Recommended dosing guidance for smooth integration and controlled application." rows={product.dosage} />

            <ProductFAQ title="Frequently Asked Questions" description="Helpful answers about product use, compatibility and field performance." items={product.faqs} />

            <ProductCTA title="Need a tailored solution for your wastewater treatment plant?" description="Speak with our technical experts to select the right bioculture and application strategy for your site." />
        </main>
        <ScrollToTop />
        </>
    )
}
