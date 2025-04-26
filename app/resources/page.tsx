"use client";

import React, { useState } from 'react';
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
  VideoCameraIcon
} from '@heroicons/react/24/outline';

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
      category: 'Practice',
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
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('pdfs');
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleDownload = async (resource: typeof resources.pdfs[0]) => {
    if (user) {
      await recordQuizCompletion(user.uid, resource.subject, 0);
    }
  };

  const filteredGlossary = resources.glossary.filter(item =>
    (item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!selectedSubject || item.subject === selectedSubject)
  );

  const filteredFAQ = resources.faq.filter(item =>
    (item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!selectedSubject || item.subject === selectedSubject)
  );

  const filteredPDFs = resources.pdfs.filter(item =>
    (!selectedSubject || item.subject === selectedSubject)
  );

  const filteredLinks = resources.externalLinks.filter(item =>
    (!selectedSubject || item.subject === selectedSubject || item.subject === 'All Subjects')
  );

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
            </select>
          </div>
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

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* PDFs Section */}
          {activeTab === 'pdfs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPDFs.map((pdf) => (
                <AuthCheck key={pdf.id} required={true}>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{pdf.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{pdf.description}</p>
                        <div className="flex items-center mt-2 space-x-2">
                          <span className="text-sm text-gray-400">{pdf.size}</span>
                          <span className="text-sm text-blue-600">{pdf.subject}</span>
                        </div>
                      </div>
                      <DocumentArrowDownIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <button 
                      onClick={() => handleDownload(pdf)}
                      className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Download
                    </button>
                  </div>
                </AuthCheck>
              ))}
            </div>
          )}

          {/* External Links Section */}
          {activeTab === 'links' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow block"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{link.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className="text-sm text-blue-600">{link.subject}</span>
                        <span className="text-sm text-gray-400">{link.category}</span>
                      </div>
                    </div>
                    <LinkIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Glossary Section */}
          {activeTab === 'glossary' && (
            <div className="space-y-6">
              {filteredGlossary.map((item, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.term}</h3>
                  <p className="text-gray-600 mt-1">{item.definition}</p>
                  <p className="text-sm text-gray-500 mt-2">Example: {item.example}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {item.subject}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FAQ Section */}
          {activeTab === 'faq' && (
            <div className="space-y-6">
              {filteredFAQ.map((item, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  <p className="text-gray-600 mt-1">{item.answer}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {item.subject}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 