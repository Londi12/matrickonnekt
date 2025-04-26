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
    question: "What transformation happens in f(x) = (x-4)²?",
    answer: "Shift right 4 units",
    explanation: "The -4 inside the bracket means shift right 4 units"
  },
  {
    question: "What transformation happens in f(x) = -x²?",
    answer: "Reflect over x-axis",
    explanation: "The negative sign outside means flip the graph upside down"
  },
  {
    question: "What transformation happens in f(x) = 3x² + 1?",
    answer: "Stretch vertically and shift up 1",
    explanation: "The 3 multiplies the function (stretch) and +1 shifts it up"
  },
  {
    question: "Describe the shift in f(x) = log(x+3) - 2",
    answer: "Left 3 units, down 2 units",
    explanation: "+3 inside shifts left, -2 outside shifts down"
  }
];

export default function Transformations() {
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
            <li>What transformations are</li>
            <li>How they affect graphs</li>
            <li>Vertical shifts, horizontal shifts, reflections, and stretches</li>
            <li>How to spot them in function equations</li>
          </ul>
        </section>

        {/* Part 1: What are Transformations? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What are Transformations?</h2>
          <p className="text-gray-600 mb-4">
            A transformation changes the shape or position of a graph.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Think of it like moving or stretching a graph without changing its basic form.</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">There are 4 main types:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>Shifts (up/down/left/right)</li>
                <li>Reflections (flipping over a line)</li>
                <li>Stretches (making it taller/narrower)</li>
                <li>Combinations (more than one transformation)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Part 2: Vertical & Horizontal Shifts */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Vertical & Horizontal Shifts</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-medium">Vertical Shift:</p>
                <p className="text-gray-700 font-mono text-center">f(x) + k</p>
                <p className="text-gray-600 mt-2">Moves the graph up if k {'>'} 0, down if k {'<'} 0</p>
                <p className="text-gray-600 mt-2">Example: f(x) = x² + 3 (shift up 3 units)</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Horizontal Shift:</p>
                <p className="text-gray-700 font-mono text-center">f(x + p)</p>
                <p className="text-gray-600 mt-2">Moves left if p {'>'} 0, right if p {'<'} 0</p>
                <p className="text-gray-600 mt-2">Example: f(x) = (x + 2)² (shift left 2 units)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3: Reflections */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Reflections</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-medium">Reflect across the x-axis:</p>
                <p className="text-gray-700 font-mono text-center">y = -f(x)</p>
                <p className="text-gray-600 mt-2">Flips the graph upside down</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Reflect across the y-axis:</p>
                <p className="text-gray-700 font-mono text-center">y = f(-x)</p>
                <p className="text-gray-600 mt-2">Flips the graph left to right</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 4: Stretches and Compressions */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 4: Stretches and Compressions</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-medium">Vertical Stretch:</p>
                <p className="text-gray-700 font-mono text-center">y = a·f(x)</p>
                <p className="text-gray-600 mt-2">If a {'>'} 1, the graph gets taller</p>
                <p className="text-gray-600">If 0 {'<'} a {'<'} 1, it gets shorter</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Horizontal Stretch:</p>
                <p className="text-gray-700 font-mono text-center">y = f(bx)</p>
                <p className="text-gray-600 mt-2">If b {'>'} 1, it gets narrower</p>
                <p className="text-gray-600">If 0 {'<'} b {'<'} 1, it gets wider</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 font-medium">Examples:</p>
                <p className="text-gray-600">y = 2x² (taller parabola)</p>
                <p className="text-gray-600">y = x²/2 (shorter parabola)</p>
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
              <p className="text-yellow-700 font-medium">Always look at how the function has changed from the original</p>
              <p className="text-yellow-600 text-sm mt-1">Inside the bracket → affects left/right</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Outside the bracket → affects up/down</p>
              <p className="text-yellow-600 text-sm mt-1">A negative → means a flip</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">A number multiplying → means a stretch</p>
              <p className="text-yellow-600 text-sm mt-1">Remember the direction of the stretch</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 