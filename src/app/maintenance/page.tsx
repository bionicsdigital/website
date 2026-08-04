import type { Metadata } from 'next'
import MaintenancePage from '@/components/errors/MaintenancePage'

export const metadata: Metadata = { title: 'Scheduled Maintenance | Bionics Enviro Tech', description: 'The Bionics Enviro Tech website is undergoing scheduled maintenance.', robots: { index: false, follow: false }, alternates: { canonical: '/maintenance' }, openGraph: { title: 'Scheduled Maintenance | Bionics Enviro Tech', description: 'We will be back shortly.', type: 'website' }, twitter: { card: 'summary', title: 'Scheduled Maintenance', description: 'We will be back shortly.' } }
export default function Page() {
  const schema = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Scheduled Maintenance', url: 'https://www.bionicsenviro.com/maintenance', description: 'The Bionics Enviro Tech website is undergoing scheduled maintenance.' }
  return <><MaintenancePage /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>
}
