"use client";

import React, { useState, useCallback, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AuthCheck from '../components/AuthCheck';
import { useAuth } from '../context/AuthContext';
import { recordQuizCompletion } from '../utils/userProgress';
import { 
  DocumentArrowDownIcon,
  LinkIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  AcademicCapIcon,
  CalculatorIcon,
  BeakerIcon,
  GlobeAltIcon,
  ClockIcon,
  ComputerDesktopIcon,
  BriefcaseIcon,
  ChartBarIcon,
  UserGroupIcon,
  MapIcon,
  BookmarkIcon,
  VideoCameraIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';
import { useDropzone } from 'react-dropzone';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { toast } from 'react-hot-toast';
import SignInModal from '../components/SignInModal';

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

interface Resource {
  id: string;
  title: string;
  description: string;
  subject: string;
  category: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  downloadUrl: string;
  uploadedBy: string;
  uploadedByName: string;
  uploadedAt: any;
  approved: boolean;
  status: string;
}

// Mock data for demonstration
const resources = {
  pdfs: [
    {
      id: 1,
      title: 'Mathematics Formula Sheet',
      description: 'Complete collection of all formulas needed for Grade 12 Mathematics',
      subject: 'Mathematics',
      category: 'Reference',
      size: '2.4 MB',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Physical Sciences Data Sheet',
      description: 'Official data sheet for Physical Sciences examinations',
      subject: 'Physical Sciences',
      category: 'Reference',
      size: '1.8 MB',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Life Sciences Study Guide',
      description: 'Comprehensive guide to DNA and genetics',
      subject: 'Life Sciences',
      category: 'Study Guide',
      size: '3.2 MB',
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Business Studies Case Studies',
      description: 'Collection of business case studies and analyses',
      subject: 'Business Studies',
      category: 'Practice',
      size: '2.1 MB',
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'Economics Past Papers',
      description: 'Collection of past examination papers with solutions',
      subject: 'Economics',
      category: 'Past Papers',
      size: '4.5 MB',
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'Geography Mapwork Guide',
      description: 'Guide to map reading and interpretation',
      subject: 'Geography',
      category: 'Study Guide',
      size: '2.8 MB',
      downloadUrl: '#'
    },
    {
      id: 7,
      title: 'History Timeline',
      description: 'Comprehensive timeline of historical events',
      subject: 'History',
      category: 'Reference',
      size: '1.5 MB',
      downloadUrl: '#'
    },
    {
      id: 8,
      title: 'Life Orientation Workbook',
      description: 'Interactive workbook for personal development',
      subject: 'Life Orientation',
      category: 'Practice',
      size: '2.3 MB',
      downloadUrl: '#'
    },
    {
      id: 9,
      title: 'CAT Practical Guide',
      description: 'Step-by-step guide for computer applications',
      subject: 'Computer Applications Technology',
      category: 'Study Guide',
      size: '3.1 MB',
      downloadUrl: '#'
    },
    {
      id: 10,
      title: 'IT Programming Guide',
      description: 'Introduction to programming concepts',
      subject: 'Information Technology',
      category: 'Study Guide',
      size: '2.7 MB',
      downloadUrl: '#'
    },
    {
      id: 11,
      title: 'Tourism Industry Guide',
      description: 'Overview of tourism sectors and management',
      subject: 'Tourism',
      category: 'Reference',
      size: '2.9 MB',
      downloadUrl: '#'
    },
    {
      id: 12,
      title: 'English Home Language Past Papers',
      description: 'Collection of past examination papers with marking guidelines',
      subject: 'English Home Language',
      category: 'Past Papers',
      size: '3.8 MB',
      downloadUrl: '#'
    },
    {
      id: 13,
      title: 'English Home Language Study Guide',
      description: 'Comprehensive guide to literature analysis and essay writing',
      subject: 'English Home Language',
      category: 'Study Guide',
      size: '2.6 MB',
      downloadUrl: '#'
    }
  ],
  externalLinks: [
    {
      id: 1,
      title: 'Desmos Graphing Calculator',
      description: 'Interactive graphing calculator for visualizing functions',
      url: 'https://www.desmos.com/calculator',
      subject: 'Mathematics',
      category: 'Tools'
    },
    {
      id: 2,
      title: 'PhET Simulations',
      description: 'Interactive physics and chemistry simulations',
      url: 'https://phet.colorado.edu',
      subject: 'Physical Sciences',
      category: 'Tools'
    },
    {
      id: 3,
      title: 'Khan Academy',
      description: 'Free online courses and practice exercises',
      url: 'https://www.khanacademy.org',
      subject: 'All Subjects',
      category: 'Learning'
    },
    {
      id: 4,
      title: 'GeoGebra',
      description: 'Dynamic mathematics software for geometry and algebra',
      url: 'https://www.geogebra.org',
      subject: 'Mathematics',
      category: 'Tools'
    },
    {
      id: 5,
      title: 'BBC Bitesize',
      description: 'Comprehensive study resources for all subjects',
      url: 'https://www.bbc.co.uk/bitesize',
      subject: 'All Subjects',
      category: 'Learning'
    },
    {
      id: 6,
      title: 'Codecademy',
      description: 'Interactive coding lessons',
      url: 'https://www.codecademy.com',
      subject: 'Information Technology',
      category: 'Learning'
    },
    {
      id: 7,
      title: 'World Bank Data',
      description: 'Economic and development data',
      url: 'https://data.worldbank.org',
      subject: 'Economics',
      category: 'Data'
    },
    {
      id: 8,
      title: 'Google Earth',
      description: 'Interactive maps and geographic data',
      url: 'https://earth.google.com',
      subject: 'Geography',
      category: 'Tools'
    }
  ],
  glossary: [
    {
      term: 'Derivative',
      definition: 'The rate of change of a function with respect to its variable',
      example: 'The derivative of f(x) = x² is f\'(x) = 2x',
      subject: 'Mathematics',
      category: 'Calculus'
    },
    {
      term: 'DNA Replication',
      definition: 'The process by which DNA makes a copy of itself',
      example: 'During cell division, DNA replicates to ensure each new cell has a complete set of genetic information',
      subject: 'Life Sciences',
      category: 'Genetics'
    },
    {
      term: 'Market Equilibrium',
      definition: 'The point where supply equals demand in a market',
      example: 'When the price of a good is at equilibrium, there is no tendency for the price to change',
      subject: 'Economics',
      category: 'Microeconomics'
    },
    {
      term: 'Business Cycle',
      definition: 'The natural fluctuation of economic activity between growth and recession',
      example: 'The economy moves through phases of expansion, peak, contraction, and trough',
      subject: 'Economics',
      category: 'Macroeconomics'
    },
    {
      term: 'Climate Change',
      definition: 'Long-term changes in temperature and weather patterns',
      example: 'Global warming is a key aspect of climate change',
      subject: 'Geography',
      category: 'Environmental'
    },
    {
      term: 'Algorithm',
      definition: 'A step-by-step procedure for solving a problem',
      example: 'A recipe is an algorithm for cooking a dish',
      subject: 'Information Technology',
      category: 'Programming'
    }
  ],
  faq: [
    {
      question: 'How do I factor a quadratic equation?',
      answer: 'To factor a quadratic equation ax² + bx + c = 0, find two numbers that multiply to ac and add to b. Then use these numbers to split the middle term and factor by grouping.',
      subject: 'Mathematics',
      category: 'Algebra'
    },
    {
      question: 'What\'s the best way to memorize trigonometric identities?',
      answer: 'Start with the basic identities and use the unit circle to visualize them. Practice deriving them from the basic definitions of sine and cosine.',
      subject: 'Mathematics',
      category: 'Trigonometry'
    },
    {
      question: 'How do I solve a system of linear equations?',
      answer: 'You can use substitution, elimination, or matrix methods. The elimination method is often the most straightforward for simple systems.',
      subject: 'Mathematics',
      category: 'Algebra'
    },
    {
      question: 'What is the difference between mitosis and meiosis?',
      answer: 'Mitosis produces two identical daughter cells, while meiosis produces four genetically different cells. Mitosis is for growth and repair, while meiosis is for sexual reproduction.',
      subject: 'Life Sciences',
      category: 'Cell Division'
    },
    {
      question: 'How do I calculate compound interest?',
      answer: 'Use the formula A = P(1 + r/n)^(nt), where A is the final amount, P is the principal, r is the annual interest rate, n is the number of times interest is compounded per year, and t is the time in years.',
      subject: 'Mathematics',
      category: 'Finance'
    },
    {
      question: 'What are the main types of business ownership?',
      answer: 'The main types are sole proprietorship, partnership, private company, and public company. Each has different advantages and disadvantages in terms of liability, control, and capital raising.',
      subject: 'Business Studies',
      category: 'Business Types'
    }
  ]
};

export default function ResourcesPage() {
  const { user, loading } = useAuth();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [uploading, setUploading] = useState(false);
  const [editingFileIndex, setEditingFileIndex] = useState<number | null>(null);
  const [resources, setResources] = useState<Resource[]>([]);
  const [filter, setFilter] = useState('all'); // 'all', 'notes', 'past_papers', 'worksheets'

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const resourcesRef = collection(db, 'resources');
      const q = query(resourcesRef, where('approved', '==', true));
      const querySnapshot = await getDocs(q);
      
      const resourcesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Resource[];
      
      setResources(resourcesData);
    } catch (error) {
      console.error('Error fetching resources:', error);
      toast.error('Failed to fetch resources');
    }
  };

  const handleDownload = async (resource: Resource) => {
    try {
      if (user) {
        // Record the download
        // You can add analytics or tracking here
        window.open(resource.downloadUrl, '_blank');
      } else {
        toast.error('Please sign in to download resources');
      }
    } catch (error) {
      console.error('Error downloading resource:', error);
      toast.error('Failed to download resource');
    }
  };

  const filteredResources = filter === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === filter);

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
      
      if (currentFile.metadata) {
        currentFile.metadata[field] = value;
      }
      
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
    const invalidFiles = files.filter(file => !validateMetadata(file));
    if (invalidFiles.length > 0) {
      toast.error('Please fill in all required fields for each file before uploading.');
      return;
    }

    setUploading(true);
    const storage = getStorage();
    const uploadPromises = files.map(async (file) => {
      try {
        const timestamp = Date.now();
        const fileName = `${timestamp}_${file.name}`;
        const filePath = `resources/${file.metadata?.subject}/${fileName}`;
        
        const storageRef = ref(storage, filePath);
        await uploadBytes(storageRef, file);
        
        const downloadUrl = await getDownloadURL(storageRef);
        
        const resourceData = {
          title: file.metadata?.title,
          description: file.metadata?.description,
          subject: file.metadata?.subject,
          category: file.metadata?.category,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          downloadUrl,
          uploadedBy: user?.uid,
          uploadedAt: serverTimestamp(),
          approved: false,
          status: 'pending',
          uploadedByName: user?.displayName || 'Anonymous',
        };

        await addDoc(collection(db, 'resources'), resourceData);
        return { success: true, fileName: file.name };
      } catch (error) {
        console.error('Error uploading file:', error);
        return { success: false, fileName: file.name, error };
      }
    });

    try {
      const results = await Promise.all(uploadPromises);
      const failedUploads = results.filter(result => !result.success);
      
      if (failedUploads.length > 0) {
        toast.error(`Failed to upload ${failedUploads.length} file(s). Please try again.`);
      } else {
        toast.success('Files uploaded successfully! They will be available after admin approval.');
        setFiles([]);
      }
    } catch (error) {
      console.error('Error during upload:', error);
      toast.error('An error occurred during upload. Please try again.');
    } finally {
      setUploading(false);
    }
  };

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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Resources</h1>
          <p className="text-xl text-gray-600">Access helpful materials to support your learning journey</p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Subjects</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physical Sciences">Physical Sciences</option>
              <option value="Life Sciences">Life Sciences</option>
              <option value="Business Studies">Business Studies</option>
              <option value="Economics">Economics</option>
              <option value="Geography">Geography</option>
              <option value="History">History</option>
              <option value="Life Orientation">Life Orientation</option>
              <option value="Computer Applications Technology">Computer Applications Technology</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Tourism">Tourism</option>
              <option value="English Home Language">English Home Language</option>
            </select>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mb-8">
          <div
            {...getRootProps()}
            className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
              ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'}`}
          >
            <input {...getInputProps()} />
            <CloudArrowUpIcon className="mx-auto h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-lg font-medium mb-2">
              {isDragActive
                ? 'Drop the files here...'
                : 'Drag and drop files here, or click to select files'}
            </h3>
            <p className="text-sm text-gray-500">
              Supported formats: PDF, DOC, DOCX, MP4, MOV, AVI
            </p>
          </div>

          {files.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Selected Files</h3>
              <div className="grid grid-cols-1 gap-4">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <DocumentArrowDownIcon className="h-6 w-6 text-gray-400" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {file.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        onClick={() => setEditingFileIndex(editingFileIndex === index ? null : index)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {editingFileIndex === index ? 'Done' : 'Edit Details'}
                      </button>
                    </div>

                    {editingFileIndex === index && (
                      <div className="mt-4 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Title *</label>
                          <input
                            type="text"
                            value={file.metadata?.title || ''}
                            onChange={(e) => handleMetadataChange(index, 'title', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter resource title"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Description *</label>
                          <textarea
                            value={file.metadata?.description || ''}
                            onChange={(e) => handleMetadataChange(index, 'description', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            rows={3}
                            placeholder="Describe the resource"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Subject *</label>
                            <select
                              value={file.metadata?.subject || ''}
                              onChange={(e) => handleMetadataChange(index, 'subject', e.target.value)}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                              <option value="">Select Subject</option>
                              <option value="Mathematics">Mathematics</option>
                              <option value="Physical Sciences">Physical Sciences</option>
                              <option value="Life Sciences">Life Sciences</option>
                              <option value="Business Studies">Business Studies</option>
                              <option value="Economics">Economics</option>
                              <option value="Geography">Geography</option>
                              <option value="History">History</option>
                              <option value="Life Orientation">Life Orientation</option>
                              <option value="Computer Applications Technology">Computer Applications Technology</option>
                              <option value="Information Technology">Information Technology</option>
                              <option value="Tourism">Tourism</option>
                              <option value="English Home Language">English Home Language</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Category *</label>
                            <select
                              value={file.metadata?.category || ''}
                              onChange={(e) => handleMetadataChange(index, 'category', e.target.value)}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                              <option value="">Select Category</option>
                              <option value="Study Guide">Study Guide</option>
                              <option value="Practice">Practice</option>
                              <option value="Reference">Reference</option>
                              <option value="Tools">Tools</option>
                              <option value="Learning">Learning</option>
                              <option value="Past Papers">Past Papers</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={handleUpload}
                disabled={uploading || files.some(file => !validateMetadata(file))}
                className={`mt-4 px-4 py-2 rounded-md text-white font-medium
                  ${uploading || files.some(file => !validateMetadata(file)) 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600'}
                  flex items-center space-x-2`}
              >
                {uploading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <CloudArrowUpIcon className="h-5 w-5" />
                    <span>Upload Resources</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('pdfs')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'pdfs'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <DocumentArrowDownIcon className="h-5 w-5 inline-block mr-2" />
            PDFs
          </button>
          <button
            onClick={() => setActiveTab('links')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'links'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <LinkIcon className="h-5 w-5 inline-block mr-2" />
            External Links
          </button>
          <button
            onClick={() => setActiveTab('glossary')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'glossary'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpenIcon className="h-5 w-5 inline-block mr-2" />
            Glossary
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'faq'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <QuestionMarkCircleIcon className="h-5 w-5 inline-block mr-2" />
            FAQ
          </button>
        </div>

        {/* Resources Display Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading resources...</p>
            </div>
          ) : filteredResources.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No resources found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
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
                      <span className="font-medium">File:</span> {resource.fileName} ({(resource.fileSize / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  </div>
                  <button
                    onClick={() => handleDownload(resource)}
                    className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 