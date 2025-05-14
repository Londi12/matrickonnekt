"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { DocumentArrowDownIcon, PrinterIcon } from '@heroicons/react/24/outline';
import { StudyMaterial } from '../data/studyMaterials';
import { handleWCEDDownload } from '../utils/wcedDownload';

const translations = {
  en: {
    title: 'Study Guides & Worksheets',
    subtitle: 'Access comprehensive study materials and practice worksheets',
    filterBySubject: 'Filter by Subject',
    filterByType: 'Filter by Type',
    filterBySource: 'Filter by Source',
    download: 'Download',
    downloadError: 'Failed to download. Please try again.',
    downloading: 'Downloading',
    print: 'Print',
    studyGuide: 'Study Guide',
    worksheet: 'Worksheet',
    allSources: 'All Sources',
    wcedPortal: 'WCED ePortal',
    eduGovZa: 'Education.gov.za',
    officialResourcesTitle: 'Official Grade 12 Resources',
    officialResourcesSubtitle: 'Access study materials from Department of Basic Education and WCED',
    noResourcesFound: 'No resources found matching your filters. Please try different filter options.'
  },
  zu: {
    title: 'Izikhokelo Zokufunda nama-Worksheets',
    subtitle: 'Thola izincwadi zokufunda nama-worksheet okuzilolonga',
    filterBySubject: 'Hlunga ngoMbhalo',
    filterByType: 'Hlunga ngoHlobo',
    filterBySource: 'Hlunga ngoMthombo',
    download: 'Landa',
    downloadError: 'Yehlulekile ukulanda. Sicela uzame futhi.',
    downloading: 'Kuyalanda',
    print: 'Printa',
    studyGuide: 'Incwadi Yokufunda',
    worksheet: 'I-worksheet',
    allSources: 'Yonke Imithombo',
    wcedPortal: 'WCED ePortal',
    eduGovZa: 'Education.gov.za',
    officialResourcesTitle: 'Izinsiza Ezisemthethweni ze-Grade 12',
    officialResourcesSubtitle: 'Thola izinto zokufunda ezisuka ku-Department of Basic Education ne-WCED',
    noResourcesFound: 'Azikho izinsiza ezitholakalayo ngezihluzo zakho. Sicela uzame izinketho ezahlukene zesihlungi.'
  },
  af: {
    title: 'Studiegidse & Werkkaarte',
    subtitle: 'Kry toegang tot omvattende studiemateriaal en oefenwerkkaarte',
    filterBySubject: 'Filter volgens Vak',
    filterByType: 'Filter volgens Tipe',
    filterBySource: 'Filter volgens Bron',
    download: 'Aflaai',
    downloadError: 'Kon nie aflaai nie. Probeer asseblief weer.',
    downloading: 'Laai af',
    print: 'Druk',
    studyGuide: 'Studiegids',
    worksheet: 'Werkkaart',
    allSources: 'Alle Bronne',
    wcedPortal: 'WCED ePortal',
    eduGovZa: 'Education.gov.za',
    officialResourcesTitle: 'Amptelike Graad 12 Hulpbronne',
    officialResourcesSubtitle: 'Kry toegang tot studiemateriaal van die Departement van Basiese Onderwys en WCED',
    noResourcesFound: 'Geen hulpbronne gevind wat by jou filters pas nie. Probeer asseblief ander filteropsies.'
  }
};

export default function StudyGuidesPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [isDownloading, setIsDownloading] = useState<number | null>(null);
  const { language } = useLanguage();
  const { user } = useAuth();
  const t = translations[language];
    // Import study materials first
  const studyMaterialsModule = require('../data/studyMaterials');
  const studyMaterials: StudyMaterial[] = studyMaterialsModule.studyMaterials;
  
  // Then use them
  const subjects = Array.from(new Set(studyMaterials.map(material => material.subject))).sort();
  const types = ['study-guide', 'worksheet'];
  const sources = ['all', 'wced', 'education.gov.za'];
  const materials = studyMaterials;

  // Filter by subject, type, and source
  const filteredMaterials = materials.filter((material: StudyMaterial) => {
    const matchesSubject = selectedSubject === 'all' || material.subject === selectedSubject;
    const matchesType = selectedType === 'all' || material.type === selectedType;
    const matchesSource = selectedSource === 'all' || 
      (selectedSource === 'wced' && material.fileUrl.includes('wcedeportal.co.za')) ||
      (selectedSource === 'education.gov.za' && material.fileUrl.includes('education.gov.za'));
    
    return matchesSubject && matchesType && matchesSource;
  });

  const handleDownload = async (material: StudyMaterial) => {
    try {
      setIsDownloading(material.id);
      const result = await handleWCEDDownload(
        material.id, 
        user?.uid ?? 'anonymous', 
        material.subject, 
        undefined, 
        material.type === 'study-guide' ? 'paper' : 'memo',
        language
      );
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
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-blue-900">{t.officialResourcesTitle}</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>{t.officialResourcesSubtitle}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href="https://wcedeportal.co.za" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-3 py-1 border border-blue-300 text-sm font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100">
                    WCED ePortal
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a href="https://www.education.gov.za/Curriculum/NationalSeniorCertificate/NSCPastExaminationpapers.aspx" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-3 py-1 border border-blue-300 text-sm font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100">
                    DBE Past Papers
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements.aspx" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-3 py-1 border border-blue-300 text-sm font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100">
                    Mind the Gap Study Guides
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div><div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Grade 12 Study Resources</h2>
          <p className="text-gray-600 mb-6">
            Access comprehensive study guides and worksheets for Grade 12 subjects. These materials 
            are sourced from official educational portals including the Western Cape Education Department (WCED) 
            and the Department of Basic Education.
          </p>
          
          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="font-medium text-gray-900 mb-4">Filter Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Source</label>
                <select
                  value={selectedSource}
                  onChange={(e) => setSelectedSource(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="all">All Sources</option>
                  <option value="wced">WCED ePortal</option>
                  <option value="education.gov.za">Education.gov.za</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.length > 0 ? (
            filteredMaterials.map((material: StudyMaterial) => (
              <div key={material.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{material.title[language]}</h3>
                  <span className={`text-xs ${
                    material.type === 'study-guide' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  } px-2 py-0.5 rounded-full`}>
                    {material.type === 'study-guide' ? t.studyGuide : t.worksheet}
                  </span>
                </div>
                <p className="text-gray-600 mt-1 text-sm">{material.description[language]}</p>
                
                <div className="mt-3 flex items-center text-xs text-gray-500">
                  <span className="bg-gray-100 rounded-full px-2 py-1">{material.subject}</span>
                  <span className="mx-2">•</span>
                  <span>{material.fileUrl.includes('wcedeportal') ? 'WCED ePortal' : 'Education.gov.za'}</span>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
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
            ))
          ) : (
            <div className="col-span-3 py-10 text-center">
              <p className="text-gray-500">No resources found matching your filters. Please try different filter options.</p>
            </div>          )}
        </div>
        
        {/* Subject-specific resources sections */}
        <div className="mt-12 space-y-10">
          {/* Mathematics */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mathematics</h3>
            <p className="text-gray-600 mb-4">
              Grade 12 Mathematics resources including calculus, trigonometry, analytical geometry, and algebraic functions.
              These materials are aligned with the CAPS curriculum for Grade 12.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded p-3 bg-gray-50">
                <h4 className="font-medium text-gray-800">Key Topics</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Calculus (Differential & Integral)</li>
                  <li>• Trigonometric Functions & Equations</li>
                  <li>• Analytical Geometry</li>
                  <li>• Algebraic Functions</li>
                  <li>• Statistics & Probability</li>
                </ul>
              </div>
              <div className="border rounded p-3 bg-gray-50">
                <h4 className="font-medium text-gray-800">Available Resources</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Comprehensive Study Guides</li>
                  <li>• Practice Worksheets with Solutions</li>
                  <li>• Past Exam Papers (DBE)</li>
                  <li>• Mind the Gap Study Guides</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Physical Sciences */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Physical Sciences</h3>
            <p className="text-gray-600 mb-4">
              Grade 12 Physical Sciences resources covering physics (mechanics, electrodynamics) and chemistry (organic chemistry, chemical reactions).
              These materials follow the latest CAPS curriculum requirements.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded p-3 bg-gray-50">
                <h4 className="font-medium text-gray-800">Key Topics</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Mechanics and Motion</li>
                  <li>• Electrodynamics & Electric Circuits</li>
                  <li>• Organic Chemistry</li>
                  <li>• Chemical Equilibrium</li>
                  <li>• Acids and Bases</li>
                </ul>
              </div>
              <div className="border rounded p-3 bg-gray-50">
                <h4 className="font-medium text-gray-800">Available Resources</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• WCED Comprehensive Study Guides</li>
                  <li>• Practice Problems with Solutions</li>
                  <li>• DBE Past Papers</li>
                  <li>• Video Tutorials (via WCED ePortal)</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Life Sciences */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Life Sciences</h3>
            <p className="text-gray-600 mb-4">
              Grade 12 Life Sciences resources covering human physiology, evolution, genetics, and ecology.
              These comprehensive materials help prepare for the final examination.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded p-3 bg-gray-50">
                <h4 className="font-medium text-gray-800">Key Topics</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• DNA, RNA & Protein Synthesis</li>
                  <li>• Human Evolution & Genetics</li>
                  <li>• Human Physiology Systems</li>
                  <li>• Plant Biology & Responses</li>
                  <li>• Ecology & Environmental Studies</li>
                </ul>
              </div>
              <div className="border rounded p-3 bg-gray-50">
                <h4 className="font-medium text-gray-800">Available Resources</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Illustrated Study Guides with Diagrams</li>
                  <li>• Practice Worksheets</li>
                  <li>• Mind the Gap Study Guides</li>
                  <li>• Past Examination Papers with Memos</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Accounting */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Accounting</h3>
            <p className="text-gray-600 mb-4">
              Grade 12 Accounting resources for financial statements, cash flow, companies, cost accounting and more.
              These materials provide practical examples and solutions aligned with the CAPS curriculum.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded p-3 bg-gray-50">
                <h4 className="font-medium text-gray-800">Key Topics</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Companies' Financial Statements</li>
                  <li>• Cash Flow Statements</li>
                  <li>• Manufacturing Accounts</li>
                  <li>• Cost Accounting</li>
                  <li>• Budgeting & Financial Analysis</li>
                </ul>
              </div>
              <div className="border rounded p-3 bg-gray-50">
                <h4 className="font-medium text-gray-800">Available Resources</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Step-by-Step Study Guides</li>
                  <li>• Practice Worksheets with Solutions</li>
                  <li>• Financial Statement Templates</li>
                  <li>• Past Exam Papers (DBE)</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* English */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">English</h3>
            <p className="text-gray-600 mb-4">
              Grade 12 English Home Language resources covering literature studies, language and comprehension, poetry analysis,
              and creative writing. These materials help develop critical analysis and writing skills.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded p-3 bg-gray-50">
                <h4 className="font-medium text-gray-800">Key Topics</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Literature Study (Prescribed Works)</li>
                  <li>• Poetry Analysis</li>
                  <li>• Language & Comprehension</li>
                  <li>• Essay Writing</li>
                  <li>• Creative & Transactional Texts</li>
                </ul>
              </div>
              <div className="border rounded p-3 bg-gray-50">
                <h4 className="font-medium text-gray-800">Available Resources</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Literature Analysis Guides</li>
                  <li>• Poetry Study Guides</li>
                  <li>• Language Practice Exercises</li>
                  <li>• Essay Writing Guidelines</li>
                  <li>• Past Papers with Model Answers</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
