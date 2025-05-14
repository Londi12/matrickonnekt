'use client';

import React, { useState } from 'react';

interface FlashCardProps {
  front: string;
  back: string;
  subject: string;
  topic: string;
}

export default function FlashCard({ front, back, subject, topic }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to format multi-line text with proper line breaks
  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  // Get background color based on subject
  const getSubjectColor = (subject: string) => {
    switch(subject) {
      case 'Mathematics':
        return 'bg-blue-50 border-blue-200';
      case 'Physical Sciences':
        return 'bg-emerald-50 border-emerald-200';
      case 'Life Sciences':
        return 'bg-green-50 border-green-200';
      case 'Accounting':
        return 'bg-amber-50 border-amber-200';
      case 'English':
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div
      className={`relative h-auto min-h-[300px] md:min-h-[320px] w-full cursor-pointer transition-transform duration-700 transform perspective-1000 ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Front of card */}
      <div
        className={`absolute w-full h-full backface-hidden transition-opacity duration-700 ${
          isFlipped ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className={`h-full ${getSubjectColor(subject)} rounded-xl shadow-md border p-6 flex flex-col`}>          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-gray-700 px-2 py-1 rounded-full bg-white shadow-sm">
              {subject}
            </span>
            <span className="text-sm text-gray-600 px-2 py-1 rounded-full bg-white/70 shadow-sm">
              {topic}
            </span>
          </div>
          <div className="bg-white/60 rounded-lg p-3 mb-2 inline-flex self-start">
            <span className="text-sm font-bold text-gray-700">Question</span>
          </div>
          <div className="flex-1 flex items-center justify-center text-lg font-medium text-gray-900 px-2">
            {formatText(front)}
          </div>
          <div className="text-sm text-gray-500 text-center mt-4 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Click to flip
          </div>
        </div>
      </div>

      {/* Back of card */}
      <div
        className={`absolute w-full h-full backface-hidden transition-opacity duration-700 rotate-y-180 ${
          isFlipped ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={`h-full ${getSubjectColor(subject)} rounded-xl shadow-md border p-6 flex flex-col`}>          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-gray-700 px-2 py-1 rounded-full bg-white shadow-sm">
              {subject}
            </span>
            <span className="text-sm text-gray-600 px-2 py-1 rounded-full bg-white/70 shadow-sm">
              {topic}
            </span>
          </div>
          <div className="bg-white/60 rounded-lg p-3 mb-2 inline-flex self-start">
            <span className="text-sm font-bold text-gray-700">Answer</span>
          </div>
          <div className="flex-1 flex flex-col justify-center text-base text-gray-700 overflow-y-auto">
            {formatText(back)}
          </div>
          <div className="text-sm text-gray-500 text-center mt-4 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Click to flip back
          </div>
        </div>
      </div>
    </div>
  );
}
