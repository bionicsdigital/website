import type { Metadata } from 'next'
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
      <body className='font-sans'>{children}</body>
    </html>
  )
}
