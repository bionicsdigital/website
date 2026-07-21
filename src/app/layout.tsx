import type { Metadata } from 'next'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/home/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bionics Enviro Tech',
  description: 'Scientific innovation for wastewater treatment.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className='font-sans'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
