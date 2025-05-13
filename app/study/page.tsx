"use client";

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import AuthCheck from '../components/AuthCheck';
import { useAuth } from '../context/AuthContext';
import { updateStreak, markTopicCompleted, updateStudyTime, markLessonCompleted } from '../utils/userProgress';
import { updatedSubjects } from '../data/updatedSubjects';
import CurriculumDemoSection from '../components/CurriculumDemoSection';
import MobileResponsiveTabs from '../components/MobileResponsiveTabs';
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
import AlgebraPolynomialEquations from '../components/lessons/AlgebraPolynomialEquations';
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
import PoetryAnalysis from '../components/lessons/PoetryAnalysis';
import ShakespeareDrama from '../components/lessons/ShakespeareDrama';
import NovelAnalysis from '../components/lessons/NovelAnalysis';
import CriticalReading from '../components/lessons/CriticalReading';
import LanguageStructures from '../components/lessons/LanguageStructures';
import VisualLiteracy from '../components/lessons/VisualLiteracy';
import CreativeWriting from '../components/lessons/CreativeWriting';
import ArgumentativeWriting from '../components/lessons/ArgumentativeWriting';
import TransactionalWriting from '../components/lessons/TransactionalWriting';

interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  difficulty: string;
  duration: number;
  topics: string[];
  lessonId?: string;
}

interface Topic {
  id: string;
  name: string;
  lessons: Lesson[];
}

interface Subject {
  id: string;
  name: string;
  topics: Topic[];
}

const subjects = updatedSubjects.map(subject => ({
  id: subject.id,
  name: subject.name,
  icon: subject.id === 'mathematics' ? '📐' : 
        subject.id === 'physical-sciences' ? '🔬' : 
        subject.id === 'life-sciences' ? '🧬' : 
        subject.id === 'accounting' ? '📊' : 
        subject.id === 'english-hl' ? '📖' : '📚',
  description: subject.description,
  progress: 0,
  lastAccessed: 'Not yet accessed',
  topics: subject.modules.map((module: any) => ({
    id: module.id,
    name: module.name,
    progress: 0,
    lessons: module.lessons.map((lesson: any) => ({ 
      id: lesson.id,
      title: lesson.title,
      completed: false,
      lessonId: lesson.id
    }))
  }))
}));

const StudyPage = () => {
  const { user, loading } = useAuth();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [showSubjectSelection, setShowSubjectSelection] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("theory");
  const [progress, setProgress] = useState<any>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const fetchUserProgress = async () => {
      if (user) {
        const userProgress = await getUserProgress(user.uid);
        setProgress(userProgress);
      }
    };
    fetchUserProgress();

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [user]);

  const handleLessonClick = async (subjectId: string, topicId: string, lessonId: string) => {
    if (!user) {
      setShowSignInModal(true);
      return;
    }

    if (!isTimerRunning) {
      handleStartTimer();
    }

    const subject: Subject | undefined = subjects.find(s => s.id === subjectId);
    const topic: Topic | undefined = subject?.topics.find((t: Topic) => t.id === topicId);
    const lesson: Lesson | undefined = topic?.lessons.find((l: Lesson) => l.id === lessonId);

    setSelectedLesson(lessonId);

    if (lesson) {
      await markLessonCompleted(user.uid, subjectId, topicId, lessonId);
    }
  };

  const handleStartTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      const interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
      timerIntervalRef.current = interval;
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const toggleTopic = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleBackToSubjects = () => {
    setShowSubjectSelection(true);
    setSelectedTopic(null);
    setSelectedLesson(null);
  };

  const handleStartLearning = () => {
    setShowSubjectSelection(false);
  };

  const handleSubjectSelect = (subjectId: string) => {
    if (selectedSubjects.includes(subjectId)) {
      setSelectedSubjects(selectedSubjects.filter(id => id !== subjectId));
    } else {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    }
  };

  const getSubjectProgress = (subjectId: string) => {
    if (!progress?.subjects) return 0;
    const subjectProgress = progress.subjects[subjectId];
    return subjectProgress?.progress || 0;
  };
  
  const getActiveLessonContent = () => {
    if (!selectedLesson) return null;
    
    const subject: Subject | undefined = subjects.find(s => s.id === selectedSubjects[0]);
    if (!subject) return null;

    const topic: Topic | undefined = subject.topics.find((t: Topic) => t.id === selectedTopic);
    if (!topic) return null;

    const lesson: Lesson | undefined = topic.lessons.find((l: Lesson) => l.id === selectedLesson);
    if (!lesson) return null;

    const lessonId = lesson.lessonId;
    
    switch (selectedSubjects[0]) {
      case 'mathematics':
        switch (lessonId) {
          case 'polynomial-equations': return <AlgebraPolynomialEquations />;
          case 'nature-of-roots': return <AlgebraNatureOfRoots />;
          case 'algebraic-fractions': return <AlgebraicFractions />;
          case 'arithmetic-sequences': return <ArithmeticSequences />;
          case 'geometric-sequences': return <GeometricSequences />;
          case 'sigma-notation': return <SigmaNotation />;
          case 'linear-quadratic': return <LinearQuadraticFunctions />;
          case 'exponential-functions': return <ExponentialHyperbolicFunctions />;
          case 'logarithmic': return <LogarithmicFunctions />;
          case 'transformations': return <Transformations />;
          case 'function-inverses': return <FunctionInverses />;
          case 'finance-growth-decay': return <FinanceGrowthDecay />;
          default: return null;
        }
      case 'english-hl':
        switch (lessonId) {
          case 'poetry-analysis': return <PoetryAnalysis />;
          case 'shakespeare-study': return <ShakespeareDrama />;
          case 'novel-analysis': return <NovelAnalysis />;
          case 'comprehension': return <CriticalReading />;
          case 'language-structures': return <LanguageStructures />;
          case 'visual-literacy': return <VisualLiteracy />;
          case 'creative-writing': return <CreativeWriting />;
          case 'argumentative-writing': return <ArgumentativeWriting />;
          case 'transactional-writing': return <TransactionalWriting />;
          default: return null;
        }
      default:
        return null;
    }
  };

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
        <main className="flex-1">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="fixed bottom-4 right-4 z-50 lg:hidden bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>

          <div className="flex flex-col lg:flex-row">
            {/* Sidebar - Subject & Topic Navigation */}
            <div className={`
              fixed lg:static inset-0 bg-white lg:bg-transparent
              w-full lg:w-80 h-full lg:min-h-screen overflow-y-auto
              transform transition-transform duration-300 ease-in-out
              ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
              lg:translate-x-0 z-40
              lg:border-r lg:border-gray-200
            `}>
              <div className="sticky top-0 bg-white p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Your Study Path</h2>
                  <button 
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Subject & Topic List */}
              <div className="p-4 space-y-4">
                {subjects
                  .filter(subject => selectedSubjects.includes(subject.id))
                  .map(subject => (
                    <div key={subject.id} className="space-y-2">
                      <button
                        onClick={() => setSelectedTopic(null)}
                        className="w-full text-left p-3 hover:bg-gray-50 rounded-md flex items-center space-x-3"
                      >
                        <span className="text-2xl">{subject.icon}</span>
                        <div>
                          <h4 className="font-medium text-gray-900">{subject.name}</h4>
                          <p className="text-sm text-gray-500">{getSubjectProgress(subject.id)}% Complete</p>
                        </div>
                      </button>

                      {/* Topics */}
                      <div className="ml-4 space-y-2">
                        {subject.topics.map((topic: any) => (
                          <div key={topic.id}>
                            <button
                              onClick={() => toggleTopic(topic.id)}
                              className="w-full text-left p-2 hover:bg-gray-50 rounded-md flex items-center justify-between"
                            >
                              <span className="text-sm text-gray-700">{topic.name}</span>
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
                                    onClick={() => handleLessonClick(subject.id, topic.id, lesson.id)}
                                    className={`w-full text-left p-2 rounded-md flex items-center space-x-2
                                      ${selectedLesson === lesson.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}
                                    `}
                                  >
                                    {lesson.completed ? (
                                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                    ) : (
                                      <DocumentCheckIcon className="h-5 w-5 text-gray-400" />
                                    )}
                                    <span className="text-sm">{lesson.title}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 lg:ml-80">
              <div className="max-w-4xl mx-auto px-4 py-6 lg:px-8">
                {showSubjectSelection ? (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h1 className="text-3xl font-bold text-gray-900">Select Your Subjects</h1>
                      <p className="mt-2 text-gray-600">Choose the subjects you want to study</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {subjects.map(subject => (
                        <button
                          key={subject.id}
                          onClick={() => handleSubjectSelect(subject.id)}
                          className={`p-6 rounded-xl border-2 transition-all ${
                            selectedSubjects.includes(subject.id)
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-400'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <span className="text-3xl">{subject.icon}</span>
                            <div className="text-left">
                              <h3 className="font-semibold text-gray-900">{subject.name}</h3>
                              <p className="text-sm text-gray-500">{subject.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="text-center">
                      <button
                        onClick={handleStartLearning}
                        disabled={selectedSubjects.length === 0}
                        className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                          selectedSubjects.length > 0
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Start Learning
                      </button>
                    </div>
                  </div>
                ) : selectedLesson ? (
                  <div className="space-y-6">
                    {/* Lesson Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <h1 className="text-2xl font-bold text-gray-900">
                        {subjects
                          .filter(subject => selectedSubjects.includes(subject.id))
                          .flatMap(subject => subject.topics)
                          .find((topic: any) => topic.id === selectedTopic)
                          ?.lessons.find((lesson: any) => lesson.id === selectedLesson)?.title}
                      </h1>
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

                    {/* Lesson Content */}
                    <div className="bg-white rounded-xl shadow-sm">
                      {/* Tabs */}
                      <MobileResponsiveTabs
                        tabs={[
                          { id: "theory", label: "Theory" },
                          { id: "practice", label: "Practice" },
                          { id: "quiz", label: "Quiz" }
                        ]}
                        activeTab={activeTab}
                        onTabChange={(tab) => setActiveTab(tab)}
                      />

                      {/* Content */}
                      <div className="p-4 md:p-6">
                        {getActiveLessonContent()}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-900">Select a Lesson</h2>
                    <p className="mt-2 text-gray-600">Choose a lesson from the menu to start learning</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </AuthCheck>
  );
};

export default StudyPage;
