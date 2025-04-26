import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface QuizQuestion {
  question: string;
  answer: string;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Find the inverse of f(x) = 2x + 3",
    answer: "f^-1(x) = (x-3)/2",
    explanation: "Swap x and y, then solve for y"
  },
  {
    question: "What is the inverse of f(x) = x² (for x ≥ 0)?",
    answer: "f^-1(x) = √x",
    explanation: "The inverse of x² is √x, but only for x ≥ 0"
  },
  {
    question: "If f(x) = 5x - 1, what is f^-1(4)?",
    answer: "1",
    explanation: "f^-1(4) means find x where f(x) = 4. So 5x - 1 = 4 → x = 1"
  },
  {
    question: "What is the inverse of f(x) = 1/x?",
    answer: "f^-1(x) = 1/x",
    explanation: "The inverse of 1/x is itself"
  }
];

export default function FunctionInverses() {
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
            <li>What an inverse function is</li>
            <li>How to find the inverse</li>
            <li>How to interpret the graph</li>
            <li>Key properties and how they link to real life</li>
          </ul>
        </section>

        {/* Part 1: What is an Inverse Function? */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 1: What is an Inverse Function?</h2>
          <p className="text-gray-600 mb-4">
            An inverse function undoes what the original function does.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">If the original function takes x and gives you y,</p>
            <p className="text-gray-700 font-medium">then the inverse takes y and gives you back x.</p>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Notation:</p>
              <p className="text-gray-700 font-mono text-center">f⁻¹(x) (read as "f inverse of x")</p>
              <p className="text-gray-600 mt-2">For a function to have an inverse, it must be one-to-one (each input has only one output).</p>
            </div>
          </div>
        </section>

        {/* Part 2: Finding the Inverse */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 2: Finding the Inverse</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">Here's how you find an inverse algebraically:</p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-gray-700 font-medium">Steps:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Replace f(x) with y</li>
                  <li>Swap x and y</li>
                  <li>Solve for y</li>
                  <li>Rewrite as f⁻¹(x)</li>
                </ol>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Example: f(x) = 2x + 3</p>
                <div className="space-y-2 mt-2">
                  <p className="text-gray-600">Step 1: y = 2x + 3</p>
                  <p className="text-gray-600">Step 2: x = 2y + 3</p>
                  <p className="text-gray-600">Step 3: Solve for y:</p>
                  <p className="text-gray-600">x - 3 = 2y → y = (x - 3)/2</p>
                  <p className="text-gray-600">Step 4: f⁻¹(x) = (x - 3)/2</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3: Graphing Inverses */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 3: Graphing Inverses</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">The inverse is the reflection of the original graph across the line y = x</p>
            <div className="mt-4">
              <p className="text-gray-600">If the original graph has a point (a,b),</p>
              <p className="text-gray-600">the inverse has the point (b,a)</p>
              <div className="mt-4">
                <p className="text-gray-700 font-medium">Example:</p>
                <p className="text-gray-600">Original function: f(x) = x² (but restricted to x ≥ 0)</p>
                <p className="text-gray-600">Inverse: f⁻¹(x) = √x</p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 4: Domain and Range Switch */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Part 4: Domain and Range Switch</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium">When you find the inverse:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
              <li>The domain of the original becomes the range of the inverse</li>
              <li>The range of the original becomes the domain of the inverse</li>
            </ul>
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
              <p className="text-yellow-700 font-medium">Think of inverses like "reversing the steps"</p>
              <p className="text-yellow-600 text-sm mt-1">They undo what the original function does</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Always check your work</p>
              <p className="text-yellow-600 text-sm mt-1">f(f⁻¹(x)) = x and f⁻¹(f(x)) = x</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 font-medium">Not all functions have inverses</p>
              <p className="text-yellow-600 text-sm mt-1">The function must be one-to-one</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 