"use client";

import React from 'react';
import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface QuizQuestion {
  question: string;
  answer: string;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the nature of roots of x² + 2x + 1 = 0?",
    answer: "Equal roots",
    explanation: "b² - 4ac = 4 - 4(1)(1) = 0, so equal roots"
  },
  {
    question: "What is the nature of roots of x² - 4x + 3 = 0?",
    answer: "Real and distinct",
    explanation: "b² - 4ac = 16 - 4(1)(3) = 4 > 0, so real and distinct"
  },
  {
    question: "What is the nature of roots of x² + 1 = 0?",
    answer: "No real roots",
    explanation: "b² - 4ac = 0 - 4(1)(1) = -4 < 0, so no real roots"
  },
  {
    question: "If b² - 4ac = 0, what is the nature of roots?",
    answer: "Equal roots",
    explanation: "When discriminant is 0, roots are equal"
  }
];

export default function AlgebraNatureOfRoots() {
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
            <li>What the nature of roots means</li>
            <li>How to determine the nature of roots</li>
            <li>The discriminant and its importance</li>
            <li>Real-world applications</li>
          </ul>
        </section>

        {/* Part 1: What is the Nature of Roots? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is the Nature of Roots?</h2>
          <p className="text-gray-600 mb-4">
            The nature of roots tells us what kind of solutions a quadratic equation has.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Types of roots:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
              <li>Real and distinct (two different real numbers)</li>
              <li>Equal roots (same real number twice)</li>
              <li>No real roots (complex numbers)</li>
            </ul>
          </div>
        </section>

        {/* Part 2: The Discriminant */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: The Discriminant</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Formula:</p>
            <p className="text-gray-700 font-mono text-center">b² - 4ac</p>
            <div className="mt-4">
              <p className="text-gray-600">Where:</p>
              <p className="text-gray-600">a, b, c are coefficients in ax² + bx + c = 0</p>
              <p className="text-gray-600">The discriminant tells us the nature of roots:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>If b² - 4ac {'>'} 0: Real and distinct roots</li>
                <li>If b² - 4ac = 0: Equal roots</li>
                <li>If b² - 4ac {'<'} 0: No real roots</li>
              </ul>
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
              <p className="text-yellow-700 font-medium">Always identify a, b, and c first</p>
              <p className="text-yellow-600 text-sm mt-1">These are the coefficients in ax² + bx + c = 0</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">The discriminant is key</p>
              <p className="text-yellow-600 text-sm mt-1">It tells you everything about the roots</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Real-world applications</p>
              <p className="text-yellow-600 text-sm mt-1">Used in physics, engineering, and many other fields</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 