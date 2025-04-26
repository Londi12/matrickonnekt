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
    question: "Solve: 4x - 3 > 5",
    answer: "x > 2",
    explanation: "Add 3 to both sides: 4x > 8. Then divide by 4: x > 2"
  },
  {
    question: "Solve: -2x + 4 ≤ 10",
    answer: "x ≥ -3",
    explanation: "Subtract 4: -2x ≤ 6. Divide by -2 (remember to flip the sign): x ≥ -3"
  },
  {
    question: "Solve: 1 < 3x + 1 ≤ 7",
    answer: "0 < x ≤ 2",
    explanation: "Subtract 1 from all parts: 0 < 3x ≤ 6. Divide by 3: 0 < x ≤ 2"
  }
];

export default function AlgebraInequalities() {
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
            <li>What inequalities are</li>
            <li>How to solve linear inequalities</li>
            <li>How to show solutions on a number line</li>
            <li>Tips to avoid common mistakes</li>
          </ul>
        </section>

        {/* Part 1: What are Inequalities? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What are Inequalities?</h2>
          <p className="text-gray-600 mb-4">
            An inequality is like an equation, but instead of =, it uses:
          </p>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 font-medium">{'>'} (greater than)</p>
                <p className="text-gray-700 font-medium">{'<'} (less than)</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">≥ (greater than or equal to)</p>
                <p className="text-gray-700 font-medium">≤ (less than or equal to)</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">Examples:</p>
              <p className="text-gray-700">x {'>'} 3 → x is greater than 3</p>
              <p className="text-gray-700">x ≤ 7 → x is less than or equal to 7</p>
              <p className="text-gray-600 mt-2">This just means you're working with ranges of numbers instead of just one answer.</p>
            </div>
          </div>
        </section>

        {/* Part 2: Solving Linear Inequalities */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Solving Linear Inequalities</h2>
          <p className="text-gray-600 mb-4">
            You solve inequalities almost the same way you solve equations.
          </p>

          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example 1:</h3>
              <p className="text-gray-700">x + 4 {'<'} 10</p>
              <p className="text-gray-600 mt-2">Subtract 4 from both sides:</p>
              <p className="text-gray-700">x {'<'} 6</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example 2:</h3>
              <p className="text-gray-700">3x - 5 ≥ 1</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">Add 5: 3x ≥ 6</p>
                <p className="text-gray-600">Divide by 3: x ≥ 2</p>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-medium text-yellow-800 mb-2">Important Rule:</h3>
              <p className="text-yellow-700">⚠️ When you multiply or divide both sides by a negative, you must flip the sign.</p>
              <div className="mt-2">
                <p className="text-gray-700">Example 3:</p>
                <p className="text-gray-700">-2x {'<'} 6</p>
                <p className="text-gray-600">Divide both sides by -2:</p>
                <p className="text-gray-700">x {'>'} -3 ← notice the sign flipped</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3: Graphing Inequalities */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Graphing Inequalities on a Number Line</h2>
          <p className="text-gray-600 mb-4">
            Just a visual way to show your answer.
          </p>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-medium">Use a hollow dot ○ for {'<'} or {'>'}</p>
                <p className="text-gray-700 font-medium">Use a solid dot ● for ≤ or ≥</p>
                <p className="text-gray-700 font-medium">Draw an arrow in the direction the inequality points</p>
              </div>
              <div>
                <p className="text-gray-700">Example: x {'<'} 3</p>
                <p className="text-gray-600">→ Hollow dot on 3, arrow going left</p>
              </div>
              <div>
                <p className="text-gray-700">Example: x ≥ -1</p>
                <p className="text-gray-600">→ Solid dot on -1, arrow going right</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 4: Compound Inequalities */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 4: Solving Compound Inequalities</h2>
          <p className="text-gray-600 mb-4">
            Sometimes you see two signs in one inequality.
          </p>

          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example:</h3>
              <p className="text-gray-700">2 {'<'} x + 1 ≤ 5</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">Step 1: Subtract 1 from all parts:</p>
                <p className="text-gray-700">1 {'<'} x ≤ 4</p>
                <p className="text-gray-600 mt-2">That means:</p>
                <p className="text-gray-600">x is greater than 1,</p>
                <p className="text-gray-600">and x is less than or equal to 4</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Try This:</h3>
              <p className="text-gray-700">Solve and graph: -3 ≤ 2x - 1 {'<'} 5</p>
              <div className="space-y-1 mt-2">
                <p className="text-gray-600">Add 1: -2 ≤ 2x {'<'} 6</p>
                <p className="text-gray-600">Divide by 2: -1 ≤ x {'<'} 3</p>
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
              <p className="text-red-700 font-medium">Forgetting to flip the sign when multiplying/dividing by negative</p>
              <p className="text-red-600 text-sm mt-1">Always flip the inequality sign when multiplying or dividing by a negative number.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Not showing the correct dot on the number line</p>
              <p className="text-red-600 text-sm mt-1">Use hollow dots for {'<'} or {'>'}, solid dots for ≤ or ≥.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Mixing up the direction of the arrow</p>
              <p className="text-red-600 text-sm mt-1">The arrow should point in the direction of the inequality.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 font-medium">Not solving all parts of compound inequalities</p>
              <p className="text-red-600 text-sm mt-1">Remember to perform the same operation on all parts of the inequality.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 