"use client";

import React from 'react';

export default function BusinessStudiesOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-blue-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Business Studies</h1>
          <p className="text-gray-700">
            Master the world of business through this CAPS-aligned course designed to develop your
            understanding of business concepts, operations, and environments. This program prepares you for 
            success in your National Senior Certificate examinations and builds essential skills for future 
            entrepreneurship and business careers.
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
              <li>Analyze business environments and their impact on business operations</li>
              <li>Evaluate business ventures and ensure sustainability</li>
              <li>Apply creative thinking to solve business problems</li>
              <li>Understand business roles in challenging environments</li>
              <li>Develop strategies to respond to business challenges</li>
              <li>Apply business ethics and corporate social responsibility principles</li>
              <li>Demonstrate entrepreneurial knowledge and skills</li>
            </ul>
          </div>
        </section>

        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Business Environments</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Macro Environment: Impact & Challenges</li>
                  <li>• Market Environment: Components & Challenges</li>
                  <li>• Micro Environment: Elements & Challenges</li>
                  <li>• Business Sectors & Their Environments</li>
                  <li>• Management of Change & Adaptation</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Business Ventures</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Forms of Ownership & Their Characteristics</li>
                  <li>• Investment & Insurance Decisions</li>
                  <li>• Creative Thinking & Problem Solving</li>
                  <li>• Business Location Decisions</li>
                  <li>• Contracts & Presentations</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Business Roles</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Ethics & Professional Conduct</li>
                  <li>• Corporate Social Responsibility</li>
                  <li>• Team Performance & Dynamics</li>
                  <li>• Conflict Management & Problem-Solving</li>
                  <li>• Human Rights & Diversity in Business</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Business Operations</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Human Resource Functions</li>
                  <li>• Quality Performance & Management</li>
                  <li>• Production Planning & Control</li>
                  <li>• Total Quality Management (TQM)</li>
                  <li>• Business Functions & Their Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Official Curriculum Resources */}
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
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guide</h3>
                <p className="text-gray-600 mb-2">Official DBE Business Studies study guide covering all main topics with concept explanations and exam preparation.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/BusinessStudiesMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access Business Studies Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">WCED Business Resources</h3>
                <p className="text-gray-600 mb-2">Access to case studies, business plan templates, and exemplar questions through the WCED ePortal.</p>
                <a href="https://wcedeportal.co.za/business-studies" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore WCED Business Studies Resources
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
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Effective Study Strategies</h3>
              <ul className="text-blue-700 space-y-2">
                <li>✓ Create detailed mind maps for each main topic</li>
                <li>✓ Practice using business terminology correctly</li>
                <li>✓ Analyze real-world South African business cases</li>
                <li>✓ Create a formula sheet for business calculations</li>
                <li>✓ Practice essay writing using CAPS rubrics</li>
                <li>✓ Create summary cards for each business concept</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Additional Resources</h3>
              <ul className="text-green-700 space-y-2">
                <li>📊 Business Case Studies Database</li>
                <li>📚 NSC Past Papers with Memoranda</li>
                <li>📝 Essay Structure Templates</li>
                <li>🎥 Business Concept Video Tutorials</li>
                <li>💼 Business Plan Examples</li>
                <li>📈 South African Business News Resources</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NSC Examination Structure */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-yellow-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">NSC Examination Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Paper 1: Business Environments & Business Operations (3 hours, 150 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Compulsory short questions (30 marks)</li>
                <li className="ml-4">- Multiple choice, choose correct statements, match columns, etc.</li>
                <li>• <span className="font-medium">Section B:</span> THREE of FIVE questions (60 marks)</li>
                <li className="ml-4">- Short & paragraph-style responses covering business environments & operations</li>
                <li>• <span className="font-medium">Section C:</span> TWO essay questions (60 marks)</li>
                <li className="ml-4">- One question on business environments</li>
                <li className="ml-4">- One question on business operations</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-900 mb-2">Paper 2: Business Ventures & Business Roles (3 hours, 150 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Compulsory short questions (30 marks)</li>
                <li className="ml-4">- Multiple choice, choose correct statements, match columns, etc.</li>
                <li>• <span className="font-medium">Section B:</span> THREE of FIVE questions (60 marks)</li>
                <li className="ml-4">- Short & paragraph-style responses covering business ventures & roles</li>
                <li>• <span className="font-medium">Section C:</span> TWO essay questions (60 marks)</li>
                <li className="ml-4">- One question on business ventures</li>
                <li className="ml-4">- One question on business roles</li>
              </ul>
            </div>

            <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-medium text-yellow-800 mb-2">School-Based Assessment (SBA)</h3>
              <ul className="text-gray-700 text-sm">
                <li>• <span className="font-medium">SBA Tasks (25%):</span> Tests, assignments, case studies & projects</li>
                <li>• <span className="font-medium">Mid-year & Trial Exams</span></li>
                <li>• <span className="font-medium">External NSC Exams (75%):</span> Paper 1 and Paper 2</li>
              </ul>
              <p className="text-gray-600 mt-2 text-sm">
                <span className="font-semibold">Note:</span> Essay responses require introduction, body (with well-explained facts), and conclusion.
              </p>
            </div>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in Business Studies requires understanding key concepts, regular practice with case studies, and 
              developing strong analytical and essay-writing skills. Focus on understanding South African business contexts
              and applying business principles to real-world situations.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Keys to Excellence</h3>
              <ul className="space-y-2">
                <li>• Stay updated with current business trends</li>
                <li>• Practice applying theory to case studies</li>
                <li>• Master business terminology and concepts</li>
                <li>• Develop structured essay-writing techniques</li>
                <li>• Connect topics across the curriculum</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
