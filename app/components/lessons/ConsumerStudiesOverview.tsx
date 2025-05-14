"use client";

import React from 'react';

export default function ConsumerStudiesOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-orange-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Consumer Studies</h1>
          <p className="text-gray-700">
            Welcome to Consumer Studies! This comprehensive course follows the official CAPS curriculum from the 
            Department of Basic Education and focuses on developing practical and theoretical knowledge about 
            consumer choices, entrepreneurship, and the production of quality consumable products in South Africa.
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
              <li>Demonstrate practical skills in food production and clothing/soft furnishings</li>
              <li>Apply consumer knowledge to make responsible financial decisions</li>
              <li>Understand nutrition and food safety principles</li>
              <li>Analyze consumer issues within socio-economic and environmental contexts</li>
              <li>Develop entrepreneurial skills for small-scale production</li>
              <li>Apply theoretical knowledge to practical production settings</li>
            </ul>
          </div>
        </section>
        
        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-medium text-gray-900">1. The Consumer</h3>
                <p className="text-gray-500 text-xs mt-1">±20% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Consumer Rights & Responsibilities</li>
                  <li>• Financial & Contractual Aspects</li>
                  <li>• Sustainable Consumption</li>
                  <li>• Consumer Protection Policies</li>
                </ul>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Food & Nutrition</h3>
                <p className="text-gray-500 text-xs mt-1">±25% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Nutritional & Food-Related Health Conditions</li>
                  <li>• Food Safety & Quality Control</li>
                  <li>• Food Production & Marketing</li>
                  <li>• Food Preservation & Storage</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Clothing & Textiles</h3>
                <p className="text-gray-500 text-xs mt-1">±20% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Fashion & Cultural Influences</li>
                  <li>• Textile Properties & Applications</li>
                  <li>• Apparel & Interior Design Elements</li>
                  <li>• Consumer Decision-Making for Textiles</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Entrepreneurship</h3>
                <p className="text-gray-500 text-xs mt-1">±35% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Small-Scale Production Planning</li>
                  <li>• Costing & Pricing of Products</li>
                  <li>• Quality Control & Production Factors</li>
                  <li>• Marketing Strategies & Sales</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Assessment Tasks */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-orange-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Practical Assessment Tasks (PAT)</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              Practical Assessment Tasks form a critical component of your Consumer Studies course 
              and assessment. These hands-on tasks allow you to demonstrate your practical production 
              skills in your chosen practical option.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">PAT Components</h3>
                <ul className="text-gray-700">
                  <li className="mb-1">• Practical Examination (75%)</li>
                  <li className="mb-1">• Planning Assignment (25%)</li>
                  <li className="mb-1">• Continuous Assessment of Practical Skills</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Practical Options</h3>
                <ul className="text-gray-700">
                  <li className="mb-1">• Food Production</li>
                  <li className="mb-1">• Clothing Production</li>
                  <li className="mb-1">• Soft Furnishings Production</li>
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
                <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guides</h3>
                <p className="text-gray-600 mb-2">Official DBE study guides covering key Consumer Studies topics for Grade 12.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/ConsumerStudiesMindTheGap.aspx" 
                   className="text-orange-600 hover:underline text-sm flex items-center">
                  Access Consumer Studies Mind the Gap
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">WCED ePortal Resources</h3>
                <p className="text-gray-600 mb-2">Access comprehensive digital resources including practice questions, worksheets, and past papers.</p>
                <a href="https://wcedeportal.co.za/consumer-studies" 
                   className="text-orange-600 hover:underline text-sm flex items-center">
                  Visit WCED Consumer Studies Portal
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <h3 className="font-medium text-gray-900 mb-2">Study Tips for Consumer Studies</h3>
              <ul className="text-orange-700 space-y-2">
                <li>✓ Balance theoretical knowledge with practical skills practice</li>
                <li>✓ Create detailed production plans before practical assessments</li>
                <li>✓ Practice time management for practical production tasks</li>
                <li>✓ Analyze entrepreneurial case studies regularly</li>
                <li>✓ Stay updated on contemporary consumer issues and legislation</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Additional Resources</h3>
              <ul className="text-green-700 space-y-2">
                <li>📚 Subject-specific textbooks approved by the DBE</li>
                <li>📝 Recipe and pattern collections for your practical option</li>
                <li>📊 Enterprise planning templates and costing worksheets</li>
                <li>🎥 WCED video tutorials on practical techniques</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Information */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Theory Examination Paper (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• The Consumer (20%)</li>
                <li>• Food & Nutrition (25%)</li>
                <li>• Clothing & Textiles (20%)</li>
                <li>• Entrepreneurship (35%)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Practical Assessment Task (PAT)</h3>
              <ul className="text-gray-600">
                <li>• 25% of the final mark</li>
                <li>• Focuses on practical production skills</li>
                <li>• Includes planning, preparation, and execution phases</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-orange-800 mb-2">School-Based Assessment (SBA)</h3>
              <ul className="text-orange-700 text-sm">
                <li>• Term tests, mid-year examination, assignments (25% of final mark)</li>
                <li>• Practical tasks and projects aligned with consumer-related topics</li>
                <li>• Case studies on entrepreneurship and consumer issues</li>
              </ul>
              <p className="text-gray-600 mt-2 text-sm">
                <span className="font-semibold">Note:</span> SBA and PAT contribute 25% each to your final mark, while the external NSC exam contributes 50%.
              </p>
            </div>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Consumer Studies combines theoretical knowledge with practical skills. Success requires 
              finding a balance between understanding consumer concepts and mastering production techniques 
              in your chosen practical option.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Key to Excellence</h3>
              <ul className="space-y-2">
                <li>• Regular practice of practical production skills</li>
                <li>• Understanding entrepreneurial calculations and costing</li>
                <li>• Staying informed about consumer trends and issues</li>
                <li>• Efficient time management during practical assessments</li>
                <li>• Application of theory to real-world consumer contexts</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
