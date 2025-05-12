"use client";

import { useState, useEffect } from 'react';
import { MockPaper, MockQuestion, UserMockExamResult } from '@/app/types/mockExam';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  ClockIcon, 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  BookmarkIcon 
} from '@heroicons/react/24/outline';

interface MockExamProps {
  paper: MockPaper;
  isTimed: boolean;
  onComplete: (result: UserMockExamResult) => void;
  onExit: () => void;
}

export default function MockExam({ paper, isTimed, onComplete, onExit }: MockExamProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(paper.timeLimit * 60); // Convert to seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [startTime] = useState<Date>(new Date());
  const [markedQuestions, setMarkedQuestions] = useState<Set<number>>(new Set());

  // Timer logic
  useEffect(() => {
    if (!isTimed || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimed, isSubmitted]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId: string, answer: string): void => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const toggleMarkQuestion = (index: number): void => {
    setMarkedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const calculateScore = (): UserMockExamResult => {
    let score = 0;
    const answersWithResults = paper.questions.map((question) => {
      const userAnswer = answers[question.id] || '';
      const isCorrect = userAnswer.toLowerCase() === question.answer.toLowerCase();
      const marksEarned = isCorrect ? question.marks : 0;
      score += marksEarned;
      return {
        questionId: question.id,
        answer: userAnswer,
        isCorrect,
        marksEarned,
      };
    });

    return {
      paperId: paper.id,
      completed: new Date(),
      score,
      timeSpent: paper.timeLimit * 60 - timeRemaining,
      answers: answersWithResults,
      badges: calculateBadges(score, paper.totalMarks),
    };
  };

  const calculateBadges = (score: number, total: number): string[] => {
    const badges: string[] = [];
    const percentage = (score / total) * 100;

    if (percentage >= 80) badges.push('exam_pro');
    if (percentage >= 50) badges.push('pass_master');
    // Add more badge logic here

    return badges;
  };

  const handleSubmit = (): void => {
    setIsSubmitted(true);
    const result = calculateScore();
    onComplete(result);
  };

  const currentQuestion = paper.questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{paper.name}</h2>
        {isTimed && (
          <div className="flex items-center space-x-2">
            <ClockIcon className="h-5 w-5 text-gray-500" />
            <span className={`font-mono ${timeRemaining < 300 ? 'text-red-600' : 'text-gray-900'}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>
        )}
      </div>

      {/* Question Navigation */}
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex space-x-2">
          {paper.questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
                ${currentQuestionIndex === index ? 'bg-blue-600 text-white' : 
                  answers[paper.questions[index].id] ? 'bg-green-100 text-green-800' : 
                  'bg-white border border-gray-300 text-gray-700'}
                ${markedQuestions.has(index) ? 'ring-2 ring-yellow-400' : ''}
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Current Question */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-sm text-gray-500">Question {currentQuestionIndex + 1}</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {currentQuestion.marks} marks
              </span>
              <span className={`text-sm px-2 py-1 rounded capitalize
                ${currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                  currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'}`}>
                {currentQuestion.difficulty}
              </span>
            </div>
          </div>
          <button
            onClick={() => toggleMarkQuestion(currentQuestionIndex)}
            className={`p-2 rounded-full ${
              markedQuestions.has(currentQuestionIndex)
                ? 'text-yellow-500 hover:text-yellow-600'
                : 'text-gray-400 hover:text-gray-500'
            }`}
          >
            <BookmarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="prose max-w-none mb-6">
          <div className="text-gray-900 mb-4">{currentQuestion.question}</div>
        </div>

        <div className="space-y-4">
          <textarea
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            rows={5}
            placeholder="Enter your answer here..."
          />
        </div>

        {isSubmitted && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              {answers[currentQuestion.id]?.toLowerCase() === currentQuestion.answer.toLowerCase() ? (
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              ) : (
                <XCircleIcon className="h-5 w-5 text-red-500" />
              )}
              <span className="font-medium">Answer:</span>
            </div>
            <p className="text-gray-700 mb-4">{currentQuestion.answer}</p>
            <div className="prose max-w-none">
              <h4 className="text-sm font-medium text-gray-900">Solution:</h4>
              <p className="text-gray-700">{currentQuestion.solution}</p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 disabled:opacity-50"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Previous</span>
        </button>

        <div className="flex space-x-4">
          {!isSubmitted && (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          )}
          {isSubmitted && (
            <button
              onClick={onExit}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Exit
            </button>
          )}
        </div>

        <button
          onClick={() => setCurrentQuestionIndex((prev) => Math.min(paper.questions.length - 1, prev + 1))}
          disabled={currentQuestionIndex === paper.questions.length - 1}
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 disabled:opacity-50"
        >
          <span>Next</span>
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
