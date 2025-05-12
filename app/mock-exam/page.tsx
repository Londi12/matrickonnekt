"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AuthCheck from '../components/AuthCheck';
import { useAuth } from '../context/AuthContext';
import MockPaperCard from '../components/mock-exam/MockPaperCard';
import MockExam from '../components/mock-exam/MockExam';
import MockExamResult from '../components/mock-exam/MockExamResult';
import SignInModal from '../components/mock-exam/SignInModal';
import { MockPaper, UserMockExamResult } from '../types/mockExam';
import { mockPapers } from '../data/mockExamData';
import { Tab } from '@headlessui/react';
import { 
  ClockIcon, 
  StarIcon, 
  TrophyIcon, 
  DocumentTextIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function MockExamPage() {
  const { user } = useAuth();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<MockPaper | null>(null);
  const [isTimed, setIsTimed] = useState(false);
  const [examResult, setExamResult] = useState<UserMockExamResult | null>(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  // Mock user progress data
  const mockProgress = {
    'math-2024-p1': {
      bestScore: 85,
      completed: true,
      attemptCount: 2
    }
  };

  const handleStartExam = (paperId: string, timed: boolean) => {
    const paper = mockPapers.find(p => p.id === paperId);
    if (!user) {
      setShowSignInModal(true);
      return;
    }
    if (paper) {
      setSelectedPaper(paper);
      setIsTimed(timed);
    }
  };

  const handleExamComplete = (result: UserMockExamResult) => {
    setExamResult(result);
    // Here you would typically save the result to your backend
  };

  const handleExit = () => {
    setSelectedPaper(null);
    setExamResult(null);
  };

  if (selectedPaper && examResult) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <MockExamResult result={examResult} paper={selectedPaper} />
        <div className="flex justify-center mt-6 mb-8">
          <button
            onClick={handleExit}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Return to Mock Exams
          </button>
        </div>
      </div>
    );
  }

  if (selectedPaper) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <MockExam
          paper={selectedPaper}
          isTimed={isTimed}
          onComplete={handleExamComplete}
          onExit={handleExit}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AuthCheck>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Mock Exam Practice</h1>
            <p className="text-gray-600">
              Practice with full-length mock papers aligned with the NSC curriculum. Track your progress and earn badges as you improve.
            </p>
          </div>

          <Tab.Group selectedIndex={selectedTabIndex} onChange={setSelectedTabIndex}>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-6">
              <Tab
                className={({ selected }: { selected: boolean }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                   ${selected
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  }`
                }
              >
                Available Papers
              </Tab>
              <Tab
                className={({ selected }: { selected: boolean }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                   ${selected
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  }`
                }
              >
                Your Performance
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockPapers.map((paper) => (
                    <MockPaperCard
                      key={paper.id}
                      paper={paper}
                      onStart={handleStartExam}
                      userProgress={mockProgress[paper.id as keyof typeof mockProgress]}
                    />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-blue-600 font-medium">Average Score</p>
                          <p className="text-2xl font-bold text-blue-700">76%</p>
                        </div>
                        <ChartBarIcon className="h-8 w-8 text-blue-500" />
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-green-600 font-medium">Papers Completed</p>
                          <p className="text-2xl font-bold text-green-700">4</p>
                        </div>
                        <DocumentTextIcon className="h-8 w-8 text-green-500" />
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-yellow-600 font-medium">Badges Earned</p>
                          <p className="text-2xl font-bold text-yellow-700">6</p>
                        </div>
                        <TrophyIcon className="h-8 w-8 text-yellow-500" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {/* Recent activity items will be added here */}
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </main>
      </AuthCheck>
      <SignInModal isOpen={showSignInModal} onClose={() => setShowSignInModal(false)} />
    </div>
  );
}
