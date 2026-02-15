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
  title: 'Vishruth Gonur | CS Student & AI/Technology Enthusiast',
  description:
    "Computer Science student passionate about Generative AI, data-driven problem solving, and building impactful technology solutions. Explore my portfolio and connect.",
}

export const viewport: Viewport = {
  themeColor: '#4f46e5',
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
