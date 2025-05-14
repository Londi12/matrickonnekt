"use client";

import React from 'react';

export default function InformationTechnologyOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-purple-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Information Technology</h1>
          <p className="text-gray-700">
            Explore the world of Information Technology through this comprehensive CAPS-aligned course. 
            Develop advanced programming skills, system design expertise, and problem-solving abilities 
            required for the rapidly evolving technology landscape. This course prepares you for both 
            the National Senior Certificate examinations and future studies in IT fields.
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-purple-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aligned with CAPS curriculum and WCED e-Portal resources
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Apply advanced object-oriented programming principles in solution development</li>
              <li>Design and implement database solutions using SQL and normalization</li>
              <li>Develop software solutions for real-world problems</li>
              <li>Analyze and evaluate hardware, software and network technologies</li>
              <li>Address ethical and social implications of IT in contemporary society</li>
              <li>Apply computational thinking to solve complex problems algorithmically</li>
            </ul>
          </div>
        </section>
        
        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Solution Development</h3>
                <p className="text-gray-500 text-xs mt-1">±55% of NSC Paper 1</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Object-Oriented Programming</li>
                  <li>• Data Structures & Manipulation</li>
                  <li>• Software Engineering Principles</li>
                  <li>• Problem-Solving & Algorithm Design</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Database Management</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper 1</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Database Design & Normalization</li>
                  <li>• Advanced SQL Operations</li>
                  <li>• Data Integration & Transaction Processing</li>
                  <li>• Database Application Development</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Networks & System Technologies</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper 2</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Network Concepts & Architectures</li>
                  <li>• Network Security & Protocols</li>
                  <li>• Hardware & System Software</li>
                  <li>• Cloud Computing & Virtualization</li>
                </ul>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Social Implications of IT</h3>
                <p className="text-gray-500 text-xs mt-1">±20% of NSC Paper 2</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Electronic Communications & Security</li>
                  <li>• Computer Ethics & Legislation</li>
                  <li>• Environmental Impact of IT</li>
                  <li>• Emerging Technologies & Trends</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Practical Assessment Task */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-purple-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Practical Assessment Task (PAT)</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              The IT Practical Assessment Task challenges you to develop a complete software solution for a real-world problem, 
              integrating programming and database concepts into a functional application.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">PAT Components</h3>
                <ul className="text-gray-700">
                  <li className="mb-1">• Phase 1: Analysis & Design (20%)</li>
                  <li className="mb-1">• Phase 2: Coding & Implementation (60%)</li>
                  <li className="mb-1">• Phase 3: Testing & Documentation (20%)</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">PAT Weight</h3>
                <ul className="text-gray-700">
                  <li className="mb-1">• 25% of your final mark</li>
                  <li className="mb-1">• Demonstrates practical programming skills</li>
                  <li className="mb-1">• Showcases solution development abilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Official Curriculum Resources */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-purple-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Official WCED & DBE Resources</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guides</h3>
                <p className="text-gray-600 mb-2">Official DBE study guides covering key Information Technology topics for Grade 12.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/InformationTechnologyMindTheGap.aspx" 
                   className="text-purple-600 hover:underline text-sm flex items-center">
                  Access IT Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">WCED ePortal Resources</h3>
                <p className="text-gray-600 mb-2">Access comprehensive digital resources including code libraries, practice questions, and programming tutorials.</p>
                <a href="https://wcedeportal.co.za/information-technology" 
                   className="text-purple-600 hover:underline text-sm flex items-center">
                  Visit WCED Information Technology Portal
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg mt-4">
              <h3 className="font-medium text-gray-900 mb-2">Study Tips for Information Technology</h3>
              <ul className="text-purple-700 space-y-2">
                <li>✓ Practice programming regularly with real-world scenarios</li>
                <li>✓ Create and maintain a code snippet library for common tasks</li>
                <li>✓ Design and implement your own database projects</li>
                <li>✓ Stay updated on current technological trends and developments</li>
                <li>✓ Solve algorithm problems daily to develop computational thinking</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Additional Resources</h3>
              <ul className="text-green-700 space-y-2">
                <li>💻 Online integrated development environments (IDEs)</li>
                <li>🗃️ SQL practice platforms and database design tools</li>
                <li>📝 Algorithm visualization resources</li>
                <li>🎥 WCED tutorial videos on advanced programming concepts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Information */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 1: Practical Examination (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• Solution Development (55%)</li>
                <li>• Database Management (25%)</li>
                <li>• General Programming Skills (20%)</li>
                <li>• Practical application of programming concepts</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 2: Theory Examination (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• Solution Development Theory (35%)</li>
                <li>• Communication Technologies (20%)</li>
                <li>• Data and Information Management (20%)</li>
                <li>• Social Implications of IT (25%)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-purple-800 mb-2">School-Based Assessment (SBA)</h3>
              <ul className="text-purple-700 text-sm">
                <li>• Term tests and practical assessments</li>
                <li>• Programming projects and assignments</li>
                <li>• Database design and implementation tasks</li>
                <li>• Case studies on IT systems and ethical issues</li>
              </ul>
              <p className="text-gray-600 mt-2 text-sm">
                <span className="font-semibold">Note:</span> SBA contributes 25% to your final mark, PAT contributes 25%, and the external NSC papers (Paper 1 & 2) contribute 50%.
              </p>
            </div>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in Information Technology requires consistent practice, logical thinking, and creative 
              problem-solving. Developing strong programming skills takes time, so regular coding practice and 
              application of theoretical concepts are essential.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Key to Excellence</h3>
              <ul className="space-y-2">
                <li>• Daily programming practice with challenging problems</li>
                <li>• Understanding algorithms and data structures deeply</li>
                <li>• Building complete solutions rather than isolated components</li>
                <li>• Learning to debug efficiently and systematically</li>
                <li>• Balancing theoretical knowledge with practical implementation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
