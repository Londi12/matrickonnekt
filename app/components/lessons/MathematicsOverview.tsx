"use client";

import React from 'react';

export default function MathematicsOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">        {/* Welcome Section */}
        <section className="bg-blue-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Mathematics</h1>
          <p className="text-gray-700">
            Welcome to your comprehensive Mathematics journey! This course follows the official CAPS curriculum from the 
            Department of Basic Education and is designed to help you master key mathematical concepts and prepare 
            effectively for your National Senior Certificate examinations.
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-blue-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aligned with CAPS curriculum and WCED e-Portal resources
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Master algebraic operations, equations, and inequalities</li>
              <li>Apply differential calculus to solve various problems</li>
              <li>Use analytical and Euclidean geometry to solve geometric problems</li>
              <li>Apply trigonometric concepts and solve trigonometric equations</li>
              <li>Work with statistics, probability, and sequence patterns</li>
              <li>Apply financial mathematics to real-world situations</li>
            </ul>
          </div>
        </section>        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Algebra</h3>
                <p className="text-gray-500 text-xs mt-1">Paper 1: ±30 marks</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Polynomial Equations & Inequalities</li>
                  <li>• Nature of Roots & Remainder Theorem</li>
                  <li>• Exponential & Logarithmic Functions</li>
                  <li>• Algebraic Manipulation & Fractions</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Calculus</h3>
                <p className="text-gray-500 text-xs mt-1">Paper 1: ±40 marks</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Differentiation from First Principles</li>
                  <li>• Rules of Differentiation</li>
                  <li>• Cubic Graphs & Applications</li>
                  <li>• Optimization & Rate of Change</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Geometry & Trigonometry</h3>
                <p className="text-gray-500 text-xs mt-1">Paper 2: ±70 marks</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Circle Geometry & Euclidean Proofs</li>
                  <li>• Trigonometric Functions & Identities</li>
                  <li>• 2D & 3D Trigonometry Problems</li>
                  <li>• Analytical Geometry (Lines & Circles)</li>
                </ul>
              </div>              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Statistics & Probability</h3>
                <p className="text-gray-500 text-xs mt-1">Paper 2: ±35 marks</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Data Analysis & Regression</li>
                  <li>• Probability & Counting Principles</li>
                  <li>• Counting Principles</li>
                  <li>• Normal Distribution</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4 mt-4">
                <h3 className="font-medium text-gray-900">5. Financial Mathematics</h3>
                <p className="text-gray-500 text-xs mt-1">Paper 1: ±15 marks</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Simple & Compound Growth</li>
                  <li>• Future & Present Value</li>
                  <li>• Annuities & Loan Calculations</li>
                  <li>• Depreciation Models</li>
                </ul>
              </div>
            </div>
          </div>
        </section>        {/* Official Curriculum Resources */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-blue-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Official WCED & DBE Resources</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guides</h3>
                <p className="text-gray-600 mb-2">Official DBE study guides designed to help bridge the gap in learners' understanding of commonly tested concepts.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/MathematicsMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access Mathematics Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">WCED ePortal Resources</h3>
                <p className="text-gray-600 mb-2">Access comprehensive learning materials, worksheets, and past papers through the Western Cape Education Department's ePortal.</p>
                <a href="https://wcedeportal.co.za/mathematics" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore WCED Mathematics Resources
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
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
