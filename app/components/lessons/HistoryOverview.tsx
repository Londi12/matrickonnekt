"use client";

import React from 'react';

export default function HistoryOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-amber-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 History</h1>
          <p className="text-gray-700">
            Explore the complexities of the past through this CAPS-aligned course that examines key historical
            events and their impact on our present world. This program develops your analytical skills, historical
            thinking, and prepares you for success in your National Senior Certificate examinations.
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-amber-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aligned with CAPS curriculum and WCED e-Portal resources
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Analyze and evaluate historical evidence and diverse perspectives</li>
              <li>Understand cause and effect in historical contexts</li>
              <li>Develop critical thinking through engagement with historical sources</li>
              <li>Recognize connections between past events and contemporary issues</li>
              <li>Construct well-structured historical arguments based on evidence</li>
              <li>Apply historical concepts and terminology appropriately</li>
              <li>Understand South African and global historical developments</li>
            </ul>
          </div>
        </section>

        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-medium text-gray-900">1. The Cold War (Paper 1)</h3>
                <p className="text-gray-500 text-xs mt-1">±50 marks in NSC Paper 1</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Origins of the Cold War</li>
                  <li>• Cold War in Europe & Asia</li>
                  <li>• US Civil Rights Movement</li>
                  <li>• Cuban Missile Crisis</li>
                  <li>• Cold War Case Studies (Vietnam, Angola)</li>
                  <li>• Collapse of the USSR & New World Order</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Independent Africa (Paper 1)</h3>
                <p className="text-gray-500 text-xs mt-1">±50 marks in NSC Paper 1</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Africa in the Cold War Context</li>
                  <li>• Case Study: Tanzania</li>
                  <li>• Case Study: Congo</li>
                  <li>• Africa's Economic Challenges</li>
                  <li>• Impact of Internal & External Factors</li>
                  <li>• Neo-colonialism & Africa's Position</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Civil Society in SA (Paper 2)</h3>
                <p className="text-gray-500 text-xs mt-1">±50 marks in NSC Paper 2</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Black Consciousness Movement</li>
                  <li>• Crisis of Apartheid in 1980s</li>
                  <li>• TRC & Coming to Terms with Past</li>
                  <li>• Negotiated Settlement & 1994</li>
                  <li>• Mass Democratic Movement</li>
                  <li>• International Anti-apartheid Movement</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Globalization (Paper 2)</h3>
                <p className="text-gray-500 text-xs mt-1">±50 marks in NSC Paper 2</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Globalization Concepts & Process</li>
                  <li>• Economic & Social Globalization</li>
                  <li>• South Africa & Globalization</li>
                  <li>• Responses to Globalization</li>
                  <li>• Globalization as Imperialism</li>
                  <li>• Technology & Communications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Official Curriculum Resources */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-amber-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Official WCED & DBE Resources</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-amber-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guide</h3>
                <p className="text-gray-600 mb-2">Official DBE History study guide covering key Grade 12 topics with source-based and essay practice.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/HistoryMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access History Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">WCED History Resources</h3>
                <p className="text-gray-600 mb-2">Access to primary sources, historical documents, and teaching materials through the WCED ePortal.</p>
                <a href="https://wcedeportal.co.za/history" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore WCED History Resources
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
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-medium text-amber-800 mb-2">Effective Study Strategies</h3>
              <ul className="text-amber-700 space-y-2">
                <li>✓ Create detailed timelines for each historical period</li>
                <li>✓ Practice analyzing primary and secondary sources</li>
                <li>✓ Develop structured essay writing techniques</li>
                <li>✓ Create cause and effect relationship diagrams</li>
                <li>✓ Master key historical terminology and concepts</li>
                <li>✓ Practice extracting evidence from historical documents</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Additional Resources</h3>
              <ul className="text-blue-700 space-y-2">
                <li>📚 NSC Past Papers with Memoranda</li>
                <li>📝 Essay Structure Templates</li>
                <li>🎥 Historical Documentary Resources</li>
                <li>🗺️ Historical Maps Collection</li>
                <li>📰 Primary Source Archives</li>
                <li>📊 Historical Timeline Tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NSC Examination Structure */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-yellow-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">NSC Examination Structure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-medium text-amber-900 mb-2">Paper 1: Source-Based & Essay Questions (3 hours, 150 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Source-based questions (50 marks)</li>
                <li className="ml-4">- Cold War (visual, text and cartoon sources)</li>
                <li className="ml-4">- Requires extraction, interpretation, evaluation</li>
                <li>• <span className="font-medium">Section B:</span> Essay questions (50 marks)</li>
                <li className="ml-4">- Cold War (one essay from choice of two)</li>
                <li className="ml-4">- Requires introduction, body paragraphs, conclusion</li>
                <li>• <span className="font-medium">Section C:</span> Source-based questions (50 marks)</li>
                <li className="ml-4">- Independent Africa (visual, text and cartoon sources)</li>
                <li className="ml-4">- OR Essay questions on Independent Africa</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Paper 2: Source-Based & Essay Questions (3 hours, 150 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Source-based questions (50 marks)</li>
                <li className="ml-4">- Civil Society in South Africa (various sources)</li>
                <li className="ml-4">- Requires extraction, interpretation, evaluation</li>
                <li>• <span className="font-medium">Section B:</span> Essay questions (50 marks)</li>
                <li className="ml-4">- Civil Society in South Africa (one essay from choice of two)</li>
                <li className="ml-4">- Requires line of argument with supporting evidence</li>
                <li>• <span className="font-medium">Section C:</span> Source-based questions (50 marks)</li>
                <li className="ml-4">- Globalization (visual, text and cartoon sources)</li>
                <li className="ml-4">- OR Essay questions on Globalization</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-2">School-Based Assessment (SBA)</h3>
            <ul className="text-gray-700 text-sm">
              <li>• <span className="font-medium">SBA Tasks (25%):</span> Research projects, source analysis, tests & assignments</li>
              <li>• <span className="font-medium">Mid-year & Trial Examinations</span></li>
              <li>• <span className="font-medium">External NSC Exams (75%):</span> Paper 1 and Paper 2</li>
            </ul>
            <p className="text-gray-600 mt-2 text-sm">
              <span className="font-semibold">Note:</span> Essays require a strong line of argument, relevant factual knowledge, and logical organization.
            </p>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in History requires strong analytical skills, critical thinking, and the ability to construct 
              well-supported arguments. Focus on developing source analysis techniques and essay writing skills 
              while building a solid foundation of factual knowledge.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Keys to Excellence</h3>
              <ul className="space-y-2">
                <li>• Engage with multiple historical perspectives</li>
                <li>• Practice structured historical writing</li>
                <li>• Develop skills in evaluating historical evidence</li>
                <li>• Connect historical events and their contexts</li>
                <li>• Master the CAPS essay structure and requirements</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
