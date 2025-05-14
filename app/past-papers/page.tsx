"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { handleWCEDDownload } from '../utils/wcedDownload';
import { generateAlternativeUrls, trackUrlSuccess } from '../utils/paperUrlTester';

const translations = {
  en: {
    title: 'Grade 12 NSC Past Papers',
    subtitle: 'Access previous National Senior Certificate examination papers and their memos',
    filterByYear: 'Filter by Year',
    filterBySubject: 'Filter by Subject',
    filterByLanguage: 'Language',
    download: 'Download',
    downloading: 'Downloading',
    downloadError: 'Failed to download. Please try again.',
    paper: 'Paper',
    paper1: 'Paper 1',
    paper2: 'Paper 2',
    paper3: 'Paper 3',
    memo: 'Memo',
    allYears: 'All Years',
    allSubjects: 'All Subjects',
    downloadRateLimit: 'Please wait before downloading another document.',
    englishOption: 'English',
    afrikaansOption: 'Afrikaans',
    subjectInfo: 'Click to view available papers',    directDownload: 'Downloading your selected paper...',
    directLinkFailure: "We couldn't find the specific paper. Would you like to visit the WCED ePortal to search for it manually?",
    downloadStarted: "Download started.",
    cantFindPaper: "If you can't find your paper, try visiting the WCED ePortal:",
    visitPortal: "Visit WCED ePortal",
    popupBlocked: "Popup blocked. Please allow popups for this site to download papers.",
    officialSource: 'Source: Department of Basic Education',
    languageUnavailable: 'This subject\'s papers are not available in the selected language.',
    selectDifferentLanguage: 'Please select a different language or subject.'
  },
  zu: {
    title: 'Amaphepha Adlule e-NSC ebanga 12',
    subtitle: 'Thola amaphepha okuhlolwa adlule kanye nezimpendulo zawo',
    filterByYear: 'Hlunga ngoNyaka',
    filterBySubject: 'Hlunga ngoMbhalo',
    filterByLanguage: 'Ulimi',
    download: 'Landa',
    downloading: 'Kuyalanda',
    downloadError: 'Yehlulekile ukulanda. Sicela uzame futhi.',
    paper: 'Iphepha',
    paper1: 'Iphepha 1',
    paper2: 'Iphepha 2',
    paper3: 'Iphepha 3',
    memo: 'Imemo',
    allYears: 'Yonke Iminyaka',
    allSubjects: 'Zonke Izifundo',
    downloadRateLimit: 'Sicela ulinde ngaphambi kokulayisha olunye uxwebhu.',
    englishOption: 'IsiNgisi',
    afrikaansOption: 'IsiBhunu',    subjectInfo: 'Chofoza ukuze ubone amaphepha atholakalayo',    directDownload: 'Ukulayisha iphepha elikhethiwe...',
    directLinkFailure: "Asikwazanga ukuthola iphepha eliqondile. Ungathanda ukuvakashela i-WCED ePortal ukuze uliseshe ngokwakho?",
    downloadStarted: "Ukulanda kuqalile.",
    cantFindPaper: "Uma ungalitholi iphepha lakho, zama ukuvakashela i-WCED ePortal:",
    visitPortal: "Vakashela i-WCED ePortal",
    popupBlocked: "I-popup ivinjelwe. Sicela uvumele ama-popup kuleli sayithi ukuze ulande amaphepha.",
    officialSource: 'Umthombo: Department of Basic Education',
    languageUnavailable: 'Amaphepha alesi sifundo awatholakali ngolimi olukhethiwe.',
    selectDifferentLanguage: 'Sicela ukhethe olunye ulimi noma esinye isifundo.'
  },
  af: {
    title: 'Graad 12 NSC Vorige Vraestelle',
    subtitle: 'Kry toegang tot vorige Nasionale Senior Sertifikaat-eksamenvraestelle en hul memo\'s',
    filterByYear: 'Filter volgens Jaar',
    filterBySubject: 'Filter volgens Vak',
    filterByLanguage: 'Taal',
    download: 'Aflaai',
    downloading: 'Laai af',
    downloadError: 'Kon nie aflaai nie. Probeer asseblief weer.',
    paper: 'Vraestel',
    paper1: 'Vraestel 1',
    paper2: 'Vraestel 2',
    paper3: 'Vraestel 3',
    memo: 'Memo',
    allYears: 'Alle Jare',
    allSubjects: 'Alle Vakke',
    downloadRateLimit: 'Wag asseblief voor jy nog \'n dokument aflaai.',
    englishOption: 'Engels',
    afrikaansOption: 'Afrikaans',    subjectInfo: 'Klik om beskikbare vraestelle te sien',    directDownload: 'Besig om jou gekose vraestel af te laai...',
    directLinkFailure: "Ons kon nie die spesifieke vraestel vind nie. Wil jy die WCED ePortal besoek om dit handmatig te soek?",
    downloadStarted: "Aflaai het begin.",
    cantFindPaper: "As jy nie jou vraestel kan vind nie, probeer die WCED ePortal besoek:",
    visitPortal: "Besoek WCED ePortal",
    popupBlocked: "Opspringvenster geblokkeer. Laat opspringvensters toe vir hierdie webwerf om vraestelle af te laai.",
    officialSource: 'Bron: Departement van Basiese Onderwys',
    languageUnavailable: 'Hierdie vak se vraestelle is nie beskikbaar in die geselekteerde taal nie.',
    selectDifferentLanguage: 'Kies asseblief \'n ander taal of vak.'
  }
};

interface PastPaper {
  year: string;
  subject: string;
  paperType: string; // Paper 1, Paper 2, etc.
  paperUrl: string;
  memoUrl: string;
  availableLanguages: string[];
}

// Base URL for the WCED ePortal past papers
const BASE_WCED_URL = 'https://wcedeportal.co.za/past-papers';

// Format subject name for URL structure
const formatSubjectForUrl = (subject: string): string => {
  // Special formatting for subjects with specific URL structures
  const specialFormats: {[key: string]: string} = {
    'English First Additional Language': 'english-fal',
    'English Home Language': 'english-hl',
    'English Second Additional Language': 'english-sal',
    'Afrikaans First Additional Language': 'afrikaans-eat',
    'Afrikaans Home Language': 'afrikaans-ht',
    'Afrikaans Second Additional Language': 'afrikaans-tat',
    'IsiXhosa First Additional Language': 'isixhosa-fal',
    'IsiXhosa Home Language': 'isixhosa-hl',
    'IsiXhosa Second Additional Language': 'isixhosa-sal',
    'IsiZulu First Additional Language': 'isizulu-fal',
    'IsiZulu Home Language': 'isizulu-hl',
    'Computer Applications Technology': 'computer-application-technology',
    'Mathematical Literacy': 'mathematical-literacy',
  };
  
  if (specialFormats[subject]) {
    return specialFormats[subject];
  }
  
  // Default formatting for other subjects
  return subject.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '-');
};

// Get paper URL based on parameters - improved to match exact WCED ePortal structure
const getPaperUrl = (subject: string, year: string, type: 'paper' | 'memo', language: string = 'en', paperNumber?: string): string => {
  const formattedSubject = formatSubjectForUrl(subject);
  
  // Extract paper number (if present)
  const paperNum = paperNumber ? paperNumber.replace(/[^0-9]/g, '') : '';
  
  // Determine language code for URL
  const langCode = language === 'af' ? 'vraestel' : 'paper';
  // Memos might have language-specific prefixes in some cases
  const memoLangCode = language === 'af' ? 'memo-afr' : 'memo';
  
  // Format the direct WCED ePortal URL pattern
  // Based on actual WCED ePortal URL structure
  const baseUrl = 'https://wcedeportal.co.za/eresources';
  
  // Determine resource folder based on year (older papers may be in a different location)
  const resourceFolder = parseInt(year) >= 2020 ? 'nsc-past-papers' : 'past-papers';
  
  // Format the file name based on paper type and number
  const fileName = type === 'paper' 
    ? `${langCode}${paperNum ? '-' + paperNum : ''}`
    : `${memoLangCode}${paperNum ? '-' + paperNum : ''}`;
    
  // Generate the direct URL to the paper PDF
  const directUrl = `${baseUrl}/${resourceFolder}/${formattedSubject}/${year}/${fileName}.pdf`;
  
  return directUrl;
};

export default function PastPapersPage() {    const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isDownloading, setIsDownloading] = useState<{id: string, type: 'paper' | 'memo'} | null>(null);
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const { language } = useLanguage();
  const { user } = useAuth();
  const t = translations[language];
  
  const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016'];
  
  // These subjects match the WCED ePortal's available subjects
  const subjects = [
    'Accounting',
    'Afrikaans First Additional Language',
    'Afrikaans Home Language',
    'Afrikaans Second Additional Language',
    'Agricultural Management Practices',
    'Agricultural Sciences',
    'Agricultural Technology',
    'Business Studies',
    'Civil Technology: Civil Services',
    'Civil Technology: Construction',
    'Civil Technology: Woodworking',
    'Computer Applications Technology',
    'Consumer Studies',
    'Dance Studies',
    'Design',
    'Dramatic Arts',
    'Economics',
    'Electrical Technology: Digital',
    'Electrical Technology: Electronics',
    'Electrical Technology: Power Systems',
    'Engineering Graphics and Design',
    'English First Additional Language',
    'English Home Language',
    'English Second Additional Language',
    'Geography',
    'History',
    'Hospitality Studies',
    'Information Technology',
    'IsiXhosa First Additional Language',
    'IsiXhosa Home Language',
    'IsiXhosa Second Additional Language',
    'IsiZulu First Additional Language',
    'IsiZulu Home Language',
    'Life Sciences',
    'Mathematical Literacy',
    'Mathematics',
    'Mechanical Technology: Automotive',
    'Mechanical Technology: Fitting and Machining',
    'Mechanical Technology: Welding and Metalwork',
    'Music',
    'Physical Sciences',
    'Religion Studies',
    'Technical Mathematics',
    'Technical Sciences',
    'Tourism',
    'Visual Arts'
  ];  // Get the available paper types based on subject
  const getSubjectPaperTypes = (subject: string): string[] => {
    // Subjects with multiple papers
    const multiPaperSubjects: {[key: string]: string[]} = {
      'Mathematics': ['Paper 1', 'Paper 2'],
      'Physical Sciences': ['Paper 1', 'Paper 2'],
      'Life Sciences': ['Paper 1', 'Paper 2'],
      'Accounting': ['Paper 1', 'Paper 2'],
      'Business Studies': ['Paper 1', 'Paper 2'],
      'Economics': ['Paper 1', 'Paper 2'],
      'Geography': ['Paper 1', 'Paper 2'],
      'History': ['Paper 1', 'Paper 2'],
      'English First Additional Language': ['Paper 1', 'Paper 2', 'Paper 3'],
      'English Home Language': ['Paper 1', 'Paper 2', 'Paper 3'],
      'Afrikaans First Additional Language': ['Paper 1', 'Paper 2', 'Paper 3'],
      'Afrikaans Home Language': ['Paper 1', 'Paper 2', 'Paper 3'],
      'IsiXhosa First Additional Language': ['Paper 1', 'Paper 2', 'Paper 3'],
      'IsiXhosa Home Language': ['Paper 1', 'Paper 2', 'Paper 3'],
      'IsiZulu First Additional Language': ['Paper 1', 'Paper 2', 'Paper 3'],
      'IsiZulu Home Language': ['Paper 1', 'Paper 2', 'Paper 3'],
      'Information Technology': ['Paper 1', 'Paper 2'],
      'Computer Applications Technology': ['Paper 1', 'Paper 2'],
      'Engineering Graphics and Design': ['Paper 1', 'Paper 2'],
      'Agricultural Sciences': ['Paper 1', 'Paper 2'],
      'Technical Mathematics': ['Paper 1', 'Paper 2'],
      'Technical Sciences': ['Paper 1', 'Paper 2'],
    };
    
    return multiPaperSubjects[subject] || ['Paper'];
  };
  
  // Check if papers are available in specified language for a subject
  const isLanguageAvailable = (subject: string, language: string): boolean => {
    // Subjects only available in English
    const englishOnlySubjects = [
      'English First Additional Language',
      'English Home Language',
      'English Second Additional Language'
    ];
    
    // Subjects only available in Afrikaans
    const afrikaansOnlySubjects = [
      'Afrikaans First Additional Language',
      'Afrikaans Home Language',
      'Afrikaans Second Additional Language'
    ];
    
    // Subjects only available in indigenous languages
    const indigenousLanguageSubjects = [
      'IsiXhosa First Additional Language',
      'IsiXhosa Home Language',
      'IsiXhosa Second Additional Language',
      'IsiZulu First Additional Language',
      'IsiZulu Home Language'
    ];
    
    // Check if subject is language-specific
    if (englishOnlySubjects.includes(subject) && language !== 'en') {
      return false;
    }
    
    if (afrikaansOnlySubjects.includes(subject) && language !== 'af') {
      return false;
    }
    
    if (indigenousLanguageSubjects.includes(subject) && language !== 'zu' && language !== 'en') {
      return false;
    }
    
    // Most subjects are available in both English and Afrikaans
    return true;
  };
  const handlePaperDownload = async (subject: string, year: string, type: 'paper' | 'memo', paperNumber: string = 'Paper 1') => {
    // Prevent rapid successive downloads
    if (isDownloading) {
      alert(t.downloadRateLimit);
      return;
    }

    const downloadId = `${subject}-${year}-${paperNumber}-${type}`;
    try {
      setIsDownloading({ id: downloadId, type });
      
      // Get the direct link to the paper
      const directPaperUrl = getPaperUrl(subject, year, type, selectedLanguage, paperNumber);
      
      const result = await handleWCEDDownload(
        parseInt(year), 
        user?.uid ?? 'anonymous',
        subject,
        paperNumber,
        type,
        selectedLanguage
      );
      
      if (result.success) {
        try {
          // Use our utility to generate alternative URLs for fallback
          const allUrls = generateAlternativeUrls(
            subject,
            year,
            type,
            selectedLanguage,
            paperNumber
          );
          
          // Main URL is the first one in the list
          const primaryUrl = directPaperUrl;
          
          // Track this URL attempt
          trackUrlSuccess(primaryUrl, true, user?.uid ?? 'anonymous', subject, year);
          
          // First try the primary URL (direct link)
          const newWindow = window.open(primaryUrl, '_blank');
          
          // If unable to open the window (e.g., blocked by popup blocker)
          if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            alert(t.popupBlocked || "Popup blocked. Please allow popups for this site to download papers.");
            return;
          }
          
          // Provide a smart fallback UI with options to try alternative links or visit the main portal
          const fallbackElement = document.createElement('div');
          fallbackElement.innerHTML = `
            <div id="fallback-message" style="position:fixed; bottom:20px; right:20px; background:white; 
                 border:1px solid #ddd; border-radius:8px; padding:15px; box-shadow:0 2px 10px rgba(0,0,0,0.1); z-index:1000; max-width:350px;">
              <p style="margin:0 0 10px 0; font-weight:bold;">${t.downloadStarted || "Download started."}</p>
              <p style="margin:0 0 10px 0; font-size:14px;">${t.cantFindPaper || "If you can't find your paper, try these options:"}</p>
              
              <div id="fallback-options" style="display:flex; flex-direction:column; gap:8px; margin-bottom:10px;">
                <button id="try-alt1" class="alt-button" style="background:#4F46E5; color:white; border:none; padding:6px 10px; 
                        border-radius:4px; cursor:pointer; font-size:13px; text-align:left;">
                  Try Alternative Format 1
                </button>
                <button id="try-alt2" class="alt-button" style="background:#4F46E5; color:white; border:none; padding:6px 10px; 
                        border-radius:4px; cursor:pointer; font-size:13px; text-align:left;">
                  Try Alternative Format 2
                </button>
                <button id="visit-portal" class="alt-button" style="background:#4F46E5; color:white; border:none; padding:6px 10px; 
                        border-radius:4px; cursor:pointer; font-size:13px; text-align:left;">
                  ${t.visitPortal || "Visit WCED ePortal"}
                </button>
              </div>
              
              <p style="margin:0; font-size:12px; color:#666;">
                ${subject} (${year}) - ${paperNumber} ${type === 'paper' ? t.paper : t.memo}
              </p>
              
              <button id="close-fallback" style="background:transparent; border:none; position:absolute; 
                      top:10px; right:10px; cursor:pointer; font-size:18px;">×</button>
            </div>
          `;
          document.body.appendChild(fallbackElement);
            // Add event listeners for the fallback options
          document.getElementById('try-alt1')?.addEventListener('click', () => {
            window.open(allUrls[1], '_blank');
            trackUrlSuccess(allUrls[1], false, user?.uid ?? 'anonymous', subject, year);
          });
          
          document.getElementById('try-alt2')?.addEventListener('click', () => {
            window.open(allUrls[2], '_blank');
            trackUrlSuccess(allUrls[2], false, user?.uid ?? 'anonymous', subject, year);
          });
          
          document.getElementById('visit-portal')?.addEventListener('click', () => {
            window.open('https://wcedeportal.co.za/past-papers', '_blank');
            trackUrlSuccess('portal-fallback', false, user?.uid ?? 'anonymous', subject, year);
          });
          
          document.getElementById('close-fallback')?.addEventListener('click', () => {
            document.body.removeChild(fallbackElement);
          });
          
          // Auto-remove fallback message after 30 seconds
          setTimeout(() => {
            if (document.getElementById('fallback-message')) {
              try {
                document.body.removeChild(fallbackElement);
              } catch (e) {
                // Element might have been removed already
              }
            }
          }, 30000);
        } catch (error) {
          // Ultimate fallback to general portal if any error occurs with direct link handling
          window.open('https://wcedeportal.co.za/past-papers', '_blank');
          console.error('Error handling paper download:', error);
        }
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Download error:', error);
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
        </div>        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.filterByYear}
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">{t.allYears}</option>
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.filterByLanguage}
            </label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="en">{t.englishOption}</option>
              <option value="af">{t.afrikaansOption}</option>
            </select>
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredYears.flatMap((year) => 
            filteredSubjects.map((subject) => {
              const isExpanded = expandedSubject === `${year}-${subject}`;
              const paperTypes = getSubjectPaperTypes(subject);
              
              return (
                <div 
                  key={`${year}-${subject}`} 
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <div 
                    onClick={() => setExpandedSubject(isExpanded ? null : `${year}-${subject}`)}
                    className="cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 flex justify-between items-center">
                      <span>{subject}</span>
                      <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded">{year}</span>
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{t.subjectInfo}</p>
                  </div>

                  {isExpanded && (                    <div className="mt-4 border-t pt-4">
                      {isLanguageAvailable(subject, selectedLanguage) ? (
                        paperTypes.map((paperType, index) => (
                          <div key={paperType} className={`${index > 0 ? 'mt-4' : ''}`}>
                            <h4 className="text-md font-medium text-gray-800 mb-2">{paperType}</h4>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handlePaperDownload(subject, year, 'paper', paperType)}
                                disabled={!!isDownloading}
                                className={`flex items-center flex-1 justify-center py-2 px-3 rounded-md text-sm transition-colors ${
                                  isDownloading?.id === `${subject}-${year}-${paperType}-paper`
                                    ? 'bg-blue-50 text-blue-400 cursor-not-allowed'
                                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                                }`}
                              >
                                {isDownloading?.id === `${subject}-${year}-${paperType}-paper` ? (
                                  <>
                                    <svg 
                                      className="animate-spin mr-2 h-4 w-4" 
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
                                    <DocumentArrowDownIcon className="h-4 w-4 mr-1" />
                                    {t.paper}
                                  </>
                                )}
                              </button>
                              
                              <button
                                onClick={() => handlePaperDownload(subject, year, 'memo', paperType)}
                                disabled={!!isDownloading}
                                className={`flex items-center flex-1 justify-center py-2 px-3 rounded-md text-sm transition-colors ${
                                  isDownloading?.id === `${subject}-${year}-${paperType}-memo`
                                    ? 'bg-green-50 text-green-400 cursor-not-allowed'
                                    : 'bg-green-50 text-green-600 hover:bg-green-100'
                                }`}
                              >
                                {isDownloading?.id === `${subject}-${year}-${paperType}-memo` ? (
                                  <>
                                    <svg 
                                      className="animate-spin mr-2 h-4 w-4" 
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
                                    <DocumentArrowDownIcon className="h-4 w-4 mr-1" />
                                    {t.memo}
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="py-4 text-center">
                          <div className="text-amber-600 mb-2">
                            <svg className="h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>                          <p className="text-sm text-gray-600">
                            {t.languageUnavailable}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {t.selectDifferentLanguage}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
          {/* Information alert about paper availability */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Important Information</h3>
              <div className="mt-2 text-sm text-blue-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Paper availability may vary by subject and year.</li>
                  <li>Some subjects have changed curriculum content over time (e.g., History content changed in 2021).</li>
                  <li>We direct you to the official WCED ePortal site to ensure you always get the latest papers.</li>
                  <li>Papers are available in both English and Afrikaans for most subjects.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Source citation */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>{t.officialSource}</p>
          <p className="mt-2">
            <a 
              href="https://wcedeportal.co.za/past-papers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              WCED ePortal
            </a>
            {' | '}
            <a 
              href="https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations.aspx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Department of Basic Education
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
