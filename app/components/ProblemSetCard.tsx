"use client";

import React from 'react';
import { ClockIcon, BookmarkIcon } from '@heroicons/react/24/outline';

interface ProblemSetCardProps {
  title: string;
  description: string;
  topic: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  isChallenge?: boolean;
  isBookmarked?: boolean;
  onBookmark?: () => void;
  onStart?: () => void;
}

const DIFFICULTY_COLORS: Record<ProblemSetCardProps['difficulty'], string> = {
  Beginner: 'bg-green-100 text-green-800',
  Intermediate: 'bg-yellow-100 text-yellow-800',
  Advanced: 'bg-red-100 text-red-800'
};

export default function ProblemSetCard({
  title,
  description,
  topic,
  difficulty,
  duration,
  isChallenge = false,
  isBookmarked = false,
  onBookmark,
  onStart
}: ProblemSetCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${isChallenge ? 'border-2 border-blue-500' : ''}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl">{topic}</span>
          <div className="flex items-center space-x-2">
            {onBookmark && (
              <button
                onClick={onBookmark}
                className={`p-1 rounded-full hover:bg-gray-100 transition-colors ${
                  isBookmarked ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                <BookmarkIcon className="h-5 w-5" />
              </button>
            )}
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${DIFFICULTY_COLORS[difficulty]}`}>
              {difficulty}
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ClockIcon className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-500">{duration}</span>
          </div>
          <button
            onClick={onStart}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {isChallenge ? 'Start Challenge' : 'Start Practice'}
          </button>
        </div>
      </div>
    </div>
  );
} 