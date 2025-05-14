"use client";

import React from 'react';

export default function TourismOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-blue-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Tourism</h1>
          <p className="text-gray-700">
            Welcome to Tourism! This course follows the official CAPS curriculum and provides 
            an integrated approach to understanding the tourism industry in South Africa and globally. 
            Prepare to develop essential skills for this dynamic industry 
            while focusing on sustainable tourism practices and contemporary tourism trends.
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
              <li>Apply knowledge of local and international travel destinations</li>
              <li>Understand tourism patterns, trends and sustainability practices</li>
              <li>Calculate foreign exchange and conduct tourism-related calculations</li>
              <li>Analyze the impact of world events on tourism and travel patterns</li>
              <li>Demonstrate customer care skills and cultural sensitivity</li>
              <li>Interpret tour plans, maps, and traveler information effectively</li>
            </ul>
          </div>
        </section>
        
        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Tourism Attractions</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• World Heritage Sites in South Africa</li>
                  <li>• Major International Attractions</li>
                  <li>• Tourism Trends & Patterns</li>
                  <li>• Tourism Marketing & Promotion</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Tourism Sectors</h3>
                <p className="text-gray-500 text-xs mt-1">±20% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Transportation & Accommodation</li>
                  <li>• Food & Beverage Services</li>
                  <li>• Tourism Support Services</li>
                  <li>• Entrepreneurship in Tourism</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Sustainable & Responsible Tourism</h3>
                <p className="text-gray-500 text-xs mt-1">±20% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Global Environmental Issues</li>
                  <li>• Corporate Social Responsibility</li>
                  <li>• Responsible Tourism Practices</li>
                  <li>• Fair Trade in Tourism</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Tourism Geography & Travel</h3>
                <p className="text-gray-500 text-xs mt-1">±35% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Foreign Exchange & Calculations</li>
                  <li>• Time Zones & Travel Schedules</li>
                  <li>• Global Events & Tourism Impact</li>
                  <li>• Travel Documentation & Procedures</li>
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
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guides</h3>
                <p className="text-gray-600 mb-2">Official DBE study guides covering key Tourism topics for Grade 12.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/TourismMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access Tourism Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">WCED ePortal Resources</h3>
                <p className="text-gray-600 mb-2">Access comprehensive digital resources including practice questions, destination guides, and exam preparation materials.</p>
                <a href="https://wcedeportal.co.za/tourism" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Visit WCED Tourism Portal
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h3 className="font-medium text-gray-900 mb-2">Study Tips for Tourism</h3>
              <ul className="text-blue-700 space-y-2">
                <li>✓ Keep up with current tourism events and industry news</li>
                <li>✓ Practice foreign exchange calculations regularly</li>
                <li>✓ Learn to interpret world maps and time zone differences</li>
                <li>✓ Create flashcards for tourism icons and landmarks</li>
                <li>✓ Practice with authentic travel documents and brochures</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Additional Resources</h3>
              <ul className="text-green-700 space-y-2">
                <li>🌍 SA Tourism website and international tourism boards</li>
                <li>📝 World Heritage Site virtual tours and resources</li>
                <li>📊 Tourism statistics databases and reports</li>
                <li>🎥 WCED and DBE video lessons on tourism topics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Information */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">NSC Examination Paper (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• Tourism Attractions (25%)</li>
                <li>• Tourism Sectors (20%)</li>
                <li>• Sustainable & Responsible Tourism (20%)</li>
                <li>• Tourism Geography & Travel (35%)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">School-Based Assessment (SBA)</h3>
              <ul className="text-blue-700 text-sm">
                <li>• Term tests and examinations</li>
                <li>• Practical assessments (tour planning, brochure design)</li>
                <li>• Research projects on tourism trends</li>
                <li>• Case studies on tourism establishments</li>
              </ul>
              <p className="text-gray-600 mt-2 text-sm">
                <span className="font-semibold">Note:</span> SBA contributes 25% to your final mark, while the external NSC exam contributes 75%.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Practical Assessment Task (PAT)</h3>
              <ul className="text-gray-600">
                <li>• Phase 1: Tourism Venture Planning</li>
                <li>• Phase 2: Implementation and Presentation</li>
                <li>• Phase 3: Evaluation and Reflection</li>
                <li>• Forms part of your SBA mark</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Tourism is a dynamic field that requires both factual knowledge and practical application. 
              Success in this subject comes from staying informed about current events, mastering technical 
              calculations, and developing a global perspective on tourism trends.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Key to Excellence</h3>
              <ul className="space-y-2">
                <li>• Stay updated with current tourism news and trends</li>
                <li>• Master foreign exchange and time zone calculations</li>
                <li>• Familiarize yourself with world maps and key destinations</li>
                <li>• Practice interpretation of travel documents and itineraries</li>
                <li>• Understand the impact of global events on tourism</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
