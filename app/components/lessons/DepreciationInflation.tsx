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
    question: "A laptop costs R12 000 and depreciates at 15% per year. What's its value after 4 years?",
    answer: "R6 632.29",
    explanation: "Using A = P(1 - i)ⁿ, A = 12000(1 - 0.15)⁴ = 12000(0.85)⁴ ≈ R6 632.29"
  },
  {
    question: "A house currently costs R500 000. If inflation is 8% per year, how much will it cost in 5 years?",
    answer: "R734 664.03",
    explanation: "Using A = P(1 + i)ⁿ, A = 500000(1.08)⁵ ≈ R734 664.03"
  },
  {
    question: "A car loses 25% of its value each year. It was bought for R240 000. What's its value after 3 years?",
    answer: "R101 250",
    explanation: "Using A = P(1 - i)ⁿ, A = 240000(0.75)³ ≈ R101 250"
  },
  {
    question: "In 2010, petrol cost R8/litre. If inflation is 7%, estimate the cost in 2025.",
    answer: "R22.17/litre",
    explanation: "Using A = P(1 + i)ⁿ, A = 8(1.07)¹⁵ ≈ R22.17/litre"
  }
];

export default function DepreciationInflation() {
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
            <li>What depreciation and inflation mean</li>
            <li>How to calculate them</li>
            <li>How they affect your money and assets</li>
            <li>Real-world examples you can relate to</li>
          </ul>
        </section>

        {/* Part 1: What is Depreciation? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is Depreciation?</h2>
          <p className="text-gray-600 mb-4">
            Depreciation is when something loses value over time.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">It usually applies to things like cars, machines, electronics, etc.</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Formula (Exponential Decay):</p>
              <p className="text-gray-700 font-mono text-center">A = P(1 - i)ⁿ</p>
              <div className="mt-4">
                <p className="text-gray-700 font-medium">Where:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                  <li>A = value after time</li>
                  <li>P = original value (purchase price)</li>
                  <li>i = depreciation rate per year (as a decimal)</li>
                  <li>n = number of years</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-2">Example:</h3>
              <p className="text-gray-700">A phone costs R10 000 and loses 20% of its value each year:</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">A = 10000(1 - 0.20)²</p>
                <p className="text-gray-600">= 10000(0.8)²</p>
                <p className="text-gray-600">= 10000(0.64)</p>
                <p className="text-gray-700 font-medium">= R6 400</p>
                <p className="text-gray-600 mt-2">After 2 years, it's worth R6 400.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: What is Inflation? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: What is Inflation?</h2>
          <p className="text-gray-600 mb-4">
            Inflation is when the value of money decreases, and prices increase.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">If inflation is 5% per year, the same item will cost more in the future.</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Formula (Exponential Growth):</p>
              <p className="text-gray-700 font-mono text-center">A = P(1 + i)ⁿ</p>
              <p className="text-gray-600 mt-2">Same as compound interest – but now it shows how prices go up over time.</p>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-2">Example:</h3>
              <p className="text-gray-700">A loaf of bread costs R15 now. Inflation is 6% per year. How much in 3 years?</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">A = 15(1 + 0.06)³</p>
                <p className="text-gray-600">= 15(1.191016)</p>
                <p className="text-gray-700 font-medium">≈ R17.87</p>
                <p className="text-gray-600 mt-2">So, in 3 years, the same bread will cost around R17.87.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3: Key Differences */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Key Differences</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700">Concept</th>
                  <th className="px-4 py-2 text-left text-gray-700">Direction</th>
                  <th className="px-4 py-2 text-left text-gray-700">Formula</th>
                  <th className="px-4 py-2 text-left text-gray-700">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 text-gray-600">Depreciation</td>
                  <td className="px-4 py-2 text-gray-600">Down</td>
                  <td className="px-4 py-2 text-gray-600 font-mono">A = P(1 - i)ⁿ</td>
                  <td className="px-4 py-2 text-gray-600">Car losing value</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-600">Inflation</td>
                  <td className="px-4 py-2 text-gray-600">Up</td>
                  <td className="px-4 py-2 text-gray-600 font-mono">A = P(1 + i)ⁿ</td>
                  <td className="px-4 py-2 text-gray-600">Groceries getting expensive</td>
                </tr>
              </tbody>
            </table>
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
              <p className="text-yellow-700 font-medium">Depreciation → your assets lose value</p>
              <p className="text-yellow-600 text-sm mt-1">Especially true for cars and electronics</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Inflation → your money loses buying power</p>
              <p className="text-yellow-600 text-sm mt-1">Prices go up over time</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Use these formulas to plan ahead</p>
              <p className="text-yellow-600 text-sm mt-1">Make smarter financial choices</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 