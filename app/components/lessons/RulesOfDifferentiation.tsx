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
    question: "Differentiate f(x) = 4x⁵ - 3x² + 6",
    answer: "20x⁴ - 6x",
    explanation: "Using the power rule: d/dx(4x⁵) = 20x⁴, d/dx(-3x²) = -6x, d/dx(6) = 0"
  },
  {
    question: "Differentiate f(x) = 7x⁴ + 2x - 8",
    answer: "28x³ + 2",
    explanation: "Using the power rule: d/dx(7x⁴) = 28x³, d/dx(2x) = 2, d/dx(-8) = 0"
  },
  {
    question: "Differentiate f(x) = 2x³ - 9x + 1",
    answer: "6x² - 9",
    explanation: "Using the power rule: d/dx(2x³) = 6x², d/dx(-9x) = -9, d/dx(1) = 0"
  }
];

export default function RulesOfDifferentiation() {
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
            <li>The main rules for finding derivatives quickly</li>
            <li>How to apply each rule with examples</li>
            <li>How to differentiate basic and combined functions</li>
          </ul>
        </section>

        {/* Part 1: Why We Use Rules */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: Why We Use Rules</h2>
          <p className="text-gray-600 mb-4">
            In the previous lesson, you learned how to differentiate using first principles.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">But that method is long — imagine doing it for every function!</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Now, we use rules to find derivatives faster.</p>
            </div>
          </div>
        </section>

        {/* Part 2: Power Rule */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Power Rule</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Rule:</p>
            <p className="text-gray-700 font-mono text-center">d/dx(xⁿ) = nxⁿ⁻¹</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">This is the most used rule in calculus.</p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">Examples:</p>
                <p className="text-gray-700 font-mono">d/dx(x³) = 3x²</p>
                <p className="text-gray-700 font-mono">d/dx(x⁵) = 5x⁴</p>
                <p className="text-gray-700 font-mono">d/dx(7x²) = 14x</p>
                <p className="text-gray-700 font-mono">d/dx(3) = 0 (constants always have a derivative of 0)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3: Sum and Difference Rules */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Sum and Difference Rules</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">If functions are added or subtracted, just differentiate each term separately.</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Example:</p>
              <p className="text-gray-700 font-mono">f(x) = x³ + 4x - 7</p>
              <p className="text-gray-700 font-mono">f'(x) = 3x² + 4</p>
            </div>
          </div>
        </section>

        {/* Part 4: Constant Rule */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 4: Constant Rule</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">If a function is multiplied by a constant, just keep the constant:</p>
            <p className="text-gray-700 font-mono text-center">d/dx(a·f(x)) = a·f'(x)</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Example:</p>
              <p className="text-gray-700 font-mono">d/dx(5x³) = 5·3x² = 15x²</p>
            </div>
          </div>
        </section>

        {/* Part 5: Special Functions */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 5: Derivatives of Special Functions</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Here are some quick rules to remember:</p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700 font-mono">d/dx(sin x) = cos x</p>
              <p className="text-gray-700 font-mono">d/dx(cos x) = -sin x</p>
              <p className="text-gray-700 font-mono">d/dx(e^x) = e^x</p>
              <p className="text-gray-700 font-mono">d/dx(ln x) = 1/x</p>
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
              <p className="text-yellow-700 font-medium">Use the power rule for any term with an exponent</p>
              <p className="text-yellow-600 text-sm mt-1">This is the most common rule you'll use</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Break up the function into small parts</p>
              <p className="text-yellow-600 text-sm mt-1">Differentiate each part separately and combine the results</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Keep practicing</p>
              <p className="text-yellow-600 text-sm mt-1">It becomes automatic with enough practice</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 