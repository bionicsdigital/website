import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import ProductBenefits from '@/components/product/ProductBenefits'
import ProductCTA from '@/components/product/ProductCTA'
import ProductDosage from '@/components/product/ProductDosage'
import ProductFAQ from '@/components/product/ProductFAQ'
import ProductHero from '@/components/product/ProductHero'
import ProductSpecification from '@/components/product/ProductSpecification'
import products from '@/data/products'
import ScrollToTop from '@/components/home/ScrollToTop'
import { createMetadata, siteConfig } from '@/lib/site'
import { testimonials } from '@/data/resource-content'
import TestimonialCard from '@/components/testimonials/TestimonialCard'
import { PRODUCT_PRICE, products as orderProducts } from '@/components/forms/products-data'

const productSeo: Record<string, { title: string; description: string; keywords: string[] }> = {
    'aerobic-bioculture': { title: 'Aerobic Bioculture Manufacturer | Bionics Enviro Tech', description: 'Aerobic bioculture for activated sludge, ETP and STP systems. Improve COD and BOD removal with scientific microbial treatment. Request guidance.', keywords: ['Aerobic Bioculture Manufacturer', 'Aerobic Wastewater Treatment', 'Activated Sludge Culture', 'ETP Aerobic Culture'] },
    'anaerobic-bioculture': { title: 'Anaerobic Digester Culture | Bionics Enviro Tech', description: 'Anaerobic digester culture for high-strength wastewater, methane activity and biogas enhancement. Get plant-specific application guidance today.', keywords: ['Anaerobic Bioculture', 'Anaerobic Digester Culture', 'Biogas Enhancing Culture', 'Methanogenic Culture', 'Anaerobic Wastewater Treatment'] },
    'stp-bioculture': { title: 'STP Bioculture | Bionics Enviro Tech', description: 'STP bioculture for domestic, commercial and municipal sewage treatment. Strengthen microbial activity, odour control and plant stability today.', keywords: ['STP Bioculture', 'Sewage Treatment Bioculture', 'Domestic STP Culture', 'Commercial STP Culture'] },
    'etp-bioculture': { title: 'ETP Bioculture | Bionics Enviro Tech', description: 'ETP bioculture for industrial effluent treatment, COD and BOD reduction and stable biological operation. Request technical application support.', keywords: ['ETP Bioculture', 'Industrial Effluent Treatment', 'Industrial ETP Culture', 'Wastewater Treatment Bioculture'] },
    'sugar-distillery-bioculture': { title: 'Sugar Industry ETP Culture | Bionics Enviro Tech', description: 'Bioculture for sugar industry ETP and distillery wastewater, molasses treatment, fermentation support and biogas production. Talk to our team.', keywords: ['Sugar Industry ETP', 'Distillery Wastewater Treatment', 'Molasses Wastewater', 'Fermentation Booster', 'Biogas Production'] },
    'organic-compost-culture': { title: 'Organic Composting Culture | Bionics Enviro Tech', description: 'Composting culture for accelerated organic waste and municipal solid waste decomposition. Improve composting performance with technical support.', keywords: ['Composting Culture', 'Organic Compost Accelerator', 'Municipal Solid Waste Compost'] },
}

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const product = products.find(item => item.slug === slug)
    const seo = productSeo[slug]
    if (!product || !seo) return { title: 'Product Not Found', robots: { index: false, follow: false } }
    return createMetadata({ ...seo, path: `/products/${slug}`, image: product.heroImage })
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
    const testimonialIdByProduct: Record<string, string> = {
        'aerobic-bioculture': 'chemical-shock',
        'anaerobic-bioculture': 'distillery-digester',
        'stp-bioculture': 'municipal-stp',
        'etp-bioculture': 'textile-colour',
        'sugar-distillery-bioculture': 'distillery-digester',
        'organic-compost-culture': 'food-organics',
    }
    const productTestimonial = testimonials.find(item => item.id === testimonialIdByProduct[product.slug]) ?? testimonials[0]
    const performanceByProduct: Record<string, Array<{ label: string; value: string }>> = {
        'aerobic-bioculture': [{ label: 'COD reduction', value: '95–98%' }, { label: 'BOD reduction', value: '98–100%' }, { label: 'Colour reduction', value: '90–100%' }, { label: 'TSS reduction', value: '95–99%' }, { label: 'Dissolved oxygen', value: '3–8 mg/L' }],
        'anaerobic-bioculture': [{ label: 'COD reduction', value: '90–98%' }, { label: 'BOD reduction', value: '98–100%' }, { label: 'Colour reduction', value: '90–100%' }, { label: 'TSS reduction', value: '95–98%' }],
        'stp-bioculture': [{ label: 'COD reduction', value: '95–98%' }, { label: 'BOD reduction', value: '98–100%' }, { label: 'Colour reduction', value: 'Up to 100%' }, { label: 'TSS reduction', value: '98–100%' }, { label: 'Dissolved oxygen', value: '3–8 mg/L' }],
        'etp-bioculture': [{ label: 'COD reduction', value: '95–98%' }, { label: 'BOD reduction', value: '98–100%' }, { label: 'Colour reduction', value: '90–100%' }, { label: 'TSS reduction', value: '95–99%' }, { label: 'Dissolved oxygen', value: '3–8 mg/L' }],
        'sugar-distillery-bioculture': [{ label: 'COD and BOD reduction', value: '95–100%' }, { label: 'Colour reduction', value: '98–100%' }, { label: 'TSS reduction', value: '97–100%' }, { label: 'Dissolved oxygen', value: '4–6 mg/L' }],
    }
    const verifiedPerformance = performanceByProduct[product.slug]

    const productUrl = `${siteConfig.url}/products/${product.slug}`
    const schemaPrice = orderProducts.find((item) => item.name === product.title)?.price ?? PRODUCT_PRICE
    const productOffer = {
        '@type': 'Offer',
        url: productUrl,
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        price: schemaPrice,
        priceCurrency: 'INR',
        priceSpecification: {
            '@type': 'PriceSpecification',
            price: schemaPrice,
            priceCurrency: 'INR',
            description: 'Price and dosage are supplied through a written quotation after wastewater analysis and application assessment.',
        },
        seller: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
        },
    }
    const schemas = [
        { '@context': 'https://schema.org', '@type': 'Product', '@id': `${productUrl}#product`, name: product.title, image: `${siteConfig.url}${product.image}`, description: product.overview, sku: `BET-${product.slug.toUpperCase().replace(/-/g, '-')}`, category: 'Wastewater Treatment Bioculture', material: 'Microbial bioculture formulation', brand: { '@type': 'Brand', name: siteConfig.shortName }, manufacturer: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url }, offers: productOffer, additionalProperty: [...product.specifications.map(item => ({ '@type': 'PropertyValue', name: item.label, value: item.value })), { '@type': 'PropertyValue', name: 'Industry', value: product.applications.join(', ') }, { '@type': 'PropertyValue', name: 'Application', value: product.subtitle }] },
        { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${productUrl}#webpage`, url: productUrl, name: product.title, description: product.overview, mainEntity: { '@id': `${productUrl}#product` }, isPartOf: { '@type': 'WebSite', url: siteConfig.url, name: siteConfig.shortName } },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url }, { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteConfig.url}/products` }, { '@type': 'ListItem', position: 3, name: product.title, item: productUrl }] },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: product.faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    ]

    return (<>
        {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
        <main className="min-h-screen bg-slate-50">
            <ProductHero title={product.title} subtitle={product.subtitle} heroImage={product.heroImage} overview={product.overview} />

            <ProductSpecification title="Product Details" description="Designed for efficient performance and practical field use across industrial wastewater systems." items={product.specifications} />

            <ProductBenefits title="Product Benefits" description="Engineered to provide reliable, field-ready biological treatment support." benefits={product.benefits} />

            {verifiedPerformance && <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10"><div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-600">Performance profile</p><h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">Manufacturer-reported treatment potential</h2></div><p className="max-w-md text-xs leading-5 text-slate-500">Indicative source-data ranges, not guaranteed outcomes. Results depend on wastewater, process design and operating conditions.</p></div><dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{verifiedPerformance.map(item => <div key={item.label} className="rounded-2xl bg-slate-50 p-4"><dt className="text-xs font-bold text-slate-500">{item.label}</dt><dd className="mt-1 text-lg font-black text-emerald-700">{item.value}</dd></div>)}</dl></div></section>}

            <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 lg:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Applications</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">Where It Performs</h2>
                    <div className="mt-5 grid gap-3 md:grid-cols-2 sm:mt-6 xl:grid-cols-3">
                        {product.applications.map((application) => (
                            <div key={application} className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-medium text-slate-700 sm:p-4">
                                {application}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10 lg:py-8">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 lg:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Working Mechanism</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">How the Product Works</h2>
                    <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between sm:mt-6">
                        {mechanismSteps.map((step, index) => (
                            <div key={step} className="grid flex-1 grid-cols-[auto_1fr] items-center gap-x-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left sm:flex sm:flex-col sm:rounded-3xl sm:p-5 sm:text-center">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white sm:h-12 sm:w-12">{index + 1}</div>
                                <p className="text-sm font-semibold text-slate-700 sm:mt-4">{step}</p>
                                {index < mechanismSteps.length - 1 ? <ArrowDown className="col-span-2 mx-auto mt-3 h-4 w-4 text-emerald-600 sm:mt-4" /> : null}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ProductDosage title="Dosage Table" description="Recommended dosing guidance for smooth integration and controlled application." rows={product.dosage} />

            <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10"><div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-600">Product recommendation</p><h2 className="mt-2 text-2xl font-black text-slate-950">Best suited for</h2></div><div className="mt-4 flex flex-wrap gap-2 sm:mt-0 sm:justify-end">{product.applications.map(item => <span key={item} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900">{item}</span>)}</div></div></section>

            <ProductFAQ title="Frequently Asked Questions" description="Helpful answers about product use, compatibility and field performance." items={product.faqs} />

            <section className="mx-auto max-w-3xl px-4 py-5 sm:px-8 lg:py-8"><TestimonialCard item={productTestimonial} /></section>

            <nav aria-label="Related product resources" className="mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-10"><div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-3"><Link href="/industries" className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800">Related industries →</Link><Link href="/blogs" className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800">Technical articles →</Link><Link href="/case-studies" className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800">Case studies →</Link></div></nav>

            <ProductCTA title="Need a tailored solution for your wastewater treatment plant?" description="Speak with our technical experts to select the right bioculture and application strategy for your site." />
        </main>
        <ScrollToTop />
    </>
    )
}
