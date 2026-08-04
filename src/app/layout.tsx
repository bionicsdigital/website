import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import Navbar from '@/components/home/Navbar'
import Footer from '@/components/footer/Footer'
import BackgroundParticles from '@/components/background/BackgroundParticles'
import Assistant from '@/components/assistant/Assistant'
import ToastProvider from '@/components/forms/ToastProvider'
import CookieConsent from '@/components/cookies/CookieConsent'
import GlobalSearch from '@/components/search/GlobalSearch'

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
  title: 'Bionics Enviro Tech',
  description: 'Scientific innovation for wastewater treatment.',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: { types: { 'application/rss+xml': '/feed.xml' } },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="overflow-x-hidden bg-white text-slate-600 antialiased">
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
