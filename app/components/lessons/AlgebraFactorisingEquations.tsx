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
    question: "Factorise and solve: x² - 2x - 15 = 0",
    answer: "x = 5 or x = -3",
    explanation: "First factorise: x² - 2x - 15 = (x - 5)(x + 3) = 0. Then solve: x - 5 = 0 → x = 5, or x + 3 = 0 → x = -3"
  },
  {
    question: "Factorise: 5x² - 20x",
    answer: "5x(x - 4)",
    explanation: "Take out the common factor 5x: 5x² - 20x = 5x(x - 4)"
  },
  {
    question: "Solve: x² - 25 = 0",
    answer: "x = 5 or x = -5",
    explanation: "This is a difference of squares: x² - 25 = (x + 5)(x - 5) = 0. Therefore x = ±5"
  }
];

export default function AlgebraFactorisingEquations() {
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
            <li>How to factorise basic expressions</li>
            <li>How to solve equations using factorisation</li>
            <li>How to spot when to factorise</li>
            <li>Practice solving step-by-step</li>
          </ul>
        </section>

        {/* Part 1: What is Factorising? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is Factorising?</h2>
          <p className="text-gray-600 mb-4">
            Factorising is writing an expression as a product of its factors. You're basically working backwards from expanding.
          </p>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Example:</h3>
            <p className="text-gray-700">You know:</p>
            <p className="text-gray-700">(x + 3)(x + 2) = x² + 5x + 6</p>
            <p className="text-gray-700 mt-2">Factorising is going from x² + 5x + 6 back to (x + 3)(x + 2)</p>
          </div>
        </section>

        {/* Part 2: Common Types of Factorising */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Common Types of Factorising</h2>
          
          <div className="space-y-6">
            {/* Common Factor */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">1. Common Factor</h3>
              <p className="text-gray-600">Pull out what's shared by all terms.</p>
              <div className="mt-2">
                <p className="text-gray-700">Example:</p>
                <p className="text-gray-700">3x + 6 = 3(x + 2)</p>
                <p className="text-gray-700 mt-2">Try: 4a² - 8a → Answer: 4a(a - 2)</p>
              </div>
            </div>

            {/* Trinomials */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">2. Trinomials</h3>
              <p className="text-gray-600">Form: x² + bx + c</p>
              <p className="text-gray-600">You want two numbers that:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Multiply to c</li>
                <li>Add to b</li>
              </ul>
              <div className="mt-2">
                <p className="text-gray-700">Example:</p>
                <p className="text-gray-700">x² + 5x + 6 = (x + 2)(x + 3)</p>
                <p className="text-gray-700 mt-2">Try: x² + 7x + 10 → Answer: (x + 5)(x + 2)</p>
              </div>
            </div>

            {/* Difference of Squares */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">3. Difference of Squares</h3>
              <p className="text-gray-600">Form: a² - b² = (a + b)(a - b)</p>
              <div className="mt-2">
                <p className="text-gray-700">Example:</p>
                <p className="text-gray-700">x² - 9 = (x + 3)(x - 3)</p>
                <p className="text-gray-700 mt-2">Try: 4a² - 49 → Answer: (2a + 7)(2a - 7)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3: Solving Equations Using Factorising */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Solving Equations Using Factorising</h2>
          <p className="text-gray-600 mb-4">
            Once something is factorised, we use this golden rule:
          </p>
          <p className="text-gray-700 font-medium mb-4">If A × B = 0, then A = 0 or B = 0</p>

          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example 1:</h3>
              <p className="text-gray-700">Solve: x² + 5x + 6 = 0</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">Step 1: Factorise → (x + 2)(x + 3) = 0</p>
                <p className="text-gray-600">Step 2: Solve each bracket:</p>
                <p className="text-gray-600">x + 2 = 0 → x = -2</p>
                <p className="text-gray-600">x + 3 = 0 → x = -3</p>
                <p className="text-gray-700 font-medium mt-2">Final answer: x = -2 or x = -3</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example 2:</h3>
              <p className="text-gray-700">Solve: 2x² - 10x = 0</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">Step 1: Factorise → 2x(x - 5) = 0</p>
                <p className="text-gray-600">Step 2: Solve:</p>
                <p className="text-gray-600">2x = 0 → x = 0</p>
                <p className="text-gray-600">x - 5 = 0 → x = 5</p>
                <p className="text-gray-700 font-medium mt-2">Final answer: x = 0 or x = 5</p>
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
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Forgetting to make the equation = 0 before factorising</p>
              <p className="text-red-600 text-sm mt-1">Always set the equation to zero first.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Mixing up signs when factorising trinomials</p>
              <p className="text-red-600 text-sm mt-1">Double-check your signs when finding factors.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Not solving both brackets</p>
              <p className="text-red-600 text-sm mt-1">Remember to solve each bracket separately.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Forgetting to factor out a common factor first</p>
              <p className="text-red-600 text-sm mt-1">Always look for common factors before trying other methods.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 