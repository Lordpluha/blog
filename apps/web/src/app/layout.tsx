import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ThemeProvider } from '@features/ToggleTheme'
import { NextUIProvider as NextUIProviderUI } from '@nextui-org/react'

import './_styles/index.scss'
import { Header } from '@widgets/Header'
import { Footer } from '@widgets/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

gsap.registerPlugin(useGSAP)

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <NextUIProviderUI>
        <ThemeProvider>
          <body className={inter.className}>
            <Header />
            <main className='w-full'>{children}</main>
            <Footer />
          </body>
        </ThemeProvider>
      </NextUIProviderUI>
    </html>
  )
}
