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
    question: "What is the 6th term of: 1, 3, 9, 27, ...",
    answer: "243",
    explanation: "T₆ = 1 × 3⁵ = 243"
  },
  {
    question: "Find the sum of the first 5 terms of: 2, 4, 8, ...",
    answer: "62",
    explanation: "S₅ = 2 × (1 - 2⁵)/(1 - 2) = 2 × (1 - 32)/(-1) = 2 × 31 = 62"
  },
  {
    question: "In a geometric sequence, a = 10, r = 1/2, find T₄",
    answer: "1.25",
    explanation: "T₄ = 10 × (1/2)³ = 10 × 1/8 = 1.25"
  }
];

export default function GeometricSequences() {
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
            <li>What geometric sequences and series are</li>
            <li>How to find the nth term</li>
            <li>How to calculate the sum of terms</li>
            <li>How to spot and solve problems involving multiplying patterns</li>
          </ul>
        </section>

        {/* Part 1: What is a Geometric Sequence? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is a Geometric Sequence?</h2>
          <p className="text-gray-600 mb-4">
            A geometric sequence is a list of numbers where you multiply by the same number each time.
            That number is called the common ratio (r).
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium mb-2">Example:</p>
            <p className="text-gray-700">3, 6, 12, 24, 48, ...</p>
            <p className="text-gray-600 mt-2">Here, r = 2 (you multiply by 2 each time)</p>
          </div>
        </section>

        {/* Part 2: Formula for the nth Term */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Formula for the nth Term</h2>
          <p className="text-gray-600 mb-4">
            To find any term in a geometric sequence, use:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-mono text-center">
              Tₙ = a × rⁿ⁻¹
            </p>
          </div>
          <p className="text-gray-600 mt-4">Where:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
            <li>Tₙ is the nth term</li>
            <li>a is the first term</li>
            <li>r is the common ratio</li>
            <li>n is the term position</li>
          </ul>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Example 1:</h3>
            <p className="text-gray-700">Find the 5th term in: 2, 6, 18, ...</p>
            <div className="space-y-1 mt-2">
              <p className="text-gray-600">a = 2</p>
              <p className="text-gray-600">r = 3</p>
              <p className="text-gray-600">n = 5</p>
              <p className="text-gray-600">T₅ = 2 × 3⁴ = 2 × 81 = 162</p>
              <p className="text-gray-700 font-medium">✅ The 5th term is 162</p>
            </div>
          </div>
        </section>

        {/* Part 3: Geometric Series */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Geometric Series</h2>
          <p className="text-gray-600 mb-4">
            A geometric series is when you add the terms of a geometric sequence.
          </p>
          <p className="text-gray-600 mb-4">
            To find the sum of the first n terms, use:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-mono text-center">
              Sₙ = a × (1 - rⁿ)/(1 - r) (if r ≠ 1)
            </p>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Example 2:</h3>
            <p className="text-gray-700">Find the sum of the first 4 terms of: 5, 10, 20, 40, ...</p>
            <div className="space-y-1 mt-2">
              <p className="text-gray-600">a = 5</p>
              <p className="text-gray-600">r = 2</p>
              <p className="text-gray-600">n = 4</p>
              <p className="text-gray-600">S₄ = 5 × (1 - 2⁴)/(1 - 2) = 5 × (1 - 16)/(-1) = 5 × (-15)/(-1) = 75</p>
              <p className="text-gray-700 font-medium">✅ Sum = 75</p>
            </div>
          </div>
        </section>

        {/* Part 4: Practice Problems */}
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
              <p className="text-yellow-700 font-medium">Check if it's geometric</p>
              <p className="text-yellow-600 text-sm mt-1">Divide one term by the one before it - if you get the same answer every time, it's geometric.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Watch out for special cases</p>
              <p className="text-yellow-600 text-sm mt-1">Be careful with negative or fraction common ratios.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Handle large exponents carefully</p>
              <p className="text-yellow-600 text-sm mt-1">The nth term formula involves exponents, so be precise with your calculations.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 