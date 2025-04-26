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
    question: "Expand and simplify: ∑(k=1 to 3) (k²)",
    answer: "14",
    explanation: "1² + 2² + 3² = 1 + 4 + 9 = 14"
  },
  {
    question: "Write this sum in sigma notation: 5 + 10 + 15 + 20",
    answer: "∑(k=1 to 4) (5k)",
    explanation: "The pattern is 5k, starting at k=1 and ending at k=4"
  },
  {
    question: "Use a formula to find the sum: ∑(k=1 to 6) (3k - 2)",
    answer: "51",
    explanation: "T₁ = 1, d = 3, a = 1, n = 6. Using arithmetic sum: S₆ = 6/2[2(1) + (6-1)(3)] = 3[2 + 15] = 3 × 17 = 51"
  }
];

export default function SigmaNotation() {
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
            <li>What sigma notation means</li>
            <li>How to read it and expand it</li>
            <li>How to simplify and calculate sums using sigma notation</li>
            <li>How to link it to arithmetic and geometric series</li>
          </ul>
        </section>

        {/* Part 1: What is Sigma Notation? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is Sigma Notation?</h2>
          <p className="text-gray-600 mb-4">
            Sigma (∑) is a symbol used to show a sum. It tells you to add terms of a pattern from a starting number to an ending number using a rule.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium mb-2">Example:</p>
            <p className="text-gray-700 font-mono text-center">∑(k=1 to 4) (2k + 1)</p>
            <p className="text-gray-600 mt-2">This means: Start with k=1, end with k=4, and plug into 2k+1</p>
            <p className="text-gray-600 mt-2">So you get: (2(1)+1) + (2(2)+1) + (2(3)+1) + (2(4)+1) = 3 + 5 + 7 + 9 = 24</p>
          </div>
        </section>

        {/* Part 2: Parts of Sigma Notation */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Parts of Sigma Notation</h2>
          <p className="text-gray-600 mb-4">
            Let's break this down:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-mono text-center">∑(k=1 to 5) (expression)</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
              <li>∑ → means "add"</li>
              <li>k=1 → start with k=1</li>
              <li>5 → stop at k=5</li>
              <li>The expression → the formula you plug k into</li>
            </ul>
          </div>
        </section>

        {/* Part 3: Writing a Sigma Expression */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Writing a Sigma Expression</h2>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">Say you are given: 2 + 4 + 6 + 8 + 10</p>
              <p className="text-gray-600 mt-2">You can write it using sigma:</p>
              <p className="text-gray-700 font-mono text-center mt-2">∑(k=1 to 5) (2k)</p>
              <p className="text-gray-600 mt-2">Because when you plug in k=1 to k=5, you get all those values.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">Now try this one: 3 + 6 + 12 + 24 → what's the pattern? Multiply by 2 each time.</p>
              <p className="text-gray-600 mt-2">This is geometric:</p>
              <p className="text-gray-700 font-mono text-center mt-2">∑(k=0 to 3) (3·2ᵏ)</p>
            </div>
          </div>
        </section>

        {/* Part 4: Link to Series Formulas */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 4: Link to Series Formulas</h2>
          <p className="text-gray-600 mb-4">
            Use what you already know about arithmetic and geometric sums:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 font-medium">Arithmetic sum:</p>
              <p className="text-gray-700 font-mono text-center">Sₙ = n/2[2a + (n-1)d]</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 font-medium">Geometric sum:</p>
              <p className="text-gray-700 font-mono text-center">Sₙ = a·(1-rⁿ)/(1-r)</p>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            So if the sigma notation gives you a sequence, use these formulas to simplify quickly.
          </p>
        </section>

        {/* Part 5: Practice Problems */}
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
              <p className="text-yellow-700 font-medium">Understand the pattern</p>
              <p className="text-yellow-600 text-sm mt-1">Look for arithmetic or geometric patterns in the sequence.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Plug values in carefully</p>
              <p className="text-yellow-600 text-sm mt-1">Make sure you're using the correct starting and ending values.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Use formulas when possible</p>
              <p className="text-yellow-600 text-sm mt-1">If it's arithmetic or geometric, use the sum formulas to simplify.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 