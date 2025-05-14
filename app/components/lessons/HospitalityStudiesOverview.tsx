"use client";

import React from 'react';

export default function HospitalityStudiesOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-rose-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Hospitality Studies</h1>
          <p className="text-gray-700">
            Explore the dynamic world of hospitality through this CAPS-aligned course that develops your 
            culinary skills, hospitality knowledge, and service excellence. This comprehensive program prepares 
            you for success in your National Senior Certificate examinations and builds essential skills for the 
            hospitality industry.
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-rose-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aligned with CAPS curriculum and WCED e-Portal resources
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Demonstrate professional culinary skills and techniques</li>
              <li>Apply food safety and hygiene principles in food preparation</li>
              <li>Understand nutrition and menu planning for diverse needs</li>
              <li>Develop customer service and hospitality operations skills</li>
              <li>Manage catering events and functions efficiently</li>
              <li>Apply cost control and purchasing principles in hospitality contexts</li>
              <li>Understand the South African hospitality industry and career paths</li>
            </ul>
          </div>
        </section>

        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-rose-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Nutrition & Menu Planning</h3>
                <p className="text-gray-500 text-xs mt-1">±20% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Menu Planning for Special Needs</li>
                  <li>• Nutrition & Food-Related Diseases</li>
                  <li>• Food & Beverage Combinations</li>
                  <li>• Contemporary Food Trends</li>
                  <li>• Plant-Based & Ethnic Cuisine</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Food Commodities</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Advanced Cooking Techniques</li>
                  <li>• Food Preservation & Processing</li>
                  <li>• Quality Control & Evaluation</li>
                  <li>• Convenience & Value-Added Products</li>
                  <li>• Food Safety & Storage</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Food Production</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Commercial Kitchen Operations</li>
                  <li>• Catering & Function Management</li>
                  <li>• Equipment & Utensil Selection</li>
                  <li>• Occupational Health & Safety</li>
                  <li>• Production Scheduling & Control</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Hospitality Services</h3>
                <p className="text-gray-500 text-xs mt-1">±30% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Professional Customer Service</li>
                  <li>• Accommodation Services</li>
                  <li>• Food & Beverage Service</li>
                  <li>• Marketing & Entrepreneurship</li>
                  <li>• Sustainable Hospitality Practices</li>
                  <li>• Career Paths & Sector Knowledge</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Official Curriculum Resources */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-rose-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Official WCED & DBE Resources</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-rose-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guide</h3>
                <p className="text-gray-600 mb-2">Official DBE Hospitality Studies guide covering food preparation, service, and hospitality operations.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/HospitalityStudiesMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access Hospitality Studies Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">WCED Hospitality Resources</h3>
                <p className="text-gray-600 mb-2">Access to recipe collections, culinary techniques, and industry-standard operating procedures through the WCED ePortal.</p>
                <a href="https://wcedeportal.co.za/hospitality-studies" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore WCED Hospitality Resources
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
            <div className="bg-rose-50 p-4 rounded-lg">
              <h3 className="font-medium text-rose-800 mb-2">Effective Study Strategies</h3>
              <ul className="text-rose-700 space-y-2">
                <li>✓ Create recipe cards with methods and techniques</li>
                <li>✓ Practice cooking terminology and conversions</li>
                <li>✓ Master food preparation timelines and workflow</li>
                <li>✓ Study menu planning principles and apply them</li>
                <li>✓ Learn food safety critical control points</li>
                <li>✓ Practice costing and portion control calculations</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Additional Resources</h3>
              <ul className="text-blue-700 space-y-2">
                <li>🍽️ Standard Recipe Collection</li>
                <li>📚 NSC Past Papers with Memoranda</li>
                <li>📝 Menu Planning Templates</li>
                <li>🎥 Culinary Technique Video Tutorials</li>
                <li>📊 Costing and Yield Calculation Guides</li>
                <li>🏨 Hospitality Industry Standard Procedures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NSC Examination Structure */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-yellow-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">NSC Examination Structure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-rose-50 p-4 rounded-lg">
              <h3 className="font-medium text-rose-900 mb-2">Theory Paper (3 hours, 200 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Short questions (40 marks)</li>
                <li className="ml-4">- Multiple choice, matching columns, and one-word answers</li>
                <li>• <span className="font-medium">Section B:</span> Kitchen and Restaurant Operations (60 marks)</li>
                <li className="ml-4">- Food commodities and preparation techniques</li>
                <li className="ml-4">- Menu planning and nutrition</li>
                <li>• <span className="font-medium">Section C:</span> Hospitality Services (60 marks)</li>
                <li className="ml-4">- Accommodation, service, and functions</li>
                <li className="ml-4">- Food and beverage service</li>
                <li>• <span className="font-medium">Section D:</span> Extended Writing (40 marks)</li>
                <li className="ml-4">- Essay questions on hospitality industry topics</li>
                <li className="ml-4">- Case studies and hospitality scenarios</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-900 mb-2">Practical Assessment Tasks (PAT)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">PAT 1:</span> Formal Hospitality Event (50 marks)</li>
                <li className="ml-4">- Planning, preparation, and execution of a formal event</li>
                <li className="ml-4">- Menu planning, costing, and service</li>
                <li>• <span className="font-medium">PAT 2:</span> Restaurant Operation (50 marks)</li>
                <li className="ml-4">- Food preparation and presentation</li>
                <li className="ml-4">- Service techniques and professional standards</li>
                <li>• <span className="font-medium">PAT 3:</span> Food Production (50 marks)</li>
                <li className="ml-4">- Culinary techniques and food production</li>
                <li className="ml-4">- Quality control and presentation standards</li>
                <li>• <span className="font-medium">PAT 4:</span> Culinary Skills Test (50 marks)</li>
                <li className="ml-4">- Practical demonstration of culinary techniques</li>
                <li className="ml-4">- Time management and professional practices</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-2">School-Based Assessment (SBA)</h3>
            <ul className="text-gray-700 text-sm">
              <li>• <span className="font-medium">SBA Tasks (25%):</span> Tests, assignments, and projects</li>
              <li>• <span className="font-medium">PAT (25%):</span> Four practical assessment tasks</li>
              <li>• <span className="font-medium">External NSC Exam (50%):</span> Theory paper</li>
            </ul>
            <p className="text-gray-600 mt-2 text-sm">
              <span className="font-semibold">Note:</span> The PAT includes both planning documentation and practical execution of hospitality tasks.
            </p>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in Hospitality Studies requires both theoretical knowledge and practical skills. 
              Focus on mastering culinary techniques, understanding hospitality operations, and developing 
              excellent customer service skills that meet industry standards.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Keys to Excellence</h3>
              <ul className="space-y-2">
                <li>• Practice culinary skills regularly</li>
                <li>• Master terminology and industry standards</li>
                <li>• Connect theory with practical applications</li>
                <li>• Focus on time management during practical tasks</li>
                <li>• Develop professional attitudes and presentation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
