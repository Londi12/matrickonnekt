import React from 'react';

const TransactionalWriting = () => {
  return (
    <div className="prose max-w-none">
      <section className="mb-8">
        <h2>Transactional Writing</h2>
        <p className="text-gray-600 mb-4">
          Learn to write effective formal and informal transactional texts for various real-world purposes.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-blue-800">Learning Objectives</h3>
          <ul className="text-blue-700">
            <li>Write professional formal letters and reports</li>
            <li>Create effective reviews and articles</li>
            <li>Apply appropriate format and style</li>
            <li>Use suitable language for different contexts</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Text Types & Formats</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Formal Texts</h4>
            <ul>
              <li>Business letters</li>
              <li>Reports and proposals</li>
              <li>Formal speeches</li>
              <li>Curriculum Vitae</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Semi-Formal/Informal Texts</h4>
            <ul>
              <li>Reviews (books, movies)</li>
              <li>Magazine articles</li>
              <li>Blogs and social media</li>
              <li>Personal letters</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Writing Examples</h3>
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">1. Formal Letter Example</h4>
            <div className="bg-white p-3 rounded border mb-3">
              <pre className="text-sm whitespace-pre-wrap">
{`123 Main Street
Cityville, 2000
11 May 2025

The Manager
ABC Company
456 Business Avenue
Townsville, 2001

Dear Sir/Madam

RE: JOB APPLICATION - MARKETING ASSISTANT

I am writing to apply for the position of Marketing Assistant as advertised on your website.

[Body text...]

Yours faithfully
J. Smith`}
              </pre>
            </div>
            <div className="bg-yellow-50 p-3 rounded">
              <p className="font-medium text-yellow-800">Key Features:</p>
              <ul className="text-yellow-900">
                <li>Clear address formatting</li>
                <li>Professional salutation</li>
                <li>Subject line in capitals</li>
                <li>Appropriate sign-off</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">2. Movie Review Example</h4>
            <div className="bg-white p-3 rounded border mb-3">
              <h5 className="font-medium">"The Future Now" - Film Review</h5>
              <p className="italic">
                "Director Sarah Chen's latest sci-fi masterpiece offers a thought-provoking glimpse 
                into humanity's relationship with artificial intelligence. With stunning visuals and 
                compelling performances, the film successfully balances entertainment with deeper 
                philosophical questions. However, the complex plot may challenge some viewers..."
              </p>
            </div>
            <div className="bg-yellow-50 p-3 rounded">
              <p className="font-medium text-yellow-800">Key Features:</p>
              <ul className="text-yellow-900">
                <li>Engaging opening</li>
                <li>Balanced critique</li>
                <li>Specific details</li>
                <li>Clear opinion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Practice Exercise</h3>
        <div className="border p-4 rounded-lg">
          <p className="font-semibold mb-4">Complete one of these writing tasks:</p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-medium mb-2">Formal Letter Task:</h4>
              <p>Write a letter to your local council suggesting improvements for youth facilities in your area.</p>
              <ul className="mt-2 text-sm text-gray-600">
                <li>Use appropriate format and tone</li>
                <li>Include specific suggestions</li>
                <li>Provide supporting reasons</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-medium mb-2">Review Task:</h4>
              <p>Write a review of a recently read book or watched movie</p>
              <ul className="mt-2 text-sm text-gray-600">
                <li>Balance description and evaluation</li>
                <li>Use appropriate style and vocabulary</li>
                <li>Include star rating and recommendation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>Key Takeaways</h3>
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <ul className="text-green-800">
            <li>Format is crucial in transactional writing</li>
            <li>Maintain consistent tone and style</li>
            <li>Consider purpose and audience</li>
            <li>Use appropriate language register</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="text-red-800 font-semibold">Common Mistakes to Avoid</h4>
          <ul className="text-red-700">
            <li>Incorrect format or layout</li>
            <li>Inconsistent tone or register</li>
            <li>Missing key information</li>
            <li>Inappropriate language for context</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TransactionalWriting;
