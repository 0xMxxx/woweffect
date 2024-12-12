import './globals.css'
import { Metadata } from 'next'
import Script from 'next/script'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { ViewTransitions } from 'next-view-transitions'

import { Navbar } from '@/components/navbar'
import { Container } from '@/components/container'
import { ResponsiveIndicator } from '@/components/responsive-indicator'

import { ENV } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(ENV.NEXT_PUBLIC_WEBSITE_URL),
  title: {
    default: 'Seth Diary',
    template: '%s | SethDiary'
  },
  description:
    "Get to know me, Seth",
  openGraph: {
    title: 'SethDiary',
    description:
      "Get to know me, Seth, through this website!",
    url: ENV.NEXT_PUBLIC_WEBSITE_URL,
    siteName: 'SethDiary',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'SethDiary',
    card: 'summary_large_image'
  },
  verification: {
    google: ENV.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  }
}

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Readonly<Props>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={`${GeistSans.variable} ${GeistMono.variable} grid h-dvh place-items-center bg-[#3D3D3D] font-mono overflow-hidden`}>
          <Container>
            <section className='relative flex-1 overflow-y-auto px-2 md:px-3 lg:px-4'>{children}</section>
            <Navbar />
          </Container>
          <ResponsiveIndicator />
          <div className='fixed h-[300%] w-[300%] bg-grain-noise opacity-5 animate-grain pointer-events-none top-0' aria-hidden='true' />
          <div className='grid-pattern absolute left-0 top-0 h-full w-full' />
        </body>
      </html>
    </ViewTransitions>
  )
}
