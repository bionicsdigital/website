import LegalPage from '@/components/legal/LegalPage'
import { legalPages } from '@/data/legal-pages'
import { createLegalMetadata } from '@/lib/legal-metadata'

export const metadata = createLegalMetadata('privacy-policy')

export default function Page() {
  return <LegalPage page={legalPages['privacy-policy']} />
}
