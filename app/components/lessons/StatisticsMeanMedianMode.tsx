import React from 'react';

export default function StatisticsMeanMedianMode() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Statistics – Mean, Median, and Mode</h1>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">What you'll learn:</h2>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>What statistics is all about</li>
              <li>What mean, median, and mode are</li>
              <li>How to calculate each one</li>
              <li>A few simple examples</li>
              <li>A practice section (with answers)</li>
              <li>A quick recap at the end</li>
            </ul>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Basic Definitions</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Statistics</h3>
                  <p className="text-gray-700">Statistics is the study of collecting, analysing, and making sense of numbers (data).</p>
                  <p className="text-gray-700 mt-2">When we work with data, we often want to know what's "typical" or "average" — that's where mean, median, and mode come in.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Mean</h3>
                  <p className="text-gray-700">Also called the average.</p>
                  <p className="text-gray-700 mt-2">To find it:</p>
                  <p className="text-gray-700">Add up all the numbers, then divide by how many numbers there are.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Median</h3>
                  <p className="text-gray-700">This is the middle number when the numbers are arranged from smallest to biggest.</p>
                  <p className="text-gray-700 mt-2">If there's an even number of values, the median is the average of the two middle numbers.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Mode</h3>
                  <p className="text-gray-700">This is the number that appears most often.</p>
                  <p className="text-gray-700 mt-2">A set of numbers can have no mode, one mode, or more than one mode.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Key Formulas</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">You don't need to memorise crazy formulas here — just basic steps:</p>
                <div className="space-y-2">
                  <p className="text-gray-700">Mean = Sum of all values ÷ Number of values</p>
                  <p className="text-gray-700">Median = Middle value (after sorting the data)</p>
                  <p className="text-gray-700">Mode = Most frequent value</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Simple Examples</h2>
              <p className="text-gray-700 mb-4">Let's go through some easy examples together.</p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Example 1: Find the Mean</h3>
                  <p className="text-gray-700">Data: 5, 7, 8, 4, 6</p>
                  <div className="mt-2 space-y-2">
                    <p className="text-gray-700">Step 1: Add the numbers:</p>
                    <p className="text-gray-700">5 + 7 + 8 + 4 + 6 = 30</p>
                    <p className="text-gray-700">Step 2: Divide by how many numbers there are (5):</p>
                    <p className="text-gray-700">Mean = 30 ÷ 5 = 6</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Example 2: Find the Median</h3>
                  <p className="text-gray-700">Data: 3, 9, 7, 5, 11</p>
                  <div className="mt-2 space-y-2">
                    <p className="text-gray-700">Step 1: Arrange in order:</p>
                    <p className="text-gray-700">3, 5, 7, 9, 11</p>
                    <p className="text-gray-700">Step 2: Find the middle number:</p>
                    <p className="text-gray-700">Middle = 7</p>
                    <p className="text-gray-700">So, the median is 7.</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Example 3: Find the Mode</h3>
                  <p className="text-gray-700">Data: 2, 4, 4, 5, 6, 4, 7</p>
                  <div className="mt-2 space-y-2">
                    <p className="text-gray-700">Step 1: Look for the number that appears most often:</p>
                    <p className="text-gray-700">4 appears three times.</p>
                    <p className="text-gray-700">So, the mode is 4.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Practice Section</h2>
              <p className="text-gray-700 mb-4">Try these on your own. Answers are just below.</p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Practice Questions</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">1. Find the mean of: 10, 15, 20, 25, 30</p>
                    <p className="text-gray-700">2. Find the median of: 6, 2, 9, 4, 7</p>
                    <p className="text-gray-700">3. Find the mode of: 1, 3, 3, 6, 7, 8, 9</p>
                    <p className="text-gray-700">4. Find the mean, median, and mode of: 5, 5, 7, 8, 10, 10, 10</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Answers</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 font-medium">1. Mean:</p>
                      <p className="text-gray-700">Mean = (10 + 15 + 20 + 25 + 30) ÷ 5 = 100 ÷ 5 = 20</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-medium">2. Median:</p>
                      <p className="text-gray-700">Arrange: 2, 4, 6, 7, 9</p>
                      <p className="text-gray-700">Middle = 6</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-medium">3. Mode:</p>
                      <p className="text-gray-700">3 appears twice.</p>
                      <p className="text-gray-700">Mode = 3</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-medium">4. Full answer:</p>
                      <p className="text-gray-700">Arrange: 5, 5, 7, 8, 10, 10, 10</p>
                      <p className="text-gray-700">Mean: (5 + 5 + 7 + 8 + 10 + 10 + 10) ÷ 7 = 55 ÷ 7 ≈ 7.86</p>
                      <p className="text-gray-700">Median: Middle number = 8</p>
                      <p className="text-gray-700">Mode: 10 (appears three times)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Recap – What You've Learned</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">Before you go, here's a quick summary:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Mean: Add all numbers and divide by how many there are.</li>
                  <li>Median: Arrange the numbers and find the middle one.</li>
                  <li>Mode: Look for the number that appears the most.</li>
                </ul>
                <p className="text-gray-700 mt-4">These are the basic ways to describe a set of numbers and find the "typical" value.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 