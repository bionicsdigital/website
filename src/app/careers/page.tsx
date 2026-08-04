import type { Metadata } from 'next'
import CareersPage from '@/components/careers/CareersPage'
import { jobs } from '@/data/careers'

export const metadata: Metadata = {
  title: 'Careers | Bionics Enviro Tech',
  description: "Join India's leading Nanozyme Bioculture manufacturer and build your career in environmental biotechnology.",
  alternates: { canonical: 'https://www.bionicsenvirotech.com/careers' },
  openGraph: { title: 'Careers | Bionics Enviro Tech', description: "Build your career in environmental biotechnology and wastewater treatment.", url: 'https://www.bionicsenvirotech.com/careers', type: 'website' },
}

export default function Page() {
  const schemas = [
    { '@context': 'https://schema.org', '@type': 'Organization', name: 'Bionics Enviro Tech Pvt. Ltd.', url: 'https://www.bionicsenvirotech.com', logo: 'https://www.bionicsenvirotech.com/logo.png' },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionicsenvirotech.com' }, { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://www.bionicsenvirotech.com/careers' }] },
    ...jobs.map(job => ({ '@context': 'https://schema.org', '@type': 'JobPosting', title: job.title, description: job.summary, employmentType: 'FULL_TIME', hiringOrganization: { '@type': 'Organization', name: 'Bionics Enviro Tech Pvt. Ltd.', sameAs: 'https://www.bionicsenvirotech.com', logo: 'https://www.bionicsenvirotech.com/logo.png' }, jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressRegion: 'Tamil Nadu', addressCountry: 'IN' } }, experienceRequirements: job.experience, industry: 'Environmental Biotechnology and Wastewater Treatment' })),
  ]
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} /><CareersPage /></>
}
