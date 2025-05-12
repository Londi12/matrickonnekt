import React from 'react';
import { Achievement } from '../types/user';
import { TrophyIcon } from '@heroicons/react/24/outline';

interface AchievementsCardProps {
  achievements: Achievement[];
}

export default function AchievementsCard({ achievements }: AchievementsCardProps) {
  // Sort achievements by most recent first
  const sortedAchievements = [...achievements].sort((a, b) => {
    const dateA = new Date(a.unlockedAt);
    const dateB = new Date(b.unlockedAt);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Achievements</h2>
      
      {sortedAchievements.length > 0 ? (
        <div className="space-y-4">
          {sortedAchievements.map((achievement) => (
            <div key={achievement.id} className="flex items-center space-x-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-200">
                  <TrophyIcon className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">{achievement.title}</h3>
                <p className="text-xs text-gray-500">{achievement.description}</p>
              </div>
              <div className="text-xs text-gray-400">
                {new Date(achievement.unlockedAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center border-2 border-dashed border-gray-200 rounded-lg">
          <TrophyIcon className="mx-auto h-12 w-12 text-gray-300" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No achievements yet</h3>
          <p className="mt-1 text-sm text-gray-500">
            Complete lessons and practice tests to earn achievements.
          </p>
        </div>
      )}
    </div>
  );
}
