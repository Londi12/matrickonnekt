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
  metadataBase: new URL('https://matrickonnekt.netlify.app'),
  title: {
    default: 'Matrickonnekt - Grade 12 Learning Platform | Online Study Resources',
    template: '%s | Matrickonnekt'
  },
  description: 'Comprehensive Grade 12 learning platform featuring interactive lessons, mock exams, flashcards, and study resources for Mathematics, Sciences, and more. Join thousands of students preparing for matric success.',
  keywords: ['grade 12', 'matric', 'south africa education', 'online learning', 'mathematics', 'science', 'study guides', 'mock exams', 'flashcards', 'matric preparation', 'high school', 'educational resources', 'online tutoring'],
  authors: [{ name: 'Matrickonnekt Team', url: 'https://matrickonnekt.netlify.app/about' }],
  creator: 'Matrickonnekt Team',
  publisher: 'Matrickonnekt',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Matrickonnekt - Grade 12 Learning Platform',
    description: 'Excel in your Grade 12 studies with interactive lessons, practice materials, and comprehensive study resources. Join South Africa\'s leading online matric preparation platform.',
    url: 'https://matrickonnekt.netlify.app',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Matrickonnekt',
    images: [{
      url: '/og-image.jpg', // Make sure to add this image to your public folder
      width: 1200,
      height: 630,
      alt: 'Matrickonnekt - Your Path to Matric Success'
    }]
  },  twitter: {
    card: 'summary_large_image',
    title: 'Matrickonnekt - Grade 12 Learning Platform',
    description: 'Excel in your Grade 12 studies with interactive lessons, practice materials, and comprehensive study resources.',
    images: ['/og-image.jpg'], // Same image as OpenGraph
    creator: '@matrickonnekt', // Add your Twitter handle if you have one
    site: '@matrickonnekt'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-site-verification-here', // Add this after setting up Google Search Console
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">      
      <head>        <link rel="alternate" href="https://matrickonnekt.netlify.app" hrefLang="en" />
        <link rel="alternate" href="https://matrickonnekt.netlify.app/zu" hrefLang="zu" />
        <link rel="alternate" href="https://matrickonnekt.netlify.app/af" hrefLang="af" />
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