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
    question: "Simplify: (x² - 16)/(x² - 4x)",
    answer: "(x + 4)/x",
    explanation: "Factor: (x - 4)(x + 4) / x(x - 4) → Cancel (x - 4) → Answer: (x + 4)/x"
  },
  {
    question: "Multiply: (x² - 9)/(x + 1) × 1/(x - 3)",
    answer: "(x + 3)/(x + 1)",
    explanation: "Factor: (x - 3)(x + 3)/(x + 1) × 1/(x - 3) → Cancel (x - 3) → Answer: (x + 3)/(x + 1)"
  },
  {
    question: "Add: 1/(x - 2) + 2/(x + 2)",
    answer: "(3x - 2)/(x² - 4)",
    explanation: "LCD: (x - 2)(x + 2) → (x + 2 + 2(x - 2)) / (x² - 4) → Simplify: (3x - 2)/(x² - 4)"
  }
];

export default function AlgebraicFractions() {
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
            <li>What algebraic fractions are</li>
            <li>How to simplify them</li>
            <li>How to add, subtract, multiply and divide them</li>
            <li>Tips to avoid mistakes</li>
          </ul>
        </section>

        {/* Part 1: What Are Algebraic Fractions? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What Are Algebraic Fractions?</h2>
          <p className="text-gray-600 mb-4">
            An algebraic fraction is just a fraction where the numerator, denominator, or both have algebra in them.
          </p>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium mb-2">Examples:</p>
            <div className="space-y-2">
              <p className="text-gray-700">x / 3</p>
              <p className="text-gray-700">(x² + 3x) / (x + 1)</p>
              <p className="text-gray-700">(a + b) / (ab)</p>
            </div>
            <p className="text-gray-600 mt-2">They work just like normal fractions — but with variables.</p>
          </div>
        </section>

        {/* Part 2: Simplifying Algebraic Fractions */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Simplifying Algebraic Fractions</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-700 font-medium">Step 1: Factorise the top and/or bottom</p>
              <p className="text-gray-700 font-medium">Step 2: Cancel common factors</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example 1:</h3>
              <p className="text-gray-700">Simplify: (x² - 9) / (x + 3)</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">Step 1: Factorise top → (x - 3)(x + 3)</p>
                <p className="text-gray-600">Step 2: Cancel (x + 3)</p>
                <p className="text-gray-700 font-medium">Answer: x - 3</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example 2:</h3>
              <p className="text-gray-700">Simplify: (2x² + 4x) / (2x)</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">Step 1: Factorise top → 2x(x + 2)</p>
                <p className="text-gray-600">Step 2: Cancel 2x</p>
                <p className="text-gray-700 font-medium">Answer: x + 2</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3: Multiplying and Dividing */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Multiplying and Dividing</h2>
          
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Multiply:</h3>
              <p className="text-gray-600">Just multiply tops together and bottoms together.</p>
              <p className="text-gray-600">Factorise and cancel first if you can.</p>
              <div className="mt-2">
                <p className="text-gray-700">Example:</p>
                <p className="text-gray-700">(x² - 1)/(x + 2) × (x + 2)/x</p>
                <div className="space-y-1 mt-2">
                  <p className="text-gray-600">Factorise: (x - 1)(x + 1)</p>
                  <p className="text-gray-600">Now cancel (x + 2)</p>
                  <p className="text-gray-700 font-medium">Answer: (x - 1)(x + 1)/x</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Divide:</h3>
              <p className="text-gray-600">Flip the second fraction, then multiply.</p>
              <div className="mt-2">
                <p className="text-gray-700">Example:</p>
                <p className="text-gray-700">(x² - 4)/(x - 2) ÷ (x + 2)/1</p>
                <div className="space-y-1 mt-2">
                  <p className="text-gray-600">Step 1: Flip and multiply:</p>
                  <p className="text-gray-600">(x² - 4)/(x - 2) × 1/(x + 2)</p>
                  <p className="text-gray-600">Step 2: Factorise top: (x + 2)(x - 2)</p>
                  <p className="text-gray-600">Cancel (x - 2) and (x + 2)</p>
                  <p className="text-gray-700 font-medium">Answer: 1</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part 4: Adding and Subtracting */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 4: Adding and Subtracting</h2>
          <p className="text-gray-600 mb-4">
            You need a common denominator before you can add or subtract.
          </p>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Example:</h3>
            <p className="text-gray-700">1/(x + 1) + 2/(x - 1)</p>
            <div className="space-y-1 mt-2">
              <p className="text-gray-600">LCD = (x + 1)(x - 1)</p>
              <p className="text-gray-600">Rewrite both:</p>
              <p className="text-gray-600">(x - 1)/(x + 1)(x - 1) + 2(x + 1)/(x + 1)(x - 1)</p>
              <p className="text-gray-600">Now combine:</p>
              <p className="text-gray-600">(x - 1 + 2(x + 1)) / [(x + 1)(x - 1)]</p>
              <p className="text-gray-600">Expand and simplify the top:</p>
              <p className="text-gray-600">x - 1 + 2x + 2 = 3x + 1</p>
              <p className="text-gray-700 font-medium">Answer: (3x + 1) / [(x + 1)(x - 1)]</p>
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
              <p className="text-yellow-700 font-medium">Always factorise first</p>
              <p className="text-yellow-600 text-sm mt-1">This makes it easier to spot common factors to cancel.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Watch for signs when subtracting</p>
              <p className="text-yellow-600 text-sm mt-1">Be careful with negative signs in the numerator.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Don't cancel terms — only factors</p>
              <p className="text-yellow-600 text-sm mt-1">You can only cancel when the numerator and denominator share a common factor.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Always check for restrictions</p>
              <p className="text-yellow-600 text-sm mt-1">Remember that denominators can't be zero (e.g., x ≠ 0).</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 