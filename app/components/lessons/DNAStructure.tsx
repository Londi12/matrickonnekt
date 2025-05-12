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
    question: "What are the two purines found in DNA?",
    answer: "adenine and guanine",
    explanation: "Purines (A and G) have a double-ring structure and pair with pyrimidines (T and C) which have a single ring."
  },
  {
    question: "What is the name of the enzyme that unwinds DNA during replication?",
    answer: "helicase",
    explanation: "Helicase breaks the hydrogen bonds between base pairs to separate the DNA strands for replication."
  },
  {
    question: "Which strand is synthesized continuously during DNA replication?",
    answer: "leading strand",
    explanation: "The leading strand is synthesized continuously in the 5' to 3' direction, while the lagging strand is synthesized in fragments."
  }
];

export default function DNAStructure() {
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
            <li>The structure of DNA molecule</li>
            <li>Base-pairing rules and nucleotide composition</li>
            <li>The process of DNA replication</li>
            <li>Key enzymes involved in DNA replication</li>
          </ul>
        </section>

        {/* Theory */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Theory in Depth</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">DNA Structure</h3>
              <p className="text-gray-600">
                <strong>DNA</strong> (Deoxyribonucleic acid) is a double helix structure composed of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>Sugar-phosphate backbone</li>
                <li>Nucleotide bases (A, T, G, C)</li>
                <li>Hydrogen bonds between base pairs</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4">
              <h4 className="font-medium text-yellow-800">South African Connection</h4>
              <p className="text-yellow-700">
                South African researchers are using DNA analysis to study our rich biodiversity and human population genetics, contributing to conservation efforts and understanding our diverse heritage.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Base Pairing Rules</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-800">Purines</h4>
                    <ul className="list-disc list-inside text-blue-700">
                      <li>Adenine (A) pairs with T</li>
                      <li>Guanine (G) pairs with C</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800">Pyrimidines</h4>
                    <ul className="list-disc list-inside text-blue-700">
                      <li>Thymine (T) pairs with A</li>
                      <li>Cytosine (C) pairs with G</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">DNA Replication</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  DNA replication is <strong>semi-conservative</strong> - each new DNA molecule contains one old strand and one new strand.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Key Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Unwinding by helicase</li>
                    <li>Primer addition by primase</li>
                    <li>Nucleotide addition by DNA polymerase</li>
                    <li>Okazaki fragment joining by ligase</li>
                  </ol>
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
              <h3 className="font-medium text-gray-800 mb-2">Example: Base Sequence Analysis</h3>
              <p className="text-gray-700">If one DNA strand has the sequence: ATTGCA</p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">Step 1: Apply base pairing rules</p>
                <div className="bg-white p-3 rounded border">
                  <p className="text-gray-600">A pairs with T</p>
                  <p className="text-gray-600">T pairs with A</p>
                  <p className="text-gray-600">G pairs with C</p>
                  <p className="text-gray-600">C pairs with G</p>
                </div>
                <p className="text-gray-600 font-medium mt-2">Complementary strand:</p>
                <p className="text-gray-800 font-mono">TAACGT</p>
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
              <li>• DNA is a double helix with complementary base pairs</li>
              <li>• A pairs with T (2 hydrogen bonds)</li>
              <li>• G pairs with C (3 hydrogen bonds)</li>
              <li>• Replication is semi-conservative</li>
              <li>• Multiple enzymes work together in replication</li>
            </ul>
          </div>
        </section>

        {/* Homework */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Homework Task</h2>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-indigo-800 font-medium mb-2">Research Project:</p>
            <p className="text-indigo-700">
              Research DNA fingerprinting and its applications in South Africa:
            </p>
            <ul className="list-disc list-inside space-y-2 text-indigo-600 mt-2">
              <li>Forensic science applications</li>
              <li>Paternity testing</li>
              <li>Conservation genetics</li>
              <li>Ethical considerations</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
