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
  title: 'Matrickonnekt - Grade 12 Learning Platform',
  description: 'Comprehensive Grade 12 learning platform featuring interactive lessons, mock exams, flashcards, and study resources for Mathematics, Sciences, and more.',
  keywords: 'grade 12, matric, education, online learning, mathematics, science, study guides, mock exams, flashcards',
  authors: [{ name: 'Matrickonnekt Team' }],
  openGraph: {
    title: 'Matrickonnekt - Grade 12 Learning Platform',
    description: 'Excel in your Grade 12 studies with interactive lessons, practice materials, and comprehensive study resources.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Matrickonnekt'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matrickonnekt - Grade 12 Learning Platform',
    description: 'Excel in your Grade 12 studies with interactive lessons, practice materials, and comprehensive study resources.'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">      
      <head>
        <link rel="alternate" href="https://matrickonnekt.com" hrefLang="en" />
        <link rel="alternate" href="https://matrickonnekt.com/zu" hrefLang="zu" />
        <link rel="alternate" href="https://matrickonnekt.com/af" hrefLang="af" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Matrickonnekt',
              description: 'Comprehensive Grade 12 learning platform featuring interactive lessons, mock exams, and study resources',
              url: 'https://matrickonnekt.com'
            })
          }}
        />
      </head>
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