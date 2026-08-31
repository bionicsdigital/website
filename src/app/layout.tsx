import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'

import Navbar from '@/components/home/Navbar'
import Footer from '@/components/footer/Footer'
import BackgroundParticles from '@/components/background/BackgroundParticles'
import Assistant from '@/components/assistant/Assistant'
import ToastProvider from '@/components/forms/ToastProvider'
import CookieConsent from '@/components/cookies/CookieConsent'
import GlobalSearch from '@/components/search/GlobalSearch'
import GoogleTagManager from '@/components/analytics/GoogleTagManager'
import { siteConfig } from '@/lib/site'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.shortName, template: `%s | ${siteConfig.shortName}` },
  authors: [...siteConfig.authors],
  creator: siteConfig.shortName,
  publisher: siteConfig.name,
  other: {
    developer: siteConfig.developedBy.name,
    'developer:role': siteConfig.developedBy.role,
    'developer:project': siteConfig.developedBy.project,
    'developer:profile': siteConfig.developedBy.url,
    'developer:technologies': siteConfig.developedBy.technologies.join(', '),
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: { types: { 'application/rss+xml': '/feed.xml' } },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#064e3b',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link rel="dns-prefetch" href="https://fonts.googleapis.com" /></head>
      <body className="overflow-x-hidden bg-white text-slate-600 antialiased">
        <GoogleTagManager />
        <BackgroundParticles />
        <ToastProvider />
        <GlobalSearch />
        <CookieConsent />
        <Navbar />
        {children}
        <Assistant />
        <Footer />
      </body>
    </html>
  )
}
