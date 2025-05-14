"use client";

import React from 'react';

export default function EnglishOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">        {/* Welcome Section */}
        <section className="bg-red-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 English Home Language</h1>
          <p className="text-gray-700">
            Enhance your English language mastery through this comprehensive CAPS-aligned course covering literature, 
            language structures, writing, and critical literacy skills. This program prepares you for success in your 
            National Senior Certificate examinations and develops essential communication skills for future studies.
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-red-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aligned with CAPS curriculum and WCED e-Portal resources
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Critically analyze and respond to literary texts (poetry, novels, plays)</li>
              <li>Master advanced language structures, conventions and vocabulary</li>
              <li>Develop critical reading, viewing and comprehension skills</li>
              <li>Produce coherent and effective texts for various purposes and audiences</li>
              <li>Demonstrate critical language awareness in diverse social contexts</li>
              <li>Evaluate and respond thoughtfully to visual and multimedia texts</li>
            </ul>
          </div>
        </section>        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Literature Study</h3>
                <p className="text-gray-500 text-xs mt-1">±35% of NSC Papers</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Poetry (Prescribed & Unseen Poems)</li>
                  <li>• Novel Study (Prescribed Text)</li>
                  <li>• Drama (Shakespeare & Contemporary)</li>
                  <li>• Literary Elements & Figurative Language</li>
                  <li>• Critical Literary Analysis</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Language & Comprehension</h3>
                <p className="text-gray-500 text-xs mt-1">±30% of NSC Papers</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Advanced Grammar & Syntax</li>
                  <li>• Critical Reading & Viewing</li>
                  <li>• Comprehension Strategies</li>
                  <li>• Summary Writing</li>
                  <li>• Language Structures & Conventions</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Writing & Presenting</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Papers</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Essays (Narrative, Descriptive, Discursive)</li>                  <li>• Argumentative & Reflective Writing</li>
                  <li>• Transactional Texts (Letters, Reports, Reviews)</li>
                  <li>• Academic & Formal Writing</li>
                  <li>• Process Writing & Editing</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Visual & Media Literacy</h3>
                <p className="text-gray-500 text-xs mt-1">±10% of NSC Papers</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Advertisement & Cartoon Analysis</li>
                  <li>• Film Study & Visual Elements</li>
                  <li>• Digital & Social Media Texts</li>
                  <li>• Critical Media Analysis</li>
                  <li>• Multimodal Texts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Official Curriculum Resources */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-red-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Official WCED & DBE Resources</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guides</h3>
                <p className="text-gray-600 mb-2">Official DBE study guides covering literature study, language skills, and writing formats.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/EnglishMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access English Mind the Gap
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
                <h3 className="font-medium text-gray-900">WCED Literature Resources</h3>
                <p className="text-gray-600 mb-2">Access to prescribed text guides, poetry analysis, and literature study aids through the WCED ePortal.</p>
                <a href="https://wcedeportal.co.za/english-resources" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore WCED English Resources
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Effective Study Strategies</h3>
              <ul className="text-blue-700 space-y-2">
                <li>✓ Annotate prescribed literature texts while reading</li>
                <li>✓ Create quote banks and character analysis for literature</li>
                <li>✓ Practice timed writing for various essay types</li>
                <li>✓ Complete NSC past papers under exam conditions</li>
                <li>✓ Build vocabulary specific to literary and critical analysis</li>
                <li>✓ Keep a personal writing journal for regular practice</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Additional Resources</h3>
              <ul className="text-green-700 space-y-2">
                <li>📚 NSC Prescribed Literature Study Guides</li>
                <li>📖 Literary Criticism & Analysis References</li>
                <li>✍️ Essay Structure & Formatting Templates</li>
                <li>🎥 Film/Drama Adaptations of Prescribed Texts</li>
                <li>📝 Language Practice Exercises & Worksheets</li>
                <li>🔍 Exam Technique & Memoranda Guides</li>
              </ul>
            </div>
          </div>
        </section>        {/* NSC Examination Structure */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-yellow-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">NSC Examination Structure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-medium text-red-900 mb-2">Paper 1: Language in Context (2.5 hours, 70 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Comprehension (30 marks)</li>
                <li className="ml-4">- Critical reading of informational/functional texts</li>
                <li className="ml-4">- Analysis of language and structure</li>
                <li>• <span className="font-medium">Section B:</span> Summary (10 marks)</li>
                <li className="ml-4">- Concise summary of key points</li>
                <li>• <span className="font-medium">Section C:</span> Language Structures (30 marks)</li>
                <li className="ml-4">- Critical language awareness</li>
                <li className="ml-4">- Editing, grammar, vocabulary, punctuation</li>
                <li className="ml-4">- Advertisement and cartoon analysis</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Paper 2: Literature (2.5 hours, 80 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Poetry (35 marks)</li>
                <li className="ml-4">- Two prescribed poems (20)</li>
                <li className="ml-4">- One unseen poem (15)</li>
                <li>• <span className="font-medium">Section B:</span> Novel (25 marks)</li>
                <li className="ml-4">- Essay OR contextual questions</li>
                <li>• <span className="font-medium">Section C:</span> Drama (25 marks)</li>
                <li className="ml-4">- Essay OR contextual questions</li>
                <li className="ml-4">- Usually includes one Shakespeare play</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-900 mb-2">Paper 3: Writing (2.5 hours, 100 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Essays (50 marks)</li>
                <li className="ml-4">- Choice from narrative, descriptive, argumentative, discursive, reflective</li>
                <li className="ml-4">- Length: 400-450 words</li>
                <li>• <span className="font-medium">Section B:</span> Longer Transactional Texts (30 marks)</li>
                <li className="ml-4">- Formal/informal letters, speeches, dialogues, interviews, reviews</li>
                <li className="ml-4">- Length: 180-200 words</li>
                <li>• <span className="font-medium">Section C:</span> Shorter Texts (20 marks)</li>
                <li className="ml-4">- Advertisements, diary entries, postcards, instructions, directions</li>
                <li className="ml-4">- Length: 100-120 words</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-2">School-Based Assessment (SBA) & Oral Assessment</h3>
            <ul className="text-gray-700 text-sm">
              <li>• <span className="font-medium">SBA (25%):</span> Tests, literary essays, writing tasks</li>
              <li>• <span className="font-medium">Oral Assessment (12.5%):</span> Listening, speaking, presenting, conversation</li>
              <li>• <span className="font-medium">External NSC Exams (62.5%):</span> Papers 1, 2, and 3</li>
            </ul>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in English requires consistent reading, regular writing practice, and 
              active engagement with various texts. Focus on developing both analytical and 
              creative skills while building your language proficiency.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Keys to Excellence</h3>
              <ul className="space-y-2">
                <li>• Read widely and critically</li>
                <li>• Practice writing in different styles</li>
                <li>• Master technical language skills</li>
                <li>• Engage with diverse text types</li>
                <li>• Apply feedback consistently</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
