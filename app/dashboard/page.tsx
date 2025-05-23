"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { getUserProgress } from '../utils/userProgress';
import { UserProgress, StudyActivity, Achievement } from '../types/user';
import ActivityCalendar from '../components/ActivityCalendar';
import { mathModules } from '../data/mathModules';
import ProgressSummaryCard from '../components/ProgressSummaryCard';
import RecommendedModules from '../components/RecommendedModules';
import ProgressAnalytics from '../components/ProgressAnalytics';
import AchievementsCard from '../components/AchievementsCard';
import UpcomingSessionsCard from '../components/UpcomingSessionsCard';
import { 
  AcademicCapIcon,
  BookOpenIcon,
  ChartBarIcon,
  ClockIcon,
  FireIcon,
  StarIcon,
  TrophyIcon,
  UserCircleIcon,
  CalendarIcon,
  BellIcon
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProgress = async () => {
      if (user) {
        const userProgress = await getUserProgress(user.uid);
        setProgress(userProgress);
      }
      setLoading(false);
    };

    loadProgress();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </main>
      </div>
    );
  }

  if (!user || !progress) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Please sign in to view your dashboard</h1>
          </div>
        </main>
      </div>
    );
  }

  const totalCompletedTopics = progress.subjects ? Object.values(progress.subjects).reduce(
    (total, subject) => total + (subject.completedTopics?.length || 0),
    0
  ) : 0;
  
  // Sample achievements - in a real app, would be fetched from the database
  const sampleAchievements: Achievement[] = progress.subjects ? [
    {
      id: "streak-7",
      title: "7-Day Streak",
      description: "Studied for 7 consecutive days",
      icon: "streak",
      unlockedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10) // 10 days ago
    },
    {
      id: "first-algebra",
      title: "Algebra Explorer",
      description: "Completed your first algebra lesson",
      icon: "algebra",
      unlockedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5) // 5 days ago
    }
  ] : [];

  // Get display name or email to show in welcome message
  const userDisplayName = user.displayName || user.email?.split('@')[0] || 'Student';
  
  // Filter modules to remove any undefined values
  const validModules = mathModules.filter(module => module !== undefined);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section with Progress Summary */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, {userDisplayName}!</h1>
          </div>
          <ProgressSummaryCard userProgress={progress} />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left column - Spans 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recommended Modules */}
            <RecommendedModules modules={validModules} />
            
            {/* Progress Analytics */}
            <ProgressAnalytics userProgress={progress} />
            
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {progress.recentActivity && progress.recentActivity.length > 0 ? (
                  progress.recentActivity.slice(0, 5).map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        {activity.type === 'study' ? (
                          <BookOpenIcon className="h-6 w-6 text-blue-500" />
                        ) : activity.type === 'practice' ? (
                          <AcademicCapIcon className="h-6 w-6 text-green-500" />
                        ) : (
                          <TrophyIcon className="h-6 w-6 text-yellow-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{activity.topic}</h3>
                        <p className="text-sm text-gray-500">{activity.subject}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(activity.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">No recent activity</div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Sessions */}
            <UpcomingSessionsCard userProgress={progress} />
            
            {/* Achievements */}
            <AchievementsCard achievements={sampleAchievements} />
            
            {/* Activity Calendar (simplified) */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity Calendar</h2>
              <ActivityCalendar 
                activities={
                  // Filter activities with valid timestamps
                  progress.recentActivity?.filter(activity => {
                    if (!activity || typeof activity !== 'object' || !activity.timestamp) {
                      return false;
                    }
                    const date = new Date(activity.timestamp);
                    return !isNaN(date.getTime());
                  }) || []
                } 
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
