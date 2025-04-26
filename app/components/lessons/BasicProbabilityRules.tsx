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
    question: "What is the probability of an impossible event?",
    answer: "0",
    explanation: "An impossible event has a probability of 0."
  },
  {
    question: "What is the probability of a certain event?",
    answer: "1",
    explanation: "A certain event has a probability of 1."
  },
  {
    question: "If P(A) = 0.3, what is P(not A)?",
    answer: "0.7",
    explanation: "Using the complement rule: P(not A) = 1 - P(A) = 1 - 0.3 = 0.7"
  }
];

export default function BasicProbabilityRules() {
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
            <li>What probability is and how to write it</li>
            <li>The basic rules: from "certain" to "impossible"</li>
            <li>How to add or multiply probabilities depending on the situation</li>
          </ul>
        </section>

        {/* Part 1: What Is Probability? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What Is Probability?</h2>
          <p className="text-gray-600 mb-4">
            Probability is a number between 0 and 1 that tells you how likely something is to happen.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Probability = Number of favourable outcomes / Total number of outcomes</p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600">0 means impossible</p>
              <p className="text-gray-600">1 means certain</p>
              <p className="text-gray-600">Anything in-between shows chance (e.g. 0.5 = 50% chance)</p>
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example:</h3>
              <p className="text-gray-700">A die is rolled. What's the probability of getting a 4?</p>
              <p className="text-gray-700">P(4) = 1/6</p>
            </div>
          </div>
        </section>

        {/* Part 2: Basic Rules You Need to Know */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Basic Rules You Need to Know</h2>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">1. Complement Rule</h3>
              <p className="text-gray-700">If the chance of something happening is P(A),</p>
              <p className="text-gray-700">then the chance of it not happening is:</p>
              <p className="text-gray-700 font-medium">P(not A) = 1 - P(A)</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">2. Addition Rule (for OR)</h3>
              <p className="text-gray-700">If A and B can't happen at the same time (mutually exclusive):</p>
              <p className="text-gray-700 font-medium">P(A or B) = P(A) + P(B)</p>
              <div className="mt-4 p-4 bg-white rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Example:</h4>
                <p className="text-gray-700">Pick a card: what's the chance it's a King or a Queen?</p>
                <p className="text-gray-700">P(K or Q) = 4/52 + 4/52 = 8/52</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">3. Multiplication Rule (for AND)</h3>
              <p className="text-gray-700">If A and B are independent (one doesn't affect the other):</p>
              <p className="text-gray-700 font-medium">P(A and B) = P(A) × P(B)</p>
              <div className="mt-4 p-4 bg-white rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Example:</h4>
                <p className="text-gray-700">Flip a coin and roll a die. What's the chance of getting heads and a 6?</p>
                <p className="text-gray-700">P(Heads and 6) = 1/2 × 1/6 = 1/12</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3: Practice Time */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Practice Time</h2>
          <div className="space-y-4">
            <p className="text-gray-700 font-medium">Try these:</p>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">1. A spinner has 5 equal sections: A, B, C, D, E.</p>
              <p className="text-gray-700">What is P(not A)?</p>
              <p className="text-gray-700">Answer: P(not A) = 1 - 1/5 = 4/5</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">2. What's the probability of drawing a red card or a black King from a full deck?</p>
              <p className="text-gray-700">Answer: P(Red or black King) = 26/52 + 2/52 = 28/52</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">3. A coin is tossed twice. What is the probability of getting two heads?</p>
              <p className="text-gray-700">Answer: P(H and H) = 1/2 × 1/2 = 1/4</p>
            </div>
          </div>
        </section>

        {/* Part 4: Quick Tips */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Tips</h2>
          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>"OR" usually means add</li>
              <li>"AND" usually means multiply</li>
              <li>Always check: Are events independent or mutually exclusive?</li>
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