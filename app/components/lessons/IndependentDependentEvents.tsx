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
    question: "What is the key difference between independent and dependent events?",
    answer: "independent events don't affect each other, dependent events do",
    explanation: "Independent events have no influence on each other's outcomes, while dependent events are affected by previous outcomes."
  },
  {
    question: "What is the formula for P(A and B) for independent events?",
    answer: "P(A) × P(B)",
    explanation: "For independent events, we simply multiply the individual probabilities."
  },
  {
    question: "What is the formula for P(A and B) for dependent events?",
    answer: "P(A) × P(B after A)",
    explanation: "For dependent events, we multiply the first probability by the probability of the second event after the first has occurred."
  }
];

export default function IndependentDependentEvents() {
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
            <li>What independent and dependent events are</li>
            <li>How to spot the difference between them</li>
            <li>How to calculate probabilities for each type</li>
          </ul>
        </section>

        {/* Part 1: Independent Events */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What Are Independent Events?</h2>
          <p className="text-gray-600 mb-4">
            Two events are independent if the outcome of one does not affect the other.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Example:</p>
            <p className="text-gray-700">Tossing a coin and rolling a die.</p>
            <p className="text-gray-700">The coin doesn't care what happens with the die.</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">To calculate:</p>
              <p className="text-gray-700">P(A and B) = P(A) × P(B)</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Try this:</p>
              <p className="text-gray-700">P(Heads) = 1/2</p>
              <p className="text-gray-700">P(rolling a 6) = 1/6</p>
              <p className="text-gray-700">P(Heads and 6) = 1/2 × 1/6 = 1/12</p>
            </div>
          </div>
        </section>

        {/* Part 2: Dependent Events */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: What Are Dependent Events?</h2>
          <p className="text-gray-600 mb-4">
            Two events are dependent if the outcome of one does affect the other.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Example:</p>
            <p className="text-gray-700">Taking a card from a deck, then another without putting the first one back.</p>
            <p className="text-gray-700">The second draw depends on the first because the number of cards has changed.</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">To calculate:</p>
              <p className="text-gray-700">P(A and B) = P(A) × P(B after A)</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Try this:</p>
              <p className="text-gray-700">5 red and 3 blue marbles in a bag</p>
              <p className="text-gray-700">One is taken out (not replaced), then another drawn</p>
              <p className="text-gray-700">P(Red then Blue) = 5/8 × 3/7 = 15/56</p>
            </div>
          </div>
        </section>

        {/* Part 3: How to Tell the Difference */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: How to Tell the Difference</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Independent</th>
                  <th className="text-left py-2">Dependent</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Coin + dice</td>
                  <td className="py-2">Two picks from a bag (no return)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Two unrelated events</td>
                  <td className="py-2">One event changes the next</td>
                </tr>
                <tr>
                  <td className="py-2">Multiply separate probabilities</td>
                  <td className="py-2">Must update the second probability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Part 4: Practice */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 4: Practice Time</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 font-medium">Question 1:</p>
              <p className="text-gray-700">A coin is tossed and a number is drawn from a hat (1–5).</p>
              <p className="text-gray-700">What is the probability of getting heads and the number 3?</p>
              <div className="mt-2">
                <p className="text-gray-700">Answer: P(H and 3) = 1/2 × 1/5 = 1/10</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 font-medium">Question 2:</p>
              <p className="text-gray-700">A box has 4 green pens and 6 blue pens.</p>
              <p className="text-gray-700">Two pens are drawn one after another without replacement.</p>
              <p className="text-gray-700">What is the probability of getting two blue pens?</p>
              <div className="mt-2">
                <p className="text-gray-700">Answer:</p>
                <p className="text-gray-700">First blue: 6/10, then: 5/9</p>
                <p className="text-gray-700">P(2 blue) = 6/10 × 5/9 = 30/90 = 1/3</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Recap */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Recap</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Independent: Multiply, no change</li>
            <li>Dependent: Multiply, but adjust second probability</li>
            <li>Keywords: "without replacement" = dependent!</li>
          </ul>
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