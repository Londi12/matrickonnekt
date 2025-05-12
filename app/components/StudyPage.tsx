"use client";

import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

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
  onPrev
}: { 
  examples: Array<{ problem: string; solution: string }>;
  currentExample: number;
  showSolution: { [key: string]: boolean };
  onShowSolution: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  if (!examples || examples.length === 0) {
    return (
      <div className="text-center p-6">
        <p className="text-gray-500">
          No examples available for this lesson yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            Example {currentExample + 1}
          </h4>
          <p className="text-gray-700">
            {examples[currentExample].problem}
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
              {examples[currentExample].solution}
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
          {currentExample + 1} of {examples.length}
        </span>
        <button
          onClick={onNext}
          disabled={currentExample === examples.length - 1}
          className={`px-4 py-2 rounded-lg ${
            currentExample === examples.length - 1
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
const Theory = ({ content }: { content: string[] }) => {
  return (
    <div className="p-6">
      {content.map((point, index) => (
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentModule = mathModules.find((m) => m.id === activeModule)!;
  const currentLesson = currentModule.lessons[activeLesson];

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
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-full">
        {/* Left Column - Menu Sidebar */}
        <div className="w-72 min-h-screen bg-gradient-to-b from-blue-600 to-indigo-600 p-4 text-white fixed left-0 top-16 overflow-visible">
          <div className="mb-4">
            <h1 className="text-base font-bold mb-1">Grade 12 Mathematics</h1>
            <p className="text-xs text-white/60">CAPS Curriculum</p>
          </div>

          <nav className="space-y-1 relative">
            {mathModules.map((module) => (
              <div key={module.id} className="rounded-lg mb-2 relative">
                <button
                  onClick={() => toggleModule(module.id)}
                  className={`w-full flex items-center justify-between p-3 text-left transition-colors rounded-lg ${
                    expandedModule === module.id
                      ? "bg-white/20 text-white font-medium"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="text-sm font-medium">{module.title}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      expandedModule === module.id ? "rotate-90" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Module Lessons */}
                <div
                  className={`fixed z-50 left-[17rem] top-auto mt-[-2.5rem] bg-indigo-700/95 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedModule === module.id ? "w-[280px] opacity-100" : "w-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="py-3 px-4">
                    <div className="flex items-center mb-3 border-b border-indigo-600 pb-2">
                      <span className="text-sm font-medium text-white">{module.title}</span>
                    </div>
                    
                    <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                    {module.lessons.length > 0 ? (
                      module.lessons.map((lesson, index) => (
                        <button
                          key={`lesson-${module.id}-${index}`}
                          onClick={() => {
                            setActiveModule(module.id);
                            setActiveLesson(index);
                            toggleModule(""); // Close after selection
                          }}
                          className={`w-full flex items-center text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            activeModule === module.id && activeLesson === index
                              ? "bg-blue-700/50 font-medium"
                              : "hover:bg-white/10"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 mr-2 text-xs">
                                {index + 1}
                              </span>
                              <span className="text-xs line-clamp-2">{lesson.title}</span>
                            </div>
                            {completedLessons.has(index) && (
                              <svg
                                className="w-3 h-3 text-green-400 ml-2 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="text-white/50 text-xs px-3 py-1.5">
                        Content coming soon
                      </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Right Column - Content Area */}
        <div className="flex-1 ml-72">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <div className="mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>{currentModule.title}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="font-medium text-gray-900">
                  {currentModule.lessons[activeLesson]?.title || "Lesson"}
                </span>
              </div>
            </div>

            {currentModule.lessons.length > 0 ? (
              <>
                {/* Modern Horizontal Scrollable Menu */}
                <div className="relative mb-4">
                  <div
                    className="flex space-x-2 overflow-x-auto pb-2"
                    ref={scrollContainerRef}
                  >
                    {[
                      { id: "theory", label: "Theory" },
                      { id: "examples", label: "Examples" },
                      { id: "quiz", label: "Quiz" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as "theory" | "examples" | "quiz")}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                          activeTab === tab.id
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                </div>

                {/* Divider Line */}
                <div className="border-b border-gray-200 mb-4" />

                {/* Content Area */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-[calc(100vh-16rem)] overflow-y-auto">
                  {activeTab === "theory" && (
                    <Theory content={currentLesson.theory} />
                  )}

                  {activeTab === "examples" && (
                    <div className="p-6">
                      <Examples
                        examples={currentLesson.examples}
                        currentExample={currentExample}
                        showSolution={showSolution}
                        onShowSolution={(index) =>
                          setShowSolution({
                            ...showSolution,
                            [index]: !showSolution[index],
                          })
                        }
                        onNext={handleNextExample}
                        onPrev={handlePrevExample}
                      />
                    </div>
                  )}

                  {activeTab === "quiz" && (
                    <div className="p-6">
                      <Quiz 
                        questions={currentLesson.quiz} 
                        onComplete={handleQuizComplete}
                      />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Content Coming Soon
                </h2>
                <p className="text-gray-500">
                  We're currently working on creating engaging content for this
                  module. Check back soon for updates!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 