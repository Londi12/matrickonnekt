'use client';

import React from 'react';

interface Props {}

const AlgebraPolynomialEquations: React.FC<Props> = () => {
  return (
    <div className="prose max-w-none">
      <section className="mb-8">
        <h2>Polynomial Equations &amp; Inequalities</h2>
        <p className="text-gray-600 mb-4">
          Master solving higher-order equations and inequalities using algebraic techniques.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-blue-800">Learning Objectives</h3>
          <ul className="text-blue-700">
            <li>Apply the Factor and Remainder Theorems</li>
            <li>Solve cubic and higher-order equations</li>
            <li>Determine the nature of roots</li>
            <li>Solve polynomial inequalities</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Key Concepts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Factor Theorem</h4>
            <ul>
              <li>A number a is a root of P(x) if P(a) = 0</li>
              <li>(x - a) is a factor if a is a root</li>
              <li>Used to find factors of polynomials</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Remainder Theorem</h4>
            <ul>
              <li>P(x) ÷ (x - a) gives remainder P(a)</li>
              <li>Quick way to evaluate P(a)</li>
              <li>Helps identify roots</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Solved Examples</h3>
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">1. Using Factor Theorem</h4>
            <p className="mb-2">Find the factors of P(x) = x³ - 6x² + 11x - 6</p>
            <div className="bg-white p-3 rounded border mb-3">
              <p className="font-medium">Solution:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Try x = 1: P(1) = 1 - 6 + 11 - 6 = 0 ∴ (x - 1) is a factor</li>
                <li>Divide P(x) by (x - 1):
                  <br />x³ - 6x² + 11x - 6 = (x - 1)(x² - 5x + 6)</li>
                <li>Further factorize: x² - 5x + 6 = (x - 2)(x - 3)</li>
                <li>Therefore: P(x) = (x - 1)(x - 2)(x - 3)</li>
              </ol>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">2. Polynomial Inequality</h4>
            <p className="mb-2">Solve: x² - 5x + 6 {'>'} 0</p>
            <div className="bg-white p-3 rounded border mb-3">
              <p className="font-medium">Solution:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Factorize: (x - 2)(x - 3) {'>'} 0</li>
                <li>Find critical values: x = 2 and x = 3</li>
                <li>Test intervals:
                  <ul className="ml-6 mt-1">
                    <li>x {'<'} 2: negative × negative = positive</li>
                    <li>2 {'<'} x {'<'} 3: positive × negative = negative</li>
                    <li>x {'>'} 3: positive × positive = positive</li>
                  </ul>
                </li>
                <li>Solution: x {'<'} 2 or x {'>'} 3</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Practice Questions</h3>
        <div className="border p-4 rounded-lg">
          <div className="space-y-4">
            <div>
              <p className="font-medium">1. Use the Factor Theorem to find if x + 2 is a factor of:</p>
              <p className="ml-4">P(x) = x³ + 3x² - 4x - 12</p>
            </div>
            <div>
              <p className="font-medium">2. Solve the inequality:</p>
              <p className="ml-4">x³ - x² - 6x {'>'} 0</p>
            </div>
            <div>
              <p className="font-medium">3. If (x + 1) is a factor of P(x) = x³ + ax² + bx - 6, find the values of a and b.</p>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 p-3 rounded">
            <p className="font-medium text-yellow-800">Exam Tips:</p>
            <ul className="text-yellow-900">
              <li>Always check your answers by substitution</li>
              <li>Draw number lines for inequalities</li>
              <li>Show all working clearly</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3>Key Takeaways</h3>
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <ul className="text-green-800">
            <li>Factor Theorem helps find polynomial factors</li>
            <li>Remainder Theorem simplifies polynomial evaluation</li>
            <li>Solve inequalities using critical values</li>
            <li>Always verify your solutions</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="text-red-800 font-semibold">Common Mistakes to Avoid</h4>
          <ul className="text-red-700">
            <li>Forgetting to check all possible factors</li>
            <li>Incorrect signs when multiplying inequalities</li>
            <li>Not verifying solutions</li>
            <li>Missing critical values in inequalities</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AlgebraPolynomialEquations;
