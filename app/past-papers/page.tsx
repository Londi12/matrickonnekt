"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const translations = {
  en: {
    title: 'Past Papers',
    subtitle: 'Access previous exam papers and their solutions',
    filterByYear: 'Filter by Year',
    filterBySubject: 'Filter by Subject',
    download: 'Download',
    paper: 'Paper',
    memo: 'Memo'
  },
  zu: {
    title: 'Amaphepha Adlule',
    subtitle: 'Thola amaphepha okuhlolwa adlule nezixazululo zawo',
    filterByYear: 'Hlunga ngoNyaka',
    filterBySubject: 'Hlunga ngoMbhalo',
    download: 'Landa',
    paper: 'Iphepha',
    memo: 'Imemo'
  },
  af: {
    title: 'Vorige Vraestelle',
    subtitle: 'Kry toegang tot vorige eksamenvraestelle en hul oplossings',
    filterByYear: 'Filter volgens Jaar',
    filterBySubject: 'Filter volgens Vak',
    download: 'Aflaai',
    paper: 'Vraestel',
    memo: 'Memo'
  }
};

export default function PastPapersPage() {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const { language } = useLanguage();
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
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.filterByYear}</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
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
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {years.map((year) => (
            subjects.map((subject) => (
              <div key={`${year}-${subject}`} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{subject} {year}</h3>
                <div className="space-y-3">
                  <a
                    href={`/papers/${subject.toLowerCase()}/${year}/paper.pdf`}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                    {t.paper}
                  </a>
                  <a
                    href={`/papers/${subject.toLowerCase()}/${year}/memo.pdf`}
                    className="flex items-center text-green-600 hover:text-green-700"
                  >
                    <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                    {t.memo}
                  </a>
                </div>
              </div>
            ))
          ))}
        </div>
      </main>
    </div>
  );
}
