"use client";

import { MockPaper } from "@/app/types/mockExam";
import { ClockIcon, StarIcon, BookmarkIcon } from "@heroicons/react/24/outline";

interface MockPaperCardProps {
  paper: MockPaper;
  onStart: (paperId: string, timed: boolean) => void;
  userProgress?: {
    bestScore?: number;
    completed?: boolean;
    attemptCount?: number;
  };
}

export default function MockPaperCard({ paper, onStart, userProgress }: MockPaperCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'hard': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{paper.name}</h3>
          <p className="text-sm text-gray-500">{paper.subject}</p>
        </div>
        {userProgress?.completed && (
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            Completed
          </span>
        )}
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center">
          <ClockIcon className="h-4 w-4 mr-1" />
          {paper.timeLimit} mins
        </div>
        <div className="flex items-center">
          <StarIcon className="h-4 w-4 mr-1" />
          {paper.totalMarks} marks
        </div>
        <div className={`flex items-center ${getDifficultyColor(paper.difficulty)}`}>
          <span className="capitalize">{paper.difficulty}</span>
        </div>
      </div>

      {userProgress?.bestScore !== undefined && (
        <div className="text-sm text-gray-600">
          Best Score: {userProgress.bestScore}/{paper.totalMarks}
        </div>
      )}

      <div className="flex space-x-3 mt-4">
        <button
          onClick={() => onStart(paper.id, true)}
          className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start Timed Exam
        </button>
        <button
          onClick={() => onStart(paper.id, false)}
          className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Practice Mode
        </button>
      </div>
    </div>
  );
}
