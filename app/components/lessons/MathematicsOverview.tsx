"use client";

import React from 'react';

export default function MathematicsOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-blue-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Mathematics</h1>
          <p className="text-gray-700">
            Welcome to your comprehensive Mathematics journey! This course is designed to help you master 
            key mathematical concepts and prepare effectively for your Grade 12 examinations.
          </p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Master algebraic operations and equations</li>
              <li>Understand and apply calculus concepts</li>
              <li>Solve complex geometric and trigonometric problems</li>
              <li>Analyze statistical data and probability</li>
              <li>Apply mathematical concepts to real-world scenarios</li>
            </ul>
          </div>
        </section>

        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Algebra</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Polynomial Equations</li>
                  <li>• Exponential & Logarithmic Functions</li>
                  <li>• Linear Programming</li>
                  <li>• Nature of Roots</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Calculus</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Differentiation from First Principles</li>
                  <li>• Derivative Rules</li>
                  <li>• Applications of Derivatives</li>
                  <li>• Optimization Problems</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Geometry & Trigonometry</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Circle Geometry</li>
                  <li>• Trigonometric Functions</li>
                  <li>• 3D Problems</li>
                  <li>• Analytical Geometry</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Statistics & Probability</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Data Analysis</li>
                  <li>• Probability Concepts</li>
                  <li>• Counting Principles</li>
                  <li>• Normal Distribution</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Study Tips */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Study Tips & Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Effective Study Strategies</h3>
              <ul className="text-green-700 space-y-2">
                <li>✓ Practice regularly with past papers</li>
                <li>✓ Focus on understanding concepts, not just memorizing</li>
                <li>✓ Work through examples step by step</li>
                <li>✓ Create summary notes for each topic</li>
                <li>✓ Form study groups for complex topics</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-medium text-purple-800 mb-2">Additional Resources</h3>
              <ul className="text-purple-700 space-y-2">
                <li>📚 WCED ePortal Materials</li>
                <li>📝 Past Exam Papers</li>
                <li>🎥 Video Tutorials</li>
                <li>📱 Interactive Practice Tools</li>
                <li>📊 Formula Sheets & Mind Maps</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Information */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 1 (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• Algebra and Equations (30%)</li>
                <li>• Patterns and Sequences (20%)</li>
                <li>• Finance and Growth (15%)</li>
                <li>• Calculus (35%)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 2 (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• Geometry and Measurement (40%)</li>
                <li>• Trigonometry (30%)</li>
                <li>• Statistics and Probability (30%)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Remember, mathematics is about understanding and practice. Take your time with each topic, 
              ensure you grasp the fundamentals before moving on, and don't hesitate to seek help when needed.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Key to Excellence</h3>
              <ul className="space-y-2">
                <li>• Regular practice with varied problems</li>
                <li>• Active engagement in lessons</li>
                <li>• Consistent revision schedule</li>
                <li>• Focus on exam techniques</li>
                <li>• Building problem-solving skills</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
