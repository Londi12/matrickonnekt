import React, { useState } from 'react';
import { 
  CheckCircleIcon,
  XCircleIcon,
  PlayIcon,
  PauseIcon,
  StopIcon
} from '@heroicons/react/24/outline';

interface QuizQuestion {
  question: string;
  answer: string;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Simplify: 2(3x - 4) + 5x",
    answer: "11x - 8",
    explanation: "First, distribute the 2: 6x - 8 + 5x. Then combine like terms: 11x - 8"
  },
  {
    question: "Simplify: 5a - (2a - 3)",
    answer: "3a + 3",
    explanation: "First, distribute the negative: 5a - 2a + 3. Then combine like terms: 3a + 3"
  },
  {
    question: "Simplify: -3(x - 6) + 4(2x + 1)",
    answer: "5x + 22",
    explanation: "First, distribute: -3x + 18 + 8x + 4. Then combine like terms: 5x + 22"
  }
];

export default function AlgebraSimplifyingExpressions() {
  const [quizAnswers, setQuizAnswers] = useState<string[]>(Array(quizQuestions.length).fill(''));
  const [quizResults, setQuizResults] = useState<boolean[]>([]);

  const handleQuizSubmit = () => {
    const results = quizAnswers.map((answer, index) => 
      answer.toLowerCase().replace(/\s+/g, '') === quizQuestions[index].answer.toLowerCase().replace(/\s+/g, '')
    );
    setQuizResults(results);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Learning Objectives */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Recognize like terms</li>
            <li>Combine like terms correctly</li>
            <li>Use brackets and simplify using the distributive property</li>
            <li>Avoid common mistakes</li>
          </ul>
        </section>

        {/* Quick Refresher */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Refresher</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">What's a term?</h3>
              <p className="text-gray-600">A term is a number, a letter, or both multiplied together.</p>
              <p className="text-gray-500 text-sm mt-1">Examples: 5x, -3, 7y²</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">What are like terms?</h3>
              <p className="text-gray-600">They have the same letter(s) and exponent(s).</p>
              <p className="text-gray-500 text-sm mt-1">Examples: 3x and 7x are like terms. 3x and 7x² are not.</p>
            </div>
          </div>
        </section>

        {/* How to Simplify */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Simplify</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900">Step 1: Combine like terms</h3>
              <p className="text-gray-600">Only like terms can be added or subtracted.</p>
              <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">Example: 4x + 3x = 7x</p>
                <p className="text-gray-700">Example: 6a - 2a = 4a</p>
                <p className="text-gray-500 text-sm mt-2">Note: 2a + 3b can't be simplified because a and b are different.</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Step 2: Use the distributive property</h3>
              <p className="text-gray-600">Multiply a number or letter outside a bracket with each term inside.</p>
              <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">Example: 2(x + 3) = 2x + 6</p>
                <p className="text-gray-700">Example: -3(a - 4) = -3a + 12</p>
                <p className="text-gray-500 text-sm mt-2">Take note of negative signs. That's where most people make mistakes.</p>
              </div>
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

        {/* Common Mistakes */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Common Mistakes</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Don't mix unlike terms</p>
              <p className="text-red-600 text-sm mt-1">3x + 4x² is not 7x². You can't combine those.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Be careful with signs</p>
              <p className="text-red-600 text-sm mt-1">-2(x + 3) becomes -2x - 6, not -2x + 6.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Distribute the minus</p>
              <p className="text-red-600 text-sm mt-1">-(x - 2) becomes -x + 2, not -x - 2.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 