import React from 'react';
import { UserProgress } from '../types/user';

interface ProgressSummaryCardProps {
  userProgress: UserProgress;
}

export default function ProgressSummaryCard({ userProgress }: ProgressSummaryCardProps) {
  // Calculate mastery level based on progress
  const calculateMasteryLevel = () => {
    const subjectEntries = Object.entries(userProgress.subjects || {});
    if (subjectEntries.length === 0) return 0;
    
    const totalProgressSum = subjectEntries.reduce((sum, [_, subject]) => {
      return sum + (subject.progress || 0);
    }, 0);
    
    return Math.round(totalProgressSum / subjectEntries.length);
  };

  const masteryLevel = calculateMasteryLevel();
  
  // Get mastery title based on level
  const getMasteryTitle = () => {
    if (masteryLevel < 10) return 'Beginner';
    if (masteryLevel < 30) return 'Novice';
    if (masteryLevel < 50) return 'Intermediate';
    if (masteryLevel < 70) return 'Advanced';
    if (masteryLevel < 90) return 'Expert';
    return 'Master';
  };
  
  // Calculate streak consistency percentage
  const streakConsistency = () => {
    if (!userProgress.longestStreak) return 0;
    return Math.min(100, Math.round((userProgress.currentStreak / userProgress.longestStreak) * 100));
  };
  
  const masteryTitle = getMasteryTitle();
  const consistency = streakConsistency();

  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-md p-6 text-white">
      <h2 className="text-lg font-semibold mb-4">Your Learning Progress</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex flex-col items-center">
            <div className="relative w-36 h-36">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${masteryLevel}, 100`}
                />
                <text x="18" y="20.35" className="text-white text-3xl" textAnchor="middle" fill="white">
                  {masteryLevel}%
                </text>
              </svg>
            </div>
            <p className="text-lg font-semibold mt-2">{masteryTitle}</p>
            <p className="text-sm text-blue-100">Mastery Level</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <span>Streak Consistency</span>
              <span>{consistency}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{ width: `${consistency}%` }}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-sm text-blue-100">Total Study Time</p>
              <p className="text-xl font-semibold">{Math.round((userProgress.totalStudyTime || 0) / 60)}h</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-sm text-blue-100">Current Streak</p>
              <p className="text-xl font-semibold">{userProgress.currentStreak || 0} days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
