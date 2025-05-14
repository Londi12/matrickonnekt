"use client";

import React from 'react';

export default function LifeSciencesOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">        {/* Welcome Section */}
        <section className="bg-green-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Life Sciences</h1>
          <p className="text-gray-700">
            Discover the fascinating world of life sciences! This CAPS-aligned course explores the complexity and diversity of life,
            from DNA and genetics to human physiology and ecology, preparing you for success in your National Senior Certificate examinations.
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-green-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aligned with CAPS curriculum and WCED e-Portal resources
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Understand DNA structure, meiosis, and genetic inheritance patterns</li>
              <li>Analyze evolutionary processes and human evolution</li>
              <li>Explain the structure and function of human body systems</li>
              <li>Apply scientific inquiry and investigation methods</li>
              <li>Evaluate human impacts on the environment and biodiversity</li>
              <li>Connect biological concepts to South African and global contexts</li>
            </ul>
          </div>
        </section>        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">1. DNA & Genetics</h3>
                <p className="text-gray-500 text-xs mt-1">Paper 1: ±50 marks</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• DNA Structure & Replication</li>
                  <li>• RNA & Protein Synthesis</li>
                  <li>• Meiosis & Genetic Diversity</li>
                  <li>• Mendelian & Non-Mendelian Inheritance</li>
                  <li>• Genetic Engineering & Biotechnology</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Evolution</h3>
                <p className="text-gray-500 text-xs mt-1">Paper 1: ±50 marks</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Evidence for Evolution (Fossil Record)</li>
                  <li>• Natural Selection & Speciation</li>
                  <li>• Human Evolution & Out-of-Africa Hypothesis</li>
                  <li>• Biological Evolution & Formation of New Species</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Human Physiology</h3>
                <p className="text-gray-500 text-xs mt-1">Paper 2: ±60 marks</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Nervous & Chemical Coordination</li>
                  <li>• Hormonal Control & Homeostasis</li>
                  <li>• Human Reproduction & Development</li>
                  <li>• Senses (Eye & Ear Structure and Function)</li>
                </ul>
              </div>              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Ecology & Environment</h3>
                <p className="text-gray-500 text-xs mt-1">Paper 2: ±40 marks</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Population Dynamics & Human Population</li>
                  <li>• Human Impact on Environment</li>
                  <li>• Biodiversity & Ecosystem Functioning</li>
                  <li>• Conservation Strategies (Local & Global)</li>
                  <li>• Sustainable Development & Food Security</li>
                </ul>
              </div>
            </div>
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
                <p className="text-gray-600 mb-2">Official DBE study guides covering DNA, genetics, evolution and human physiology for Grade 12.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/LifeSciencesMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access Life Sciences Mind the Gap
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
                <p className="text-gray-600 mb-2">Access to practical investigations, specimen diagrams, and biodiversity resources through the WCED ePortal.</p>
                <a href="https://wcedeportal.co.za/life-sciences" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore WCED Life Sciences Resources
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
                <li>✓ Master biological diagrams and labels</li>
                <li>✓ Create concept maps linking different topics</li>
                <li>✓ Practice NSC-style questions with correct terminology</li>
                <li>✓ Understand biological processes step-by-step</li>
                <li>✓ Connect theory to South African ecosystems</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Additional Resources</h3>
              <ul className="text-blue-700 space-y-2">
                <li>🔬 Virtual Lab Simulations (e.g., PhET Biology)</li>
                <li>📚 Siyavula Life Sciences Textbooks (free online)</li>
                <li>📝 NSC Past Papers with Memoranda</li>
                <li>🎥 DBE Video Lessons on YouTube</li>
                <li>🌿 SANBI Biodiversity Resources</li>
              </ul>
            </div>
          </div>
        </section>        {/* NSC Examination Structure */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-yellow-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">NSC Examination Structure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Paper 1: Molecular & Life Processes (2.5 hours, 150 marks)</h3>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Section A: Multiple choice & short questions (50 marks)</li>
                <li>• Section B: Longer response questions (100 marks)</li>
                <li>• Content: DNA, Meiosis, Genetics, Human Reproduction</li>
                <li>• Diagrams, data interpretation, and application</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Paper 2: Evolution & Ecology (2.5 hours, 150 marks)</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Section A: Multiple choice & short questions (50 marks)</li>
                <li>• Section B: Longer response questions (100 marks)</li>
                <li>• Content: Evolution, Human Physiology, Ecology</li>
                <li>• Environmental case studies and application</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-2">School-Based Assessment (SBA) & Practical Assessment Task</h3>
            <ul className="text-yellow-700 text-sm">
              <li>• Three formal tests + two exams (25% of final mark)</li>
              <li>• Practical investigations (e.g., plant & animal tissue, enzymes)</li>
              <li>• Assignment & practical examination</li>
              <li>• Scientific reports, data analysis & experimental skills</li>
            </ul>
            <p className="text-gray-600 mt-2 text-sm">
              <span className="font-semibold">Note:</span> SBA contributes 25% to your final mark, while the external NSC exams (Paper 1 & 2) contribute 75%.
            </p>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in Life Sciences comes from understanding biological processes and their 
              interconnections. Regular study, practical work, and staying curious about the 
              natural world will help you excel.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Keys to Excellence</h3>
              <ul className="space-y-2">
                <li>• Understand processes visually</li>
                <li>• Practice drawing biological diagrams</li>
                <li>• Link different topics together</li>
                <li>• Apply knowledge to new scenarios</li>
                <li>• Stay updated with current research</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
