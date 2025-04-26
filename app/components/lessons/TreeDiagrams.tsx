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
    question: "What do you do with probabilities along a branch in a tree diagram?",
    answer: "multiply",
    explanation: "You multiply the probabilities along a branch to find the probability of that path."
  },
  {
    question: "What happens to probabilities when drawing without replacement?",
    answer: "they change",
    explanation: "The probabilities change because the number of possible outcomes decreases after each draw."
  },
  {
    question: "What do you do with probabilities of different paths if you want 'either/or'?",
    answer: "add",
    explanation: "You add the probabilities of different paths when you want the probability of either outcome."
  }
];

export default function TreeDiagrams() {
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
            <li>What a tree diagram is and why it's useful</li>
            <li>How to draw it step by step</li>
            <li>How to calculate probabilities using the branches</li>
            <li>How to handle "with" and "without" replacement</li>
          </ul>
        </section>

        {/* Part 1: What Is a Tree Diagram? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What Is a Tree Diagram?</h2>
          <p className="text-gray-600 mb-4">
            A tree diagram is a tool to help you work through probability problems with more than one step.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">Each branch represents a possible outcome, and multiplying along the branches helps you find probabilities of combined events.</p>
          </div>
        </section>

        {/* Part 2: Example – Tossing a Coin Twice */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Example – Tossing a Coin Twice</h2>
          <div className="space-y-4">
            <p className="text-gray-700 font-medium">Let's build a tree diagram:</p>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Step 1: First Toss</h3>
              <p className="text-gray-700">Head (H) → 1/2</p>
              <p className="text-gray-700">Tail (T) → 1/2</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Step 2: Second Toss (for each first outcome)</h3>
              <p className="text-gray-700">After H → H and T again</p>
              <p className="text-gray-700">After T → H and T again</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Tree Diagram:</h3>
              <pre className="text-gray-700 font-mono">
{`Start
 ├── H (½)
 │    ├── H (½) → HH (¼)
 │    └── T (½) → HT (¼)
 └── T (½)
      ├── H (½) → TH (¼)
      └── T (½) → TT (¼)`}
              </pre>
              <p className="text-gray-600 mt-2">Each full path gives you a probability by multiplying along the branches.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Examples:</h3>
              <p className="text-gray-700">P(HH) = 1/2 × 1/2 = 1/4</p>
              <p className="text-gray-700">P(HT) = 1/2 × 1/2 = 1/4</p>
            </div>
          </div>
        </section>

        {/* Part 3: With and Without Replacement */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: With and Without Replacement</h2>
          <div className="space-y-4">
            <p className="text-gray-700 font-medium">Example: Drawing 2 balls from a bag without replacement</p>
            <p className="text-gray-600">Bag has: 2 red balls, 1 blue ball (3 balls total)</p>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Step 1: First draw</h3>
              <p className="text-gray-700">Red → 2/3</p>
              <p className="text-gray-700">Blue → 1/3</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Step 2: Second draw (no replacement!)</h3>
              <p className="text-gray-700">If first was Red:</p>
              <p className="text-gray-700">One red left, one blue left → 2 balls</p>
              <p className="text-gray-700">Red again → 1/2, Blue → 1/2</p>
              <p className="text-gray-700 mt-2">If first was Blue:</p>
              <p className="text-gray-700">Still 2 red balls → Red → 1, Blue → 0</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Tree Diagram:</h3>
              <pre className="text-gray-700 font-mono">
{`Start
 ├── R (2/3)
 │    ├── R (1/2) → RR (1/3)
 │    └── B (1/2) → RB (1/3)
 └── B (1/3)
      └── R (1)   → BR (1/3)`}
              </pre>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Check probabilities:</h3>
              <p className="text-gray-700">RR = 2/3 × 1/2 = 1/3</p>
              <p className="text-gray-700">RB = 2/3 × 1/2 = 1/3</p>
              <p className="text-gray-700">BR = 1/3 × 1 = 1/3</p>
              <p className="text-gray-700">Total = 1 ✅</p>
            </div>
          </div>
        </section>

        {/* Part 4: Practice */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 4: Practice</h2>
          <div className="space-y-4">
            <p className="text-gray-700 font-medium">Try these:</p>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">1. Toss a coin and roll a die.</p>
              <p className="text-gray-700">Draw the tree diagram.</p>
              <p className="text-gray-700">What is the probability of getting heads and a 6?</p>
              <p className="text-gray-700">Answer: P(H and 6) = 1/2 × 1/6 = 1/12</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">2. A bag has 4 green and 1 red sweet.</p>
              <p className="text-gray-700">Two sweets are taken without replacement.</p>
              <p className="text-gray-700">What is the probability of getting two green sweets?</p>
              <p className="text-gray-700">Answer: First green: 4/5, then green again: 3/4</p>
              <p className="text-gray-700">So: 4/5 × 3/4 = 12/20 = 3/5</p>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Tips</h2>
          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Multiply along the branches</li>
              <li>Add up if it's "or" situations</li>
              <li>Adjust probabilities if no replacement</li>
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