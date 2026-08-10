'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics/dataLayer'

export default function AnalyticsEventBridge() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const element = target.closest<HTMLElement>('[data-analytics-event], a[href]')
      if (!element) return

      const anchor = element instanceof HTMLAnchorElement ? element : element.closest('a[href]')
      const href = anchor?.getAttribute('href')?.trim() ?? ''
      const normalizedHref = href.toLowerCase()

      if (normalizedHref.startsWith('tel:')) {
        trackEvent('phone_click', { link_type: 'phone', location: 'site' })
        return
      }
      if (normalizedHref.startsWith('mailto:')) {
        trackEvent('email_click', { link_type: 'email', location: 'site' })
        return
      }
      if (normalizedHref.includes('wa.me/') || normalizedHref.includes('whatsapp.com/')) {
        trackEvent('whatsapp_click', { link_type: 'whatsapp', location: 'site' })
        return
      }
      if (anchor?.hasAttribute('download') || normalizedHref.endsWith('.pdf')) {
        trackEvent('brochure_download', { resource_type: 'brochure', location: 'site' })
        return
      }
      if (normalizedHref === '/products/buy') {
        trackEvent('cta_click', { cta_name: 'buy_product', location: 'site' })
        return
      }
      if (normalizedHref === '/#contact' || normalizedHref === '#contact' || normalizedHref === '/contact') {
        trackEvent('contact_click', { link_type: 'contact', location: 'site' })
        return
      }

      if (element.dataset.analyticsEvent === 'cta_click') {
        trackEvent('cta_click', {
          cta_name: element.dataset.analyticsName || 'important_cta',
          location: 'site',
        })
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}

