import type { LucideIcon } from 'lucide-react'
import {
    Activity,
    AlertTriangle,
    ArrowRight,
    Droplets,
    FlaskConical,
    Gauge,
    Leaf,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    Waves,
} from 'lucide-react'

export type ProductFaq = {
    question: string
    answer: string
}

export type ProductItem = {
    slug: string
    title: string
    subtitle: string
    heroImage: string
    image: string
    overview: string
    specifications: Array<{ label: string; value: string }>
    benefits: Array<{ title: string; description: string; icon: LucideIcon }>
    applications: string[]
    dosage: Array<{ day: string; preparedBroth: string; dailyDosage: string }>
    faqs: ProductFaq[]
}

const products: ProductItem[] = [
    {
        slug: 'aerobic-bioculture',
        title: 'Aerobic Bioculture',
        subtitle: 'High-performance Nanozyme culture for aerobic wastewater treatment systems',
        heroImage: '/products/aerobic-bioculture.png',
        image: '/products/aerobic-bioculture.png',
        overview:
            'Aerobic Bioculture is a scientifically formulated microbial solution designed to accelerate biological oxidation in aerobic wastewater treatment systems. It supports rapid COD and BOD reduction while improving plant stability and minimizing downtime.',
        specifications: [
            { label: 'Form', value: 'Liquid microbial culture' },
            { label: 'Application', value: 'Aerobic ETP / STP systems' },
            { label: 'Shelf Life', value: '12 months' },
            { label: 'CFU Count', value: 'High activity consortium' },
        ],
        benefits: [
            { title: 'Rapid COD Reduction', description: 'Improves organic removal efficiency and shortens treatment cycles.', icon: TrendingUp },
            { title: 'Stable Performance', description: 'Supports reliable biological treatment even during load fluctuations.', icon: ShieldCheck },
            { title: 'Odour Control', description: 'Reduces nuisance odours in aeration tanks and clarifiers.', icon: Droplets },
            { title: 'Low Sludge', description: 'Promotes efficient conversion with reduced excess sludge.', icon: Leaf },
        ],
        applications: ['Activated sludge systems', 'Aeration basins', 'Packaged STP units', 'Industrial aerobic reactors'],
        dosage: [
            { day: 'Day 1', preparedBroth: '200 ml', dailyDosage: '1–2 L' },
            { day: 'Day 2', preparedBroth: '400 ml', dailyDosage: '2–3 L' },
            { day: 'Day 3', preparedBroth: '600 ml', dailyDosage: '3–4 L' },
            { day: 'Day 4', preparedBroth: '800 ml', dailyDosage: '4–5 L' },
        ],
        faqs: [
            { question: 'Can this be used in existing plants?', answer: 'Yes. It is suitable for retrofit applications and can be introduced with standard dosing practices.' },
            { question: 'How quickly does it act?', answer: 'Visible improvement can begin within a short period depending on the plant operating conditions.' },
        ],
    },
    {
        slug: 'anaerobic-bioculture',
        title: 'Anaerobic Bioculture',
        subtitle: 'Specialized microbial culture for anaerobic digestion and high-strength effluents',
        heroImage: '/products/anaerobic-bioculture.png',
        image: '/products/anaerobic-bioculture.png',
        overview:
            'Anaerobic Bioculture is built for high-strength industrial wastewater and anaerobic reactors. It strengthens methane-forming biological activity and helps plants maintain process stability under tough influent conditions.',
        specifications: [
            { label: 'Form', value: 'Concentrated anaerobic consortium' },
            { label: 'Application', value: 'Anaerobic digesters / UASB' },
            { label: 'Shelf Life', value: '12 months' },
            { label: 'Performance', value: 'Improved biogas and COD removal' },
        ],
        benefits: [
            { title: 'Biogas Support', description: 'Improves methane generation and reactor efficiency.', icon: Activity },
            { title: 'High Strength Handling', description: 'Performs well in high COD and high temperature conditions.', icon: Gauge },
            { title: 'Lower Odour', description: 'Reduces unpleasant emissions and process instability.', icon: AlertTriangle },
            { title: 'Cleaner Reactor', description: 'Helps maintain healthy biomass and better settleability.', icon: FlaskConical },
        ],
        applications: ['Anaerobic digesters', 'UASB reactors', 'Distillery wastewater', 'Sugar mill effluent'],
        dosage: [
            { day: 'Day 1', preparedBroth: '150 ml', dailyDosage: '1–1.5 L' },
            { day: 'Day 2', preparedBroth: '300 ml', dailyDosage: '1.5–2.5 L' },
            { day: 'Day 3', preparedBroth: '450 ml', dailyDosage: '2–3 L' },
            { day: 'Day 4', preparedBroth: '600 ml', dailyDosage: '3–4 L' },
        ],
        faqs: [
            { question: 'Is it suitable for seasonal load changes?', answer: 'Yes, it is designed to support performance even when influent loads fluctuate significantly.' },
        ],
    },
    {
        slug: 'stp-bioculture',
        title: 'STP Bioculture',
        subtitle: 'Robust microbial solution for STP, CSTP and municipal sewage treatment',
        heroImage: '/products/stp-bioculture.png',
        image: '/products/stp-bioculture.png',
        overview:
            'STP Bioculture is formulated to strengthen the biological treatment of sewage and municipal wastewater. It supports rapid breakdown of organics, lowers odour and improves the consistency of treatment performance in decentralised and municipal systems.',
        specifications: [
            { label: 'Form', value: 'Ready-to-use microbial product' },
            { label: 'Application', value: 'STP / CSTP / Sewage plants' },
            { label: 'Shelf Life', value: '12 months' },
            { label: 'Use Case', value: 'Odour and BOD control' },
        ],
        benefits: [
            { title: 'Fast Start-up', description: 'Accelerates microbial establishment in new or recovering plants.', icon: Sparkles },
            { title: 'Better Clarification', description: 'Improves floc formation and settling characteristics.', icon: Waves },
            { title: 'Odour Reduction', description: 'Controls smell from sewage handling and aeration zones.', icon: Droplets },
            { title: 'Process Reliability', description: 'Supports stable performance over normal operating cycles.', icon: ShieldCheck },
        ],
        applications: ['Municipal STP', 'CSTP units', 'Housing society sewage', 'Commercial complexes'],
        dosage: [
            { day: 'Day 1', preparedBroth: '250 ml', dailyDosage: '1–2 L' },
            { day: 'Day 2', preparedBroth: '500 ml', dailyDosage: '2–3 L' },
            { day: 'Day 3', preparedBroth: '750 ml', dailyDosage: '3–4 L' },
            { day: 'Day 4', preparedBroth: '1000 ml', dailyDosage: '4–5 L' },
        ],
        faqs: [
            { question: 'Can it be used in compact sewage plants?', answer: 'Yes. It is suitable for both large-scale and decentralised sewage systems.' },
        ],
    },
    {
        slug: 'etp-bioculture',
        title: 'ETP Bioculture',
        subtitle: 'Specialized Nanozyme culture for industrial ETP and CETP operations',
        heroImage: '/products/etp-bioculture.png',
        image: '/products/etp-bioculture.png',
        overview:
            'ETP Bioculture is engineered for industrial Effluent Treatment Plants and CETPs that need dependable treatment for complex wastewater streams. It improves the biological degradation of organics and helps plants meet compliance goals.',
        specifications: [
            { label: 'Form', value: 'Bioactive liquid culture' },
            { label: 'Application', value: 'ETP / CETP / Industrial plants' },
            { label: 'Shelf Life', value: '12 months' },
            { label: 'Target', value: 'COD, BOD, TSS and colour' },
        ],
        benefits: [
            { title: 'Compliance Support', description: 'Helps improve effluent quality and control discharge parameters.', icon: TrendingUp },
            { title: 'High Strength Tolerance', description: 'Remains effective where influent chemistry changes frequently.', icon: Gauge },
            { title: 'Lower Operating Cost', description: 'Reduces dependency on chemical intervention and corrective dosing.', icon: ShieldCheck },
            { title: 'Improved Biomass', description: 'Supports healthier microorganisms and better treatment resilience.', icon: Leaf },
        ],
        applications: ['Textile ETP', 'Chemical ETP', 'CETP', 'Pharma and paper effluent'],
        dosage: [
            { day: 'Day 1', preparedBroth: '300 ml', dailyDosage: '1.5–2.5 L' },
            { day: 'Day 2', preparedBroth: '600 ml', dailyDosage: '2.5–3.5 L' },
            { day: 'Day 3', preparedBroth: '900 ml', dailyDosage: '3.5–4.5 L' },
            { day: 'Day 4', preparedBroth: '1200 ml', dailyDosage: '4.5–5.5 L' },
        ],
        faqs: [
            { question: 'Can it be used in CETP networks?', answer: 'Yes. It is suitable for shared treatment systems with diverse influent conditions.' },
        ],
    },
    {
        slug: 'sugar-distillery-bioculture',
        title: 'Sugar & Distillery Bioculture',
        subtitle: 'High-strength microbial culture for sugar mills and distilleries',
        heroImage: '/products/sugar-distillery-bioculture.png',
        image: '/products/sugar-distillery-bioculture.png',
        overview:
            'This product is tailored for sugar and distillery wastewater, where high COD and organic load require robust biological treatment. It improves reactor performance and maintains stability through changing feed conditions.',
        specifications: [
            { label: 'Form', value: 'Concentrated bioculture' },
            { label: 'Application', value: 'Sugar and distillery wastewater' },
            { label: 'Shelf Life', value: '12 months' },
            { label: 'Outcome', value: 'COD reduction and stability' },
        ],
        benefits: [
            { title: 'High COD Handling', description: 'Supports treatment of highly loaded wastewater streams.', icon: Gauge },
            { title: 'Better Process Stability', description: 'Helps reactors remain stable under high organic loading.', icon: ShieldCheck },
            { title: 'Improved Digestion', description: 'Enables efficient biological conversion of complex organics.', icon: Activity },
            { title: 'Less Chemical Dependence', description: 'Improves treatment efficiency with lower corrective dosing.', icon: Sparkles },
        ],
        applications: ['Sugar mills', 'Distillery plants', 'Anaerobic reactors', 'Spent wash treatment'],
        dosage: [
            { day: 'Day 1', preparedBroth: '250 ml', dailyDosage: '1.5–2.5 L' },
            { day: 'Day 2', preparedBroth: '500 ml', dailyDosage: '2.5–3.5 L' },
            { day: 'Day 3', preparedBroth: '750 ml', dailyDosage: '3.5–4.5 L' },
            { day: 'Day 4', preparedBroth: '1000 ml', dailyDosage: '4.5–5.5 L' },
        ],
        faqs: [
            { question: 'Is it suitable for batch operations?', answer: 'Yes. It can support biological performance in both continuous and batch treatment setups.' },
        ],
    },
    {
        slug: 'organic-compost-culture',
        title: 'Organic Compost Culture',
        subtitle: 'Accelerates decomposition of organic waste into high-quality compost',
        heroImage: '/products/compost-culture.png',
        image: '/products/compost-culture.png',
        overview:
            'Organic Compost Culture helps convert organic solid waste into nutrient-rich compost faster while reducing odour and improving the composting process. It is well suited for organic waste handling and composting operations.',
        specifications: [
            { label: 'Form', value: 'Microbial compost accelerator' },
            { label: 'Application', value: 'Organic waste composting' },
            { label: 'Shelf Life', value: '12 months' },
            { label: 'Outcome', value: 'Faster composting and lower odour' },
        ],
        benefits: [
            { title: 'Faster Composting', description: 'Speeds up decomposition and improves throughput.', icon: Sparkles },
            { title: 'Odour Control', description: 'Reduces unpleasant odours during the composting process.', icon: Droplets },
            { title: 'Nutrient Rich Output', description: 'Supports quality compost with better consistency.', icon: Leaf },
            { title: 'Cleaner Operations', description: 'Improves process hygiene and ease of handling.', icon: ShieldCheck },
        ],
        applications: ['Organic waste composting', 'Municipal solid waste', 'Food waste recycling', 'Garden and farm composting'],
        dosage: [
            { day: 'Day 1', preparedBroth: '200 ml', dailyDosage: '1–2 L' },
            { day: 'Day 2', preparedBroth: '400 ml', dailyDosage: '2–3 L' },
            { day: 'Day 3', preparedBroth: '600 ml', dailyDosage: '3–4 L' },
            { day: 'Day 4', preparedBroth: '800 ml', dailyDosage: '4–5 L' },
        ],
        faqs: [
            { question: 'Can it be used for kitchen waste?', answer: 'Yes. It is suitable for organic kitchen and food waste composting setups.' },
        ],
    },
]

export default products
