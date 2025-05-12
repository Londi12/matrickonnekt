"use client";

import React from 'react';

export default function EnglishOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-red-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 English</h1>
          <p className="text-gray-700">
            Enhance your English language skills through comprehensive study of literature, 
            language, and various forms of communication. This course prepares you for both 
            academic success and effective real-world communication.
          </p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Analyze and appreciate various forms of literature</li>
              <li>Master advanced language structures and conventions</li>
              <li>Develop critical reading and comprehension skills</li>
              <li>Create well-structured written texts for different purposes</li>
              <li>Interpret and analyze visual texts effectively</li>
            </ul>
          </div>
        </section>

        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-medium text-gray-900">1. Literature Study</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Poetry Analysis</li>
                  <li>• Shakespeare Drama (Macbeth)</li>
                  <li>• Novel Study</li>
                  <li>• Literary Devices</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">2. Language Skills</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Advanced Grammar</li>
                  <li>• Critical Reading</li>
                  <li>• Comprehension Strategies</li>
                  <li>• Language Structures</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">3. Writing Skills</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Creative Writing</li>
                  <li>• Argumentative Essays</li>
                  <li>• Transactional Texts</li>
                  <li>• Academic Writing</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">4. Visual Literacy</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Advertisement Analysis</li>
                  <li>• Cartoon Analysis</li>
                  <li>• Visual Techniques</li>
                  <li>• Media Literacy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Study Tips */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Study Tips & Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Effective Study Strategies</h3>
              <ul className="text-blue-700 space-y-2">
                <li>✓ Read prescribed texts thoroughly</li>
                <li>✓ Create literature study notes</li>
                <li>✓ Practice writing regularly</li>
                <li>✓ Analyze past exam papers</li>
                <li>✓ Build vocabulary actively</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Additional Resources</h3>
              <ul className="text-green-700 space-y-2">
                <li>📚 WCED ePortal Materials</li>
                <li>📖 Literature Study Guides</li>
                <li>✍️ Writing Templates</li>
                <li>🎥 Drama Performances</li>
                <li>📝 Practice Exercises</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Information */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 1: Language (2.5 hours)</h3>
              <ul className="text-gray-600">
                <li>• Comprehension (30 marks)</li>
                <li>• Summary Writing (10 marks)</li>
                <li>• Language Structures (30 marks)</li>
                <li>• Visual Literacy (30 marks)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 2: Literature (2.5 hours)</h3>
              <ul className="text-gray-600">
                <li>• Poetry (35 marks)</li>
                <li>• Novel (35 marks)</li>
                <li>• Drama (35 marks)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 3: Writing (2.5 hours)</h3>
              <ul className="text-gray-600">
                <li>• Essay (50 marks)</li>
                <li>• Transactional Writing (2 × 25 marks)</li>
              </ul>
            </div>
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
