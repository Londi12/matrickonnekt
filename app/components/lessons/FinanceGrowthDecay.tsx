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
    question: "You borrow R8 000 at 10% simple interest for 4 years. What's the total amount you'll pay back?",
    answer: "R11 200",
    explanation: "Using A = P(1 + i·n), A = 8000(1 + 0.10·4) = 8000(1.4) = R11 200"
  },
  {
    question: "You invest R2 000 at 5% compound interest for 2 years. What will it grow to?",
    answer: "R2 205",
    explanation: "Using A = P(1 + i)ⁿ, A = 2000(1.05)² = 2000(1.1025) = R2 205"
  },
  {
    question: "Which gives you more money after 5 years: R10 000 at 7% simple interest or R10 000 at 7% compound interest?",
    answer: "Compound interest",
    explanation: "Simple: 10000(1 + 0.07·5) = R13 500, Compound: 10000(1.07)⁵ ≈ R14 025.52"
  }
];

export default function FinanceGrowthDecay() {
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
            <li>The difference between simple and compound interest</li>
            <li>How to use the formulas</li>
            <li>How interest affects your money over time</li>
            <li>Real-life applications</li>
          </ul>
        </section>

        {/* Part 1: What is Interest? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is Interest?</h2>
          <p className="text-gray-600 mb-4">
            Interest is money earned or paid for using someone else's money.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">You earn interest when you invest or pay it when you borrow.</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">There are two types:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>Simple Interest: stays the same each year</li>
                <li>Compound Interest: grows more each year</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Part 2: Simple Interest */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Simple Interest</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 font-medium">Formula:</p>
              <p className="text-gray-700 font-mono text-center">A = P(1 + i·n)</p>
              <div className="mt-4">
                <p className="text-gray-700 font-medium">Where:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                  <li>A = final amount</li>
                  <li>P = principal (starting amount)</li>
                  <li>i = interest rate per year (as a decimal)</li>
                  <li>n = number of years</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example:</h3>
              <p className="text-gray-700">You invest R5 000 at 6% simple interest for 3 years:</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">A = 5000(1 + 0.06·3)</p>
                <p className="text-gray-600">= 5000(1 + 0.18)</p>
                <p className="text-gray-600">= 5000(1.18)</p>
                <p className="text-gray-700 font-medium">= R5 900</p>
                <p className="text-gray-600 mt-2">You earn R900 interest in total.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3: Compound Interest */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Compound Interest</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 font-medium">Formula:</p>
              <p className="text-gray-700 font-mono text-center">A = P(1 + i)ⁿ</p>
              <div className="mt-4">
                <p className="text-gray-700 font-medium">Same meanings as above, but the difference is that the interest is added to the total each year.</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example:</h3>
              <p className="text-gray-700">You invest R5 000 at 6% compound interest for 3 years:</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">A = 5000(1 + 0.06)³</p>
                <p className="text-gray-600">= 5000(1.06)³</p>
                <p className="text-gray-600">≈ 5000(1.191016)</p>
                <p className="text-gray-700 font-medium">≈ R5 955.08</p>
                <p className="text-gray-600 mt-2">You earn R955.08 – more than with simple interest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 4: Comparing the Two */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 4: Comparing the Two</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700">Year</th>
                  <th className="px-4 py-2 text-left text-gray-700">Simple Interest</th>
                  <th className="px-4 py-2 text-left text-gray-700">Compound Interest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 text-gray-600">1</td>
                  <td className="px-4 py-2 text-gray-600">R5 300</td>
                  <td className="px-4 py-2 text-gray-600">R5 300</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-600">2</td>
                  <td className="px-4 py-2 text-gray-600">R5 600</td>
                  <td className="px-4 py-2 text-gray-600">R5 618</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-600">3</td>
                  <td className="px-4 py-2 text-gray-600">R5 900</td>
                  <td className="px-4 py-2 text-gray-600">R5 955.08</td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-600 mt-4">The longer you invest, the bigger the difference.</p>
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
              <p className="text-yellow-700 font-medium">Simple interest = same amount added every year</p>
              <p className="text-yellow-600 text-sm mt-1">Compound interest = grows more each year</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Use compound for long-term savings or investments</p>
              <p className="text-yellow-600 text-sm mt-1">The longer the time, the bigger the difference</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Always convert interest rates to decimals</p>
              <p className="text-yellow-600 text-sm mt-1">6% = 0.06, 10% = 0.10, etc.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 