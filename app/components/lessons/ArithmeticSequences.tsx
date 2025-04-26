"use client";

import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface QuizQuestion {
  question: string;
  answer: string;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Find the 10th term of the sequence: 3, 7, 11, 15, ...",
    answer: "39",
    explanation: "a₁ = 3, d = 4, so a₁₀ = 3 + (10-1)4 = 3 + 36 = 39"
  },
  {
    question: "What is the common difference in: 2, 5, 8, 11, ...?",
    answer: "3",
    explanation: "Each term increases by 3"
  },
  {
    question: "Find the sum of the first 5 terms of: 4, 7, 10, 13, ...",
    answer: "50",
    explanation: "S₅ = (5/2)(2(4) + (5-1)3) = (5/2)(8 + 12) = (5/2)(20) = 50"
  },
  {
    question: "If a₅ = 17 and d = 3, what is a₁?",
    answer: "5",
    explanation: "a₅ = a₁ + (5-1)d → 17 = a₁ + 12 → a₁ = 5"
  }
];

export default function ArithmeticSequences() {
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
            <li>What arithmetic sequences are</li>
            <li>How to find the nth term</li>
            <li>How to find the sum of terms</li>
            <li>Real-world applications</li>
          </ul>
        </section>

        {/* Part 1: What is an Arithmetic Sequence? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is an Arithmetic Sequence?</h2>
          <p className="text-gray-600 mb-4">
            An arithmetic sequence is a sequence where each term after the first is found by adding a constant value.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Example: 2, 5, 8, 11, 14, ...</p>
            <div className="mt-4">
              <p className="text-gray-600">Here, each term increases by 3</p>
              <p className="text-gray-600">The constant difference is called the common difference (d)</p>
              <p className="text-gray-600">The first term is called a₁</p>
            </div>
          </div>
        </section>

        {/* Part 2: Finding the nth Term */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Finding the nth Term</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Formula:</p>
            <p className="text-gray-700 font-mono text-center">aₙ = a₁ + (n-1)d</p>
            <div className="mt-4">
              <p className="text-gray-600">Where:</p>
              <p className="text-gray-600">aₙ is the nth term</p>
              <p className="text-gray-600">a₁ is the first term</p>
              <p className="text-gray-600">d is the common difference</p>
              <p className="text-gray-600">n is the term number</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Example:</p>
              <p className="text-gray-600">Find the 10th term of 3, 7, 11, 15, ...</p>
              <p className="text-gray-600">a₁ = 3, d = 4</p>
              <p className="text-gray-600">a₁₀ = 3 + (10-1)4 = 3 + 36 = 39</p>
            </div>
          </div>
        </section>

        {/* Part 3: Sum of Terms */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Sum of Terms</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Formula:</p>
            <p className="text-gray-700 font-mono text-center">Sₙ = (n/2)(2a₁ + (n-1)d)</p>
            <div className="mt-4">
              <p className="text-gray-600">Where:</p>
              <p className="text-gray-600">Sₙ is the sum of the first n terms</p>
              <p className="text-gray-600">n is the number of terms</p>
              <p className="text-gray-600">a₁ is the first term</p>
              <p className="text-gray-600">d is the common difference</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Example:</p>
              <p className="text-gray-600">Find the sum of the first 5 terms of 4, 7, 10, 13, ...</p>
              <p className="text-gray-600">S₅ = (5/2)(2(4) + (5-1)3) = (5/2)(8 + 12) = (5/2)(20) = 50</p>
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
              <p className="text-yellow-700 font-medium">Always identify a₁ and d first</p>
              <p className="text-yellow-600 text-sm mt-1">These are the key values you need</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Check your work</p>
              <p className="text-yellow-600 text-sm mt-1">Make sure the common difference is consistent</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Real-world applications</p>
              <p className="text-yellow-600 text-sm mt-1">Used in finance, physics, and many other fields</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 