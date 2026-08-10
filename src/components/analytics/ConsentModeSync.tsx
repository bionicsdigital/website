'use client'

import { useEffect } from 'react'
import { readConsent, type CookiePreferences } from '@/lib/cookies/consent'

function updateGoogleConsent(preferences: CookiePreferences) {
  const settings = {
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    ad_storage: preferences.marketing ? 'granted' : 'denied',
    ad_user_data: preferences.marketing ? 'granted' : 'denied',
    ad_personalization: preferences.marketing ? 'granted' : 'denied',
    functionality_storage: preferences.preferences ? 'granted' : 'denied',
    personalization_storage: preferences.preferences ? 'granted' : 'denied',
    security_storage: 'granted',
  }

  if (window.gtag) window.gtag('consent', 'update', settings)
  else {
    window.dataLayer ??= []
    window.dataLayer.push(['consent', 'update', settings])
  }
}

export default function ConsentModeSync() {
  useEffect(() => {
    const saved = readConsent()
    if (saved) updateGoogleConsent(saved)

    const onConsentChanged = (event: Event) => {
      const preferences = (event as CustomEvent<CookiePreferences>).detail
      if (preferences) updateGoogleConsent(preferences)
    }

    window.addEventListener('bionics:consent-changed', onConsentChanged)
    return () => window.removeEventListener('bionics:consent-changed', onConsentChanged)
  }, [])

  return null
}

