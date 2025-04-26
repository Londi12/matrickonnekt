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
    question: "Sketch: f(x) = -x + 2",
    answer: "Straight line, slope = -1, crosses y-axis at 2",
    explanation: "Start at (0,2) and go down 1, across 1"
  },
  {
    question: "What is the gradient and y-intercept of: f(x) = 4x - 5?",
    answer: "Gradient = 4, y-intercept = -5",
    explanation: "In f(x) = mx + c, m is the gradient and c is the y-intercept"
  },
  {
    question: "Find the turning point of: f(x) = x² + 6x + 5",
    answer: "(-3, -4)",
    explanation: "Use x = -b/2a = -6/2(1) = -3, then find f(-3) = (-3)² + 6(-3) + 5 = 9 - 18 + 5 = -4"
  },
  {
    question: "Find the x-intercepts of: f(x) = x² - 9",
    answer: "x = ±3",
    explanation: "Factor: (x-3)(x+3) → x-intercepts: x = ±3"
  }
];

export default function LinearQuadraticFunctions() {
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
            <li>What linear and quadratic functions are</li>
            <li>How to sketch and describe their graphs</li>
            <li>Key features to look out for</li>
            <li>How to interpret and compare them</li>
          </ul>
        </section>

        {/* Part 1: What is a Function? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is a Function?</h2>
          <p className="text-gray-600 mb-4">
            A function is a rule that links an input to one output. We usually write it like:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-mono text-center">f(x) = some equation</p>
            <p className="text-gray-600 mt-2">You plug in a value of x, and it gives you a result.</p>
          </div>
        </section>

        {/* Part 2: Linear Functions */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Linear Functions</h2>
          <p className="text-gray-600 mb-4">
            A linear function is a straight line. It looks like this:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-mono text-center">f(x) = mx + c</p>
            <div className="space-y-2 mt-2">
              <p className="text-gray-600">Where:</p>
              <p className="text-gray-600">m is the gradient (slope)</p>
              <p className="text-gray-600">c is the y-intercept (where it crosses the y-axis)</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Example:</p>
              <p className="text-gray-700">f(x) = 2x + 3</p>
              <p className="text-gray-600">Gradient = 2</p>
              <p className="text-gray-600">Y-intercept = 3</p>
              <p className="text-gray-600">This line goes up (positive slope) and crosses the y-axis at 3.</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Quick graphing steps:</p>
              <p className="text-gray-600">Start at (0,c)</p>
              <p className="text-gray-600">Use the gradient to move:</p>
              <p className="text-gray-600">If m = 2, go up 2, across 1</p>
              <p className="text-gray-600">If m = -1, go down 1, across 1</p>
            </div>
          </div>
        </section>

        {/* Part 3: Quadratic Functions */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Quadratic Functions</h2>
          <p className="text-gray-600 mb-4">
            A quadratic has a U-shaped graph called a parabola.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">General form:</p>
            <p className="text-gray-700 font-mono text-center">f(x) = ax² + bx + c</p>
            <div className="space-y-2 mt-2">
              <p className="text-gray-700 font-medium">Key features:</p>
              <p className="text-gray-600">a decides the shape:</p>
              <p className="text-gray-600">If a {'>'} 0, the parabola opens up</p>
              <p className="text-gray-600">If a {'<'} 0, it opens down</p>
              <p className="text-gray-600">Turning point: the highest or lowest point</p>
              <p className="text-gray-600">Y-intercept: f(0) = c</p>
              <p className="text-gray-600">X-intercepts: Where f(x) = 0</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Example:</p>
              <p className="text-gray-700">f(x) = x² - 4x + 3</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">Factor it:</p>
                <p className="text-gray-700">f(x) = (x-1)(x-3)</p>
                <p className="text-gray-600">X-intercepts: x = 1 and x = 3</p>
                <p className="text-gray-600">Turning point is halfway between 1 and 3 → x = 2</p>
                <p className="text-gray-600">Plug x = 2 into the equation:</p>
                <p className="text-gray-700">f(2) = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1</p>
                <p className="text-gray-600">So the turning point is (2,-1)</p>
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

        {/* Quick Tips */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Tips</h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Linear = straight line = one x</p>
              <p className="text-yellow-600 text-sm mt-1">Quadratic = parabola = x²</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Learn to quickly identify key features</p>
              <p className="text-yellow-600 text-sm mt-1">Gradient, intercepts, turning point</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Practice sketching graphs</p>
              <p className="text-yellow-600 text-sm mt-1">Start with the basic shape and add key points</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 