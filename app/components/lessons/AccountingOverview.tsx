"use client";

import React from 'react';

export default function AccountingOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-indigo-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Accounting</h1>
          <p className="text-gray-700">
            Master the language of business through comprehensive accounting education! This course 
            prepares you for both academic success and real-world financial management.
          </p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Prepare and analyze financial statements</li>
              <li>Master company accounting procedures</li>
              <li>Understand management accounting concepts</li>
              <li>Apply ethical principles in financial practices</li>
              <li>Develop problem-solving skills in financial contexts</li>
            </ul>
          </div>
        </section>

        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Companies</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Financial Statements</li>
                  <li>• Analysis & Interpretation</li>
                  <li>• Corporate Governance</li>
                  <li>• Share Transactions</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Manufacturing</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Cost Accounting</li>
                  <li>• Production Cost Statement</li>
                  <li>• Break-even Analysis</li>
                  <li>• Budgeting</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Inventory Systems</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Valuation Methods</li>
                  <li>• Stock Control</li>
                  <li>• Ethical Considerations</li>
                  <li>• VAT Implications</li>
                </ul>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Budgeting & Control</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Cash Budgets</li>
                  <li>• Projected Statements</li>
                  <li>• Internal Control</li>
                  <li>• Audit Processes</li>
                </ul>
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
                <li>✓ Practice calculations daily</li>
                <li>✓ Use proper formatting</li>
                <li>✓ Create summary notes</li>
                <li>✓ Work through past papers</li>
                <li>✓ Master financial formulae</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Additional Resources</h3>
              <ul className="text-blue-700 space-y-2">
                <li>📊 Financial Templates</li>
                <li>📚 WCED ePortal Materials</li>
                <li>📝 Practice Sets</li>
                <li>🎥 Tutorial Videos</li>
                <li>💼 Case Studies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Information */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 1: Financial Accounting (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• Company Financial Statements (100 marks)</li>
                <li>• Cash Flow Statement (40 marks)</li>
                <li>• Analysis & Interpretation (40 marks)</li>
                <li>• Corporate Governance (20 marks)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 2: Managerial Accounting (2 hours)</h3>
              <ul className="text-gray-600">
                <li>• Manufacturing (40 marks)</li>
                <li>• Budgeting (40 marks)</li>
                <li>• Cost Accounting (40 marks)</li>
                <li>• VAT & Internal Control (30 marks)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Project Work</h3>
              <ul className="text-gray-600">
                <li>• Company Analysis Project</li>
                <li>• Ethics Case Study</li>
                <li>• Internal Control Evaluation</li>
              </ul>
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
