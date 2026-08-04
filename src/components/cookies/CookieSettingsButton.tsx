'use client'

export default function CookieSettingsButton() {
  return <button type="button" onClick={() => window.dispatchEvent(new Event('bionics:open-cookie-settings'))} className="hover:text-emerald-300">Cookie Settings</button>
}
