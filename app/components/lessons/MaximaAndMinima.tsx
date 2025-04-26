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
    question: "Find the turning point and say if it's a max or a min for f(x) = x² - 4x + 2",
    answer: "x = 2, Minimum",
    explanation: "f'(x) = 2x - 4 = 0 ⇒ x = 2; f''(x) = 2 > 0 ⇒ Minimum"
  },
  {
    question: "Find the turning point and say if it's a max or a min for f(x) = -x² + 6x - 5",
    answer: "x = 3, Maximum",
    explanation: "f'(x) = -2x + 6 = 0 ⇒ x = 3; f''(x) = -2 < 0 ⇒ Maximum"
  },
  {
    question: "Find the turning point and say if it's a max or a min for f(x) = 2x² - 8x + 3",
    answer: "x = 2, Minimum",
    explanation: "f'(x) = 4x - 8 = 0 ⇒ x = 2; f''(x) = 4 > 0 ⇒ Minimum"
  }
];

export default function MaximaAndMinima() {
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
            <li>How to find maximum and minimum values of a function</li>
            <li>How to use the first and second derivatives to check your answer</li>
            <li>Why this is useful in real life and exams</li>
          </ul>
        </section>

        {/* Part 1: What Are Maxima and Minima? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What Are Maxima and Minima?</h2>
          <p className="text-gray-600 mb-4">
            These are points where a graph turns.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Think of a maximum as the top of a hill 🌄</p>
            <p className="text-gray-700 font-medium mt-2">And a minimum as the bottom of a valley ⛲</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">At those turning points, the gradient = 0</p>
              <p className="text-gray-600 mt-2">So how do we find them?</p>
              <p className="text-gray-600">We use derivatives.</p>
            </div>
          </div>
        </section>

        {/* Part 2: Steps to Find Max/Min */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Steps to Find Max/Min</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <p className="text-gray-700 font-medium">Differentiate the function → this gives you the gradient</p>
              </li>
              <li>
                <p className="text-gray-700 font-medium">Set the derivative = 0 → this finds the turning point(s)</p>
              </li>
              <li>
                <p className="text-gray-700 font-medium">Differentiate again → this tells you if it's a max or min</p>
              </li>
            </ol>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Second Derivative Test:</p>
              <p className="text-gray-700 font-mono">If f&apos;&apos;(x) &gt; 0 → Minimum (valley)</p>
              <p className="text-gray-700 font-mono">If f&apos;&apos;(x) &lt; 0 → Maximum (hill)</p>
            </div>
          </div>
        </section>

        {/* Part 3: Example */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Let's Do an Example</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Given: f(x) = -2x² + 4x + 1</p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-gray-700 font-medium">Step 1: Find f&apos;(x)</p>
                <p className="text-gray-700 font-mono">f&apos;(x) = -4x + 4</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Step 2: Set f&apos;(x) = 0</p>
                <p className="text-gray-700 font-mono">-4x + 4 = 0 ⇒ x = 1</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Step 3: Find f&apos;&apos;(x)</p>
                <p className="text-gray-700 font-mono">f&apos;&apos;(x) = -4 ⇒ less than 0 → it's a max</p>
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

        {/* Part 5: Why This Is Important */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 5: Why This Is Important</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">You'll use this to solve problems in:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
              <li>Economics (max profit, min cost)</li>
              <li>Physics (highest point of a projectile)</li>
              <li>Exam questions where they ask for "stationary points"</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 