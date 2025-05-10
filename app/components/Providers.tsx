'use client';

import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../context/AuthContext';
import ErrorBoundary from './ErrorBoundary';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Toaster position="top-right" />
        {children}
      </AuthProvider>
    </ErrorBoundary>
  );
} 