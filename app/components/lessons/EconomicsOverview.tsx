"use client";

import React from 'react';

export default function EconomicsOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-emerald-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Economics</h1>
          <p className="text-gray-700">
            Explore the fascinating world of economics through this CAPS-aligned course designed to
            deepen your understanding of economic concepts, policies, and their practical applications.
            This program prepares you for success in the National Senior Certificate examinations and
            develops crucial analytical skills for interpreting economic issues.
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-emerald-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aligned with CAPS curriculum and WCED e-Portal resources
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Understand and apply macroeconomic principles and indicators</li>
              <li>Analyze economic growth, development, and policies</li>
              <li>Evaluate economic issues in South African and global contexts</li>
              <li>Interpret economic data, graphs, and statistics</li>
              <li>Apply economic problem-solving methods to real-world challenges</li>
              <li>Assess economic behavior of different markets and sectors</li>
              <li>Understand contemporary economic issues and their implications</li>
            </ul>
          </div>
        </section>

        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Macroeconomics</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper 1</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Circular Flow & Business Cycles</li>
                  <li>• Public Sector & Foreign Exchange Markets</li>
                  <li>• Protectionism & Free Trade</li>
                  <li>• Economic Indicators (GDP, GNP, etc.)</li>
                  <li>• South African Economic Growth Strategies</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Economic Pursuits</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper 1</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Growth & Development Policies</li>
                  <li>• South Africa's Industrial Development</li>
                  <li>• Economic & Social Performance Indicators</li>
                  <li>• International Comparisons & Standards</li>
                  <li>• South African Economic Issues</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Microeconomics</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper 2</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Perfect & Imperfect Markets</li>
                  <li>• Market Failures & Government Interventions</li>
                  <li>• Production & Cost Theory</li>
                  <li>• Price Elasticity & Market Equilibrium</li>
                  <li>• Competition & Monopoly Policies</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Contemporary Economic Issues</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper 2</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Inflation & Unemployment</li>
                  <li>• Tourism & Economic Redress</li>
                  <li>• Environmental Sustainability</li>
                  <li>• International Trade & Agreements</li>
                  <li>• COVID-19 Economic Impacts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Official Curriculum Resources */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-emerald-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Official WCED & DBE Resources</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-emerald-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guide</h3>
                <p className="text-gray-600 mb-2">Official DBE Economics study guide covering macroeconomics, microeconomics, and contemporary economic issues.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/EconomicsMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access Economics Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">WCED Economic Data Resources</h3>
                <p className="text-gray-600 mb-2">Access to economic data sets, graphs, case studies, and practice questions through the WCED ePortal.</p>
                <a href="https://wcedeportal.co.za/economics" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore WCED Economics Resources
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
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-medium text-emerald-800 mb-2">Effective Study Strategies</h3>
              <ul className="text-emerald-700 space-y-2">
                <li>✓ Create economics concept maps and flow diagrams</li>
                <li>✓ Practice drawing and interpreting economic graphs</li>
                <li>✓ Stay updated with current South African economic news</li>
                <li>✓ Master economic definitions and terminology</li>
                <li>✓ Practice data analysis and interpretation questions</li>
                <li>✓ Create summary sheets for economic equations</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Additional Resources</h3>
              <ul className="text-blue-700 space-y-2">
                <li>📊 South African Reserve Bank Statistical Data</li>
                <li>📚 NSC Past Papers with Memoranda</li>
                <li>📝 Economics Essay Structure Templates</li>
                <li>🎥 Economic Concept Video Tutorials</li>
                <li>📈 Statistics SA Data & Publications</li>
                <li>📰 Financial News Analysis Resources</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NSC Examination Structure */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-yellow-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">NSC Examination Structure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-medium text-emerald-900 mb-2">Paper 1: Macroeconomics & Economic Pursuits (3 hours, 150 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Compulsory questions (30 marks)</li>
                <li className="ml-4">- Multiple choice, matching columns, and fill in the blanks</li>
                <li>• <span className="font-medium">Section B:</span> Answer THREE of FOUR questions (60 marks)</li>
                <li className="ml-4">- Short questions & data response items</li>
                <li>• <span className="font-medium">Section C:</span> Answer ONE of TWO essay questions (40 marks)</li>
                <li className="ml-4">- One macroeconomics and one economic pursuits essay</li>
                <li className="ml-4">- Essays require introduction, body, and conclusion</li>
                <li className="ml-4">- Additional marks for original examples and interpretations</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Paper 2: Microeconomics & Contemporary Issues (3 hours, 150 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Compulsory questions (30 marks)</li>
                <li className="ml-4">- Multiple choice, matching columns, and fill in the blanks</li>
                <li>• <span className="font-medium">Section B:</span> Answer THREE of FOUR questions (60 marks)</li>
                <li className="ml-4">- Short questions & data response items</li>
                <li>• <span className="font-medium">Section C:</span> Answer ONE of TWO essay questions (40 marks)</li>
                <li className="ml-4">- One microeconomics and one contemporary issues essay</li>
                <li className="ml-4">- Essays require introduction, body, and conclusion</li>
                <li className="ml-4">- Additional marks for original examples and interpretations</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-2">School-Based Assessment (SBA)</h3>
            <ul className="text-gray-700 text-sm">
              <li>• <span className="font-medium">SBA Tasks (25%):</span> Tests, assignments, projects, and case studies</li>
              <li>• <span className="font-medium">Mid-year & Trial Examinations</span></li>
              <li>• <span className="font-medium">External NSC Exams (75%):</span> Paper 1 and Paper 2</li>
            </ul>
            <p className="text-gray-600 mt-2 text-sm">
              <span className="font-semibold">Note:</span> Data response questions often include graphs, statistics, extracts, and cartoons requiring interpretation.
            </p>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in Economics requires understanding key economic concepts, regular practice with data 
              interpretation, and developing strong analytical and essay-writing skills. Focus on connecting
              economic theory to South African and global economic realities.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Keys to Excellence</h3>
              <ul className="space-y-2">
                <li>• Stay informed about current economic affairs</li>
                <li>• Practice drawing and interpreting economic graphs</li>
                <li>• Develop structured essay-writing techniques</li>
                <li>• Build a strong economics vocabulary</li>
                <li>• Connect abstract theory to practical examples</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
