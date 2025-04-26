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
    question: "What is the value of e⁰?",
    answer: "1",
    explanation: "Any number raised to the power of 0 is 1"
  },
  {
    question: "What is sinh(0)?",
    answer: "0",
    explanation: "sinh(0) = (e⁰ - e⁻⁰)/2 = (1 - 1)/2 = 0"
  },
  {
    question: "What is cosh(0)?",
    answer: "1",
    explanation: "cosh(0) = (e⁰ + e⁻⁰)/2 = (1 + 1)/2 = 1"
  },
  {
    question: "What is the derivative of e^x?",
    answer: "e^x",
    explanation: "The derivative of e^x is itself"
  }
];

export default function ExponentialHyperbolicFunctions() {
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
            <li>What exponential functions are</li>
            <li>How to graph exponential functions</li>
            <li>What hyperbolic functions are</li>
            <li>How to use these functions in real-world problems</li>
          </ul>
        </section>

        {/* Part 1: Exponential Functions */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: Exponential Functions</h2>
          <p className="text-gray-600 mb-4">
            An exponential function has the form f(x) = a^x, where a is a positive constant.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Key features:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
              <li>Always passes through (0,1)</li>
              <li>Grows very quickly</li>
              <li>Never touches the x-axis</li>
              <li>Domain: all real numbers</li>
              <li>Range: y {'>'} 0</li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Example: f(x) = 2^x</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">f(0) = 2⁰ = 1</p>
                <p className="text-gray-600">f(1) = 2¹ = 2</p>
                <p className="text-gray-600">f(2) = 2² = 4</p>
                <p className="text-gray-600">f(3) = 2³ = 8</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: The Number e */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: The Number e</h2>
          <p className="text-gray-600 mb-4">
            e is a special number (approximately 2.71828) that appears in many natural processes.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">The function f(x) = e^x is called the natural exponential function.</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Key properties:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>e⁰ = 1</li>
                <li>e¹ = e</li>
                <li>e^x × e^y = e^(x+y)</li>
                <li>(e^x)^y = e^(xy)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Part 3: Hyperbolic Functions */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Hyperbolic Functions</h2>
          <p className="text-gray-600 mb-4">
            Hyperbolic functions are combinations of exponential functions.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Main hyperbolic functions:</p>
            <div className="space-y-2 mt-2">
              <p className="text-gray-600">sinh(x) = (e^x - e^(-x))/2</p>
              <p className="text-gray-600">cosh(x) = (e^x + e^(-x))/2</p>
              <p className="text-gray-600">tanh(x) = sinh(x)/cosh(x)</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Key properties:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>sinh(0) = 0</li>
                <li>cosh(0) = 1</li>
                <li>tanh(0) = 0</li>
                <li>cosh²(x) - sinh²(x) = 1</li>
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
              <p className="text-yellow-700 font-medium">Remember the basic exponential rules</p>
              <p className="text-yellow-600 text-sm mt-1">a^0 = 1, a^1 = a, a^x × a^y = a^(x+y)</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">e is special</p>
              <p className="text-yellow-600 text-sm mt-1">It's the base of the natural exponential function</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Hyperbolic functions are useful</p>
              <p className="text-yellow-600 text-sm mt-1">They appear in physics and engineering</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 