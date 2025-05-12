"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const { user, signIn, signUp, error: authError } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // Check if there's a redirect URL in the query parameters
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get('redirect');
      router.push(redirect || '/dashboard');
    }
  }, [user, router]);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLocalError(null);

    try {
      if (isSignUp) {
        if (password.length < 6) {
          setLocalError('Password must be at least 6 characters long');
          return;
        }
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
    } catch (error: any) {
      console.error('Authentication error:', error);
      setLocalError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Local authentication only - no Google sign-in in this version

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </h1>

          {(localError || authError) && (
            <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
              {localError || authError}
            </div>
          )}

          <form onSubmit={handleEmailAuth} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your password"
                minLength={isSignUp ? 6 : undefined}
              />
              {isSignUp && (
                <p className="mt-1 text-sm text-gray-500">
                  Password must be at least 6 characters long
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50`}
            >
              {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          {/* Local authentication only - no third-party providers in this version */}

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setLocalError(null);
              }}
              disabled={loading}
              className="text-sm text-blue-600 hover:text-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSignUp
                ? 'Already have an account? Sign in'
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}