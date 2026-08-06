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
    eyebrow: 'Textile Industry Wastewater',
    title: 'Nanozyme Bioculture for Textile Industry Effluent',
    subtitle: 'Biological treatment support for textile washing, sizing and finishing wastewater',
    description: 'Engineered for textile mills that need stable biological treatment of variable organic loads, fibre residues, surfactants and process chemicals.',
    heroImage: '/industries/Textile.png',
    badges: ['Reduce COD', 'Reduce BOD', 'Odour Control', 'Zero Sludge', 'Eco Friendly', 'PCB Compliance'],
    overviewParagraphs: [
        'Textile mills generate variable wastewater from desizing, scouring, bleaching, washing and finishing. These streams can contain fibres, starches, surfactants and elevated organic loads.',
        'Bionics Nanozyme bioculture supports stable microbial activity in textile ETP systems, helping operators manage COD, BOD, foaming and changing production loads.',
        'Application is planned around equalisation, pH control, oxygen transfer and the existing biological treatment process.',
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
        { title: 'Sizing Agents', description: 'Starches and synthetic sizing chemicals contribute biodegradable and persistent COD.', icon: SprayCan },
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
        suitableIndustries: 'Textile mills, processing units, CETP and ETP operators',
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
    applications: ['Textile mill ETP', 'Desizing wastewater', 'Scouring and bleaching streams', 'Washing and finishing units', 'Aeration tank', 'Activated sludge process', 'MBBR', 'SBR', 'MBR'],
    faqs: [
        { question: 'How does Nanozyme reduce COD?', answer: 'It strengthens the biological community so that organic pollutants are metabolized more efficiently in the treatment system.' },
        { question: 'Can Nanozyme tolerate pH fluctuations?', answer: 'Yes. The formulation is designed to maintain biological activity through moderate process variability.' },
        { question: 'How long before results appear?', answer: 'Visible improvement often begins within a short operational period depending on plant condition and loading.' },
        { question: 'Can Nanozyme replace chemicals?', answer: 'It can reduce chemical dependency but should be applied as part of a well-managed treatment strategy.' },
        { question: 'Can it reduce sludge?', answer: 'Yes, when used correctly it supports more efficient biomass conversion and lower sludge burden.' },
        { question: 'Is it suitable for CETP?', answer: 'Yes. It is widely used in shared treatment systems where wastewater characteristics vary significantly.' },
        { question: 'Can it handle shock loading?', answer: 'Yes. It is designed to support process resilience under fluctuating influent conditions.' },
        { question: 'What industries can use it?', answer: 'It is suitable for textile, chemical, pharmaceutical, food processing, dairy, sugar, distillery and municipal wastewater applications.' },
    ],
    ctaTitle: 'Need Technical Assistance?',
    ctaDescription: 'Our engineers can help optimize your wastewater treatment plant for better performance, lower operating cost and stronger compliance.',
}

const genericDetail: IndustryDetail = {
    eyebrow: 'Industrial Wastewater Treatment',
    title: 'Nanozyme Bioculture for Industrial Effluent Treatment',
    subtitle: 'Reliable biological support for complex wastewater streams',
    description: 'A scientific microbial solution designed to strengthen treatment stability and support digital process control in demanding industrial environments.',
    heroImage: '/industries/Industrial ETP.png',
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
    'dye-processing-industry': {
        ...textileDetail,
        eyebrow: 'Dye Processing Wastewater',
        title: 'Nanozyme Bioculture for Dye Industry Effluent',
        subtitle: 'Biological treatment support for colour-bearing and chemically complex dye wastewater',
        description: 'Designed for dye houses and processing units managing intense colour, azo compounds, salts, surfactants and fluctuating chemical loads.',
        badges: ['Colour Reduction', 'Azo Dye Support', 'COD Reduction', 'Shock Load Stability'],
        overviewParagraphs: [
            'Dye manufacturing and dyeing operations produce intensely coloured wastewater containing complex organic dyes, auxiliaries, salts, surfactants and variable pH.',
            'These compounds can inhibit conventional biomass and make colour and COD reduction difficult without effective equalisation and biological process control.',
            'Nanozyme bioculture supports resilient microbial activity in the biological stage, complementing the plant\'s physical and chemical colour-removal processes.',
        ],
        wastewaterCharacteristics: [
            { parameter: 'pH', typicalRange: 'Highly variable; requires correction' },
            { parameter: 'COD', typicalRange: 'High to very high' },
            { parameter: 'BOD', typicalRange: 'Variable biodegradability' },
            { parameter: 'Colour', typicalRange: 'Intense and persistent' },
            { parameter: 'TDS / Salinity', typicalRange: 'Often elevated' },
            { parameter: 'Surfactants', typicalRange: 'Process dependent' },
            { parameter: 'Shock Load', typicalRange: 'Frequent batch variation' },
        ],
        pollutants: [
            { title: 'Azo and Reactive Dyes', description: 'Persistent colour-bearing compounds that require a combined treatment strategy.', icon: SprayCan },
            { title: 'Dye Auxiliaries', description: 'Fixing agents and processing chemicals add COD and may inhibit biomass.', icon: Beaker },
            { title: 'Salts and TDS', description: 'Elevated conductivity can reduce biological activity and requires plant-specific assessment.', icon: Droplets },
            { title: 'Surfactants', description: 'Wetting and dispersing agents can create foam and affect oxygen transfer.', icon: Waves },
            { title: 'Heavy Metals', description: 'Some colourants may introduce metals that require source control and monitoring.', icon: ShieldCheck },
            { title: 'Recalcitrant Organics', description: 'Poorly biodegradable compounds can remain after conventional treatment.', icon: AlertTriangle },
        ],
        challenges: [
            { title: 'Persistent Colour', description: 'Residual colour can remain even after substantial organic-load reduction.', icon: Sparkles },
            { title: 'Toxicity', description: 'Dyes and auxiliaries may suppress microbial growth and recovery.', icon: AlertTriangle },
            { title: 'Salinity', description: 'High salt concentrations can stress non-acclimatised biomass.', icon: Droplets },
            { title: 'Batch Variation', description: 'Changing shades and recipes create sudden pH and load fluctuations.', icon: Gauge },
            { title: 'Foaming', description: 'Surfactants can interfere with aeration and settling.', icon: Waves },
            { title: 'Low Biodegradability', description: 'Complex molecules may need pretreatment before biological polishing.', icon: Microscope },
        ],
        processFlow: ['Segregation', 'Equalisation', 'pH Correction', 'Required Pretreatment', 'Nanozyme-Supported Biology', 'Clarification', 'Colour Polishing'],
        recommendation: {
            ...textileDetail.recommendation,
            suitableIndustries: 'Dye houses, dye manufacturing units, CETP and colour-bearing ETP systems',
            preferredApplication: 'Equalisation, aeration and biological polishing stages after assessment',
        },
        applications: ['Dye house ETP', 'Reactive dye wastewater', 'Azo dye streams', 'Yarn dyeing units', 'Garment dyeing units', 'CETP biological stage', 'Aeration tank', 'Biological polishing'],
        faqs: [
            { question: 'Can Nanozyme remove dye colour by itself?', answer: 'Colour treatment is process dependent. Nanozyme supports biological degradation and is commonly integrated with suitable equalisation, pretreatment and polishing stages.' },
            { question: 'Can it tolerate high-TDS dye wastewater?', answer: 'Tolerance depends on conductivity, salt composition and acclimatisation. Plant data must be reviewed before selection and dosing.' },
            { question: 'Is it suitable for azo dye effluent?', answer: 'It can support biological treatment of compatible dye-bearing streams as part of a properly designed combined treatment process.' },
            { question: 'How is dosage selected?', answer: 'Dosage is based on flow, COD, BOD, colour, toxicity, salinity, biomass condition and the installed treatment system.' },
            { question: 'Can it help after a dye shock load?', answer: 'A controlled recovery programme can support biomass re-establishment after the inhibitory source has been identified and managed.' },
            { question: 'Can it be used in a CETP?', answer: 'Yes, following assessment of mixed influent characteristics, equalisation performance and biological operating conditions.' },
        ],
    },
    'chemical-industry': {
        ...textileDetail,
        heroImage: '/industries/Chemical Industry.png',
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
        heroImage: '/industries/Pharma.png',
        eyebrow: 'Pharma Wastewater',
        title: 'Nanozyme Bioculture for Pharma Effluent Treatment',
        subtitle: 'Reliable biological support for high COD and API-bearing wastewater',
        description: 'Used in API, formulation and manufacturing facilities to improve treatment performance under high organic load conditions.',
        badges: ['API Removal', 'High COD Treatment', 'Antibiotic Degradation', 'Compliance Support'],
    },
    'food-processing-industry': {
        ...textileDetail,
        heroImage: '/industries/Food Processing Industry.png',
        eyebrow: 'Food Processing Wastewater',
        title: 'Nanozyme Bioculture for Food Processing Effluent',
        subtitle: 'Biological treatment support for high-organic-load food processing wastewater',
        description: 'Supports stable biological treatment of carbohydrates, proteins, fats, oils and variable wash-water loads from food processing operations.',
        badges: ['Organic Load', 'FOG Control', 'BOD Reduction', 'Odour Control'],
        overviewParagraphs: [
            'Food processing plants generate variable wastewater containing carbohydrates, proteins, suspended solids, fats, oils and grease from production and cleaning operations.',
            'Nanozyme bioculture supports the biological treatment stage by strengthening microbial activity under changing organic loads and operating conditions.',
            'Application is planned around wastewater characteristics, equalisation, oxygen transfer and the existing ETP process.',
        ],
        applications: ['Food and beverage processing', 'Fruit and vegetable processing', 'Edible oil operations', 'Ready-food manufacturing', 'Industrial kitchens', 'Food-processing ETP systems'],
    },
    'sugar-industry': {
        ...textileDetail,
        heroImage: '/industries/Sugar Industry.png',
        eyebrow: 'Sugar Mill Wastewater',
        title: 'Nanozyme Bioculture for Sugar Industry Effluent',
        subtitle: 'Biological treatment support for sugar mill ETP and high-organic-load wastewater',
        description: 'Engineered to support stable treatment of sugar mill process water, molasses-bearing streams and seasonal organic-load variation.',
        badges: ['Sugar Mill ETP', 'COD Reduction', 'BOD Reduction', 'Colour Control'],
        overviewParagraphs: [
            'Sugar mill wastewater can contain molasses, suspended solids, wash-water residues and rapidly changing biodegradable organic loads during the crushing season.',
            'Nanozyme bioculture supports aerobic biological activity to improve COD, BOD, colour and odour management in the existing ETP.',
            'Product selection and dosing are based on influent characteristics, plant configuration and operating data.',
        ],
        applications: ['Sugar mill ETP', 'Cane washing wastewater', 'Process wash water', 'Molasses-bearing effluent', 'Aeration systems', 'Seasonal plant restart'],
    },
    'paper-and-pulp-mill': {
        ...textileDetail,
        heroImage: '/industries/Paper & Pulp Mill.png',
        eyebrow: 'Paper & Pulp Wastewater',
        title: 'Nanozyme Bioculture for Paper and Pulp Effluent',
        subtitle: 'Biological support for lignin, cellulose and black liquor operations',
        description: 'Supports biological treatment in mill operations where fibre load and colouration create process stress.',
        badges: ['Lignin Removal', 'Cellulose Breakdown', 'Black Liquor Support', 'Lower Sludge'],
    },
    'municipal': {
        ...textileDetail,
        heroImage: '/industries/Municipal Solid Waste Compost.png',
        eyebrow: 'Municipal Solid Waste Composting',
        title: 'Nanozyme Culture for Municipal Solid Waste Composting',
        subtitle: 'Faster organic waste degradation with improved compost quality',
        description: 'A biological composting solution that accelerates decomposition, controls odour and supports stable curing of municipal organic waste.',
        badges: ['Faster Composting', 'Odour Control', 'Pathogen Reduction', 'Better Compost Quality'],
        overviewParagraphs: [
            'Municipal organic waste can be converted into a stable soil-conditioning resource when feedstock preparation, carbon-to-nitrogen balance, moisture, oxygen and temperature are controlled.',
            'Nanozyme BET-COMP-7103 supplies a living aerobic microbial consortium that supports decomposition through mesophilic, thermophilic, cooling and maturation stages.',
            'The formulation can be applied to segregated municipal organics, food waste, garden waste and suitable press-mud or treated spent-wash composting programmes after process assessment.',
        ],
        wastewaterCharacteristics: [
            { parameter: 'Recommended pH', typicalRange: '6.0–7.5' },
            { parameter: 'Target C:N Ratio', typicalRange: '25:1–30:1' },
            { parameter: 'Active Temperature', typicalRange: '40–65°C' },
            { parameter: 'Moisture', typicalRange: 'Controlled for porosity and microbial activity' },
            { parameter: 'Aeration', typicalRange: 'Regular turning or forced aeration' },
            { parameter: 'Particle Size', typicalRange: 'Prepared for adequate microbial access' },
        ],
        pollutants: [
            { title: 'Food and Market Waste', description: 'Readily biodegradable organics that require controlled moisture and aeration.', icon: Utensils },
            { title: 'Garden and Crop Residues', description: 'Carbon-rich material that supports structure and feedstock balance.', icon: Leaf },
            { title: 'Press Mud', description: 'Sugar-industry organic residue suitable for managed composting programmes.', icon: Factory },
            { title: 'Treated Spent Wash', description: 'Can be incorporated using a controlled and approved composting procedure.', icon: Droplets },
        ],
        challenges: [
            { title: 'Unbalanced C:N Ratio', description: 'Excess carbon slows degradation while excess nitrogen can increase ammonia odour.', icon: Gauge },
            { title: 'Poor Aeration', description: 'Compaction and anaerobic pockets create odour and uneven decomposition.', icon: Wind },
            { title: 'Moisture Variation', description: 'Dry piles slow microbial activity while excessive moisture reduces porosity.', icon: Droplets },
            { title: 'Temperature Control', description: 'The active phase must be monitored to support decomposition and sanitation.', icon: Thermometer },
        ],
        processFlow: ['Feedstock Segregation', 'Size Reduction and Mixing', 'C:N and Moisture Adjustment', 'Nanozyme Application', 'Active Composting', 'Cooling', 'Maturation and Screening'],
        mechanism: [
            { title: 'Mesophilic Activation', description: 'Microorganisms begin degrading readily available carbon and nitrogen compounds.', icon: Activity },
            { title: 'Thermophilic Decomposition', description: 'Higher-temperature activity breaks down more complex material and supports sanitation.', icon: Thermometer },
            { title: 'Cooling', description: 'Mesophilic populations return as available carbon declines.', icon: Wind },
            { title: 'Maturation', description: 'Secondary reactions stabilize organic matter into mature compost.', icon: Leaf },
        ],
        reactions: [
            { title: 'Aerobic Decomposition', equation: 'Organic matter + O₂ → CO₂ + H₂O + heat', description: 'The primary controlled pathway in an aerated compost pile.' },
            { title: 'Nitrogen Transformation', equation: 'Organic N → NH₄⁺ → NO₂⁻ → NO₃⁻', description: 'Microbial activity transforms nitrogen as compost stabilizes.' },
        ],
        whyNanozyme: [
            { title: 'Faster Decomposition', description: 'Supports active microbial breakdown of mixed organic feedstock.', icon: TrendingUp },
            { title: 'Odour Control', description: 'Better aeration and degradation reduce odour-forming anaerobic pockets.', icon: Wind },
            { title: 'Temperature Stability', description: 'Supports microbial succession through active composting stages.', icon: Thermometer },
            { title: 'Improved Compost Quality', description: 'Controlled maturation supports a more stable finished product.', icon: Leaf },
        ],
        recommendation: {
            title: 'Nanozyme BET-COMP-7103', availableForm: 'Organic semi-solid form', bacterialCount: '48 living cultures · 38 × 10⁹ CFU/mL', shelfLife: 'Minimum one year', recommendedDosage: 'Based on feedstock weight and composition', incubationMethod: 'Apply through an approved activation and mixing procedure', suitableIndustries: 'Municipal organics, food waste, agriculture, sugar and distillery', preferredApplication: 'Aerobic windrow or controlled composting',
        },
        performanceTable: [
            { parameter: 'C:N Ratio', before: 'Variable feedstock', after: 'Balanced mix', reduction: 'Target 25:1–30:1' },
            { parameter: 'Odour', before: 'Uncontrolled', after: 'Managed', reduction: 'Process dependent' },
            { parameter: 'Organic Volume', before: 'Raw feedstock', after: 'Reduced and stabilized', reduction: 'Feedstock dependent' },
            { parameter: 'Compost Stability', before: 'Active material', after: 'Mature compost', reduction: 'After curing' },
        ],
        applications: ['Municipal organic waste', 'Food and market waste', 'Garden and crop residues', 'Sugar mill press mud', 'Treated distillery spent wash', 'Farm and institutional composting'],
        faqs: [
            { question: 'What C:N ratio is recommended?', answer: 'A starting ratio around 25:1 to 30:1 generally supports active composting, subject to feedstock analysis.' },
            { question: 'Which factors require daily control?', answer: 'Temperature, moisture, oxygen, pile porosity and odour should be monitored during the active stage.' },
            { question: 'Can Nanozyme be used with municipal solid waste?', answer: 'It is intended for properly segregated biodegradable organic fractions, not mixed waste containing plastics, glass or hazardous material.' },
            { question: 'Does thermophilic composting reduce pathogens?', answer: 'Properly maintained time-temperature conditions can support pathogen reduction; validation must follow the applicable composting standard.' },
            { question: 'When is compost ready?', answer: 'Compost should complete cooling and maturation and meet applicable stability, maturity and quality checks before use.' },
        ],
        ctaTitle: 'Plan a Controlled Organic Waste Composting Programme',
        ctaDescription: 'Share feedstock composition, daily quantity and current composting method for an application-specific recommendation.',
    },
    'domestic-and-commercial-stp': {
        ...textileDetail,
        heroImage: '/industries/Domestic and Commercial STP.png',
        eyebrow: 'Domestic & Commercial STP',
        title: 'Nanozyme Bioculture for Compact Sewage Treatment',
        subtitle: 'Reliable biological support for compact and decentralised STP units',
        description: 'Designed for commercial and residential systems that need consistent treatment with minimal downtime.',
        badges: ['Compact STP', 'Fast Startup', 'Domestic Compliance', 'Odour Control'],
    },
    cetp: {
        ...textileDetail,
        heroImage: '/industries/Common Effluent Treatment Plant.png',
        eyebrow: 'Common Effluent Treatment Plant',
        title: 'Nanozyme Bioculture for CETP Operations',
        subtitle: 'Shared treatment support for mixed industrial wastewater',
        description: 'A practical microbial solution for common effluent treatment plants dealing with mixed and variable influent streams.',
        badges: ['Mixed Wastewater', 'Shock Load Tolerance', 'CETP Optimization', 'Compliance Support'],
    },
    'industrial-etp': {
        ...textileDetail,
        heroImage: '/industries/Industrial ETP.png',
        eyebrow: 'Industrial ETP',
        title: 'Nanozyme Bioculture for Industrial ETP Systems',
        subtitle: 'Engineered for robust operation in demanding industrial treatment facilities',
        description: 'Helps ETP operators improve biological performance across changing influent conditions and process loads.',
        badges: ['High COD', 'Stable Biomass', 'Lower Sludge', 'PCB Compliance'],
    },
    'distillery-industry': {
        ...textileDetail,
        heroImage: '/industries/Distillery Industry.png',
        eyebrow: 'Distillery Wastewater',
        title: 'Nanozyme Bioculture for Distillery Effluent',
        subtitle: 'High-strength treatment support for distillery and fermentation plants',
        description: 'Supports anaerobic digestion and aerobic polishing systems treating spent wash, fermentation residues and other high-strength organic loads.',
        badges: ['Spent Wash', 'High COD', 'Odour Control', 'Methane Support'],
        overviewParagraphs: [
            'Distillery wastewater is a concentrated stream with high COD, BOD, dark colour and odour, requiring disciplined load management across anaerobic and aerobic stages.',
            'Nanozyme bioculture is selected to support digester stability, methanogenic activity, downstream biological polishing and recovery from load variation.',
            'Application recommendations are based on spent-wash characteristics, organic loading rate, pH, alkalinity and the installed treatment process.',
        ],
        applications: ['Distillery spent-wash treatment', 'Anaerobic digesters', 'Biogas systems', 'Fermentation wastewater', 'Aerobic polishing', 'Plant recovery and restart'],
    },
    'dairy-industry': {
        ...textileDetail,
        heroImage: '/industries/Dairy Industry.png',
        eyebrow: 'Dairy Wastewater',
        title: 'Nanozyme Bioculture for Dairy Effluent',
        subtitle: 'Effective biological support for whey, milk and dairy processing wastewater',
        description: 'Built to manage strong organic loading and improve treatment performance in dairy operations.',
        badges: ['Protein Breakdown', 'Fat Degradation', 'Lactose Support', 'Odour Control'],
        overviewParagraphs: [
            'Dairy wastewater contains milk solids, whey, lactose, proteins and fats that create high BOD, COD, foaming and odour when biological treatment becomes unstable.',
            'Nanozyme bioculture supports the breakdown of these biodegradable loads and helps maintain stable biomass in dairy ETP and STP systems.',
            'Effective treatment also depends on FOG removal, equalisation, aeration and routine process monitoring.',
        ],
        applications: ['Milk processing plants', 'Dairies and chilling centres', 'Cheese and paneer production', 'Whey wastewater', 'Ice cream production', 'Dairy ETP systems'],
    },
}

export const getIndustryDetail = (slug: string): IndustryDetail => industryDetails[slug] ?? genericDetail

const industries: Industry[] = [
    { name: 'Textile Industry', slug: 'textile-processing-industry', icon: Shirt, desc: 'Sizing, washing, finishing and organic-load wastewater treatment.' },
    { name: 'Dye Processing Industry', slug: 'dye-processing-industry', icon: SprayCan, desc: 'Colour, azo dye, salinity and complex chemical-load treatment.' },
    { name: 'Sugar Industry', slug: 'sugar-industry', icon: Factory, desc: 'Molasses, wash-water and seasonal organic-load treatment.' },
    { name: 'Distillery Industry', slug: 'distillery-industry', icon: Factory, desc: 'Spent wash, anaerobic digestion and high-COD treatment.' },
    { name: 'Chemical Industry', slug: 'chemical-industry', icon: Beaker, desc: 'Complex industrial wastewater management.' },
    { name: 'Pharma Industry', slug: 'pharma-industry', icon: Pill, desc: 'Biological treatment for pharmaceutical effluent.' },
    { name: 'Paper & Pulp Mill', slug: 'paper-and-pulp-mill', icon: Factory, desc: 'Reduce sludge and improve treatment efficiency.' },
    { name: 'Food Processing Industry', slug: 'food-processing-industry', icon: Utensils, desc: 'Organic load, FOG and food-process wastewater treatment.' },
    { name: 'Dairy Industry', slug: 'dairy-industry', icon: Droplets, desc: 'Milk solids, whey, lactose and high-BOD wastewater treatment.' },
    { name: 'Municipal Solid Waste Composting', slug: 'municipal', icon: Leaf, desc: 'Faster organic-waste degradation, curing and odour control.' },
    { name: 'Domestic and Commercial STP', slug: 'domestic-and-commercial-stp', icon: Building2, desc: 'Improve biological sewage treatment.' },
    { name: 'Common Effluent Treatment Plant (CETP)', slug: 'cetp', icon: Factory, desc: 'Centralized multi-industry effluent treatment optimization.' },
]

export default industries
