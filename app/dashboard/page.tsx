"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { getUserProgress } from '../utils/userProgress';
import { UserProgress, StudyActivity, Achievement } from '../types/user';
import ActivityCalendar from '../components/ActivityCalendar';
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.email}!</h1>
            <p className="text-gray-600 mt-1">Track your learning progress and achievements</p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Current Streak</p>
                <p className="text-2xl font-bold text-gray-900">{progress.currentStreak || 0} days</p>
              </div>
              <FireIcon className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Study Time</p>
                <p className="text-2xl font-bold text-gray-900">{Math.round((progress.totalStudyTime || 0) / 60)} hours</p>
              </div>
              <ClockIcon className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Completed Topics</p>
                <p className="text-2xl font-bold text-gray-900">{totalCompletedTopics}</p>
              </div>
              <BookOpenIcon className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Longest Streak</p>
                <p className="text-2xl font-bold text-gray-900">{progress.longestStreak || 0} days</p>
              </div>
              <TrophyIcon className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {progress.recentActivity?.map((activity, index) => (
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
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Activity Calendar */}
            {(() => {
              console.log('Raw activities:', progress.recentActivity);
              const validActivities = progress.recentActivity?.filter(activity => {
                console.log('Processing activity:', activity);
                console.log('Activity type:', typeof activity);
                console.log('Activity keys:', Object.keys(activity));
                
                if (!activity || typeof activity !== 'object') {
                  console.log('Invalid activity object:', activity);
                  return false;
                }

                if (!activity.timestamp) {
                  console.log('Missing timestamp:', activity);
                  return false;
                }

                const date = new Date(activity.timestamp);
                const isValid = !isNaN(date.getTime());
                if (!isValid) {
                  console.log('Invalid timestamp:', activity.timestamp);
                }
                return isValid;
              }) || [];
              console.log('Valid activities:', validActivities);
              return <ActivityCalendar activities={validActivities} />;
            })()}

            {/* Subject Progress */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Subject Progress</h2>
              <div className="space-y-4">
                {progress.subjects && Object.entries(progress.subjects).map(([subjectId, subject]) => (
                  <div key={subjectId} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <BookOpenIcon className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{subjectId}</h3>
                      <p className="text-sm text-gray-500">
                        {subject.completedTopics?.length || 0} topics completed
                      </p>
                      <div className="mt-2 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${subject.progress || 0}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 