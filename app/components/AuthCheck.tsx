'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface AuthCheckProps {
  children: React.ReactNode;
  required?: boolean;
  onAuthRequired?: () => void;
}

export default function AuthCheck({ 
  children, 
  required = false,
  onAuthRequired
}: AuthCheckProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleAuthRequired = () => {
    if (required && !user) {
      setShowLoginPrompt(true);
      if (onAuthRequired) {
        onAuthRequired();
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (showLoginPrompt) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Matrickonnekt!</h2>
          <p className="text-gray-600 mb-6">
            I'm sorry, looks like you are not signed in. Sign in to get started on your interactive learning journey.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => router.push('/login')}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => setShowLoginPrompt(false)}
              className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div onClick={handleAuthRequired}>
      {children}
    </div>
  );
} 