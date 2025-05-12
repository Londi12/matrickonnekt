import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './components/Providers'
import ErrorBoundary from './components/ErrorBoundary'
import ClientCalculator from './components/ClientCalculator'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matrickonnekt',
  description: 'Your Mathematics Learning Platform',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">      <body className={inter.className}>
        <ErrorBoundary>
          <Providers>
            {children}
            <ClientCalculator />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}