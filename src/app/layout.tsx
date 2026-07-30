import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import Navbar from '@/components/home/Navbar'
import Footer from '@/components/footer/Footer'
import BackgroundParticles from '@/components/background/BackgroundParticles'
import Assistant from '@/components/assistant/Assistant'
import ToastProvider from '@/components/forms/ToastProvider'

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
        <Navbar />
        {children}
        <Assistant />
        <Footer />
      </body>
    </html>
  )
}
