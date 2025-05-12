'use client';

import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../context/AuthContext';
import { CalculatorProvider } from '../context/CalculatorContext';
import { LanguageProvider } from '../context/LanguageContext';
import ErrorBoundary from './ErrorBoundary';
import { useEffect } from 'react';
import { initializeLocalAuth } from '../utils/init';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize local authentication on component mount
  useEffect(() => {
    // Only run in the browser
    if (typeof window !== 'undefined') {
      initializeLocalAuth()
        .then(() => console.log('Local auth initialized'))
        .catch(error => console.error('Error initializing local auth:', error));
    }
  }, []);
  return (
    <ErrorBoundary>
      <AuthProvider>
        <LanguageProvider>
          <CalculatorProvider>
            <Toaster position="top-right" />
            {children}
          </CalculatorProvider>
        </LanguageProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}