"use client";

import React from 'react';

export default function ComputerApplicationsTechnologyOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-teal-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Computer Applications Technology</h1>
          <p className="text-gray-700">
            Welcome to Computer Applications Technology (CAT)! This CAPS-aligned course develops your practical 
            computer skills across various applications while building theoretical knowledge of information management, 
            networks, and information systems. Prepare for the digital world with essential ICT skills for academic, 
            personal, and professional success.
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-teal-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aligned with CAPS curriculum and WCED e-Portal resources
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Master advanced features of office productivity applications</li>
              <li>Apply solution development techniques to solve real-world problems</li>
              <li>Create integrated documents across different applications</li>
              <li>Understand computer hardware, software and network technologies</li>
              <li>Apply information management techniques and data manipulation</li>
              <li>Evaluate the social, ethical and legal implications of ICT use</li>
            </ul>
          </div>
        </section>
        
        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Solution Development</h3>
                <p className="text-gray-500 text-xs mt-1">±30% of NSC Paper 1</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Word Processing Advanced Features</li>
                  <li>• Spreadsheets & Data Manipulation</li>
                  <li>• Database Design & Implementation</li>
                  <li>• Integration of Applications</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Systems Technologies</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper 2</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Hardware Components & Specifications</li>
                  <li>• Computer Management & Maintenance</li>
                  <li>• Software Categories & Applications</li>
                  <li>• Troubleshooting Computer Problems</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Network Technologies</h3>
                <p className="text-gray-500 text-xs mt-1">±15% of NSC Paper 2</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Network Concepts & Classifications</li>
                  <li>• Internet Technologies & Services</li>
                  <li>• Network Security & Protection</li>
                  <li>• Mobile Technologies</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Information Management</h3>
                <p className="text-gray-500 text-xs mt-1">±30% of both Papers</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Data & Information Processing</li>
                  <li>• Information Presentation & Validation</li>
                  <li>• Information Sources & Reliability</li>
                  <li>• Social, Ethical & Legal Implications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Practical Assessment Task */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-teal-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Practical Assessment Task (PAT)</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              The CAT Practical Assessment Task challenges you to apply your ICT skills to solve a real-world problem. 
              This project-based assessment integrates multiple applications and information management skills.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">PAT Components</h3>
                <ul className="text-gray-700">
                  <li className="mb-1">• Phase 1: Research & Planning (25%)</li>
                  <li className="mb-1">• Phase 2: Solution Development (50%)</li>
                  <li className="mb-1">• Phase 3: Documentation & Evaluation (25%)</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">PAT Weight</h3>
                <ul className="text-gray-700">
                  <li className="mb-1">• 25% of your final mark</li>
                  <li className="mb-1">• Showcases applied ICT skills</li>
                  <li className="mb-1">• Integrates multiple solution components</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Official Curriculum Resources */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-teal-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Official WCED & DBE Resources</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-teal-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guides</h3>
                <p className="text-gray-600 mb-2">Official DBE study guides covering key Computer Applications Technology topics for Grade 12.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/CATMindTheGap.aspx" 
                   className="text-teal-600 hover:underline text-sm flex items-center">
                  Access CAT Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-teal-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">WCED ePortal Resources</h3>
                <p className="text-gray-600 mb-2">Access comprehensive digital resources including practical tutorials, software guides, and exam preparation materials.</p>
                <a href="https://wcedeportal.co.za/computer-applications-technology" 
                   className="text-teal-600 hover:underline text-sm flex items-center">
                  Visit WCED CAT Portal
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-teal-50 p-4 rounded-lg mt-4">
              <h3 className="font-medium text-gray-900 mb-2">Study Tips for CAT</h3>
              <ul className="text-teal-700 space-y-2">
                <li>✓ Practice application skills regularly with real-world scenarios</li>
                <li>✓ Master keyboard shortcuts to improve efficiency</li>
                <li>✓ Create integrated documents across different applications</li>
                <li>✓ Build a database of practice exercises and templates</li>
                <li>✓ Stay updated on technology trends and terminology</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Additional Resources</h3>
              <ul className="text-green-700 space-y-2">
                <li>💻 Office suite tutorial videos and practice files</li>
                <li>📝 Online typing tutorials for speed and accuracy</li>
                <li>📊 Data manipulation and validation exercises</li>
                <li>🎥 WCED practical demonstration videos</li>
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
                <li>• Word Processing (±30%)</li>
                <li>• Spreadsheets (±30%)</li>
                <li>• Databases (±20%)</li>
                <li>• Integration Tasks (±20%)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 2: Theory Examination (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• Systems Technologies (25%)</li>
                <li>• Network Technologies (15%)</li>
                <li>• Information Management (30%)</li>
                <li>• Solution Development (15%)</li>
                <li>• Social Implications (15%)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-teal-800 mb-2">School-Based Assessment (SBA)</h3>
              <ul className="text-teal-700 text-sm">
                <li>• Theory tests and examinations</li>
                <li>• Practical assignments and projects</li>
                <li>• Integrated case studies</li>
                <li>• Research tasks on ICT developments</li>
              </ul>
              <p className="text-gray-600 mt-2 text-sm">
                <span className="font-semibold">Note:</span> SBA contributes 25% to your final mark, PAT contributes 25%, and the external NSC papers (Paper 1 & 2) contribute 50%.
              </p>
            </div>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in Computer Applications Technology comes from regular practice and application of skills. 
              Mastering both practical application techniques and theoretical concepts is essential for achieving 
              excellence in this subject.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Key to Excellence</h3>
              <ul className="space-y-2">
                <li>• Regular hands-on practice with all applications</li>
                <li>• Developing efficient workflow techniques</li>
                <li>• Understanding problem-solving methodologies</li>
                <li>• Building integrated solutions across applications</li>
                <li>• Connecting theoretical concepts to practical implementations</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
