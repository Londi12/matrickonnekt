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
    question: "Simplify: 2(x + 3)(x - 1)",
    answer: "2x² + 4x - 6",
    explanation: "First expand brackets: (x + 3)(x - 1) = x² - x + 3x - 3 = x² + 2x - 3. Then multiply by 2: 2x² + 4x - 6"
  },
  {
    question: "Expand: (x - 5)(x + 4)",
    answer: "x² - x - 20",
    explanation: "Use FOIL: First (x × x) + Outside (x × 4) + Inside (-5 × x) + Last (-5 × 4) = x² + 4x - 5x - 20 = x² - x - 20"
  },
  {
    question: "Multiply: -3a(2a - 7)",
    answer: "-6a² + 21a",
    explanation: "Multiply -3a with each term: -3a × 2a = -6a² and -3a × (-7) = 21a"
  }
];

export default function AlgebraMultiplyingExpressions() {
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
            <li>Multiply a number with a bracket (single term × bracket)</li>
            <li>Multiply two brackets (binomial × binomial)</li>
            <li>Use FOIL (First, Outside, Inside, Last)</li>
            <li>Simplify your final answer</li>
          </ul>
        </section>

        {/* Part 1: Starting Simple */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: Starting Simple – One Term × Bracket</h2>
          <p className="text-gray-600 mb-4">
            When you multiply a number or variable by a bracket, multiply with every term inside the bracket.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example 1:</h3>
              <p className="text-gray-700">3(x + 4)</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">= 3 × x + 3 × 4</p>
                <p className="text-gray-600">= 3x + 12</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example 2:</h3>
              <p className="text-gray-700">-2a(3a - 5)</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">= -2a × 3a + (-2a) × (-5)</p>
                <p className="text-gray-600">= -6a² + 10a</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: Multiply Two Brackets */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Multiply Two Brackets</h2>
          <p className="text-gray-600 mb-4">
            When you see something like (x + 2)(x + 3), you're multiplying two binomials (two-term brackets).
          </p>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-4">The FOIL Method:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-900">First:</p>
                <p className="text-gray-600">x × x = x²</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Outside:</p>
                <p className="text-gray-600">x × 3 = 3x</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Inside:</p>
                <p className="text-gray-600">2 × x = 2x</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Last:</p>
                <p className="text-gray-600">2 × 3 = 6</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">Then add: x² + 3x + 2x + 6 = x² + 5x + 6</p>
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
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Don't forget to multiply every term</p>
              <p className="text-red-600 text-sm mt-1">Both brackets must multiply every term inside.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Watch your signs</p>
              <p className="text-red-600 text-sm mt-1">Negative numbers can easily mess up your answer.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Combine like terms at the end</p>
              <p className="text-red-600 text-sm mt-1">You're not done until everything is simplified.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 