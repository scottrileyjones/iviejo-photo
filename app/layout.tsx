import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'iviejo photo — analog film photography, utah',
    template: '%s — iviejo photo',
  },
  description: 'utah-based analog film photographer specializing in portraits, couples, families & milestones. shot on 35mm and medium format. developed in-house.',
  keywords: [
    'analog film photographer utah',
    'film photography portraits utah',
    '35mm portrait photographer salt lake city',
    'kodak portra photographer utah',
    'medium format photographer utah',
    'film photographer couples utah',
  ],
  openGraph: {
    siteName: 'iviejo photo',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1, paddingTop: 64 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
