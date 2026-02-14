import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'

import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Sarah Johnson | Web Developer & Designer',
  description:
    'I create beautiful, functional websites that help businesses grow. Explore my portfolio and get in touch.',
}

export const viewport: Viewport = {
  themeColor: '#1a6fbd',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${_inter.variable} ${_outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
