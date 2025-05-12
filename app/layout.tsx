import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './components/Providers'
import ErrorBoundary from './components/ErrorBoundary'
import ClientCalculator from './components/ClientCalculator'
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import ProgressUpdateListener from './components/ProgressUpdateListener';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matrickonnekt',
  description: 'Interactive learning platform for students',
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
    <html lang="en">      
      <body className={inter.className}>
        <ErrorBoundary>
          <AuthProvider>
            <Providers>
              {children}
              <ClientCalculator />
              <Toaster position="bottom-right" />
              <ProgressUpdateListener />
            </Providers>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}