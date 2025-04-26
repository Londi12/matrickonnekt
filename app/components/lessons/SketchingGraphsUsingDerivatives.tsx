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
    question: "What does f'(x) = 0 tell us about a graph?",
    answer: "turning points",
    explanation: "When f'(x) = 0, we have turning points (maxima or minima) on the graph."
  },
  {
    question: "How do we determine if a turning point is a maximum or minimum?",
    answer: "second derivative test",
    explanation: "We use the second derivative test: if f''(x) > 0 it's a minimum, if f''(x) < 0 it's a maximum."
  },
  {
    question: "What does f'(x) > 0 tell us about the graph?",
    answer: "increasing",
    explanation: "When f'(x) > 0, the graph is increasing in that interval."
  }
];

export default function SketchingGraphsUsingDerivatives() {
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
            <li>How to use first and second derivatives to sketch a function</li>
            <li>How to find key features: turning points, intervals where the graph is increasing/decreasing, and concavity</li>
            <li>How to put it all together to sketch a rough graph without a calculator</li>
          </ul>
        </section>

        {/* Part 1: Why Use Derivatives to Sketch? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: Why Use Derivatives to Sketch?</h2>
          <p className="text-gray-600 mb-4">
            Derivatives help you understand a graph's shape without plotting every point.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-medium">First derivative f&apos;(x)</p>
                <p className="text-gray-600">Shows where the graph is increasing or decreasing</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Second derivative f&apos;&apos;(x)</p>
                <p className="text-gray-600">Shows whether the graph is concave up or concave down</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: The Step-by-Step Plan */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: The Step-by-Step Plan</h2>
          <div className="space-y-4">
            <p className="text-gray-600">When sketching, follow this order:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Find intercepts (where the graph cuts the x- and y-axis)</li>
              <li>Differentiate → find f&apos;(x)</li>
              <li>Solve f&apos;(x) = 0 → these are turning points</li>
              <li>Use f&apos;&apos;(x) to test if they&apos;re max or min</li>
              <li>Check increasing/decreasing intervals by testing points between turning points</li>
              <li>Check concavity using f&apos;&apos;(x)</li>
              <li>Sketch it all on a number line or graph</li>
            </ol>
          </div>
        </section>

        {/* Part 3: Example */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Example</h2>
          <div className="space-y-4">
            <p className="text-gray-700 font-medium">Sketch the graph of: f(x) = x³ - 3x² + 2</p>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">1. Intercepts:</h3>
              <p className="text-gray-600">y-intercept: f(0) = 2</p>
              <p className="text-gray-600">x-intercepts? Factor or use calculator later</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">2. Find f&apos;(x):</h3>
              <p className="text-gray-700">f&apos;(x) = 3x² - 6x</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">3. Solve f&apos;(x) = 0:</h3>
              <p className="text-gray-700">3x² - 6x = 0</p>
              <p className="text-gray-700">x(3x - 6) = 0</p>
              <p className="text-gray-700">x = 0, x = 2</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">4. Second derivative:</h3>
              <p className="text-gray-700">f&apos;&apos;(x) = 6x - 6</p>
              <p className="text-gray-600 mt-2">At x = 0: f&apos;&apos;(0) = -6 → maximum</p>
              <p className="text-gray-600">At x = 2: f&apos;&apos;(2) = 6 → minimum</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">5. Intervals:</h3>
              <p className="text-gray-600">f&apos;(x) &lt; 0 between x = 0 and x = 2 → graph is decreasing</p>
              <p className="text-gray-600">f&apos;(x) &gt; 0 before 0 and after 2 → graph is increasing</p>
            </div>
          </div>
        </section>

        {/* Part 4: Practice Time */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 4: Practice Time</h2>
          <div className="space-y-4">
            <p className="text-gray-700 font-medium">Try sketching: f(x) = -x³ + 3x² + 9x</p>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Find f&apos;(x) and solve for turning points</li>
                <li>Find f&apos;&apos;(x) and test concavity</li>
                <li>Use what you&apos;ve learned to describe the shape of the graph</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Quick Recap */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Recap</h2>
          <div className="space-y-4">
            <p className="text-gray-600">When sketching with derivatives:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Use f&apos;(x) = 0 for turning points</li>
              <li>Use f&apos;&apos;(x) to test for max/min and concavity</li>
              <li>Always check where the graph is rising/falling</li>
            </ul>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Practice Questions</h2>
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
      </div>
    </div>
  );
} 