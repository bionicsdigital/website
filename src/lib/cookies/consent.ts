export type CookiePreferences = { necessary: true; analytics: boolean; marketing: boolean; preferences: boolean; performance: boolean }
export const CONSENT_KEY = 'bionics_cookie_consent'
export const defaultPreferences: CookiePreferences = { necessary: true, analytics: false, marketing: false, preferences: false, performance: false }
export const allPreferences: CookiePreferences = { necessary: true, analytics: true, marketing: true, preferences: true, performance: true }

export function saveConsent(value: CookiePreferences) {
  const payload = JSON.stringify({ ...value, savedAt: new Date().toISOString() })
  localStorage.setItem(CONSENT_KEY, payload)
  const secure = location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${CONSENT_KEY}=${encodeURIComponent(payload)}; Max-Age=15552000; Path=/; SameSite=Lax${secure}`
  window.dispatchEvent(new CustomEvent('bionics:consent-changed', { detail: value }))
}

export function readConsent(): CookiePreferences | null {
  try {
    const saved = localStorage.getItem(CONSENT_KEY)
    if (!saved) return null
    const parsed = JSON.parse(saved)
    if (!parsed.savedAt || Date.now() - new Date(parsed.savedAt).getTime() > 15552000000) return null
    return { ...defaultPreferences, ...parsed, necessary: true }
  } catch { return null }
}
