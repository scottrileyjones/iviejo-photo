import type { Metadata } from 'next'
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: '300',
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'iviejo photo — cinematic portrait photography, utah',
    template: '%s — iviejo photo',
  },
  description: 'utah-based cinematic portrait photographer specializing in couples, families & milestones. modern digital capture with analog-inspired editing.',
  keywords: [
    'cinematic portrait photographer utah',
    'analog inspired photographer utah',
    'film look portrait photographer salt lake city',
    'cinematic couples photographer utah',
    'portrait photographer utah',
    'editorial photographer utah',
  ],
  openGraph: {
    siteName: 'iviejo photo',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1, paddingTop: 88 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
