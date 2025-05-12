import React from 'react';
import { UserProgress, StudyActivity } from '../types/user';
import { 
  ClockIcon, 
  BookOpenIcon, 
  ArrowRightIcon, 
  CalendarIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface UpcomingSessionsCardProps {
  userProgress: UserProgress;
}

export default function UpcomingSessionsCard({ userProgress }: UpcomingSessionsCardProps) {
  // Generate recommended sessions based on the user's activity and incomplete topics
  const generateRecommendedSessions = () => {
    const sessions = [];

    if (userProgress?.subjects) {      // Convert subjects to an array and sort by last study date
      const subjectEntries = Object.entries(userProgress.subjects)
        .map(([id, data]) => ({ id, ...data }))
        .sort((a, b) => (b.lastStudied?.getTime() || 0) - (a.lastStudied?.getTime() || 0));

      // Take the top 3 subjects
      for (let i = 0; i < Math.min(3, subjectEntries.length); i++) {
        const subjectName = subjectEntries[i].id;
        sessions.push({
          id: `review-${i + 1}`,
          title: `Review ${subjectName}`,
          description: 'Spaced repetition review to improve retention',
          date: new Date(Date.now() + 86400000 * (i + 1)), // Tomorrow + i days
          link: `/study/${subjectName.toLowerCase().replace(/\s+/g, '-')}`,
          icon: <BookOpenIcon className="h-5 w-5 text-indigo-600" />
        });
      }
    }
    
    return sessions;
  };

  const recommendedSessions = generateRecommendedSessions();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Upcoming Study Plan</h2>
        <Link href="/study" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
          Study now <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>
      
      {recommendedSessions.length > 0 ? (
        <div className="space-y-3">
          {recommendedSessions.map((session) => (
            <Link key={session.id} href={session.link}>
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all hover:shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 p-2 bg-indigo-50 rounded-lg">
                    {session.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{session.title}</h3>
                    <p className="text-xs text-gray-500">{session.description}</p>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {session.date.toLocaleDateString()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-gray-500">
          No upcoming sessions planned
        </div>
      )}
    </div>
  );
}
