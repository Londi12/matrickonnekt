"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AuthCheck from '../components/AuthCheck';
import { useAuth } from '../context/AuthContext';
import { recordQuizCompletion } from '../utils/userProgress';
import ProblemSetCard from '../components/ProblemSetCard';
import { 
  BookOpenIcon, 
  ClockIcon, 
  StarIcon, 
  TrophyIcon, 
  FireIcon,
  BookmarkIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import SignInModal from '../components/SignInModal';

// Mock data for demonstration
const subjects = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '📐',
    topics: [
      { id: 'algebra', name: 'Algebra' },
      { id: 'patterns', name: 'Patterns' },
      { id: 'functions', name: 'Functions and Graphs' },
      { id: 'finance', name: 'Finance, Growth and Decay' },
      { id: 'calculus', name: 'Calculus' },
      { id: 'probability', name: 'Probability' },
      { id: 'statistics', name: 'Statistics' },
      { id: 'trigonometry', name: 'Trigonometry' },
      { id: 'analytical', name: 'Analytical Geometry' },
      { id: 'euclidean', name: 'Euclidean Geometry' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'mathlit',
    name: 'Mathematical Literacy',
    icon: '📊',
    topics: [
      { id: 'numbers', name: 'Numbers and Calculations' },
      { id: 'patterns', name: 'Patterns and Relationships' },
      { id: 'finance', name: 'Finance' },
      { id: 'measurement', name: 'Measurement' },
      { id: 'data', name: 'Data Handling' },
      { id: 'probability', name: 'Probability' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'lifesciences',
    name: 'Life Sciences',
    icon: '🧬',
    topics: [
      { id: 'dna', name: 'DNA: Code of Life' },
      { id: 'meiosis', name: 'Meiosis' },
      { id: 'vertebrate-reproduction', name: 'Reproduction in Vertebrates' },
      { id: 'human-reproduction', name: 'Human Reproduction' },
      { id: 'genetics', name: 'Genetics and Inheritance' },
      { id: 'evolution', name: 'Evolution by Natural Selection' },
      { id: 'human-impact', name: 'Human Impact on the Environment' },
      { id: 'exam-skills', name: 'Exam Skills & Application' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'physics',
    name: 'Physical Sciences',
    icon: '⚡',
    topics: [
      { id: 'electric-circuits', name: 'Electric Circuits' },
      { id: 'electrodynamics', name: 'Electrodynamics' },
      { id: 'electrostatics', name: 'Electrostatics' },
      { id: 'work-energy', name: 'Work, Energy, and Power' },
      { id: 'momentum', name: 'Momentum and Impulse' },
      { id: 'waves', name: 'Waves, Sound, and Light' },
      { id: '2d-motion', name: 'Two-Dimensional Motion' },
      { id: 'organic-chemistry', name: 'Organic Chemistry' },
      { id: 'chemical-equilibrium', name: 'Chemical Equilibrium' },
      { id: 'acids-bases', name: 'Acids and Bases' },
      { id: 'reaction-rates', name: 'Reaction Rates' },
      { id: 'electrochemistry', name: 'Electrochemistry' },
      { id: 'gas-laws', name: 'Ideal Gases and Gas Laws' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'accounting',
    name: 'Accounting',
    icon: '💰',
    topics: [
      { id: 'concepts', name: 'Accounting Concepts and GAAP' },
      { id: 'financial', name: 'Financial Statements' },
      { id: 'companies', name: 'Companies' },
      { id: 'inventory', name: 'Inventory Valuation' },
      { id: 'reconciliations', name: 'Reconciliations' },
      { id: 'assets', name: 'Fixed Assets' },
      { id: 'controls', name: 'Internal Controls and Ethics' },
      { id: 'budgeting', name: 'Budgeting' },
      { id: 'cost', name: 'Cost Accounting' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'business',
    name: 'Business Studies',
    icon: '🏢',
    topics: [
      { id: 'macro-environment', name: 'Macro Environment' },
      { id: 'micro-environment', name: 'Micro Environment' },
      { id: 'business-strategies', name: 'Business Strategies' },
      { id: 'creative-thinking', name: 'Creative Thinking' },
      { id: 'business-sectors', name: 'Business Sectors' },
      { id: 'ownership', name: 'Forms of Ownership' },
      { id: 'hr-function', name: 'Human Resources' },
      { id: 'workplace-legislation', name: 'Workplace Legislation' },
      { id: 'ethics', name: 'Ethics and Professionalism' },
      { id: 'csr-csi', name: 'CSR and CSI' },
      { id: 'investment', name: 'Investment' },
      { id: 'presentation', name: 'Presentation Skills' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'economics',
    name: 'Economics',
    icon: '📈',
    topics: [
      { id: 'circular-flow', name: 'Circular Flow' },
      { id: 'business-cycles', name: 'Business Cycles' },
      { id: 'public-sector', name: 'Public Sector' },
      { id: 'foreign-exchange', name: 'Foreign Exchange' },
      { id: 'growth-development', name: 'Growth and Development' },
      { id: 'inflation', name: 'Inflation' },
      { id: 'labour-markets', name: 'Labour Markets' },
      { id: 'monetary-policy', name: 'Monetary Policy' },
      { id: 'population', name: 'Population' },
      { id: 'poverty-inequality', name: 'Poverty and Inequality' },
      { id: 'trade', name: 'Trade' },
      { id: 'contemporary', name: 'Contemporary Issues' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🌍',
    topics: [
      { id: 'climatology', name: 'Climatology' },
      { id: 'geomorphology', name: 'Geomorphology' },
      { id: 'settlements', name: 'Rural and Urban Settlements' },
      { id: 'economic-geography', name: 'Economic Geography' },
      { id: 'resources', name: 'Resources and Sustainability' },
      { id: 'mapwork', name: 'Mapwork & GIS' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'history',
    name: 'History',
    icon: '📚',
    topics: [
      { id: 'cold-war', name: 'The Cold War' },
      { id: 'independent-africa', name: 'Independent Africa' },
      { id: 'civil-protests', name: 'Civil Society Protests' },
      { id: 'sa-crisis', name: 'South Africa 1970s–1980s' },
      { id: 'democracy', name: 'The Coming of Democracy' },
      { id: 'new-world-order', name: 'New World Order' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'lifeskills',
    name: 'Life Orientation',
    icon: '🎯',
    topics: [
      { id: 'self-development', name: 'Development of the Self' },
      { id: 'social-responsibility', name: 'Social Responsibility' },
      { id: 'democracy', name: 'Democracy and Human Rights' },
      { id: 'careers', name: 'Careers and Career Choices' },
      { id: 'study-skills', name: 'Study Skills' },
      { id: 'physical-education', name: 'Physical Education' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'cat',
    name: 'Computer Applications Technology',
    icon: '💻',
    topics: [
      { id: 'digital-devices', name: 'Digital Devices' },
      { id: 'productivity', name: 'Productivity Applications' },
      { id: 'data-management', name: 'Data Management' },
      { id: 'communication', name: 'Communication and Networks' },
      { id: 'web-design', name: 'Web Design' },
      { id: 'practical-skills', name: 'Practical Skills' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'it',
    name: 'Information Technology',
    icon: '🖥️',
    topics: [
      { id: 'systems-tech', name: 'Systems Technologies' },
      { id: 'data-management', name: 'Data and Information Management' },
      { id: 'software-dev', name: 'Software Development' },
      { id: 'networks', name: 'Networks' },
      { id: 'security', name: 'Security and Ethics' },
      { id: 'practical-skills', name: 'Practical Skills' },
      { id: 'tests', name: 'Tests' }
    ]
  },
  {
    id: 'tourism',
    name: 'Tourism',
    icon: '✈️',
    topics: [
      { id: 'tourism-sectors', name: 'Tourism Sectors' },
      { id: 'tourism-marketing', name: 'Tourism Marketing' },
      { id: 'tourism-geography', name: 'Tourism Geography' },
      { id: 'tourism-impact', name: 'Impact of Tourism' },
      { id: 'tourism-development', name: 'Tourism Development' },
      { id: 'tourism-management', name: 'Tourism Management' },
      { id: 'tourism-trends', name: 'Tourism Trends' },
      { id: 'sa-tourism', name: 'Tourism in South Africa' },
      { id: 'tests', name: 'Tests' }
    ]
  }
];

const difficultyLevels = ['Beginner', 'Intermediate', 'Advanced'];

const problemSets = [
  {
    id: 1,
    title: 'Algebra Basics',
    description: 'Master fundamental algebraic concepts and equations',
    subject: 'Mathematics',
    topic: 'Algebra',
    difficulty: 'Beginner' as const,
    duration: '15 min',
    isBookmarked: false
  },
  {
    id: 2,
    title: 'Electric Circuits Challenge',
    description: 'Test your understanding of circuit analysis',
    subject: 'Physical Sciences',
    topic: 'Electric Circuits',
    difficulty: 'Intermediate' as const,
    duration: '20 min',
    isChallenge: true,
    isBookmarked: true
  },
  {
    id: 3,
    title: 'DNA Structure and Function',
    description: 'Explore the building blocks of life',
    subject: 'Life Sciences',
    topic: 'DNA: Code of Life',
    difficulty: 'Beginner' as const,
    duration: '25 min',
    isBookmarked: false
  },
  {
    id: 4,
    title: 'Business Environment Analysis',
    description: 'Analyze macro and micro business environments',
    subject: 'Business Studies',
    topic: 'Macro Environment',
    difficulty: 'Advanced' as const,
    duration: '30 min',
    isBookmarked: false
  },
  {
    id: 5,
    title: 'Economic Indicators',
    description: 'Understand key economic indicators and their impact',
    subject: 'Economics',
    topic: 'Business Cycles',
    difficulty: 'Intermediate' as const,
    duration: '20 min',
    isBookmarked: false
  },
  {
    id: 6,
    title: 'Financial Statements',
    description: 'Learn to prepare and analyze financial statements',
    subject: 'Accounting',
    topic: 'Financial Statements',
    difficulty: 'Intermediate' as const,
    duration: '25 min',
    isBookmarked: false
  },
  {
    id: 7,
    title: 'Climate Patterns',
    description: 'Study weather patterns and climate systems',
    subject: 'Geography',
    topic: 'Climatology',
    difficulty: 'Beginner' as const,
    duration: '20 min',
    isBookmarked: false
  },
  {
    id: 8,
    title: 'Cold War Analysis',
    description: 'Analyze key events of the Cold War period',
    subject: 'History',
    topic: 'The Cold War',
    difficulty: 'Advanced' as const,
    duration: '30 min',
    isBookmarked: false
  },
  {
    id: 9,
    title: 'Career Planning',
    description: 'Develop your career path and goals',
    subject: 'Life Orientation',
    topic: 'Careers and Career Choices',
    difficulty: 'Beginner' as const,
    duration: '15 min',
    isBookmarked: false
  },
  {
    id: 10,
    title: 'Web Design Basics',
    description: 'Learn HTML and CSS fundamentals',
    subject: 'Computer Applications Technology',
    topic: 'Web Design',
    difficulty: 'Beginner' as const,
    duration: '25 min',
    isBookmarked: false
  },
  {
    id: 11,
    title: 'Network Security',
    description: 'Understand cybersecurity principles',
    subject: 'Information Technology',
    topic: 'Security and Ethics',
    difficulty: 'Advanced' as const,
    duration: '30 min',
    isBookmarked: false
  },
  {
    id: 12,
    title: 'Tourism Marketing',
    description: 'Learn effective tourism marketing strategies',
    subject: 'Tourism',
    topic: 'Tourism Marketing',
    difficulty: 'Intermediate' as const,
    duration: '20 min',
    isBookmarked: false
  }
];

export default function PracticePage() {
  const { user, loading } = useAuth();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [bookmarkedSets, setBookmarkedSets] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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
            <h1 className="text-2xl font-bold text-gray-900">Practice Problems</h1>
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

  const handleBookmark = (id: number) => {
    if (user) {
      setBookmarkedSets(prev => 
        prev.includes(id) 
          ? prev.filter(setId => setId !== id)
          : [...prev, id]
      );
    }
  };

  const handleStartPractice = async (problemSet: typeof problemSets[0]) => {
    if (user) {
      await recordQuizCompletion(user.uid, problemSet.subject, 0);
    }
  };

  const filteredProblemSets = problemSets.filter(set => {
    if (showBookmarked && !bookmarkedSets.includes(set.id)) return false;
    if (selectedSubject && set.subject !== selectedSubject) return false;
    if (selectedTopic && set.topic !== selectedTopic) return false;
    if (selectedDifficulty && set.difficulty !== selectedDifficulty) return false;
    if (searchTerm && !set.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const getTopicsForSubject = (subjectId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    return subject ? subject.topics : [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Practice Problems</h1>
          <p className="text-xl text-gray-600">Sharpen your skills with interactive problems</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Current Streak</p>
                <p className="text-2xl font-bold text-gray-900">5 days</p>
              </div>
              <FireIcon className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total XP</p>
                <p className="text-2xl font-bold text-gray-900">1,250</p>
              </div>
              <StarIcon className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Problems Solved</p>
                <p className="text-2xl font-bold text-gray-900">48</p>
              </div>
              <TrophyIcon className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Accuracy</p>
                <p className="text-2xl font-bold text-gray-900">85%</p>
              </div>
              <BookOpenIcon className="h-8 w-8 text-green-500" />
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedTopic('');
                }}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">All Subjects</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.name}>
                    {subject.icon} {subject.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                disabled={!selectedSubject}
              >
                <option value="">All Topics</option>
                {getTopicsForSubject(selectedSubject).map((topic) => (
                  <option key={topic.id} value={topic.name}>
                    {topic.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">All Levels</option>
                {difficultyLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search problems..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => setShowBookmarked(!showBookmarked)}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <BookmarkIcon className="h-5 w-5 mr-2" />
                {showBookmarked ? 'Show All' : 'Show Bookmarked'}
              </button>
            </div>
          </div>
        </div>

        {/* Problem Sets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProblemSets.map((set) => (
            <AuthCheck key={set.id} required={true}>
              <ProblemSetCard
                title={set.title}
                description={set.description}
                topic={set.topic}
                difficulty={set.difficulty}
                duration={set.duration}
                isChallenge={set.isChallenge}
                isBookmarked={bookmarkedSets.includes(set.id)}
                onBookmark={() => handleBookmark(set.id)}
                onStart={() => handleStartPractice(set)}
              />
            </AuthCheck>
          ))}
        </div>
      </main>
    </div>
  );
} 