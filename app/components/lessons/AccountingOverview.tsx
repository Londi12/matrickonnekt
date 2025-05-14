"use client";

import React from 'react';

export default function AccountingOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">        {/* Welcome Section */}
        <section className="bg-indigo-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Accounting</h1>
          <p className="text-gray-700">
            Master the language of business through comprehensive accounting education! This CAPS-aligned course 
            prepares you for both success in your National Senior Certificate examinations and develops valuable 
            financial management skills for future careers.
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-indigo-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aligned with CAPS curriculum and WCED e-Portal resources
            </p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Prepare and analyze company financial statements</li>
              <li>Master inventory valuation and VAT principles</li>
              <li>Calculate and interpret financial indicators and ratios</li>
              <li>Prepare and analyze cash flow statements</li>
              <li>Understand budgeting and cost accounting principles</li>
              <li>Apply ethical principles and internal controls</li>
              <li>Develop critical problem-solving in financial contexts</li>
            </ul>
          </div>
        </section>        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics (CAPS Aligned)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Companies</h3>
                <p className="text-gray-500 text-xs mt-1">±60% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Income Statement & Notes (IFRS)</li>
                  <li>• Balance Sheet & Notes (IFRS)</li>
                  <li>• Cash Flow Statement & Analysis</li>
                  <li>• Financial Indicators & Interpretation</li>
                  <li>• Audit Reports & Corporate Governance</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Cost Accounting & Manufacturing</h3>
                <p className="text-gray-500 text-xs mt-1">±15% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Production Cost Statement</li>
                  <li>• Unit Costs & Break-even Analysis</li>
                  <li>• Interpretation of Manufacturing Accounts</li>
                  <li>• Ethical Manufacturing Practices</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Inventory & VAT</h3>
                <p className="text-gray-500 text-xs mt-1">±10% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• FIFO, Weighted Average & Specific ID</li>
                  <li>• Perpetual & Periodic Inventory Systems</li>
                  <li>• Validation of Stock & Internal Control</li>
                  <li>• VAT Calculations & Documentation</li>
                </ul>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Budgeting & Control</h3>
                <p className="text-gray-500 text-xs mt-1">±15% of NSC Paper</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Cash Budgets & Projections</li>
                  <li>• Projected Income Statements</li>
                  <li>• Internal Control & Audit Procedures</li>
                  <li>• Ethical Business Practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>{/* Official Curriculum Resources */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-indigo-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Official WCED & DBE Resources</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Mind the Gap Study Guide</h3>
                <p className="text-gray-600 mb-2">Official DBE accounting study guide covering company financial statements, VAT, and financial calculations.</p>
                <a href="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/AccountingMindTheGap.aspx" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Access Accounting Mind the Gap
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
                <h3 className="font-medium text-gray-900">WCED ePortal Resources</h3>
                <p className="text-gray-600 mb-2">Access to financial statement templates, exercises, and exemplar questions through the WCED ePortal.</p>
                <a href="https://wcedeportal.co.za/accounting" 
                   className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore WCED Accounting Resources
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
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-medium text-indigo-800 mb-2">Effective Study Strategies</h3>
              <ul className="text-indigo-700 space-y-2">
                <li>✓ Practice calculations and financial statements daily</li>
                <li>✓ Use proper accounting formats and principles</li>
                <li>✓ Create ledger account summaries and ratio notes</li>
                <li>✓ Work through NSC past papers systematically</li>
                <li>✓ Master financial calculations and GAAP principles</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Additional Resources</h3>
              <ul className="text-blue-700 space-y-2">
                <li>📊 IFRS Financial Statement Templates</li>
                <li>📚 NSC Past Papers with Memoranda</li>
                <li>📝 Ratio Analysis Quick Reference Guides</li>
                <li>🎥 Company Statement Video Tutorials</li>
                <li>💼 South African Case Studies</li>
              </ul>
            </div>
          </div>
        </section>        {/* NSC Examination Structure */}
        <section className="bg-white rounded-lg shadow-sm p-6 border border-yellow-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">NSC Examination Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-medium text-indigo-900 mb-2">NSC Accounting Paper (3 hours, 300 marks)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Section A:</span> Short questions & theory (30%)</li>
                <li className="ml-4">- Multiple choice, matching, and terminology questions</li>
                <li className="ml-4">- Ethics and control questions</li>
                <li>• <span className="font-medium">Section B:</span> Financial Statements & Analysis (30%)</li>
                <li className="ml-4">- Company Income Statement with notes</li>
                <li className="ml-4">- Balance Sheet with notes</li>
                <li>• <span className="font-medium">Section C:</span> Management Accounting (20%)</li>
                <li className="ml-4">- Manufacturing accounts and break-even analysis</li>
                <li className="ml-4">- Cash budgets and projected statements</li>
                <li>• <span className="font-medium">Section D:</span> Problem solving & Interpretation (20%)</li>
                <li className="ml-4">- Audit reports and corporate governance</li>
                <li className="ml-4">- Financial analysis and decision making</li>
              </ul>
              <p className="text-xs text-indigo-700 mt-2">Format may vary slightly between years, but the weighting of topic areas remains consistent.</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-medium text-yellow-800 mb-2">School-Based Assessment (SBA)</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <span className="font-medium">Tests (40%):</span> Three formal tests covering key topics</li>
                <li>• <span className="font-medium">Mid-year Examination (15%):</span> Comprehensive examination</li>
                <li>• <span className="font-medium">Project (20%):</span> Financial reporting and analysis</li>
                <li>• <span className="font-medium">Case Study (10%):</span> Ethics and internal controls</li>
                <li>• <span className="font-medium">Trial Examination (15%):</span> Full NSC examination preparation</li>
              </ul>
              <p className="text-gray-600 mt-2 text-sm">
                <span className="font-semibold">Note:</span> SBA contributes 25% to your final mark, while the external NSC exam contributes 75%.
              </p>
            </div>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in Accounting requires attention to detail, consistent practice, and 
              understanding of core principles. Focus on accuracy, presentation, and ethical 
              considerations in all your work.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Keys to Excellence</h3>
              <ul className="space-y-2">
                <li>• Practice neat and organized work</li>
                <li>• Master basic calculations first</li>
                <li>• Understand business context</li>
                <li>• Focus on ethical practices</li>
                <li>• Stay updated with accounting standards</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
