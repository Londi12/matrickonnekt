'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/navigation';
import { Resource, getResources, updateResource } from '../../services/resourceService';

export default function AdminResourcesPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('pending'); // 'pending', 'approved', 'rejected'
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminStatus();
  }, [user]);

  useEffect(() => {
    if (isAdmin) {
      fetchResources();
    }
  }, [filter, isAdmin]);
  const checkAdminStatus = async () => {
    if (!user) {
      router.push('/login');
      return;
    }

    if (!user.isAdmin) {
      toast.error('You do not have permission to access this page');
      router.push('/');
      return;
    }

    setIsAdmin(true);
  };
  const fetchResources = async () => {
    try {
      const allResources = getResources();
      const filteredResources = allResources.filter(resource => resource.status === filter);
      setResources(filteredResources);
    } catch (error) {
      console.error('Error fetching resources:', error);
      toast.error('Failed to fetch resources');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (resourceId: string) => {
    try {
      updateResource(resourceId, {
        approved: true,
        status: 'approved',
        approvedAt: new Date().toISOString(),
        approvedBy: user?.uid
      });
      
      toast.success('Resource approved successfully');
      fetchResources();
    } catch (error) {
      console.error('Error approving resource:', error);
      toast.error('Failed to approve resource');
    }
  };

  const handleReject = async (resourceId: string) => {
    try {
      updateResource(resourceId, {
        approved: false,
        status: 'rejected',
        rejectedAt: new Date().toISOString(),
        rejectedBy: user?.uid
      });
      
      toast.success('Resource rejected');
      fetchResources();
    } catch (error) {
      console.error('Error rejecting resource:', error);
      toast.error('Failed to reject resource');
    }
  };

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <p>You do not have permission to access this page.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Resource Approvals</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setFilter('pending')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'pending'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilter('approved')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'approved'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Approved
              </button>
              <button
                onClick={() => setFilter('rejected')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'rejected'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Rejected
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading resources...</p>
            </div>
          ) : resources.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No resources found.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{resource.description}</p>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">Subject:</span> {resource.subject}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Category:</span> {resource.category}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Uploaded by:</span> {resource.uploadedByName}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">File:</span> {resource.fileName} ({(resource.fileSize / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      </div>
                    </div>
                    {filter === 'pending' && (
                      <div className="flex space-x-4">
                        <button
                          onClick={() => handleApprove(resource.id)}
                          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(resource.id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <a
                      href={resource.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      View Resource
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 