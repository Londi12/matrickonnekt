"use client";

import React from 'react';

export default function CivilTechnologyOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-orange-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Civil Technology</h1>
          <p className="text-gray-700">
            Explore the fascinating world of construction and civil engineering through this CAPS-aligned course. 
            This comprehensive program develops your theoretical knowledge and practical skills in civil 
            construction while preparing you for success in your National Senior Certificate examinations.
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-orange-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aligned with CAPS curriculum and WCED e-Portal resources
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Apply construction principles and techniques in civil engineering contexts</li>
              <li>Interpret construction drawings and specifications</li>
              <li>Demonstrate knowledge of materials, tools, and equipment in construction</li>
              <li>Apply safety practices in construction environments</li>
              <li>Understand civil services (water, sewerage, stormwater) systems</li>
              <li>Develop practical construction and project management skills</li>
              <li>Evaluate sustainable construction methods and regulations</li>
            </ul>
          </div>
        </section>

        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Safety & Materials</h3>
                <p className="text-gray-500 text-xs mt-1">±15% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Occupational Health & Safety Act</li>
                  <li>• Site Safety & Hazards</li>
                  <li>• Construction Materials & Properties</li>
                  <li>• Testing of Materials</li>
                  <li>• Material Applications & Specifications</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Equipment & Tools</h3>
                <p className="text-gray-500 text-xs mt-1">±15% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Construction Equipment Usage</li>
                  <li>• Tools & Their Applications</li>
                  <li>• Equipment Maintenance</li>
                  <li>• Construction Plant & Machinery</li>
                  <li>• Surveying Equipment</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Construction Processes</h3>
                <p className="text-gray-500 text-xs mt-1">±35% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Foundations & Excavations</li>
                  <li>• Concrete & Reinforcement</li>
                  <li>• Formwork & Scaffolding</li>
                  <li>• Brickwork & Masonry</li>
                  <li>• Roofing & Waterproofing</li>
                  <li>• Staircases & Construction Joints</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Civil Services & Graphics</h3>
                <p className="text-gray-500 text-xs mt-1">±35% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Water & Drainage Systems</li>
                  <li>• Sewerage Systems</li>
                  <li>• Stormwater Management</li>
                  <li>• Construction Drawings & Specifications</li>
                  <li>• Quantity Surveying Principles</li>
                  <li>• Building Regulations & Zoning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Official Curriculum Resources */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-orange-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Official WCED & DBE Resources</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-orange-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guide</h3>
                <p className="text-gray-600 mb-2">Official DBE Civil Technology study guide covering construction materials, processes, and regulations.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/CivilTechnologyMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access Civil Technology Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">WCED Civil Technology Resources</h3>
                <p className="text-gray-600 mb-2">Access to construction diagrams, drawings, and practical guides through the WCED ePortal.</p>
                <a href="https://wcedeportal.co.za/civil-technology" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore WCED Civil Technology Resources
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
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-medium text-orange-800 mb-2">Effective Study Strategies</h3>
              <ul className="text-orange-700 space-y-2">
                <li>✓ Create detailed diagrams of construction processes</li>
                <li>✓ Memorize construction terminology and definitions</li>
                <li>✓ Practice drawing construction details and sections</li>
                <li>✓ Study building regulations and apply to examples</li>
                <li>✓ Create flashcards for material properties</li>
                <li>✓ Practice quantity takeoffs and calculations</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Additional Resources</h3>
              <ul className="text-blue-700 space-y-2">
                <li>📐 Construction Drawing Templates</li>
                <li>📚 NSC Past Papers with Memoranda</li>
                <li>🏗️ Construction Site Visit Documentation</li>
                <li>🎥 Construction Technique Video Tutorials</li>
                <li>📏 Construction Details & Specifications</li>
                <li>📋 Material Testing Procedures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NSC Examination Structure */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-yellow-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">NSC Examination Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-medium text-orange-900 mb-2">Theory Paper (3 hours, 200 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Short questions (40 marks)</li>
                <li className="ml-4">- Multiple choice, matching columns, and true/false statements</li>
                <li>• <span className="font-medium">Section B:</span> Construction materials and processes (80 marks)</li>
                <li className="ml-4">- Short questions on materials, equipment, and construction methods</li>
                <li className="ml-4">- Drawing interpretation and specification questions</li>
                <li>• <span className="font-medium">Section C:</span> Civil services and applied mechanics (80 marks)</li>
                <li className="ml-4">- Questions on water supply, drainage, and sewerage systems</li>
                <li className="ml-4">- Construction detailing and quantity surveying calculations</li>
                <li className="ml-4">- Building regulations and sustainable construction</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-900 mb-2">Practical Assessment Task (PAT) (50 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Phase 1:</span> Planning and Design</li>
                <li className="ml-4">- Interpret design brief and specifications</li>
                <li className="ml-4">- Create working drawings and plans</li>
                <li>• <span className="font-medium">Phase 2:</span> Production and Evaluation</li>
                <li className="ml-4">- Construct model or component according to drawings</li>
                <li className="ml-4">- Apply safety measures during construction</li>
                <li className="ml-4">- Evaluate finished product against specifications</li>
              </ul>
            </div>

            <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-medium text-yellow-800 mb-2">School-Based Assessment (SBA)</h3>
              <ul className="text-gray-700 text-sm">
                <li>• <span className="font-medium">SBA Tasks (25%):</span> Tests, assignments, and projects</li>
                <li>• <span className="font-medium">PAT (25%):</span> Practical Assessment Task</li>
                <li>• <span className="font-medium">External NSC Exam (50%):</span> Theory paper</li>
              </ul>
              <p className="text-gray-600 mt-2 text-sm">
                <span className="font-semibold">Note:</span> The PAT is assessed internally but moderated externally by DBE subject specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in Civil Technology requires both theoretical knowledge and practical application. 
              Focus on understanding construction principles, developing drawing skills, and mastering the 
              technical vocabulary of the construction industry.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Keys to Excellence</h3>
              <ul className="space-y-2">
                <li>• Master construction terminology and concepts</li>
                <li>• Practice technical drawing and interpretation</li>
                <li>• Connect theoretical knowledge with practical applications</li>
                <li>• Focus on building regulations and standards</li>
                <li>• Pay attention to construction details and methods</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
