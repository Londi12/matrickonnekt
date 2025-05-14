"use client";

import React from 'react';

export default function PhysicalSciencesOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">        {/* Welcome Section */}
        <section className="bg-yellow-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Physical Sciences</h1>
          <p className="text-gray-700">
            Embark on an exciting journey through physics and chemistry! This course follows the official CAPS curriculum 
            and integrates theoretical knowledge with practical applications, preparing you for success in your 
            National Senior Certificate examinations.
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-yellow-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aligned with CAPS curriculum and WCED e-Portal resources
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Apply physics principles to analyze mechanics, waves, electricity, and magnetism</li>
              <li>Understand chemical reactions, equilibrium, acids, bases, and organic chemistry</li>
              <li>Develop scientific investigation skills through practical work and experiments</li>
              <li>Apply mathematical skills to solve scientific problems</li>
              <li>Connect scientific concepts to technological applications and societal impacts</li>
              <li>Interpret scientific information, diagrams, and graphical data</li>
            </ul>
          </div>
        </section>        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">Physics (Paper 1)</h3>
                <p className="text-gray-500 text-xs mt-1">±60% of NSC Physics Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Mechanics (Momentum, Impulse & Vertical Projectile Motion)</li>
                  <li>• Work, Energy & Power</li>
                  <li>• Doppler Effect (Sound & Light)</li>
                  <li>• Photoelectric Effect</li>
                  <li>• Electrodynamics & Motors/Generators</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">Chemistry (Paper 2)</h3>
                <p className="text-gray-500 text-xs mt-1">±60% of NSC Chemistry Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Chemical Equilibrium & Reaction Rates</li>
                  <li>• Acids, Bases & pH Calculations</li>
                  <li>• Electrochemical Reactions (Galvanic & Electrolytic Cells)</li>
                  <li>• Organic Molecule Naming & Reactions</li>
                  <li>• Chemical Industries (Fertilizers)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">Practical Work & Investigations</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of both NSC Papers</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Required Practical Investigations</li>
                  <li>• Scientific Method & Data Analysis</li>
                  <li>• Laboratory Equipment & Safety</li>
                  <li>• Experimental Variables & Reliability</li>
                  <li>• Scientific Reporting & Conclusions</li>
                </ul>
              </div>              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium text-gray-900">Science & Society</h3>
                <p className="text-gray-500 text-xs mt-1">±15% of both NSC Papers</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Industrial Applications & Processes</li>
                  <li>• Environmental Impact & Sustainability</li>
                  <li>• Scientific Ethics & Responsible Research</li>
                  <li>• South African Scientific Contexts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* NSC Examination Structure */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-yellow-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">NSC Examination Structure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Paper 1: Physics (3 hours, 150 marks)</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Section A: Multiple choice questions (30 marks)</li>
                <li>• Section B: Short-answer and structured questions (120 marks)</li>
                <li>• Content: Mechanics, Waves, Electricity & Magnetism</li>
                <li>• Mathematical calculations and conceptual understanding</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Paper 2: Chemistry (3 hours, 150 marks)</h3>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Section A: Multiple choice questions (30 marks)</li>
                <li>• Section B: Short-answer and structured questions (120 marks)</li>
                <li>• Content: Chemical Change, Chemical Systems, Matter & Materials</li>
                <li>• Focus on reactions, equations, and molecular understanding</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Important Note:</span> Both papers include questions on required experiments 
              and practical work. Each paper contributes 50% to your final Physical Sciences mark.
            </p>
          </div>
        </section>        {/* Official Curriculum Resources */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-green-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Official WCED & DBE Resources</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guides</h3>
                <p className="text-gray-600 mb-2">Official DBE study guides covering key Physics and Chemistry topics for Grade 12.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/PhysicalSciencesMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access Physical Sciences Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">WCED ePortal Practical Resources</h3>
                <p className="text-gray-600 mb-2">Access to virtual labs, experiments, and practical work guidelines through the WCED ePortal.</p>
                <a href="https://wcedeportal.co.za/physical-sciences" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore WCED Physical Sciences Resources
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
                <li>✓ Understand concepts through practical examples</li>
                <li>✓ Practice calculations regularly with NSC-style questions</li>
                <li>✓ Create mind maps linking related physics and chemistry topics</li>
                <li>✓ Review past NSC papers from 2014 onwards</li>
                <li>✓ Maintain a comprehensive formula and data sheet</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Additional Resources</h3>
              <ul className="text-green-700 space-y-2">
                <li>🔬 PhET Interactive Simulations (physics and chemistry)</li>
                <li>📚 Siyavula Physical Sciences Textbooks (free online)</li>
                <li>📝 CAPS-aligned question banks and worksheets</li>
                <li>🎥 DBE and WCED video tutorials and demonstrations</li>
                <li>📱 Matric Live and other CAPS-approved digital tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Information */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 1: Physics (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• Mechanics (35%)</li>
                <li>• Waves, Sound & Light (20%)</li>
                <li>• Electricity & Magnetism (45%)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 2: Chemistry (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• Chemical Change (40%)</li>
                <li>• Chemical Systems (20%)</li>
                <li>• Matter & Materials (40%)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Practical Assessment Task (PAT)</h3>
              <ul className="text-gray-600">
                <li>• Two formal practical investigations</li>
                <li>• Scientific report writing</li>
                <li>• Data handling and analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in Physical Sciences comes from understanding fundamental concepts and their 
              applications. Regular practice, active participation in practical work, and consistent 
              revision are key to achieving excellent results.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Keys to Excellence</h3>
              <ul className="space-y-2">
                <li>• Balance theory with practical work</li>
                <li>• Practice calculations daily</li>
                <li>• Link concepts across topics</li>
                <li>• Focus on problem-solving techniques</li>
                <li>• Maintain detailed laboratory notes</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
