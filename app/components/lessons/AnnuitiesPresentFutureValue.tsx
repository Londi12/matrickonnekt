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
    question: "You save R1 000 per month for 5 years at 10% interest (monthly). What's the future value?",
    answer: "R77 641.47",
    explanation: "Using A = P[(1 + i)ⁿ - 1]/i, where i = 0.10/12 = 0.008333, n = 60, A = 1000[(1.008333)⁶⁰ - 1]/0.008333 ≈ R77 641.47"
  },
  {
    question: "You want to borrow money and pay R1 500/month for 2 years at 12% interest (monthly). What's the loan amount?",
    answer: "R31 857.68",
    explanation: "Using P = A[1 - (1 + i)⁻ⁿ]/i, where i = 0.12/12 = 0.01, n = 24, P = 1500[1 - (1.01)⁻²⁴]/0.01 ≈ R31 857.68"
  },
  {
    question: "If you want R100 000 in 3 years, and you can save R2 500/month, what interest rate do you need?",
    answer: "1.5% monthly (18% annually)",
    explanation: "Using trial and error or a financial calculator, i ≈ 0.015 (1.5% monthly ≈ 18% annually)"
  }
];

export default function AnnuitiesPresentFutureValue() {
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
            <li>What annuities are</li>
            <li>The difference between future value and present value</li>
            <li>How to use the formulas</li>
            <li>Where these concepts show up in real life (like retirement or loans)</li>
          </ul>
        </section>

        {/* Part 1: What is an Annuity? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is an Annuity?</h2>
          <p className="text-gray-600 mb-4">
            An annuity is a series of regular, equal payments over time.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Examples:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
              <li>Paying R500 every month into a savings account</li>
              <li>Receiving R1 000 every month after retirement</li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">There are two types you need to know:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>Future Value Annuity: saving now to use later</li>
                <li>Present Value Annuity: borrowing now and paying off over time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Part 2: Future Value of an Annuity */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Future Value of an Annuity</h2>
          <p className="text-gray-600 mb-4">
            You want to know how much your monthly/annual payments will grow to in the future.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Formula:</p>
            <p className="text-gray-700 font-mono text-center">A = P[(1 + i)ⁿ - 1]/i</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Where:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>A = future value</li>
                <li>P = regular payment</li>
                <li>i = interest rate per period</li>
                <li>n = number of periods</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-2">Example:</h3>
              <p className="text-gray-700">You save R500 monthly for 2 years at 6% per year, compounded monthly.</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">P = 500</p>
                <p className="text-gray-600">i = 0.06 ÷ 12 = 0.005</p>
                <p className="text-gray-600">n = 2 × 12 = 24</p>
                <p className="text-gray-600">A = 500[(1 + 0.005)²⁴ - 1]/0.005</p>
                <p className="text-gray-700 font-medium">≈ R13 155.64</p>
                <p className="text-gray-600 mt-2">After 2 years, you'll have about R13 155.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3: Present Value of an Annuity */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Present Value of an Annuity</h2>
          <p className="text-gray-600 mb-4">
            Now you want to know what a future stream of payments is worth right now. This is used for loans or investments you start with a lump sum.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Formula:</p>
            <p className="text-gray-700 font-mono text-center">P = A[1 - (1 + i)⁻ⁿ]/i</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Where:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>P = present value (loan/investment now)</li>
                <li>A = regular payment</li>
                <li>i = interest rate per period</li>
                <li>n = number of periods</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-2">Example:</h3>
              <p className="text-gray-700">You want to pay off a loan with R2 000 monthly payments over 3 years at 8% interest (monthly).</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">A = 2000</p>
                <p className="text-gray-600">i = 0.08 ÷ 12 = 0.006667</p>
                <p className="text-gray-600">n = 3 × 12 = 36</p>
                <p className="text-gray-600">P = 2000[1 - (1 + 0.006667)⁻³⁶]/0.006667</p>
                <p className="text-gray-700 font-medium">≈ R64 039.45</p>
                <p className="text-gray-600 mt-2">So you're borrowing around R64 000.</p>
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

        {/* Quick Tips */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Tips</h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Use future value when you're saving or investing</p>
              <p className="text-yellow-600 text-sm mt-1">Plan for retirement or big purchases</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Use present value when you're borrowing or paying off something</p>
              <p className="text-yellow-600 text-sm mt-1">Calculate loan amounts or investment needed</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Always make sure your interest and time periods match</p>
              <p className="text-yellow-600 text-sm mt-1">Monthly/monthly or yearly/yearly</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 