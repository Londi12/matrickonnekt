"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { DocumentArrowDownIcon, PrinterIcon } from '@heroicons/react/24/outline';
import { StudyMaterial, studyMaterials } from '../data/studyMaterials';
import { handleWCEDDownload } from '../utils/wcedDownload';

const translations = {
  en: {
    title: 'Study Guides & Worksheets',
    subtitle: 'Access comprehensive study materials and practice worksheets',
    filterBySubject: 'Filter by Subject',
    filterByType: 'Filter by Type',
    download: 'Download',
    downloadError: 'Failed to download. Please try again.',
    downloading: 'Downloading',
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
    downloadError: 'Yehlulekile ukulanda. Sicela uzame futhi.',
    downloading: 'Kuyalanda',
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
    downloadError: 'Kon nie aflaai nie. Probeer asseblief weer.',
    downloading: 'Laai af',
    print: 'Druk',
    studyGuide: 'Studiegids',
    worksheet: 'Werkkaart'
  }
};

export default function StudyGuidesPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [isDownloading, setIsDownloading] = useState<number | null>(null);
  const { language } = useLanguage();
  const { user } = useAuth();
  const t = translations[language];  // Get unique subjects from study materials
  const subjects = Array.from(new Set(studyMaterials.map(material => material.subject))).sort();
  const types = ['study-guide', 'worksheet'];
  const { studyMaterials } = require('../data/studyMaterials');
  const materials = studyMaterials;

  const filteredMaterials = materials.filter((material: StudyMaterial) => 
    (selectedSubject === 'all' || material.subject === selectedSubject) &&
    (selectedType === 'all' || material.type === selectedType)
  );

  const handleDownload = async (material: StudyMaterial) => {
    try {
      setIsDownloading(material.id);
      const result = await handleWCEDDownload(material.id, user?.uid ?? 'anonymous', material.subject);
      if (result.success) {
        window.open(material.fileUrl, '_blank');
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert(translations[language].downloadError ?? 'Failed to download. Please try again.');
    } finally {
      setIsDownloading(null);
    }
  };

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
          {filteredMaterials.map((material: StudyMaterial) => (
            <div key={material.id} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900">{material.title[language]}</h3>
              <p className="text-gray-600 mt-1 text-sm">{material.description[language]}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className={`text-sm ${
                  material.type === 'study-guide' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                } px-2 py-0.5 rounded-full`}>
                  {material.type === 'study-guide' ? t.studyGuide : t.worksheet}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDownload(material)}
                    disabled={isDownloading === material.id}
                    className={`inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded
                      ${isDownloading === material.id 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'text-white bg-blue-600 hover:bg-blue-700'
                      }`}
                  >
                    {isDownloading === material.id ? (
                      <>
                        <svg 
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24"
                        >
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                          />
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        {t.downloading}...
                      </>
                    ) : material.officialSource ? (
                      <>
                        <span className="mr-1">WCED</span>
                        <DocumentArrowDownIcon className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        {t.download}
                        <DocumentArrowDownIcon className="h-4 w-4 ml-1" />
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                  >
                    {t.print}
                    <PrinterIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
