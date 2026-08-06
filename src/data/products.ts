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
            'Nanozyme BET-ETP-7001, BET-ETP-7002 and BET-ETP-7003 are living aerobic microbial formulations developed for biological oxidation in industrial effluent treatment systems. Product selection is based on wastewater characteristics, organic load and the required treatment objective.',
        specifications: [
            { label: 'Available Form', value: 'Organic semi-solid form' },
            { label: 'Bacterial Cultures', value: '62 different living cultures' },
            { label: 'BET-ETP-7001', value: '28 × 10⁹ CFU/mL' },
            { label: 'BET-ETP-7002', value: '31 × 10⁹ CFU/mL' },
            { label: 'BET-ETP-7003', value: '35 × 10⁹ CFU/mL' },
            { label: 'Application', value: 'Aerobic ETP / STP systems' },
            { label: 'Minimum Shelf Life', value: 'One year' },
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
            { question: 'Which BET-ETP grade should be selected?', answer: 'BET-ETP-7001, 7002 and 7003 differ in microbial colony specification. Selection should follow wastewater analysis, plant loading and process review.' },
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
            'Nanozyme BET-ANA-9001, BET-ANA-9002 and BET-ANA-9003 are living anaerobic microbial formulations for high-strength industrial wastewater, UASB reactors and anaerobic digesters. Product selection depends on wastewater composition, organic loading, reactor design and the required treatment objective.',
        specifications: [
            { label: 'Available Form', value: 'Organic semi-solid form' },
            { label: 'Bacterial Cultures', value: '45 different living cultures' },
            { label: 'BET-ANA-9001', value: '21 × 10⁹ CFU/mL' },
            { label: 'BET-ANA-9002', value: '24 × 10⁹ CFU/mL' },
            { label: 'BET-ANA-9003', value: '28 × 10⁹ CFU/mL' },
            { label: 'Application', value: 'Anaerobic digesters / UASB' },
            { label: 'Minimum Shelf Life', value: 'One year' },
            { label: 'Performance', value: 'Improved biogas and COD removal' },
        ],
        benefits: [
            { title: 'Biogas Support', description: 'Improves methane generation and reactor efficiency.', icon: Activity },
            { title: 'High Strength Handling', description: 'Performs well in high COD and high temperature conditions.', icon: Gauge },
            { title: 'Lower Odour', description: 'Reduces unpleasant emissions and process instability.', icon: AlertTriangle },
            { title: 'Cleaner Reactor', description: 'Helps maintain healthy biomass and better settleability.', icon: FlaskConical },
        ],
        applications: ['Anaerobic digesters', 'UASB reactors', 'Pulp and paper wastewater', 'Distillery wastewater', 'Sugar mill effluent'],
        dosage: [
            { day: 'Day 1', preparedBroth: '150 ml', dailyDosage: '1–1.5 L' },
            { day: 'Day 2', preparedBroth: '300 ml', dailyDosage: '1.5–2.5 L' },
            { day: 'Day 3', preparedBroth: '450 ml', dailyDosage: '2–3 L' },
            { day: 'Day 4', preparedBroth: '600 ml', dailyDosage: '3–4 L' },
        ],
        faqs: [
            { question: 'Which BET-ANA grade should be selected?', answer: 'BET-ANA-9001, 9002 and 9003 differ in microbial colony specification. Selection should follow wastewater analysis, organic loading, reactor configuration and operating history.' },
            { question: 'Can BET-ANA-9003 be used in pulp and paper treatment?', answer: 'Yes. It can support anaerobic degradation of biodegradable organic load in UASB reactors, anaerobic lagoons and digesters, typically as part of a complete treatment train.' },
            { question: 'Does anaerobic bioculture remove every pulp and paper pollutant?', answer: 'No. Colour, AOX and refractory compounds may require complementary aerobic, coagulation, oxidation, adsorption or membrane treatment depending on the wastewater.' },
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
            'Nanozyme BET-STP-9011, BET-STP-9012 and BET-STP-9013 are living microbial formulations for STP and CSTP biological treatment. The range supports organic-waste breakdown, biomass stability, odour control and sludge management in municipal, decentralised and commercial sewage systems.',
        specifications: [
            { label: 'Available Form', value: 'Organic semi-solid form' },
            { label: 'Bacterial Cultures', value: '52 different living cultures' },
            { label: 'BET-STP-9011', value: '35 × 10⁹ CFU/mL' },
            { label: 'BET-STP-9012', value: '38 × 10⁹ CFU/mL' },
            { label: 'BET-STP-9013', value: '42 × 10⁹ CFU/mL' },
            { label: 'Application', value: 'STP / CSTP / Sewage plants' },
            { label: 'Minimum Shelf Life', value: 'One year' },
            { label: 'Use Case', value: 'Odour and BOD control' },
        ],
        benefits: [
            { title: 'Fast Start-up', description: 'Accelerates microbial establishment in new or recovering plants.', icon: Sparkles },
            { title: 'Better Clarification', description: 'Improves floc formation and settling characteristics.', icon: Waves },
            { title: 'Odour Reduction', description: 'Controls smell from sewage handling and aeration zones.', icon: Droplets },
            { title: 'Process Reliability', description: 'Supports stable performance over normal operating cycles.', icon: ShieldCheck },
        ],
        applications: ['Municipal STP and CSTP', 'Septic and decentralised systems', 'Housing societies and commercial complexes', 'Grease traps and lift stations', 'Food-processing wastewater systems', 'Lagoons and organic-load water systems'],
        dosage: [
            { day: 'Day 1', preparedBroth: '250 ml', dailyDosage: '1–2 L' },
            { day: 'Day 2', preparedBroth: '500 ml', dailyDosage: '2–3 L' },
            { day: 'Day 3', preparedBroth: '750 ml', dailyDosage: '3–4 L' },
            { day: 'Day 4', preparedBroth: '1000 ml', dailyDosage: '4–5 L' },
        ],
        faqs: [
            { question: 'Which BET-STP grade should be selected?', answer: 'BET-STP-9011, 9012 and 9013 differ in microbial colony specification. Selection should follow plant capacity, influent quality, biomass condition and treatment objective.' },
            { question: 'How does STP bioculture break down organic waste?', answer: 'Microbial enzymes hydrolyse complex organic matter into simpler soluble compounds that bacteria can metabolise during biological treatment.' },
            { question: 'Can BET-STP-9013 be used outside municipal STPs?', answer: 'It can support suitable septic systems, grease traps, lagoons, lift stations and food-processing organic-waste systems after technical assessment.' },
            { question: 'Does STP bioculture guarantee zero sludge?', answer: 'No. Better biological degradation can reduce excess sludge, but actual sludge production depends on influent solids, process design, loading and plant operation.' },
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
            'Nanozyme BET-ETP-7001, BET-ETP-7002 and BET-ETP-7003 form an aerobic microbial range for industrial ETP and CETP operation. The living cultures support biological degradation of organic load, colour-forming compounds and variable influent found in textile, dye, chemical, pharmaceutical, paper and food-processing effluent.',
        specifications: [
            { label: 'Available Form', value: 'Organic semi-solid form' },
            { label: 'Bacterial Cultures', value: '62 different living cultures' },
            { label: 'BET-ETP-7001', value: '28 × 10⁹ CFU/mL' },
            { label: 'BET-ETP-7002', value: '31 × 10⁹ CFU/mL' },
            { label: 'BET-ETP-7003', value: '35 × 10⁹ CFU/mL' },
            { label: 'Application', value: 'ETP / CETP / Industrial plants' },
            { label: 'Minimum Shelf Life', value: 'One year' },
            { label: 'Target', value: 'COD, BOD, TSS and colour' },
        ],
        benefits: [
            { title: 'Organic Load Reduction', description: 'Supports biological COD and BOD removal in aerobic industrial treatment.', icon: TrendingUp },
            { title: 'Variable Load Support', description: 'Helps biomass recover where influent chemistry and production load change.', icon: Gauge },
            { title: 'Colour and Odour Control', description: 'Supports degradation of biodegradable colour- and odour-forming compounds.', icon: Droplets },
            { title: 'Improved Biomass Stability', description: 'Supports healthier aerobic microorganisms and treatment resilience.', icon: ShieldCheck },
            { title: 'Reduced Corrective Dosing', description: 'Stable biology can lower dependence on repeated chemical intervention.', icon: Sparkles },
            { title: 'Sludge Management', description: 'Improved organic conversion may reduce excess biological sludge generation.', icon: Leaf },
        ],
        applications: ['Textile and dye ETP', 'Chemical industry ETP', 'Pharmaceutical and API effluent', 'Common effluent treatment plants', 'Paper and pulp effluent', 'Food and dairy processing ETP'],
        dosage: [
            { day: 'Day 1', preparedBroth: '300 ml', dailyDosage: '1.5–2.5 L' },
            { day: 'Day 2', preparedBroth: '600 ml', dailyDosage: '2.5–3.5 L' },
            { day: 'Day 3', preparedBroth: '900 ml', dailyDosage: '3.5–4.5 L' },
            { day: 'Day 4', preparedBroth: '1200 ml', dailyDosage: '4.5–5.5 L' },
        ],
        faqs: [
            { question: 'Which BET-ETP grade should be selected?', answer: 'BET-ETP-7001, 7002 and 7003 differ in microbial colony specification. Selection should follow wastewater analysis, organic load, toxicity, process configuration and biomass condition.' },
            { question: 'What is the difference between Aerobic Bioculture and ETP Bioculture pages?', answer: 'Aerobic Bioculture explains the biological process category, while ETP Bioculture focuses on industrial effluent applications, grade selection and sector-specific operating challenges.' },
            { question: 'Why is BET-ETP-7003 suitable for textile and dye effluent?', answer: 'It is selected to support aerobic degradation where colourants, surfactants, inhibitory compounds and variable COD create biological-treatment stress.' },
            { question: 'Can it support chemical and pharmaceutical ETP operation?', answer: 'Yes, after assessment of toxicity, pH, organic load, inhibitory compounds and the existing biological process.' },
            { question: 'Does ETP Bioculture replace primary or tertiary treatment?', answer: 'No. It supports the biological stage and should be integrated with the required equalisation, pH correction, solids separation and polishing processes.' },
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
            'The Bionics Sugar & Distillery portfolio supports aerobic ETP treatment, anaerobic digestion, fermentation and press-mud composting. Product selection is based on wastewater strength, process stage, fermentation objective, feedstock composition and existing plant operation.',
        specifications: [
            { label: 'Sugar ETP Culture', value: 'BIONICS-NANO-SUG-ETP-1000' },
            { label: 'Sugar Anaerobic Culture', value: 'BIONICS-NANO-SUG-ANA-2000' },
            { label: 'Distillery ETP Culture', value: 'BIONICS-NANO-DIST-ETP-1000' },
            { label: 'Distillery Anaerobic Culture', value: 'BIONICS-NANO-DIST-ANA-2000' },
            { label: 'Fermentation Booster', value: 'BIONICS-NANO-FERM-10' },
            { label: 'Press Mud Compost Culture', value: 'BIONICS-NANO-COMP-1000' },
            { label: 'Application', value: 'ETP, anaerobic digestion, fermentation and composting' },
            { label: 'Shelf Life', value: '12 months' },
            { label: 'Selection Basis', value: 'Plant data and process objective' },
        ],
        benefits: [
            { title: 'High COD Handling', description: 'Supports treatment of highly loaded wastewater streams.', icon: Gauge },
            { title: 'Better Process Stability', description: 'Helps reactors remain stable under high organic loading.', icon: ShieldCheck },
            { title: 'Anaerobic Digestion Support', description: 'Supports methanogenic activity and biogas-oriented reactor operation.', icon: Activity },
            { title: 'Fermentation Support', description: 'Application-specific microbial support for yield, consistency and contamination control.', icon: Sparkles },
            { title: 'Press Mud Composting', description: 'Supports controlled composting of press mud with suitably treated spent wash.', icon: Leaf },
            { title: 'Lower Process Intervention', description: 'Stable biology can reduce corrective dosing and operating intervention.', icon: TrendingUp },
        ],
        applications: ['Sugar and CPU ETP', 'Distillery ETP', 'Anaerobic digesters', 'Spent-wash treatment', 'Molasses fermentation', 'Press-mud composting'],
        dosage: [
            { day: 'Day 1', preparedBroth: '250 ml', dailyDosage: '1.5–2.5 L' },
            { day: 'Day 2', preparedBroth: '500 ml', dailyDosage: '2.5–3.5 L' },
            { day: 'Day 3', preparedBroth: '750 ml', dailyDosage: '3.5–4.5 L' },
            { day: 'Day 4', preparedBroth: '1000 ml', dailyDosage: '4.5–5.5 L' },
        ],
        faqs: [
            { question: 'Which product is used for sugar ETP treatment?', answer: 'BIONICS-NANO-SUG-ETP-1000 is the listed aerobic ETP product, while BIONICS-NANO-SUG-ANA-2000 is intended for the relevant anaerobic treatment stage.' },
            { question: 'Which products support distillery wastewater treatment?', answer: 'BIONICS-NANO-DIST-ETP-1000 supports the ETP stage and BIONICS-NANO-DIST-ANA-2000 supports anaerobic digestion, subject to plant assessment.' },
            { question: 'What is the fermentation booster product?', answer: 'BIONICS-NANO-FERM-10 is the listed fermentation-support product. Operating pH, dosage and nutrient strategy should be established through process trials rather than assumed universally.' },
            { question: 'Can press mud and treated spent wash be composted together?', answer: 'BIONICS-NANO-COMP-1000 can support an approved process using press mud and suitably treated spent wash with controlled C:N ratio, moisture, aeration and temperature.' },
            { question: 'Does the portfolio guarantee zero sludge or fixed power savings?', answer: 'No. Sludge and energy outcomes depend on influent load, aeration control, biomass condition, process design and operating practice.' },
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
            'Nanozyme BET-COMP-7103 is a living aerobic composting culture for controlled decomposition of crop residues, animal waste, food waste and suitable municipal or industrial organic material. It supports the mesophilic, thermophilic, cooling and maturation stages while improving odour control and compost consistency.',
        specifications: [
            { label: 'Product Grade', value: 'Nanozyme BET-COMP-7103' },
            { label: 'Available Form', value: 'Organic semi-solid form' },
            { label: 'Bacterial Cultures', value: '48 different living cultures' },
            { label: 'Bacterial Colonies', value: '38 × 10⁹ CFU/mL' },
            { label: 'Application', value: 'Organic waste composting' },
            { label: 'Recommended pH', value: '6.0–7.5' },
            { label: 'Target C:N Ratio', value: '25:1–30:1' },
            { label: 'Process Stages', value: 'Mesophilic, thermophilic, cooling and maturation' },
            { label: 'Minimum Shelf Life', value: 'One year' },
            { label: 'Outcome', value: 'Faster composting and lower odour' },
        ],
        benefits: [
            { title: 'Faster Composting', description: 'Speeds up decomposition and improves throughput.', icon: Sparkles },
            { title: 'Odour Control', description: 'Reduces unpleasant odours during the composting process.', icon: Droplets },
            { title: 'Nutrient Rich Output', description: 'Supports quality compost with better consistency.', icon: Leaf },
            { title: 'Cleaner Operations', description: 'Improves process hygiene and ease of handling.', icon: ShieldCheck },
        ],
        applications: ['Organic waste composting', 'Municipal solid waste', 'Food waste recycling', 'Garden and farm composting', 'Sugar mill press mud', 'Press mud with treated distillery spent wash'],
        dosage: [
            { day: 'Day 1', preparedBroth: '200 ml', dailyDosage: '1–2 L' },
            { day: 'Day 2', preparedBroth: '400 ml', dailyDosage: '2–3 L' },
            { day: 'Day 3', preparedBroth: '600 ml', dailyDosage: '3–4 L' },
            { day: 'Day 4', preparedBroth: '800 ml', dailyDosage: '4–5 L' },
        ],
        faqs: [
            { question: 'What are the main composting stages?', answer: 'A controlled process progresses through mesophilic activity, thermophilic sanitation, cooling and maturation. Temperature, moisture and oxygen should be monitored throughout.' },
            { question: 'What are the main benefits of BET-COMP-7103?', answer: 'It supports faster organic-waste degradation, volume reduction, odour control, pathogen reduction during properly managed thermophilic conditions and improved finished-compost consistency.' },
            { question: 'What C:N ratio supports active composting?', answer: 'A starting carbon-to-nitrogen ratio around 25:1 to 30:1 is generally suitable. Feedstock composition should be adjusted using actual material analysis.' },
            { question: 'Which operating factors require monitoring?', answer: 'Temperature, moisture, aeration, pH, particle size and carbon-to-nitrogen balance influence microbial activity and compost quality.' },
            { question: 'Can it support press-mud and spent-wash composting?', answer: 'Yes, when press mud and suitably treated spent wash are blended and managed using an approved composting procedure with controlled moisture, aeration and loading.' },
            { question: 'Can it be used for kitchen waste?', answer: 'Yes. It is suitable for organic kitchen and food waste composting setups.' },
        ],
    },
]

export default products
