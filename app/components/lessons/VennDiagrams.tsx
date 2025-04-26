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
    question: "What does the overlap in a Venn diagram represent?",
    answer: "elements in both sets",
    explanation: "The overlap (intersection) shows elements that belong to both sets."
  },
  {
    question: "What is the formula for P(A or B) using Venn diagrams?",
    answer: "P(A) + P(B) - P(A and B)",
    explanation: "This formula accounts for the overlap being counted twice."
  },
  {
    question: "How do you find the number of elements in only set A?",
    answer: "total in A minus overlap",
    explanation: "You subtract the number of elements in the overlap from the total in set A."
  }
];

export default function VennDiagrams() {
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
            <li>What a Venn diagram is and how to use it</li>
            <li>How to work with two or three overlapping sets</li>
            <li>How to calculate probabilities using Venn diagrams</li>
          </ul>
        </section>

        {/* Part 1: What Is a Venn Diagram? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What Is a Venn Diagram?</h2>
          <p className="text-gray-600 mb-4">
            A Venn diagram shows how different groups (sets) overlap. Each circle represents a set of outcomes.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Example:</p>
            <p className="text-gray-700">Let:</p>
            <p className="text-gray-700">A = students who take Maths</p>
            <p className="text-gray-700">B = students who take Science</p>
            <p className="text-gray-700 mt-2">The overlap is students who take both Maths and Science.</p>
          </div>
        </section>

        {/* Part 2: A Simple Example */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: A Simple Example</h2>
          <div className="space-y-4">
            <p className="text-gray-700">Let's say in a class of 40 students:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>22 take Maths</li>
              <li>18 take Science</li>
              <li>10 take both</li>
            </ul>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Section Breakdown:</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Section</th>
                    <th className="text-right py-2">Number of Students</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Only Maths (A only)</td>
                    <td className="text-right">22 - 10 = 12</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Only Science (B only)</td>
                    <td className="text-right">18 - 10 = 8</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Both A and B</td>
                    <td className="text-right">10</td>
                  </tr>
                  <tr>
                    <td className="py-2">Outside both sets</td>
                    <td className="text-right">40 - (12 + 8 + 10) = 10</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Example Questions:</h3>
              <p className="text-gray-700">Q1: What is the probability a student takes only Maths?</p>
              <p className="text-gray-700">P(only Maths) = 12/40</p>
              <p className="text-gray-700 mt-2">Q2: What is the probability a student takes Maths or Science?</p>
              <p className="text-gray-700">P(A∪B) = (12 + 8 + 10)/40 = 30/40</p>
              <p className="text-gray-700 mt-2">Q3: What is the probability a student takes neither?</p>
              <p className="text-gray-700">P(neither) = 10/40</p>
            </div>
          </div>
        </section>

        {/* Part 3: Useful Formula */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Useful Formula</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">When working with Venn diagrams:</p>
            <p className="text-gray-700 font-medium mt-2">P(A∪B) = P(A) + P(B) - P(A∩B)</p>
            <p className="text-gray-700 mt-2">That means:</p>
            <p className="text-gray-700">"A or B" = "A" + "B" – "both"</p>
          </div>
        </section>

        {/* Part 4: Practice */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 4: Practice</h2>
          <div className="space-y-4">
            <p className="text-gray-700">Try this:</p>
            <p className="text-gray-700">In a group of 50 learners:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>30 take Geography</li>
              <li>28 take History</li>
              <li>15 take both</li>
            </ul>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Questions:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>How many take only Geography?</li>
                <li>How many take only History?</li>
                <li>How many take neither?</li>
                <li>What is the probability a learner takes History or Geography?</li>
              </ol>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Answers:</h3>
              <p className="text-gray-700">Geography only = 30 - 15 = 15</p>
              <p className="text-gray-700">History only = 28 - 15 = 13</p>
              <p className="text-gray-700">Total in diagram = 15 + 13 + 15 = 43</p>
              <p className="text-gray-700">So, neither = 50 - 43 = 7</p>
              <p className="text-gray-700 mt-2">P(G or H) = 43/50</p>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Always subtract the overlap when filling in the diagram</li>
            <li>Check your total adds up to the full number of students</li>
            <li>Use fractions for probabilities (e.g. 13/50)</li>
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