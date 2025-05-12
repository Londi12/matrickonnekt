"use client";

import React from 'react';

export default function PhysicalSciencesOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="bg-yellow-50 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Grade 12 Physical Sciences</h1>
          <p className="text-gray-700">
            Embark on an exciting journey through physics and chemistry! This course integrates theoretical 
            knowledge with practical applications, preparing you for success in your final examinations.
          </p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Apply physics principles to real-world scenarios</li>
              <li>Understand chemical processes and reactions</li>
              <li>Develop scientific investigation skills</li>
              <li>Master problem-solving in physics and chemistry</li>
              <li>Connect theoretical concepts with practical applications</li>
            </ul>
          </div>
        </section>

        {/* Core Topics */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">Physics</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Mechanics (Momentum & Impulse)</li>
                  <li>• Work, Energy & Power</li>
                  <li>• Doppler Effect</li>
                  <li>• Electrodynamics</li>
                  <li>• Optical Phenomena</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">Chemistry</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Chemical Equilibrium</li>
                  <li>• Acids & Bases</li>
                  <li>• Electrochemical Reactions</li>
                  <li>• Organic Chemistry</li>
                  <li>• Chemical Industries</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">Practical Skills</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Laboratory Safety</li>
                  <li>• Scientific Method</li>
                  <li>• Data Analysis</li>
                  <li>• Experimental Design</li>
                  <li>• Report Writing</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium text-gray-900">Applications</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Industrial Processes</li>
                  <li>• Environmental Impact</li>
                  <li>• Technology Integration</li>
                  <li>• South African Context</li>
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
                <li>✓ Understand concepts through practical examples</li>
                <li>✓ Practice calculations regularly</li>
                <li>✓ Create mind maps for complex topics</li>
                <li>✓ Review past exam papers</li>
                <li>✓ Maintain a formula reference book</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Additional Resources</h3>
              <ul className="text-green-700 space-y-2">
                <li>🔬 Virtual Lab Simulations</li>
                <li>📚 WCED ePortal Resources</li>
                <li>📝 Practice Problems</li>
                <li>🎥 Video Demonstrations</li>
                <li>📱 Interactive Learning Tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Information */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 1: Physics (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• Mechanics (35%)</li>
                <li>• Waves, Sound & Light (20%)</li>
                <li>• Electricity & Magnetism (45%)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Paper 2: Chemistry (3 hours)</h3>
              <ul className="text-gray-600">
                <li>• Chemical Change (40%)</li>
                <li>• Chemical Systems (20%)</li>
                <li>• Matter & Materials (40%)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Practical Assessment Task (PAT)</h3>
              <ul className="text-gray-600">
                <li>• Two formal practical investigations</li>
                <li>• Scientific report writing</li>
                <li>• Data handling and analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Path */}
        <section className="bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Path to Success</h2>
          
          <div className="space-y-4">
            <p>
              Success in Physical Sciences comes from understanding fundamental concepts and their 
              applications. Regular practice, active participation in practical work, and consistent 
              revision are key to achieving excellent results.
            </p>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Keys to Excellence</h3>
              <ul className="space-y-2">
                <li>• Balance theory with practical work</li>
                <li>• Practice calculations daily</li>
                <li>• Link concepts across topics</li>
                <li>• Focus on problem-solving techniques</li>
                <li>• Maintain detailed laboratory notes</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
