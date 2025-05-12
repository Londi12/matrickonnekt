"use client";

import React from 'react';

export default function LifeSciencesOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-green-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Life Sciences</h1>
          <p className="text-gray-700">
            Discover the fascinating world of life sciences! This course explores the complexities of life, 
            from molecular biology to environmental studies, preparing you for success in your final year.
          </p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Understand complex biological processes</li>
              <li>Apply scientific inquiry methods</li>
              <li>Analyze environmental interactions</li>
              <li>Evaluate genetic principles</li>
              <li>Connect biological concepts to real-world applications</li>
            </ul>
          </div>
        </section>

        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">1. DNA & Genetics</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• DNA Structure & Replication</li>
                  <li>• Protein Synthesis</li>
                  <li>• Meiosis</li>
                  <li>• Genetics & Inheritance</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Evolution</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Evidence for Evolution</li>
                  <li>• Human Evolution</li>
                  <li>• Natural Selection</li>
                  <li>• Speciation & Extinction</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Human Responses</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Nervous System</li>
                  <li>• Endocrine System</li>
                  <li>• Homeostasis</li>
                  <li>• Human Impact</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Ecology & Environment</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Population Dynamics</li>
                  <li>• Human Impact</li>
                  <li>• Biodiversity</li>
                  <li>• Conservation Strategies</li>
                </ul>
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
                <li>✓ Use diagrams and visual aids</li>
                <li>✓ Create concept maps</li>
                <li>✓ Practice past paper questions</li>
                <li>✓ Understand processes step-by-step</li>
                <li>✓ Link concepts to real-world examples</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Additional Resources</h3>
              <ul className="text-blue-700 space-y-2">
                <li>🔬 Virtual Lab Simulations</li>
                <li>📚 WCED ePortal Materials</li>
                <li>📝 Study Guides</li>
                <li>🎥 Educational Videos</li>
                <li>🌿 Field Study Resources</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Information */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 1 (2.5 hours)</h3>
              <ul className="text-gray-600">
                <li>• DNA & Protein Synthesis (25%)</li>
                <li>• Meiosis (25%)</li>
                <li>• Genetics & Inheritance (50%)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 2 (2.5 hours)</h3>
              <ul className="text-gray-600">
                <li>• Human Responses (40%)</li>
                <li>• Evolution (40%)</li>
                <li>• Environmental Studies (20%)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Practical Assessment Task (PAT)</h3>
              <ul className="text-gray-600">
                <li>• Scientific Investigation</li>
                <li>• Data Analysis & Interpretation</li>
                <li>• Research Project</li>
              </ul>
            </div>
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
