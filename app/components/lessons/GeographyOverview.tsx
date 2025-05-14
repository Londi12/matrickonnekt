"use client";

import React from 'react';

export default function GeographyOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-teal-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Geography</h1>
          <p className="text-gray-700">
            Explore our dynamic planet through this CAPS-aligned Geography course that integrates physical 
            and human geography concepts. This program develops your spatial awareness, map skills, and geographical 
            analysis abilities while preparing you for success in your National Senior Certificate examinations.
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
              <li>Analyze and interpret geographical data, maps, and diagrams</li>
              <li>Understand physical geographical processes and their impact</li>
              <li>Evaluate human-environment interactions and sustainability</li>
              <li>Apply geographical knowledge to solve environmental problems</li>
              <li>Develop spatial awareness and map work skills</li>
              <li>Understand settlement patterns and urban dynamics</li>
              <li>Analyze economic geography and development challenges</li>
            </ul>
          </div>
        </section>

        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Climate & Weather (Paper 1)</h3>
                <p className="text-gray-500 text-xs mt-1">±60 marks in NSC Paper 1</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Synoptic Weather Maps & Forecasting</li>
                  <li>• Mid-latitude Cyclones</li>
                  <li>• Tropical Cyclones</li>
                  <li>• Subtropical Anticyclones</li>
                  <li>• Valley Climates & Urban Microclimates</li>
                  <li>• Climate Change & South Africa's Weather</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Geomorphology (Paper 1)</h3>
                <p className="text-gray-500 text-xs mt-1">±60 marks in NSC Paper 1</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Fluvial Processes & Landforms</li>
                  <li>• Drainage Systems & Patterns</li>
                  <li>• Catchment Management</li>
                  <li>• River Profiles & Rejuvenation</li>
                  <li>• Mass Movements & Human Impacts</li>
                  <li>• Topography Associated with Horizontal Strata & Massive Igneous Rocks</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Rural & Urban Settlements (Paper 2)</h3>
                <p className="text-gray-500 text-xs mt-1">±60 marks in NSC Paper 2</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Settlement Types & Patterns</li>
                  <li>• Rural Settlement Issues</li>
                  <li>• Urban Hierarchies & Settlement Patterns</li>
                  <li>• Urban Structure & Patterns</li>
                  <li>• Urban Settlement Issues</li>
                  <li>• Land Use Zones & Urban Renewal</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Economic Geography (Paper 2)</h3>
                <p className="text-gray-500 text-xs mt-1">±60 marks in NSC Paper 2</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Primary, Secondary & Tertiary Activities</li>
                  <li>• Economic Development Models</li>
                  <li>• South Africa's Industrial Regions</li>
                  <li>• Informal Sector & Small-Scale Farming</li>
                  <li>• Core & Periphery & South Africa</li>
                  <li>• Environmental Issues & Management</li>
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
                <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guide</h3>
                <p className="text-gray-600 mb-2">Official DBE Geography study guide covering physical and human geography with map work skills.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/GeographyMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access Geography Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">WCED Geography Resources</h3>
                <p className="text-gray-600 mb-2">Access to maps, GIS resources, topographical and aerial photographs through the WCED ePortal.</p>
                <a href="https://wcedeportal.co.za/geography" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore WCED Geography Resources
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
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="font-medium text-teal-800 mb-2">Effective Study Strategies</h3>
              <ul className="text-teal-700 space-y-2">
                <li>✓ Practice map work skills regularly</li>
                <li>✓ Create geographical process diagrams</li>
                <li>✓ Use mind maps for climate & settlement patterns</li>
                <li>✓ Master geographical terminology & concepts</li>
                <li>✓ Practice calculations (gradients, scales, distances)</li>
                <li>✓ Analyze satellite images & photographs</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Additional Resources</h3>
              <ul className="text-blue-700 space-y-2">
                <li>🗺️ Topographical & Orthophoto Maps</li>
                <li>📊 GIS Practice Exercises</li>
                <li>📚 NSC Past Papers with Memoranda</li>
                <li>🌦️ SA Weather Service Resources</li>
                <li>📈 Statistical Data & Graphs</li>
                <li>📱 Geography Apps (Google Earth, etc.)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NSC Examination Structure */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-yellow-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">NSC Examination Structure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="font-medium text-teal-900 mb-2">Paper 1: Physical Geography (3 hours, 150 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Short Questions (Multiple Choice) (15 marks)</li>
                <li>• <span className="font-medium">Section B:</span> Climate & Weather (60 marks)</li>
                <li className="ml-4">- Short answer questions & paragraph responses</li>
                <li className="ml-4">- Interpretation of synoptic weather maps & data</li>
                <li>• <span className="font-medium">Section C:</span> Geomorphology (60 marks)</li>
                <li className="ml-4">- Short answer questions & paragraph responses</li>
                <li className="ml-4">- Analysis of landscapes, diagrams & photographs</li>
                <li>• <span className="font-medium">Section D:</span> Mapwork (15 marks)</li>
                <li className="ml-4">- Map skills & calculations</li>
                <li className="ml-4">- Physical geography interpretation on maps</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Paper 2: Human Geography (3 hours, 150 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Short Questions (Multiple Choice) (15 marks)</li>
                <li>• <span className="font-medium">Section B:</span> Rural & Urban Settlements (60 marks)</li>
                <li className="ml-4">- Short answer questions & paragraph responses</li>
                <li className="ml-4">- Case studies of settlements & urban issues</li>
                <li>• <span className="font-medium">Section C:</span> Economic Geography (60 marks)</li>
                <li className="ml-4">- Short answer questions & paragraph responses</li>
                <li className="ml-4">- Analysis of development issues & economic data</li>
                <li>• <span className="font-medium">Section D:</span> Mapwork (15 marks)</li>
                <li className="ml-4">- Map skills & calculations</li>
                <li className="ml-4">- Human geography interpretation on maps</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-2">School-Based Assessment (SBA)</h3>
            <ul className="text-gray-700 text-sm">
              <li>• <span className="font-medium">SBA Tasks (25%):</span> Tests, map work, research project, assignments</li>
              <li>• <span className="font-medium">Mid-year & Trial Examinations</span></li>
              <li>• <span className="font-medium">External NSC Exams (75%):</span> Paper 1 and Paper 2</li>
            </ul>
            <p className="text-gray-600 mt-2 text-sm">
              <span className="font-semibold">Note:</span> A separate topographical map and orthophoto are provided for both papers.
            </p>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in Geography requires developing strong map work skills, understanding geographical processes, 
              and applying concepts to real-world case studies. Focus on both the physical and human elements of geography, 
              and practice interpreting visual information regularly.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Keys to Excellence</h3>
              <ul className="space-y-2">
                <li>• Master map reading & interpretation skills</li>
                <li>• Practice geographical calculations regularly</li>
                <li>• Connect theory with South African examples</li>
                <li>• Develop diagram drawing & analysis skills</li>
                <li>• Stay updated on environmental & development issues</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
