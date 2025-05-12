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
    question: "Which factor does NOT affect reaction rate?",
    answer: "product colour",
    explanation: "Product color is a physical property and does not affect reaction rate. Temperature, concentration, surface area, and catalysts affect reaction rate."
  },
  {
    question: "In the equilibrium N₂ + 3H₂ ⇌ 2NH₃, if [N₂] is doubled, how does [NH₃] change?",
    answer: "doubles",
    explanation: "According to Le Chatelier's principle, doubling [N₂] shifts equilibrium right, doubling [NH₃]. The relationship is 1:1 for N₂:NH₃."
  },
  {
    question: "What is Kc for the reaction 2NO₂ ⇌ N₂O₄ if [NO₂] = 0.2M and [N₂O₄] = 0.1M at equilibrium?",
    answer: "2.5",
    explanation: "Kc = [N₂O₄]/[NO₂]² = 0.1/(0.2)² = 0.1/0.04 = 2.5"
  }
];

export default function RatesEquilibrium() {
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
            <li>Factors affecting reaction rates</li>
            <li>Dynamic equilibrium concept</li>
            <li>Le Chatelier's principle and applications</li>
            <li>Equilibrium constants and calculations</li>
          </ul>
        </section>

        {/* Theory */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Theory in Depth</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Reaction Rates</h3>
              <p className="text-gray-600">
                <strong>Reaction rate</strong> measures how quickly reactants are converted to products. Key factors affecting rates:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>Temperature (higher = faster)</li>
                <li>Concentration (higher = faster)</li>
                <li>Surface area (larger = faster)</li>
                <li>Catalysts (speed up without being consumed)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4">
              <h4 className="font-medium text-yellow-800">South African Context</h4>
              <p className="text-yellow-700">
                Understanding reaction rates is crucial in our mining industry, particularly in gold extraction using the cyanidation process. Temperature and concentration control are vital for efficient extraction.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Chemical Equilibrium</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Dynamic equilibrium</strong> occurs when:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                  <li>Forward and reverse reactions occur simultaneously</li>
                  <li>Rates of forward and reverse reactions are equal</li>
                  <li>Concentrations of reactants and products remain constant</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Le Chatelier's Principle</h3>
              <p className="text-gray-600">
                When a system at equilibrium is disturbed, it shifts to counteract the change:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-50 p-3 rounded">
                  <h4 className="font-medium text-gray-800">Temperature Changes</h4>
                  <p className="text-gray-600">↑ temp = shift to endothermic</p>
                  <p className="text-gray-600">↓ temp = shift to exothermic</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h4 className="font-medium text-gray-800">Concentration Changes</h4>
                  <p className="text-gray-600">↑ reactant = shift right</p>
                  <p className="text-gray-600">↑ product = shift left</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Worked Examples</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Example 1: Equilibrium Constant</h3>
              <p className="text-gray-700">Consider the reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)</p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">At equilibrium:</p>
                <p className="text-gray-600">[N₂] = 0.2 M</p>
                <p className="text-gray-600">[H₂] = 0.6 M</p>
                <p className="text-gray-600">[NH₃] = 0.4 M</p>
                <p className="text-gray-600 font-medium mt-4">Calculate Kc:</p>
                <div className="bg-white p-3 rounded border">
                  <p className="text-gray-600">Kc = [NH₃]²/([N₂][H₂]³)</p>
                  <p className="text-gray-600">= (0.4)²/(0.2 × 0.6³)</p>
                  <p className="text-gray-600">= 0.16/(0.2 × 0.216)</p>
                  <p className="text-gray-600 font-medium">= 3.7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Questions */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Practice Questions</h2>
          <div className="space-y-6">
            {quizQuestions.map((question, index) => (
              <div key={index} className="space-y-2">
                <p className="text-gray-800 font-medium">{index + 1}. {question.question}</p>
                <input
                  type="text"
                  value={quizAnswers[index]}
                  onChange={(e) => {
                    const newAnswers = [...quizAnswers];
                    newAnswers[index] = e.target.value;
                    setQuizAnswers(newAnswers);
                  }}
                  className="w-full p-2 border rounded-md"
                  placeholder="Your answer..."
                />
                {quizResults[index] !== undefined && (
                  <div className="flex items-center space-x-2">
                    {quizResults[index] ? (
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircleIcon className="w-5 h-5 text-red-500" />
                    )}
                    <p className={quizResults[index] ? "text-green-600" : "text-red-600"}>
                      {quizResults[index] ? "Correct!" : `The correct answer is: ${question.answer}`}
                    </p>
                    <p className="text-gray-600 ml-2">{question.explanation}</p>
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

        {/* Key Takeaways */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Takeaways</h2>
          <div className="bg-green-50 p-4 rounded-lg">
            <ul className="space-y-2 text-green-800">
              <li>• Rate depends on temperature, concentration, surface area, and catalysts</li>
              <li>• Dynamic equilibrium means forward and reverse rates are equal</li>
              <li>• Le Chatelier's principle predicts equilibrium shifts</li>
              <li>• Kc calculations require equilibrium concentrations</li>
              <li>• Temperature affects both rate and equilibrium position</li>
            </ul>
          </div>
        </section>

        {/* Homework */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Homework Task</h2>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-indigo-800 font-medium mb-2">Research Task:</p>
            <p className="text-indigo-700">
              Research the Haber process for ammonia production in South Africa. Consider:
            </p>
            <ul className="list-disc list-inside space-y-2 text-indigo-600 mt-2">
              <li>Optimal conditions (temperature, pressure)</li>
              <li>Economic importance</li>
              <li>Environmental impact</li>
              <li>Applications in local agriculture</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
