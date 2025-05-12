"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AuthCheck from '../components/AuthCheck';
import { useAuth } from '../context/AuthContext';
import { updateStreak, markTopicCompleted, updateStudyTime, markLessonCompleted } from '../utils/userProgress';
import { updatedSubjects } from '../data/updatedSubjects';
import CurriculumDemoSection from '../components/CurriculumDemoSection';
import AlgebraSimplifyingExpressions from '../components/lessons/AlgebraSimplifyingExpressions';
import AlgebraMultiplyingExpressions from '../components/lessons/AlgebraMultiplyingExpressions';
import AlgebraFactorisingEquations from '../components/lessons/AlgebraFactorisingEquations';
import AlgebraInequalities from '../components/lessons/AlgebraInequalities';
import AlgebraicFractions from '../components/lessons/AlgebraicFractions';
import AlgebraNatureOfRoots from '../components/lessons/AlgebraNatureOfRoots';
import ArithmeticSequences from '../components/lessons/ArithmeticSequences';
import GeometricSequences from '../components/lessons/GeometricSequences';
import SigmaNotation from '../components/lessons/SigmaNotation';
import LinearQuadraticFunctions from '../components/lessons/LinearQuadraticFunctions';
import ExponentialHyperbolicFunctions from '../components/lessons/ExponentialHyperbolicFunctions';
import LogarithmicFunctions from '../components/lessons/LogarithmicFunctions';
import Transformations from '../components/lessons/Transformations';
import FunctionInverses from '../components/lessons/FunctionInverses';
import FinanceGrowthDecay from '../components/lessons/FinanceGrowthDecay';
import DepreciationInflation from '../components/lessons/DepreciationInflation';
import AnnuitiesPresentFutureValue from '../components/lessons/AnnuitiesPresentFutureValue';
import FirstPrinciplesDifferentiation from '../components/lessons/FirstPrinciplesDifferentiation';
import RulesOfDifferentiation from '../components/lessons/RulesOfDifferentiation';
import MaximaAndMinima from '../components/lessons/MaximaAndMinima';
import SketchingGraphsUsingDerivatives from '../components/lessons/SketchingGraphsUsingDerivatives';
import BasicProbabilityRules from '../components/lessons/BasicProbabilityRules';
import TreeDiagrams from '../components/lessons/TreeDiagrams';
import VennDiagrams from '../components/lessons/VennDiagrams';
import IndependentDependentEvents from '../components/lessons/IndependentDependentEvents';
import StatisticsMeanMedianMode from '../components/lessons/StatisticsMeanMedianMode';
import { 
  AcademicCapIcon,
  BookOpenIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  PlayIcon,
  PauseIcon,
  ChartBarIcon as ChartBarIconSolid,
  PencilIcon,
  DocumentCheckIcon,
  StopIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline';
import SignInModal from '../components/SignInModal';
import { getUserProgress } from '../utils/userProgress';

// Import updated subjects from data file
// Transform the subject modules to match the existing structure for compatibility
const subjects = updatedSubjects.map(subject => ({
  id: subject.id,
  name: subject.name,
  icon: subject.id === 'mathematics' ? '📐' : 
        subject.id === 'physical-sciences' ? '🔬' : 
        subject.id === 'life-sciences' ? '🧬' : 
        subject.id === 'accounting' ? '📊' : '📚',
  description: subject.description,
  progress: 0, // This will be updated from user data
  lastAccessed: 'Not yet accessed',
  topics: subject.modules.map((module: any) => ({
    id: module.id,
    name: module.name,
    progress: 0, // This will be updated from user data
    lessons: module.lessons.map((lesson: any, index: number) => ({ 
      id: index + 1,
      title: lesson.title,
      lessonId: lesson.id, // Keep the original ID for reference
      completed: false // This will be updated from user data
    }))
  }))
}));

// The first subject (Mathematics) and its first topic (Algebra)
const mathematicsSubject = subjects.find(s => s.id === 'mathematics');
const algebraTopic = mathematicsSubject?.topics.find((t: any) => t.id === 'algebra');

/* Original topic structure for reference - commented out to prevent syntax errors
const originalMathTopics = [
  {
    id: 'patterns',
    name: 'Patterns',
    progress: 45,
    lessons: [
      { id: 1, title: 'Arithmetic Sequences and Series', completed: true },
      { id: 2, title: 'Geometric Sequences and Series', completed: false },
      { id: 3, title: 'Sigma Notation', completed: false }
    ]
  },
  {
    id: 'functions',
    name: 'Functions and Graphs',
    progress: 30,
    lessons: [
      { id: 1, title: 'Linear and Quadratic Functions', completed: true },
      { id: 2, title: 'Exponential and Hyperbolic Functions', completed: false },
      { id: 3, title: 'Logarithmic Functions', completed: false },
      { id: 4, title: 'Transformations', completed: false },
      { id: 5, title: 'Inverses of Functions', completed: false }
    ]
  },
  {
    id: 'finance',
    name: 'Finance, Growth and Decay',
    progress: 20,
    lessons: [
      { id: 1, title: 'Simple and Compound Interest', completed: false },
      { id: 2, title: 'Depreciation and Inflation', completed: false },
      { id: 3, title: 'Annuities and Present/Future Value', completed: false }
    ]
  }
];
*/

// Main StudyPage component
export default function StudyPage() {
  const { user, loading } = useAuth();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [showSubjectSelection, setShowSubjectSelection] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState('');
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [userProgress, setUserProgress] = useState<any>(null);

  useEffect(() => {
    const fetchUserProgress = async () => {
      if (user) {
        const progress = await getUserProgress(user.uid);
        setUserProgress(progress);
      }
    };
    fetchUserProgress();
  }, [user]);

  // Helper functions
  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubjects(prev => {
      if (prev.includes(subjectId)) {
        return prev.filter(id => id !== subjectId);
      } else {
        return [...prev, subjectId];
      }
    });
  };

  const handleStartLearning = () => {
    setShowSubjectSelection(false);
  };

  const handleBackToSubjects = () => {
    setShowSubjectSelection(true);
    setSelectedTopic(null);
    setSelectedLesson(null);
  };

  const toggleTopic = (topicId: string) => {
    setSelectedTopic(prev => prev === topicId ? null : topicId);
    setSelectedLesson(null);
  };

  const handleLessonClick = async (subjectId: string, topicId: string, lessonId: number) => {
    if (!user) {
      // Handle error for unauthenticated user
      return;
    }

    // Start the timer when a lesson is selected
    if (!isTimerRunning) {
      handleStartTimer();
    }

    // Set the active lesson
    setSelectedLesson(lessonId);

    // Mark the lesson as completed in the database
    await markLessonCompleted(user.uid, subjectId, topicId, lessonId);
  };

  const getSubjectProgress = (subjectId: string) => {
    const subject = userProgress?.subjects?.[subjectId];
    if (!subject) return 0;
    return Math.round(subject.progress);
  };

  const handleStartTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      const interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
      setTimerInterval(interval);
    }
  };

  const handlePauseTimer = () => {
    if (isTimerRunning && timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
      setIsTimerRunning(false);
    }
  };

  const handleStopTimer = async () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    if (user && timerSeconds > 0) {
      const minutes = Math.ceil(timerSeconds / 60);
      await updateStudyTime(user.uid, minutes);
    }
    setTimerSeconds(0);
    setIsTimerRunning(false);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSaveNotes = () => {
    // This would normally save notes to user data
    alert('Notes saved successfully!');
  };

  const getFilteredTopics = (subject: any) => {
    return subject.topics.filter((topic: any) => 
      !searchQuery || 
      topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.lessons.some((lesson: any) => 
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const getActiveLessonContent = () => {
    if (!selectedLesson) return null;
    
    // Get the first selected subject for now - we can enhance this later to show content from multiple subjects
    const subject = subjects.find(s => s.id === selectedSubjects[0]);
    if (!subject) return null;

    const topic = subject.topics.find((t: any) => t.id === selectedTopic);
    if (!topic) return null;

    const lesson = topic.lessons.find((l: any) => l.id === selectedLesson);
    if (!lesson) return null;

    switch (selectedSubjects[0]) {
      case 'mathematics':
        switch (selectedTopic) {
          case 'algebra':
            switch (selectedLesson) {
              case 1: return <AlgebraSimplifyingExpressions />;
              case 2: return <AlgebraMultiplyingExpressions />;
              case 3: return <AlgebraFactorisingEquations />;
              case 4: return <AlgebraInequalities />;
              case 5: return <AlgebraicFractions />;
              case 6: return <AlgebraNatureOfRoots />;
              default: return null;
            }
          case 'patterns':
            switch (selectedLesson) {
              case 1: return <ArithmeticSequences />;
              case 2: return <GeometricSequences />;
              case 3: return <SigmaNotation />;
              default: return null;
            }
          case 'functions':
            switch (selectedLesson) {
              case 1: return <LinearQuadraticFunctions />;
              case 2: return <ExponentialHyperbolicFunctions />;
              case 3: return <LogarithmicFunctions />;
              case 4: return <Transformations />;
              case 5: return <FunctionInverses />;
              default: return null;
            }
          case 'finance':
            switch (selectedLesson) {
              case 1: return <FinanceGrowthDecay />;
              case 2: return <DepreciationInflation />;
              case 3: return <AnnuitiesPresentFutureValue />;
              default: return null;
            }
          case 'calculus':
            switch (selectedLesson) {
              case 1: return <FirstPrinciplesDifferentiation />;
              case 2: return <RulesOfDifferentiation />;
              case 3: return <MaximaAndMinima />;
              case 4: return <SketchingGraphsUsingDerivatives />;
              default: return null;
            }
          case 'probability':
            switch (selectedLesson) {
              case 1: return <BasicProbabilityRules />;
              case 2: return <TreeDiagrams />;
              case 3: return <VennDiagrams />;
              case 4: return <IndependentDependentEvents />;
              default: return null;
            }
          case 'statistics':
            switch (selectedLesson) {
              case 1: return <StatisticsMeanMedianMode />;
              default: return null;
            }
          default:
            return null;
        }
      default:
        return null;
    }
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (timerActive) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive]);

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

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Study Dashboard</h1>
            <p className="mt-2 text-gray-600">Sign in to track your progress and save your work</p>
            <button
              onClick={() => setShowSignInModal(true)}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </div>
        </main>
        <SignInModal isOpen={showSignInModal} onClose={() => setShowSignInModal(false)} />
      </div>
    );
  }

  return (
    <AuthCheck required={true}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="flex-1 flex overflow-hidden">
          {/* Subject Selection Screen */}
          {showSubjectSelection ? (
            <div className="flex-1 p-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-4">
                  <h1 className="text-2xl font-bold text-gray-900">Choose Your Subjects</h1>
                  <p className="mt-1 text-sm text-gray-600">Select one or more subjects to start learning</p>
                </div>

                {/* New Curriculum Demo Section */}
                <CurriculumDemoSection subjects={updatedSubjects} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {subjects.map((subject) => (
                    <div
                      key={subject.id}
                      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-3 cursor-pointer ${
                        selectedSubjects.includes(subject.id) ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => handleSubjectSelect(subject.id)}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{subject.icon}</span>
                        <h3 className="font-medium text-sm">{subject.name}</h3>
                      </div>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{subject.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {getSubjectProgress(subject.id)}% Complete
                        </span>
                        <div className="w-16 h-1 bg-gray-200 rounded-full">
                          <div
                            className="h-1 bg-blue-500 rounded-full"
                            style={{ width: `${getSubjectProgress(subject.id)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedSubjects.length > 0 && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={handleStartLearning}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 text-sm"
                    >
                      <span>Start Studying {selectedSubjects.length} Subject{selectedSubjects.length > 1 ? 's' : ''}</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col p-4">
              {/* Back Button */}
              <div className="mb-4">
                <button
                  onClick={handleBackToSubjects}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <ChevronLeftIcon className="h-5 w-5 mr-1" />
                  Back to Subject Selection
                </button>
              </div>

              {/* Topic and Lesson Selection */}
              <div className="flex-1 flex h-[calc(100vh-12rem)]">
                {/* First Column: Selected Subjects */}
                <div className="w-64 bg-white shadow-sm p-4 overflow-y-auto border-r border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Your Subjects</h3>
                  <div className="space-y-2">
                    {subjects
                      .filter(subject => selectedSubjects.includes(subject.id))
                      .map(subject => (
                        <button
                          key={subject.id}
                          onClick={() => setSelectedTopic(null)}
                          className="w-full text-left p-3 hover:bg-gray-50 rounded-md flex items-center space-x-3"
                        >
                          <span className="text-2xl">{subject.icon}</span>
                          <div>
                            <h4 className="font-medium text-gray-900">{subject.name}</h4>
                            <p className="text-sm text-gray-500">{subject.progress}% Complete</p>
                          </div>
                        </button>
                      ))}
                  </div>
                </div>

                {/* Second Column: Topics and Lessons */}
                <div className="w-80 bg-white shadow-sm p-4 overflow-y-auto border-r border-gray-200">
                  {selectedSubjects.length > 0 ? (
                    <div>
                      <div className="mb-4">
                        <input
                          type="text"
                          placeholder="Search topics..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="space-y-4">
                        {subjects
                          .filter(subject => selectedSubjects.includes(subject.id))
                          .map(subject => (
                            <div key={subject.id} className="mb-6">
                              <h3 className="font-semibold text-gray-900 mb-2">{subject.name}</h3>
                              {getFilteredTopics(subject).map((topic: any) => (
                                <div key={topic.id} className="mb-4">
                                  <button
                                    onClick={() => toggleTopic(topic.id)}
                                    className="w-full text-left p-2 hover:bg-gray-50 rounded-md flex items-center justify-between"
                                  >
                                    <span>{topic.name}</span>
                                    {selectedTopic === topic.id ? (
                                      <ChevronDownIcon className="h-5 w-5" />
                                    ) : (
                                      <ChevronRightIcon className="h-5 w-5" />
                                    )}
                                  </button>
                                  {selectedTopic === topic.id && (
                                    <div className="ml-4 mt-2 space-y-1">
                                      {topic.lessons.map((lesson: any) => (
                                        <button
                                          key={lesson.id}
                                          onClick={() => handleLessonClick(
                                            subject.id,
                                            topic.id,
                                            lesson.id
                                          )}
                                          className={`w-full text-left p-2 rounded-md flex items-center space-x-2 ${
                                            selectedLesson === lesson.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                                          }`}
                                        >
                                          {lesson.completed ? (
                                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                          ) : (
                                            <DocumentCheckIcon className="h-5 w-5 text-gray-400" />
                                          )}
                                          <span>{lesson.title}</span>
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-gray-900 font-medium">No Subjects Selected</h3>
                      <p className="text-gray-500 mt-1">Select subjects from the left panel</p>
                    </div>
                  )}
                </div>

                {/* Third Column: Lesson Content and Notes */}
                <div className="flex-1 bg-white shadow-sm p-6 overflow-y-auto">
                  {selectedLesson ? (
                    <div className="flex flex-col h-full">
                      {/* Header with Title, Timer, and Notes Icon */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                        <div className="flex items-center space-x-4">
                          <h2 className="text-2xl font-bold text-gray-900">
                            {subjects
                              .filter(subject => selectedSubjects.includes(subject.id))
                              .flatMap(subject => subject.topics)
                              .find((topic: any) => topic.id === selectedTopic)
                              ?.lessons.find((lesson: any) => lesson.id === selectedLesson)?.title}
                          </h2>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <ClockIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-lg font-mono">{formatTime(timerSeconds)}</span>
                          </div>
                          <button
                            onClick={() => setShowNotes(!showNotes)}
                            className={`p-2 rounded-md transition-colors ${
                              showNotes 
                                ? 'bg-blue-100 text-blue-600' 
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <PencilIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      {/* Main Content Area */}
                      <div className="flex-1 flex gap-6">
                        {/* Lesson Content */}
                        <div className={`${showNotes ? 'w-2/3' : 'w-full'} transition-all duration-300`}>
                          {getActiveLessonContent()}
                        </div>

                        {/* Notes Panel */}
                        {showNotes && (
                          <div className="w-1/3 border-l border-gray-200 pl-6 transition-all duration-300">
                            <div className="sticky top-0 bg-white pb-4">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Notes</h3>
                                <button
                                  onClick={handleSaveNotes}
                                  className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                                >
                                  Save
                                </button>
                              </div>
                              <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Take notes here..."
                                className="w-full h-[calc(100vh-20rem)] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h2 className="text-2xl font-semibold text-gray-900">Select a Lesson</h2>
                      <p className="mt-2 text-gray-600">Choose a lesson from the middle panel to start learning</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </AuthCheck>
  );
}
