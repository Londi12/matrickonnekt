"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { handleWCEDDownload } from '../utils/wcedDownload';

const translations = {
  en: {    title: 'Past Papers',
    subtitle: 'Access previous exam papers and their solutions',
    filterByYear: 'Filter by Year',
    filterBySubject: 'Filter by Subject',    download: 'Download',
    downloading: 'Downloading',
    downloadError: 'Failed to download. Please try again.',
    paper: 'Paper',
    memo: 'Memo',
    allYears: 'All Years',
    allSubjects: 'All Subjects',
    downloadRateLimit: 'Please wait before downloading another document.'
  },
  zu: {    title: 'Amaphepha Adlule',
    subtitle: 'Thola amaphepha okuhlolwa adlule nezixazululo zawo',
    filterByYear: 'Hlunga ngoNyaka',
    filterBySubject: 'Hlunga ngoMbhalo',    download: 'Landa',
    downloading: 'Kuyalanda',
    downloadError: 'Yehlulekile ukulanda. Sicela uzame futhi.',
    paper: 'Iphepha',
    memo: 'Imemo',
    allYears: 'Yonke Iminyaka',
    allSubjects: 'Zonke Izifundo',
    downloadRateLimit: 'Sicela ulinde ngaphambi kokulayisha olunye uxwebhu.'
  },
  af: {    title: 'Vorige Vraestelle',
    subtitle: 'Kry toegang tot vorige eksamenvraestelle en hul oplossings',
    filterByYear: 'Filter volgens Jaar',
    filterBySubject: 'Filter volgens Vak',    download: 'Aflaai',
    downloading: 'Laai af',
    downloadError: 'Kon nie aflaai nie. Probeer asseblief weer.',
    paper: 'Vraestel',
    memo: 'Memo',
    allYears: 'Alle Jare',
    allSubjects: 'Alle Vakke',
    downloadRateLimit: 'Wag asseblief voor jy nog \'n dokument aflaai.'
  }
};

interface PastPaper {
  year: string;
  subject: string;
  paperUrl: string;
  memoUrl: string;
  availableLanguages: string[];
}

const BASE_WCED_URL = 'https://wcedeportal.co.za/past-papers';

const formatSubjectForUrl = (subject: string): string => {
  return subject.toLowerCase().replace(/\s+/g, '-');
};

const getPaperUrl = (subject: string, year: string, type: 'paper' | 'memo', language: string = 'en'): string => {
  const formattedSubject = formatSubjectForUrl(subject);
  return `${BASE_WCED_URL}/${formattedSubject}/${year}/${type}?lang=${language}`;
};

export default function PastPapersPage() {  
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [isDownloading, setIsDownloading] = useState<{id: string, type: 'paper' | 'memo'} | null>(null);
  const { language } = useLanguage();
  const { user } = useAuth();
  const t = translations[language];
  
  const years = ['2024', '2023', '2022', '2021', '2020'];
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
  const handlePaperDownload = async (subject: string, year: string, type: 'paper' | 'memo') => {
    // Prevent rapid successive downloads
    if (isDownloading) {
      alert(t.downloadRateLimit);
      return;
    }

    const downloadId = `${subject}-${year}-${type}`;
    try {
      setIsDownloading({ id: downloadId, type });
      const result = await handleWCEDDownload(
        parseInt(year), 
        user?.uid ?? 'anonymous',
        subject
      );
      
      if (result.success) {
        window.open(getPaperUrl(subject, year, type, language), '_blank');
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert(t.downloadError);
    } finally {
      // Add slight delay before allowing next download
      setTimeout(() => {
        setIsDownloading(null);
      }, 1000);
    }
  };

  // Filter papers based on selection
  const filteredYears = selectedYear === 'all' ? years : [selectedYear];
  const filteredSubjects = selectedSubject === 'all' ? subjects : [selectedSubject];

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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.filterByYear}
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >              <option value="all">{t.allYears}</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.filterBySubject}
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">{t.allSubjects}</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredYears.flatMap((year) => 
            filteredSubjects.map((subject) => (
              <div key={`${year}-${subject}`} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{subject} {year}</h3>
                <div className="space-y-3">                  <button
                    onClick={() => handlePaperDownload(subject, year, 'paper')}
                    disabled={!!isDownloading}                    className={`flex items-center w-full justify-center py-2 rounded-md transition-colors ${
                      isDownloading?.id === `${subject}-${year}-paper`
                        ? 'bg-blue-50 text-blue-400 cursor-not-allowed'
                        : 'bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    {isDownloading?.id === `${subject}-${year}-paper` ? (
                      <>
                        <svg 
                          className="animate-spin mr-2 h-5 w-5" 
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
                        <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                        {t.paper}
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handlePaperDownload(subject, year, 'memo')}
                    disabled={!!isDownloading}                    className={`flex items-center w-full justify-center py-2 rounded-md transition-colors ${
                      isDownloading?.id === `${subject}-${year}-memo`
                        ? 'bg-green-50 text-green-400 cursor-not-allowed'
                        : 'bg-white text-green-600 hover:bg-green-50 hover:text-green-700'
                    }`}
                  >
                    {isDownloading?.id === `${subject}-${year}-memo` ? (
                      <>
                        <svg 
                          className="animate-spin mr-2 h-5 w-5" 
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
                        <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                        {t.memo}
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
