"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import MobileResponsiveTabs from './MobileResponsiveTabs';
import { useLanguage } from '../context/LanguageContext';
import { translatedLessonContent } from '../data/translatedContent';
import { getLessonTranslations } from '../utils/translations';
import JsonLd from './JsonLd';

// Dynamically import the plotting library to avoid SSR issues
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface LessonContent {
  id: string;
  title: string;
  theory: string[];
  examples: Array<{
    problem: string;
    solution: string;
  }>;
  interactive: Array<{
    type: string;
    data: any;
  }>;
  quiz: QuizQuestion[];
}

interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  lessons: LessonContent[];
}

// Import the math modules
import { mathModules } from "../data/mathModules";

// Quiz Component
const Quiz = ({ 
  questions, 
  onComplete 
}: { 
  questions: QuizQuestion[]; 
  onComplete: (score: number) => void;
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = index;
    setUserAnswers(newUserAnswers);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      onComplete(correctAnswers + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0));
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1]);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setCorrectAnswers(0);
    setUserAnswers([]);
  };

  if (quizCompleted) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h4 className="text-lg font-medium text-gray-900 mb-4 text-center">
          Quiz Completed!
        </h4>
        <div className="text-center mb-6">
          <p className="text-2xl font-bold text-blue-600 mb-2">
            Score: {correctAnswers} / {questions.length}
          </p>
          <p className="text-gray-600">
            {correctAnswers === questions.length
              ? "Perfect! You got all questions right!"
              : correctAnswers > questions.length / 2
              ? "Good job! You passed the quiz."
              : "Keep practicing to improve your score."}
          </p>
        </div>
        
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={`review-${index}`}
              className="p-4 bg-gray-50 rounded-lg"
            >
              <p className="font-medium text-gray-900 mb-2">
                Question {index + 1}: {question.question}
              </p>
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => (
                  <div 
                    key={`review-option-${index}-${optionIndex}`}
                    className={`p-2 rounded ${
                      optionIndex === question.correctAnswer
                        ? "bg-green-100 text-green-800"
                        : optionIndex === userAnswers[index]
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100"
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-medium">Explanation:</span>{" "}
                {question.explanation}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={resetQuiz}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h4 className="text-lg font-medium text-gray-900 mb-4">
          Question {currentQuestion + 1}
        </h4>
        <p className="text-gray-700 mb-4">
          {questions[currentQuestion].question}
        </p>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, optionIndex) => (
            <div
              key={`option-${currentQuestion}-${optionIndex}`}
              className="flex items-center"
            >
              <input
                type="radio"
                id={`option-${currentQuestion}-${optionIndex}`}
                name={`question-${currentQuestion}`}
                className="mr-2"
                checked={selectedAnswer === optionIndex}
                onChange={() => handleAnswerSelect(optionIndex)}
              />
              <label
                htmlFor={`option-${currentQuestion}-${optionIndex}`}
                className="text-gray-700"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevQuestion}
          disabled={currentQuestion === 0}
          className={`px-4 py-2 rounded-lg ${
            currentQuestion === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-500">
          {currentQuestion + 1} of {questions.length}
        </span>
        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className={`px-4 py-2 rounded-lg ${
            selectedAnswer === null
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

// Examples Component
const Examples = ({ 
  examples,
  currentExample,
  showSolution,
  onShowSolution,
  onNext,
  onPrev,
  lessonId  // Add lessonId parameter
}: { 
  examples: Array<{ problem: string; solution: string }>;
  currentExample: number;
  showSolution: { [key: string]: boolean };
  onShowSolution: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  lessonId: string;  // Add lessonId type
}) => {
  const { language } = useLanguage();  // Add language context

  if (!examples || examples.length === 0) {
    return (
      <div className="text-center p-6">
        <p className="text-gray-500">
          No examples available for this lesson yet.
        </p>
      </div>
    );
  }

  // Try to get translated examples first
  const translatedExamples = translatedLessonContent[lessonId]?.[language]?.examples;
  const examplesToDisplay = translatedExamples || examples;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            Example {currentExample + 1}
          </h4>
          <p className="text-gray-700">
            {examplesToDisplay[currentExample].problem}
          </p>
        </div>
        <button
          onClick={() => onShowSolution(currentExample)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          {showSolution[currentExample] ? "Hide Solution" : "Show Solution"}
        </button>
        {showSolution[currentExample] && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 whitespace-pre-wrap font-mono">
              {examplesToDisplay[currentExample].solution}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={onPrev}
          disabled={currentExample === 0}
          className={`px-4 py-2 rounded-lg ${
            currentExample === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-500">
          {currentExample + 1} of {examplesToDisplay.length}
        </span>
        <button
          onClick={onNext}
          disabled={currentExample === examplesToDisplay.length - 1}
          className={`px-4 py-2 rounded-lg ${
            currentExample === examplesToDisplay.length - 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Theory Component
const Theory = ({ content, lessonId }: { content: string[], lessonId: string }) => {
  const { language } = useLanguage();
  
  // Try to get translated content first
  const translatedContent = translatedLessonContent[lessonId]?.[language]?.theory;
  const contentToDisplay = translatedContent || content;

  return (
    <div className="p-6">
      {contentToDisplay.map((point, index) => (
        <div 
          key={`theory-${index}`} 
          className="text-gray-700 mb-2"
          dangerouslySetInnerHTML={{ __html: point }}
        />
      ))}
    </div>
  );
};

export default function StudyPage() {
  const [activeModule, setActiveModule] = useState<string>("algebra");
  const [activeLesson, setActiveLesson] = useState(0);
  const [expandedModule, setExpandedModule] = useState<string>("");
  const [showSolution, setShowSolution] = useState<{ [key: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState<"theory" | "examples" | "quiz">("theory");
  const [currentExample, setCurrentExample] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentModule = mathModules.find((m) => m.id === activeModule)!;
  const currentLesson = currentModule.lessons[activeLesson];

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 1024);
    };
    
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  const tabs = [
    { id: "theory", label: "Theory" },
    { id: "examples", label: "Examples" },
    { id: "quiz", label: "Quiz" },
  ];

  const handleNextExample = () => {
    if (
      currentModule.lessons[activeLesson].examples &&
      currentExample < currentModule.lessons[activeLesson].examples.length - 1
    ) {
      setCurrentExample(currentExample + 1);
    }
  };

  const handlePrevExample = () => {
    if (currentExample > 0) {
      setCurrentExample(currentExample - 1);
    }
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? "" : moduleId);
  };

  const handleNextLesson = () => {
    if (activeLesson < currentModule.lessons.length - 1) {
      setActiveLesson(activeLesson + 1);
      setCurrentExample(0);
      setShowSolution({});
    }
  };
  const handleQuizComplete = (score: number) => {
    if (currentLesson?.quiz && score === currentLesson.quiz.length) {
      setCompletedLessons(new Set([...Array.from(completedLessons), activeLesson]));
    }
  };

  return (
    <article className="study-page">
      <JsonLd 
        type="Course"
        data={{
          name: currentLesson?.title,
          description: currentLesson?.theory[0],
          provider: {
            '@type': 'Organization',
            name: 'Matrickonnekt',
            sameAs: 'https://matrickonnekt.netlify.app'
          },
          educationalLevel: 'Grade 12',
          teaches: currentLesson?.title,
          learningResourceType: 'Interactive Lesson'
        }}
      />
      
      <header className="study-page-header">
        <h1 className="text-3xl font-bold mb-4">{currentLesson?.title}</h1>
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="flex space-x-2">
            <li><a href="/study">Study</a></li>
            <li>/</li>
            <li aria-current="page">{currentLesson?.title}</li>
          </ol>
        </nav>
      </header>

      <main className="study-content">
        <section aria-label="Theory" className="theory-section mb-8">
          <h2 className="text-2xl font-semibold mb-4">Theory</h2>
          {currentLesson?.theory.map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </section>

        <section aria-label="Examples" className="examples-section mb-8">
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          {currentLesson?.examples.map((example, index) => (
            <div key={index} className="example-item mb-6">
              <h3 className="text-xl font-medium mb-2">Example {index + 1}</h3>
              <div className="problem mb-2">
                <strong>Problem:</strong>
                <p>{example.problem}</p>
              </div>
              <div className="solution">
                <strong>Solution:</strong>
                <p>{example.solution}</p>
              </div>
            </div>
          ))}
        </section>

        {activeTab === "quiz" && (
          <Quiz
            questions={currentLesson.quiz || []}
            onComplete={handleQuizComplete}
          />
        )}
      </main>

      <footer className="study-page-footer mt-8">
        <nav aria-label="Lesson navigation" className="flex justify-between">
          {activeLesson > 0 && (
            <a href={`/study/${currentModule.lessons[activeLesson - 1].id}`} className="prev-lesson">
              ← Previous: {currentModule.lessons[activeLesson - 1].title}
            </a>
          )}
          {activeLesson < currentModule.lessons.length - 1 && (
            <a href={`/study/${currentModule.lessons[activeLesson + 1].id}`} className="next-lesson">
              Next: {currentModule.lessons[activeLesson + 1].title} →
            </a>
          )}
        </nav>
      </footer>
    </article>
  );
}