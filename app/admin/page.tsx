'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Resources</h2>
              <p className="text-gray-600 mb-4">Manage learning resources and materials</p>
              <button
                onClick={() => router.push('/admin/resources')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Manage Resources →
              </button>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Users</h2>
              <p className="text-gray-600 mb-4">View and manage user accounts</p>
              <button
                onClick={() => router.push('/admin/users')}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Manage Users →
              </button>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Settings</h2>
              <p className="text-gray-600 mb-4">Configure system settings</p>
              <button
                onClick={() => router.push('/admin/settings')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Manage Settings →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 