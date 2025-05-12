"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { Resource, addResource, getResources } from '../services/resourceService';
import { saveFile } from '../services/fileService';
import { generateId } from '../utils/helpers';
import Navbar from '../components/Navbar';
import AuthCheck from '../components/AuthCheck';
import SignInModal from '../components/SignInModal';
import { useDropzone } from 'react-dropzone';
import {
  DocumentArrowDownIcon,
  LinkIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';

interface FileMetadata {
  title: string;
  description: string;
  subject: string;
  category: string;
}

interface FileWithPreview extends File {
  preview?: string;
  metadata?: FileMetadata;
}

export default function ResourcesPage() {
  const { user, loading } = useAuth();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [uploading, setUploading] = useState(false);
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const allResources = getResources();
      const approvedResources = allResources.filter(resource => resource.approved === true);
      setResources(approvedResources);
    } catch (error) {
      console.error('Error fetching resources:', error);
      toast.error('Failed to fetch resources');
    }
  };

  const handleDownload = async (resource: Resource) => {
    try {
      if (user) {
        const url = resource.downloadUrl;
        if (url.startsWith('local-storage://')) {
          const a = document.createElement('a');
          a.href = url;
          a.download = resource.fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else {
          window.open(url, '_blank');
        }
      } else {
        toast.error('Please sign in to download resources');
      }
    } catch (error) {
      console.error('Error downloading resource:', error);
      toast.error('Failed to download resource');
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'video/*': ['.mp4', '.mov', '.avi'],
      'application/msword': ['.doc', '.docx'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    }
  });

  const handleMetadataChange = (index: number, field: keyof FileMetadata, value: string) => {
    setFiles(prevFiles => {
      const newFiles = [...prevFiles];
      const currentFile = newFiles[index];
      
      if (!currentFile.metadata) {
        currentFile.metadata = {
          title: '',
          description: '',
          subject: '',
          category: ''
        };
      }
      
      currentFile.metadata[field] = value;
      return newFiles;
    });
  };

  const validateMetadata = (file: FileWithPreview) => {
    return file.metadata?.title && 
           file.metadata?.description && 
           file.metadata?.subject && 
           file.metadata?.category;
  };

  const handleUpload = async () => {
    if (!user) {
      setShowSignInModal(true);
      return;
    }

    setUploading(true);
    try {
      for (const file of files) {
        if (!validateMetadata(file)) {
          toast.error(`Please fill in all metadata fields for ${file.name}`);
          continue;
        }

        const fileUrl = await saveFile(file);
        const resource: Partial<Resource> = {
          id: generateId(),
          title: file.metadata!.title,
          description: file.metadata!.description,
          subject: file.metadata!.subject,
          category: file.metadata!.category,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          downloadUrl: fileUrl,
          uploadedBy: user.uid,
          uploadedByName: user.displayName || 'Anonymous',
          uploadedAt: new Date().toISOString(),
          approved: false,
          status: 'pending'
        };

        await addResource(resource as Resource);
      }

      setFiles([]);
      toast.success('Resources uploaded successfully!');
      fetchResources();
    } catch (error) {
      console.error('Error uploading resources:', error);
      toast.error('Failed to upload resources');
    } finally {
      setUploading(false);
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = !selectedSubject || resource.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </main>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Learning Resources</h1>
            <p className="mt-2 text-gray-600">Sign in to access and share learning resources</p>
            <button
              onClick={() => setShowSignInModal(true)}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </div>
        </main>
        <SignInModal isOpen={showSignInModal} onClose={() => setShowSignInModal(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AuthCheck>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Resource Library</h1>
            <p className="mt-2 text-gray-600">Share and access educational resources</p>
          </div>

          <div className="mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
              
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="border rounded-lg px-4 py-2"
              >
                <option value="">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="history">History</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-6">
              <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input {...getInputProps()} />
                <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
                {isDragActive ? (
                  <p className="mt-2 text-sm text-gray-600">Drop the files here...</p>
                ) : (
                  <p className="mt-2 text-sm text-gray-600">
                    Drag and drop files here, or click to select files
                  </p>
                )}
              </div>

              {files.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">Files to upload:</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {files.map((file, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <p className="font-medium">{file.name}</p>
                        <div className="mt-2 space-y-2">
                          <input
                            type="text"
                            placeholder="Title"
                            value={file.metadata?.title || ''}
                            onChange={(e) => handleMetadataChange(index, 'title', e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                          />
                          <textarea
                            placeholder="Description"
                            value={file.metadata?.description || ''}
                            onChange={(e) => handleMetadataChange(index, 'description', e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                          />
                          <select
                            value={file.metadata?.subject || ''}
                            onChange={(e) => handleMetadataChange(index, 'subject', e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                          >
                            <option value="">Select Subject</option>
                            <option value="mathematics">Mathematics</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                            <option value="history">History</option>
                          </select>
                          <select
                            value={file.metadata?.category || ''}
                            onChange={(e) => handleMetadataChange(index, 'category', e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                          >
                            <option value="">Select Category</option>
                            <option value="lesson">Lesson Plan</option>
                            <option value="worksheet">Worksheet</option>
                            <option value="assessment">Assessment</option>
                            <option value="reference">Reference Material</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleUpload}
                    disabled={uploading}
                    className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {uploading ? 'Uploading...' : 'Upload Files'}
                  </button>
                </div>
              )}

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource) => (
                    <div key={resource.id} className="bg-white rounded-lg shadow-sm border p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                          <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {resource.subject}
                        </span>
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {resource.category}
                        </span>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <a
                          href={resource.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                        >
                          <DocumentArrowDownIcon className="h-4 w-4 mr-1" />
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </AuthCheck>
      <SignInModal isOpen={showSignInModal} onClose={() => setShowSignInModal(false)} />
    </div>
  );
}