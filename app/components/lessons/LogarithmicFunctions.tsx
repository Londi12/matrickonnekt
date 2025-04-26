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
    question: "Sketch: f(x) = log₃(x)",
    answer: "Passes through (1,0), curve moves slowly up, vertical asymptote at x=0",
    explanation: "Start at (1,0), curve gets closer to y-axis but never touches it"
  },
  {
    question: "What is the x-intercept of f(x) = log₅(x)?",
    answer: "x = 1",
    explanation: "All log functions pass through (1,0)"
  },
  {
    question: "What is the domain of f(x) = log₇(x)?",
    answer: "x > 0",
    explanation: "Log functions are only defined for positive x values"
  },
  {
    question: "If 2^x = 32, what is log₂(32)?",
    answer: "5",
    explanation: "Since 2^5 = 32, log₂(32) = 5"
  }
];

export default function LogarithmicFunctions() {
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
            <li>What logarithmic functions are</li>
            <li>How to read and sketch their graphs</li>
            <li>Key features (asymptotes, intercepts, domain, range)</li>
            <li>How logs relate to exponential functions</li>
          </ul>
        </section>

        {/* Part 1: What is a Logarithmic Function? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is a Logarithmic Function?</h2>
          <p className="text-gray-600 mb-4">
            A logarithmic function is the inverse of an exponential function.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">If:</p>
            <p className="text-gray-700 font-mono text-center">a^x = b</p>
            <p className="text-gray-700 font-medium mt-4">Then:</p>
            <p className="text-gray-700 font-mono text-center">log_a(b) = x</p>
            <div className="mt-4">
              <p className="text-gray-600">In simpler terms:</p>
              <p className="text-gray-600">log_a(x) means: "What power must I raise a to, to get x?"</p>
              <p className="text-gray-600 mt-2">Example: log₂(8) = 3 because 2³ = 8</p>
            </div>
          </div>
        </section>

        {/* Part 2: General Form */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: General Form</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-mono text-center">f(x) = log_a(x)</p>
            <div className="space-y-2 mt-4">
              <p className="text-gray-600">Where:</p>
              <p className="text-gray-600">a {'>'} 0, and a ≠ 1</p>
              <p className="text-gray-600">This graph is the mirror image of the exponential graph across the line y = x</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Key features:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>Passes through (1,0)</li>
                <li>Vertical asymptote: x = 0 (the graph gets close to it but never touches it)</li>
                <li>Domain: x {'>'} 0</li>
                <li>Range: all real numbers</li>
                <li>No y-intercept</li>
                <li>The graph increases slowly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Part 3: Sketching a Log Graph */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Sketching a Log Graph</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Example: f(x) = log₂(x)</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Make a table:</p>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 font-medium">x</p>
                  <p className="text-gray-600">1</p>
                  <p className="text-gray-600">2</p>
                  <p className="text-gray-600">4</p>
                  <p className="text-gray-600">8</p>
                  <p className="text-gray-600">0.5</p>
                  <p className="text-gray-600">0.25</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">log₂(x)</p>
                  <p className="text-gray-600">0</p>
                  <p className="text-gray-600">1</p>
                  <p className="text-gray-600">2</p>
                  <p className="text-gray-600">3</p>
                  <p className="text-gray-600">-1</p>
                  <p className="text-gray-600">-2</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Now sketch:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>Goes through (1, 0)</li>
                <li>Curve gets closer to the y-axis but never touches it</li>
                <li>Increases to the right, drops sharply to the left</li>
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
              <p className="text-yellow-700 font-medium">Logs and exponentials are inverses</p>
              <p className="text-yellow-600 text-sm mt-1">They undo each other's operations</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">The graph always has a vertical asymptote at x = 0</p>
              <p className="text-yellow-600 text-sm mt-1">The curve gets closer but never touches the y-axis</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">You'll always cross the x-axis at 1</p>
              <p className="text-yellow-600 text-sm mt-1">This is because log_a(1) = 0 for any base a</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 