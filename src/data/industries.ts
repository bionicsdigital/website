import type { LucideIcon } from 'lucide-react'
import {
    Activity,
    AlertTriangle,
    Beaker,
    Building2,
    Factory,
    FlaskConical,
    Gauge,
    Leaf,
    Milk,
    Pill,
    Shirt,
    Sparkles,
    SprayCan,
    Thermometer,
    Utensils,
    Waves,
    Droplets,
    ShieldCheck,
    TrendingUp,
    Cpu,
    Microscope,
    Recycle,
    Wind,
    CircleCheckBig,
} from 'lucide-react'

export type Industry = {
    name: string
    slug: string
    icon: LucideIcon
    desc: string
}

export type IndustryDetail = {
    eyebrow: string
    title: string
    subtitle: string
    description: string
    heroImage: string
    badges: string[]
    overviewParagraphs: string[]
    wastewaterCharacteristics: Array<{ parameter: string; typicalRange: string }>
    pollutants: Array<{ title: string; description: string; icon: LucideIcon }>
    challenges: Array<{ title: string; description: string; icon: LucideIcon }>
    processFlow: string[]
    mechanism: Array<{ title: string; description: string; icon: LucideIcon }>
    reactions: Array<{ title: string; equation: string; description: string }>
    whyNanozyme: Array<{ title: string; description: string; icon: LucideIcon }>
    recommendation: {
        title: string
        availableForm: string
        bacterialCount: string
        shelfLife: string
        recommendedDosage: string
        incubationMethod: string
        suitableIndustries: string
        preferredApplication: string
    }
    performanceTable: Array<{ parameter: string; before: string; after: string; reduction: string }>
    applications: string[]
    faqs: Array<{ question: string; answer: string }>
    ctaTitle: string
    ctaDescription: string
}

const textileDetail: IndustryDetail = {
    eyebrow: 'Textile & Dye Wastewater',
    title: 'Nanozyme Bioculture for Textile and Dye Effluent Treatment',
    subtitle: 'High-performance microbial treatment for colour, COD and chemical load reduction',
    description: 'Engineered for textile mills, dye houses and CETPs that need reliable biological treatment for complex effluent streams.',
    heroImage: '/products/etp-bioculture.png',
    badges: ['Reduce COD', 'Reduce BOD', 'Odour Control', 'Zero Sludge', 'Eco Friendly', 'PCB Compliance'],
    overviewParagraphs: [
        'Textile processing operations generate highly variable wastewater with strong colour, elevated organic loading and recurring chemical shocks. These streams often challenge conventional biological systems due to dye residues, surfactants and varying pH conditions.',
        'Bionics Enviro Tech delivers Nanozyme bioculture solutions engineered to stabilize biological treatment in ETPs and CETPs. Our formulations accelerate biodegradation of complex organics while helping operators improve control over COD, BOD and colour.',
        'By strengthening microbial activity, the solution supports faster plant stabilization, lower chemical dependency and improved compliance across dyeing, washing and finishing units.',
    ],
    wastewaterCharacteristics: [
        { parameter: 'pH', typicalRange: '6.5–9.0' },
        { parameter: 'COD', typicalRange: '800–5000 mg/L' },
        { parameter: 'BOD', typicalRange: '300–2500 mg/L' },
        { parameter: 'TSS', typicalRange: '200–1800 mg/L' },
        { parameter: 'TDS', typicalRange: '2000–12000 mg/L' },
        { parameter: 'Oil & Grease', typicalRange: '20–300 mg/L' },
        { parameter: 'Colour', typicalRange: 'High to very high' },
        { parameter: 'Temperature', typicalRange: '25–45°C' },
        { parameter: 'Flow Variation', typicalRange: 'High' },
        { parameter: 'Shock Load', typicalRange: 'Frequent' },
    ],
    pollutants: [
        { title: 'Azo Dyes', description: 'Complex colouring compounds that are difficult to degrade biologically.', icon: SprayCan },
        { title: 'Phenols', description: 'Common in process chemicals and require robust biological activity.', icon: AlertTriangle },
        { title: 'Surfactants', description: 'Interfere with biological floc formation and aeration efficiency.', icon: Waves },
        { title: 'Proteins & Carbohydrates', description: 'Contribute significant organic load and oxygen demand.', icon: FlaskConical },
        { title: 'Lignin & Cellulose', description: 'Present in fibre processing streams and increase treatment burden.', icon: Factory },
        { title: 'Heavy Metals', description: 'Require careful process control and stable biomass conditions.', icon: ShieldCheck },
    ],
    challenges: [
        { title: 'High COD', description: 'Organic loading from dyes and auxiliaries can overwhelm conventional systems.', icon: Gauge },
        { title: 'High BOD', description: 'Biological oxygen demand rises sharply during washing and dyeing cycles.', icon: Activity },
        { title: 'Odour', description: 'Poorly controlled anaerobic pockets create nuisance odours and process instability.', icon: Droplets },
        { title: 'Colour', description: 'Residual colour is often the limiting factor for discharge compliance.', icon: Sparkles },
        { title: 'Foaming', description: 'Surfactants and process chemicals can cause excessive foam in aeration zones.', icon: Waves },
        { title: 'Shock Loading', description: 'Batch operation and production variability create sudden treatment stress.', icon: Thermometer },
        { title: 'Low DO', description: 'Overloaded aeration systems limit oxygen transfer and biomass performance.', icon: Wind },
        { title: 'Microbial Inhibition', description: 'Toxic compounds can suppress healthy biomass growth and settleability.', icon: Microscope },
    ],
    processFlow: ['Raw Wastewater', 'Complex Organic Matter', 'Enzymatic Hydrolysis', 'Biological Oxidation', 'Microbial Degradation', 'Stable Biomass', 'Treated Water'],
    mechanism: [
        { title: 'Hydrolysis', description: 'Complex organics are broken down into simpler biodegradable compounds.', icon: Cpu },
        { title: 'Acidogenesis', description: 'Intermediate compounds are converted into volatile fatty acids and simpler fragments.', icon: FlaskConical },
        { title: 'Acetogenesis', description: 'The sludge community converts intermediates into substrates that support robust oxidation.', icon: Activity },
        { title: 'Aerobic Oxidation', description: 'Active biomass removes organics and stabilizes the biological process.', icon: Recycle },
        { title: 'Mineralization', description: 'The remaining fractions are converted into safer end products and cleaner water.', icon: Leaf },
    ],
    reactions: [
        { title: 'Organic Matter Oxidation', equation: 'Organic Matter + O₂ → CO₂ + H₂O + Energy', description: 'Supports efficient biological oxidation in aeration-based systems.' },
        { title: 'Ammonium Conversion', equation: 'NH₄⁺ + 1.5O₂ → NO₂⁻ + H₂O + 2H⁺', description: 'Helps maintain nitrogen balance in mixed wastewater streams.' },
        { title: 'Nitrite Oxidation', equation: 'NO₂⁻ + 0.5O₂ → NO₃⁻', description: 'Supports nitrification and process stability.' },
        { title: 'Sulphide Oxidation', equation: 'H₂S + 2O₂ → SO₄²⁻ + 2H⁺', description: 'Useful where sulphur compounds create odour and toxicity.' },
    ],
    whyNanozyme: [
        { title: 'Faster Startup', description: 'Accelerates microbial establishment in new or stressed treatment systems.', icon: TrendingUp },
        { title: 'Stable Biomass', description: 'Promotes healthier activated sludge and more dependable biological performance.', icon: ShieldCheck },
        { title: 'High Shock Load Resistance', description: 'Helps plants recover quickly during rapid process changes.', icon: Gauge },
        { title: 'Lower Chemical Consumption', description: 'Reduces reliance on corrective chemical dosing and process intervention.', icon: CircleCheckBig },
        { title: 'Less Sludge', description: 'Supports efficient conversion and better sludge handling performance.', icon: Leaf },
        { title: 'Odour Removal', description: 'Improves process balance and minimizes nuisance release from wastewater systems.', icon: Droplets },
        { title: 'Better Oxygen Utilization', description: 'Improves aeration efficiency and biological oxygen uptake.', icon: Wind },
        { title: 'Eco Friendly', description: 'Delivers sustainable treatment support with lower environmental impact.', icon: Recycle },
        { title: 'PCB Compliance', description: 'Supports reliable effluent quality and better compliance outcomes.', icon: Beaker },
    ],
    recommendation: {
        title: 'Nanozyme BET-ETP-7003',
        availableForm: 'Liquid microbial culture',
        bacterialCount: 'High CFU consortium',
        shelfLife: '12 months',
        recommendedDosage: '1–3 L/day depending on plant loading',
        incubationMethod: 'Pre-activation and controlled dosing',
        suitableIndustries: 'Textile, dyeing houses, CETP and ETP operators',
        preferredApplication: 'Aeration tank, equalization tank and polishing unit',
    },
    performanceTable: [
        { parameter: 'COD', before: 'High', after: 'Low', reduction: '85–95%' },
        { parameter: 'BOD', before: 'High', after: 'Low', reduction: '90–98%' },
        { parameter: 'TSS', before: 'Elevated', after: 'Controlled', reduction: '80–95%' },
        { parameter: 'Colour', before: 'Visible', after: 'Reduced', reduction: '70–95%' },
        { parameter: 'Odour', before: 'Noticeable', after: 'Reduced', reduction: '90%+' },
        { parameter: 'Sludge', before: 'Excessive', after: 'Optimized', reduction: '30–50%' },
        { parameter: 'DO', before: 'Low', after: 'Improved', reduction: 'N/A' },
    ],
    applications: ['ETP', 'CETP', 'STP', 'Cooling Tower', 'Equalization Tank', 'Aeration Tank', 'Activated Sludge Process', 'MBBR', 'SBR', 'MBR'],
    faqs: [
        { question: 'How does Nanozyme reduce COD?', answer: 'It strengthens the biological community so that organic pollutants are metabolized more efficiently in the treatment system.' },
        { question: 'Can Nanozyme tolerate pH fluctuations?', answer: 'Yes. The formulation is designed to maintain biological activity through moderate process variability.' },
        { question: 'How long before results appear?', answer: 'Visible improvement often begins within a short operational period depending on plant condition and loading.' },
        { question: 'Can Nanozyme replace chemicals?', answer: 'It can reduce chemical dependency but should be applied as part of a well-managed treatment strategy.' },
        { question: 'Can it reduce sludge?', answer: 'Yes, when used correctly it supports more efficient biomass conversion and lower sludge burden.' },
        { question: 'Is it suitable for CETP?', answer: 'Yes. It is widely used in shared treatment systems where wastewater characteristics vary significantly.' },
        { question: 'Can it handle shock loading?', answer: 'Yes. It is designed to support process resilience under fluctuating influent conditions.' },
        { question: 'What industries can use it?', answer: 'It is suitable for textile, chemical, pharma, food & dairy, sugar and municipal wastewater applications.' },
    ],
    ctaTitle: 'Need Technical Assistance?',
    ctaDescription: 'Our engineers can help optimize your wastewater treatment plant for better performance, lower operating cost and stronger compliance.',
}

const genericDetail: IndustryDetail = {
    eyebrow: 'Industrial Wastewater Treatment',
    title: 'Nanozyme Bioculture for Industrial Effluent Treatment',
    subtitle: 'Reliable biological support for complex wastewater streams',
    description: 'A scientific microbial solution designed to strengthen treatment stability and support digital process control in demanding industrial environments.',
    heroImage: '/products/etp-bioculture.png',
    badges: ['Reduce COD', 'Reduce BOD', 'Odour Control', 'Improve Stability'],
    overviewParagraphs: [
        'Industrial wastewater systems require dependable biological support, especially where effluent characteristics vary with production cycles and process chemistry.',
        'Nanozyme bioculture improves microbial activity and helps plants maintain process reliability while reducing dependence on corrective chemical dosing.',
        'This makes it a practical solution for operators looking to improve effluent quality, plant resilience and day-to-day operating stability.',
    ],
    wastewaterCharacteristics: [
        { parameter: 'pH', typicalRange: '6.5–8.5' },
        { parameter: 'COD', typicalRange: '500–4000 mg/L' },
        { parameter: 'BOD', typicalRange: '200–2000 mg/L' },
        { parameter: 'TSS', typicalRange: '100–1500 mg/L' },
        { parameter: 'TDS', typicalRange: '1000–8000 mg/L' },
        { parameter: 'Temperature', typicalRange: '20–45°C' },
        { parameter: 'Shock Load', typicalRange: 'Moderate to High' },
    ],
    pollutants: [
        { title: 'Organics', description: 'High load from manufacturing and processing steps.', icon: FlaskConical },
        { title: 'Oils & Grease', description: 'Affects aeration and treatment efficiency.', icon: Waves },
        { title: 'Surfactants', description: 'Interfere with microbial settling and aeration.', icon: SprayCan },
        { title: 'Heavy Metals', description: 'Requires stable and well-managed biological treatment.', icon: ShieldCheck },
    ],
    challenges: [
        { title: 'High COD', description: 'Temperature and load variability increase oxygen demand.', icon: Gauge },
        { title: 'Low DO', description: 'Deficient oxygen limits biological performance.', icon: Wind },
        { title: 'Odour', description: 'Anaerobic pockets produce unpleasant emissions.', icon: Droplets },
        { title: 'Shock Loading', description: 'Irregular process conditions can destabilize treatment.', icon: Thermometer },
    ],
    processFlow: ['Influent Analysis', 'Bioculture Selection', 'System Activation', 'Biological Treatment', 'Monitoring & Optimization'],
    mechanism: [
        { title: 'Hydrolysis', description: 'Breaks down larger organics into manageable compounds.', icon: Cpu },
        { title: 'Oxidation', description: 'Biological oxidation reduces residual load.', icon: Recycle },
        { title: 'Stabilization', description: 'The microbial community becomes more resilient and efficient.', icon: Leaf },
    ],
    reactions: [
        { title: 'Organic Oxidation', equation: 'Organic Matter + O₂ → CO₂ + H₂O + Energy', description: 'A core biological response in aerobic treatment systems.' },
        { title: 'Ammonium Conversion', equation: 'NH₄⁺ + 1.5O₂ → NO₂⁻ + H₂O + 2H⁺', description: 'Supports nitrogen transformation under controlled conditions.' },
    ],
    whyNanozyme: [
        { title: 'Faster Startup', description: 'Reduces time to steady biological performance.', icon: TrendingUp },
        { title: 'Stable Biomass', description: 'Improves process consistency across variable loads.', icon: ShieldCheck },
        { title: 'Lower Operating Cost', description: 'Improves treatment efficiency without heavy chemical dependency.', icon: CircleCheckBig },
        { title: 'Eco Friendly', description: 'Supports sustainable operation and plant compliance.', icon: Recycle },
    ],
    recommendation: {
        title: 'Nanozyme BET-ETP-7003',
        availableForm: 'Liquid bioculture',
        bacterialCount: 'High CFU consortium',
        shelfLife: '12 months',
        recommendedDosage: 'Application specific',
        incubationMethod: 'Pre-conditioning and dosing support',
        suitableIndustries: 'Industrial wastewater plants',
        preferredApplication: 'ETP / CETP / STP systems',
    },
    performanceTable: [
        { parameter: 'COD', before: 'High', after: 'Reduced', reduction: '80–95%' },
        { parameter: 'BOD', before: 'High', after: 'Reduced', reduction: '85–98%' },
        { parameter: 'TSS', before: 'Elevated', after: 'Controlled', reduction: '75–90%' },
        { parameter: 'Odour', before: 'Noticeable', after: 'Reduced', reduction: '90%+' },
    ],
    applications: ['ETP', 'CETP', 'STP', 'Equalization Tank', 'Aeration Tank'],
    faqs: [
        { question: 'How quickly can results be seen?', answer: 'Results depend on plant conditions, but improved biological activity is often observed shortly after application.' },
        { question: 'Can it be used in my treatment system?', answer: 'Yes, subject to wastewater analysis and appropriate process-based recommendations.' },
    ],
    ctaTitle: 'Need Technical Assistance?',
    ctaDescription: 'Speak with our engineers to explore the right microbial solution for your treatment plant.',
}

const industryDetails: Record<string, IndustryDetail> = {
    'textile-processing-industry': textileDetail,
    'chemical-industry': {
        ...textileDetail,
        eyebrow: 'Chemical Wastewater',
        title: 'Nanozyme Bioculture for Chemical Industry Effluent',
        subtitle: 'Support for phenol, solvent and complex organic load treatment',
        description: 'Applied in chemical plants where process variability, toxicity and high organic load demand stronger biological resilience.',
        badges: ['Phenol Handling', 'VOC Support', 'Odour Control', 'PCB Compliance'],
        overviewParagraphs: [
            'Chemical manufacturing facilities often produce wastewater containing solvents, phenolics and compounds that can inhibit normal biological treatment.',
            'Bionics Nanozyme formulations are designed to improve the resilience of activated sludge and biological treatment trains operating under these demanding conditions.',
            'The result is more stable operation, better organic removal and improved performance in treatment plants that must meet strict discharge requirements.',
        ],
        pollutants: [
            { title: 'Phenols', description: 'Require stable and acclimatized bioactivity for effective removal.', icon: AlertTriangle },
            { title: 'VOC', description: 'Volatile compounds often challenge biological treatment systems.', icon: SprayCan },
            { title: 'Solvents', description: 'Residual organics can disrupt microbial performance.', icon: Beaker },
            { title: 'Surfactants', description: 'Increase foam and reduce oxygen transfer efficiency.', icon: Waves },
        ],
    },
    'pharma-industry': {
        ...textileDetail,
        eyebrow: 'Pharma Wastewater',
        title: 'Nanozyme Bioculture for Pharma Effluent Treatment',
        subtitle: 'Reliable biological support for high COD and API-bearing wastewater',
        description: 'Used in API, formulation and manufacturing facilities to improve treatment performance under high organic load conditions.',
        badges: ['API Removal', 'High COD Treatment', 'Antibiotic Degradation', 'Compliance Support'],
    },
    'food-processing-industry': {
        ...textileDetail,
        eyebrow: 'Food & Dairy Wastewater',
        title: 'Nanozyme Bioculture for Food and Dairy Effluent',
        subtitle: 'Designed for protein, fat and lactose-rich wastewater',
        description: 'Supports biological treatment in food processing and dairy facilities with strong organic loading.',
        badges: ['Protein Hydrolysis', 'Fat Degradation', 'Lactose Breakdown', 'Odour Control'],
    },
    'sugar-industry': {
        ...textileDetail,
        eyebrow: 'Sugar & Distillery Wastewater',
        title: 'Nanozyme Bioculture for Sugar and Distillery Effluent',
        subtitle: 'Purpose-built biological support for spent wash and high-strength streams',
        description: 'Engineered to improve treatment stability in sugar mills, distilleries and other high organic-load plants.',
        badges: ['Spent Wash', 'Anaerobic Digestion', 'Methane Generation', 'COD Reduction'],
    },
    'paper-and-pulp-mill': {
        ...textileDetail,
        eyebrow: 'Paper & Pulp Wastewater',
        title: 'Nanozyme Bioculture for Paper and Pulp Effluent',
        subtitle: 'Biological support for lignin, cellulose and black liquor operations',
        description: 'Supports biological treatment in mill operations where fibre load and colouration create process stress.',
        badges: ['Lignin Removal', 'Cellulose Breakdown', 'Black Liquor Support', 'Lower Sludge'],
    },
    'municipal': {
        ...textileDetail,
        eyebrow: 'Municipal Wastewater',
        title: 'Nanozyme Bioculture for STP and Sewage Treatment',
        subtitle: 'Supporting activated sludge and sewage treatment reliability',
        description: 'A dependable microbial solution for municipal and community-based sewage treatment systems.',
        badges: ['Nitrogen Cycle', 'Phosphorus Removal', 'Activated Sludge', 'Odour Control'],
    },
    'domestic-and-commercial-stp': {
        ...textileDetail,
        eyebrow: 'Domestic & Commercial STP',
        title: 'Nanozyme Bioculture for Compact Sewage Treatment',
        subtitle: 'Reliable biological support for compact and decentralised STP units',
        description: 'Designed for commercial and residential systems that need consistent treatment with minimal downtime.',
        badges: ['Compact STP', 'Fast Startup', 'Domestic Compliance', 'Odour Control'],
    },
    cetp: {
        ...textileDetail,
        eyebrow: 'CETP Treatment',
        title: 'Nanozyme Bioculture for CETP Operations',
        subtitle: 'Shared treatment support for mixed industrial wastewater',
        description: 'A practical microbial solution for common effluent treatment plants dealing with mixed and variable influent streams.',
        badges: ['Mixed Wastewater', 'Shock Load Tolerance', 'CETP Optimization', 'Compliance Support'],
    },
    'industrial-etp': {
        ...textileDetail,
        eyebrow: 'Industrial ETP',
        title: 'Nanozyme Bioculture for Industrial ETP Systems',
        subtitle: 'Engineered for robust operation in demanding industrial treatment facilities',
        description: 'Helps ETP operators improve biological performance across changing influent conditions and process loads.',
        badges: ['High COD', 'Stable Biomass', 'Lower Sludge', 'PCB Compliance'],
    },
    'distillery-industry': {
        ...textileDetail,
        eyebrow: 'Distillery Wastewater',
        title: 'Nanozyme Bioculture for Distillery Effluent',
        subtitle: 'High-strength treatment support for distillery and fermentation plants',
        description: 'Supports anaerobic and aerobic treatment environments dealing with heavy organic load.',
        badges: ['Spent Wash', 'High COD', 'Odour Control', 'Methane Support'],
    },
    'dairy-industry': {
        ...textileDetail,
        eyebrow: 'Dairy Wastewater',
        title: 'Nanozyme Bioculture for Dairy Effluent',
        subtitle: 'Effective biological support for whey, milk and dairy processing wastewater',
        description: 'Built to manage strong organic loading and improve treatment performance in dairy operations.',
        badges: ['Protein Breakdown', 'Fat Degradation', 'Lactose Support', 'Odour Control'],
    },
    'food-processing-industry-2': {
        ...textileDetail,
        eyebrow: 'Food Processing',
        title: 'Nanozyme Bioculture for Food Processing Effluent',
        subtitle: 'A dependable microbial solution for food and beverage treatment plants',
        description: 'Helps operators stabilize treatment and handle high organic loads from food processing systems.',
        badges: ['Organic Load', 'Fast Startup', 'Odour Reduction', 'PCB Compliance'],
    },
}

export const getIndustryDetail = (slug: string): IndustryDetail => industryDetails[slug] ?? genericDetail

const industries: Industry[] = [
    { name: 'Textile Processing Industry', slug: 'textile-processing-industry', icon: Shirt, desc: 'Colour, COD and chemical wastewater treatment.' },
    { name: 'Sugar Industry', slug: 'sugar-industry', icon: Factory, desc: 'Effluent treatment and process optimization.' },
    { name: 'Distillery Industry', slug: 'distillery-industry', icon: Factory, desc: 'High COD spent wash biological treatment.' },
    { name: 'Chemical Industry', slug: 'chemical-industry', icon: Beaker, desc: 'Complex industrial wastewater management.' },
    { name: 'Pharma Industry', slug: 'pharma-industry', icon: Pill, desc: 'Biological treatment for pharmaceutical effluent.' },
    { name: 'Paper & Pulp Mill', slug: 'paper-and-pulp-mill', icon: Factory, desc: 'Reduce sludge and improve treatment efficiency.' },
    { name: 'Food Processing Industry', slug: 'food-processing-industry', icon: Utensils, desc: 'Organic wastewater treatment solutions.' },
    { name: 'Dairy Industry', slug: 'dairy-industry', icon: Milk, desc: 'Reduce BOD, COD and odour generation.' },
    { name: 'Municipal', slug: 'municipal', icon: Building2, desc: 'Reliable STP and sewage treatment solutions.' },
    { name: 'Industrial ETP', slug: 'industrial-etp', icon: Factory, desc: 'Microbial culture for industrial ETP.' },
    { name: 'Domestic and Commercial STP', slug: 'domestic-and-commercial-stp', icon: Building2, desc: 'Improve biological sewage treatment.' },
    { name: 'CETP', slug: 'cetp', icon: Factory, desc: 'Centralized effluent treatment optimization.' },
]

export default industries
