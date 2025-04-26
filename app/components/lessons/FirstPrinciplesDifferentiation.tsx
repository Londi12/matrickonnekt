"use client";

import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface QuizQuestion {
  question: string;
  answer: string;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Find the derivative of f(x) = x³ using first principles",
    answer: "3x²",
    explanation: "Using the formula: f'(x) = lim(h→0) [(x+h)³ - x³]/h = lim(h→0) [x³ + 3x²h + 3xh² + h³ - x³]/h = lim(h→0) [3x²h + 3xh² + h³]/h = lim(h→0) [3x² + 3xh + h²] = 3x²"
  },
  {
    question: "Find the derivative of f(x) = 2x using first principles",
    answer: "2",
    explanation: "Using the formula: f'(x) = lim(h→0) [2(x+h) - 2x]/h = lim(h→0) [2x + 2h - 2x]/h = lim(h→0) [2h]/h = lim(h→0) 2 = 2"
  },
  {
    question: "Find the derivative of f(x) = x² + 3x using first principles",
    answer: "2x + 3",
    explanation: "Using the formula: f'(x) = lim(h→0) [(x+h)² + 3(x+h) - (x² + 3x)]/h = lim(h→0) [x² + 2xh + h² + 3x + 3h - x² - 3x]/h = lim(h→0) [2xh + h² + 3h]/h = lim(h→0) [2x + h + 3] = 2x + 3"
  }
];

export default function FirstPrinciplesDifferentiation() {
  const [quizAnswers, setQuizAnswers] = useState<string[]>(Array(quizQuestions.length).fill(''));
  const [quizResults, setQuizResults] = useState<boolean[]>([]);

  const handleQuizSubmit = () => {
    const results = quizAnswers.map((answer, index) => {
      const correctAnswer = quizQuestions[index].answer.toLowerCase();
      return answer.toLowerCase() === correctAnswer;
    });
    setQuizResults(results);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Learning Objectives */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>What "first principles" means in calculus</li>
            <li>How to find the derivative using first principles</li>
            <li>How to apply it to simple functions</li>
          </ul>
        </section>

        {/* Part 1: What is Differentiation? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is Differentiation?</h2>
          <p className="text-gray-600 mb-4">
            Differentiation helps us find the gradient (slope) of a curve at any point.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">A curve doesn't have a constant gradient like a straight line, so we use limits to get an exact value at a point.</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">First principles is like starting from scratch — it's the "long way" to get a derivative, but it shows how everything works.</p>
            </div>
          </div>
        </section>

        {/* Part 2: The Formula */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: The Formula</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">From first principles:</p>
            <p className="text-gray-700 font-mono text-center">f'(x) = lim(h→0) [f(x+h) - f(x)]/h</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">This is the definition of a derivative.</p>
              <p className="text-gray-600 mt-2">You're calculating the gradient between two points that get really close together.</p>
            </div>
          </div>
        </section>

        {/* Part 3: Example Step-by-Step */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Example Step-by-Step</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Let's find the derivative of: f(x) = x²</p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-gray-700 font-medium">Step 1: Use the formula</p>
                <p className="text-gray-700 font-mono text-center">f'(x) = lim(h→0) [(x+h)² - x²]/h</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Step 2: Expand</p>
                <p className="text-gray-700 font-mono text-center">(x+h)² = x² + 2xh + h²</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Step 3: Subtract</p>
                <p className="text-gray-700 font-mono text-center">(x² + 2xh + h²) - x² = 2xh + h²</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Step 4: Divide by h</p>
                <p className="text-gray-700 font-mono text-center">(2xh + h²)/h = 2x + h</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Step 5: Take the limit as h→0</p>
                <p className="text-gray-700 font-mono text-center">f'(x) = 2x</p>
              </div>
              <p className="text-gray-600 mt-4">So the derivative of x² is 2x.</p>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
          <div className="space-y-6">
            {quizQuestions.map((question, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900 mb-2">{question.question}</p>
                <input
                  type="text"
                  value={quizAnswers[index]}
                  onChange={(e) => {
                    const newAnswers = [...quizAnswers];
                    newAnswers[index] = e.target.value;
                    setQuizAnswers(newAnswers);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your answer"
                />
                {quizResults[index] !== undefined && (
                  <div className="mt-2 flex items-center">
                    {quizResults[index] ? (
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    <p className="text-sm text-gray-600">{question.explanation}</p>
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={handleQuizSubmit}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Check Answers
            </button>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Tips</h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">First principles is the foundation of all differentiation</p>
              <p className="text-yellow-600 text-sm mt-1">Even though you'll mostly use rules later, this shows why those rules work</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">It's also tested in exams</p>
              <p className="text-yellow-600 text-sm mt-1">Especially to prove you understand what a derivative actually means</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Remember the formula</p>
              <p className="text-yellow-600 text-sm mt-1">f'(x) = lim(h→0) [f(x+h) - f(x)]/h</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 