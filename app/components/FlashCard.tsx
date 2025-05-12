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

  return (
    <div
      className={`relative h-64 w-full cursor-pointer transition-transform duration-700 transform perspective-1000 ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`absolute w-full h-full backface-hidden transition-opacity duration-700 ${
          isFlipped ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="h-full bg-white rounded-lg shadow-sm p-6 flex flex-col">
          <div className="text-sm text-gray-500 mb-2">
            {subject} - {topic}
          </div>
          <div className="flex-1 flex items-center justify-center text-lg font-medium text-gray-900">
            {front}
          </div>
          <div className="text-sm text-gray-400 text-center mt-4">Click to flip</div>
        </div>
      </div>

      <div
        className={`absolute w-full h-full backface-hidden transition-opacity duration-700 rotate-y-180 ${
          isFlipped ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="h-full bg-white rounded-lg shadow-sm p-6 flex flex-col">
          <div className="text-sm text-gray-500 mb-2">
            {subject} - {topic}
          </div>
          <div className="flex-1 flex items-center justify-center text-lg font-medium text-gray-900">
            {back}
          </div>
          <div className="text-sm text-gray-400 text-center mt-4">Click to flip back</div>
        </div>
      </div>
    </div>
  );
}
