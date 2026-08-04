import LegalPage from '@/components/legal/LegalPage'
import { legalPages } from '@/data/legal-pages'
import { createLegalMetadata } from '@/lib/legal-metadata'

export const metadata = createLegalMetadata('disclaimer')

export default function Page() {
  return <LegalPage page={legalPages['disclaimer']} />
}
