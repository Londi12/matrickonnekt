"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
import { DocumentArrowDownIcon, PrinterIcon } from '@heroicons/react/24/outline';

const translations = {
  en: {
    title: 'Study Guides & Worksheets',
    subtitle: 'Access comprehensive study materials and practice worksheets',
    filterBySubject: 'Filter by Subject',
    filterByType: 'Filter by Type',
    download: 'Download',
    print: 'Print',
    studyGuide: 'Study Guide',
    worksheet: 'Worksheet'
  },
  zu: {
    title: 'Izikhokelo Zokufunda nama-Worksheets',
    subtitle: 'Thola izincwadi zokufunda nama-worksheet okuzilolonga',
    filterBySubject: 'Hlunga ngoMbhalo',
    filterByType: 'Hlunga ngoHlobo',
    download: 'Landa',
    print: 'Printa',
    studyGuide: 'Incwadi Yokufunda',
    worksheet: 'I-worksheet'
  },
  af: {
    title: 'Studiegidse & Werkkaarte',
    subtitle: 'Kry toegang tot omvattende studiemateriaal en oefenwerkkaarte',
    filterBySubject: 'Filter volgens Vak',
    filterByType: 'Filter volgens Tipe',
    download: 'Aflaai',
    print: 'Druk',
    studyGuide: 'Studiegids',
    worksheet: 'Werkkaart'
  }
};

export default function StudyGuidesPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const { language } = useLanguage();
  const t = translations[language];
  const subjects = [
    'Accounting',
    'Agricultural Sciences',
    'Business Studies',
    'Consumer Studies',
    'Dramatic Arts',
    'Economics',
    'English First Additional Language',
    'English Home Language',
    'Geography',
    'History',
    'IsiZulu First Additional Language',
    'IsiZulu Home Language',
    'Life Sciences',
    'Mathematical Literacy',
    'Mathematics',
    'Physical Sciences',
    'Religion Studies',
    'Tourism',
    'Visual Arts'
  ];
  const types = ['study-guide', 'worksheet'];
  const materials = [
    // Mathematics
    {
      id: 1,
      subject: 'Mathematics',
      type: 'study-guide',
      title: 'Calculus Comprehensive Guide',
      description: 'A complete guide to differential and integral calculus',
      fileUrl: '/guides/math/calculus-guide.pdf'
    },
    {
      id: 2,
      subject: 'Mathematics',
      type: 'worksheet',
      title: 'Trigonometry Practice',
      description: 'Practice problems covering all trigonometry concepts',
      fileUrl: '/guides/math/trig-worksheet.pdf'
    },
    // Physical Sciences
    {
      id: 3,
      subject: 'Physical Sciences',
      type: 'study-guide',
      title: 'Physics Mechanics Guide',
      description: 'Comprehensive guide to mechanics and motion',
      fileUrl: '/guides/physics/mechanics-guide.pdf'
    },
    // Life Sciences
    {
      id: 4,
      subject: 'Life Sciences',
      type: 'study-guide',
      title: 'Evolution and Genetics',
      description: 'Complete study guide for evolution and genetics',
      fileUrl: '/guides/lifesciences/evolution-genetics.pdf'
    },
    // Accounting
    {
      id: 5,
      subject: 'Accounting',
      type: 'study-guide',
      title: 'Financial Statements Guide',
      description: 'Comprehensive guide to preparing financial statements',
      fileUrl: '/guides/accounting/financial-statements.pdf'
    },
    // Business Studies
    {
      id: 6,
      subject: 'Business Studies',
      type: 'worksheet',
      title: 'Business Strategies Worksheet',
      description: 'Practice exercises on business strategies and management',
      fileUrl: '/guides/business/strategies-worksheet.pdf'
    },
    // Geography
    {
      id: 7,
      subject: 'Geography',
      type: 'study-guide',
      title: 'Geomorphology Guide',
      description: 'Complete guide to geographical formations and processes',
      fileUrl: '/guides/geography/geomorphology.pdf'
    },
    // History
    {
      id: 8,
      subject: 'History',
      type: 'study-guide',
      title: 'Cold War Era Study Guide',
      description: 'Comprehensive coverage of the Cold War period',
      fileUrl: '/guides/history/cold-war.pdf'
    },
    // English Home Language
    {
      id: 9,
      subject: 'English Home Language',
      type: 'worksheet',
      title: 'Literature Analysis Exercises',
      description: 'Practice exercises for literary analysis and comprehension',
      fileUrl: '/guides/english/literature-analysis.pdf'
    },
    // IsiZulu Home Language
    {
      id: 10,
      subject: 'IsiZulu Home Language',
      type: 'study-guide',
      title: 'IsiZulu Literature Guide',
      description: 'Comprehensive guide to IsiZulu literature and poetry',
      fileUrl: '/guides/isizulu/literature-guide.pdf'
    }
    // Add more materials as needed
  ];

  const filteredMaterials = materials.filter(material => 
    (selectedSubject === 'all' || material.subject === selectedSubject) &&
    (selectedType === 'all' || material.type === selectedType)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
          <p className="mt-2 text-gray-600">{t.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.filterBySubject}</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">All Subjects</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.filterByType}</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="study-guide">{t.studyGuide}</option>
              <option value="worksheet">{t.worksheet}</option>
            </select>
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <div key={material.id} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{material.title}</h3>
              <p className="text-gray-600 mb-4">{material.description}</p>
              <div className="space-x-4 flex items-center">
                <a
                  href={material.fileUrl}
                  download
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                  {t.download}
                </a>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  <PrinterIcon className="h-5 w-5 mr-2" />
                  {t.print}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
