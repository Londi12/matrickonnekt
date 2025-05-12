import React from 'react';

const VisualLiteracy = () => {
  return (
    <div className="prose max-w-none">
      <section className="mb-8">
        <h2>Visual Literacy</h2>
        <p className="text-gray-600 mb-4">
          Develop critical skills in analyzing and interpreting visual texts, including 
          advertisements, cartoons, and infographics.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-blue-800">Learning Objectives</h3>
          <ul className="text-blue-700">
            <li>Analyze visual and written elements in advertisements</li>
            <li>Interpret cartoons and their social commentary</li>
            <li>Understand the purpose and impact of visual elements</li>
            <li>Evaluate effectiveness of visual communication</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Visual Analysis Techniques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Advertisement Analysis</h4>
            <ul>
              <li>Target audience identification</li>
              <li>Persuasive techniques</li>
              <li>Layout and design elements</li>
              <li>Typography and color symbolism</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Cartoon Analysis</h4>
            <ul>
              <li>Symbolism and metaphors</li>
              <li>Satire and irony</li>
              <li>Social and political context</li>
              <li>Visual humor elements</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Advertisement Analysis Example</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="mb-4">
            <h4 className="font-semibold">Sample Advertisement</h4>
            <p className="italic text-sm mb-2">Description of a health product advertisement:</p>
            <p>
              Image shows a family enjoying outdoor activities. Text reads: "Boost your family's 
              immunity naturally. VitaLife - Because health comes first."
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded">
            <h4 className="text-yellow-800 font-medium mb-2">Analysis</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Visual Elements:</p>
                <ul className="text-yellow-900">
                  <li>Happy family imagery → emotional appeal</li>
                  <li>Outdoor setting → natural, healthy lifestyle</li>
                  <li>Bright colors → vitality and energy</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Language Features:</p>
                <ul className="text-yellow-900">
                  <li>Use of imperative → "Boost"</li>
                  <li>Emotive language → "naturally"</li>
                  <li>Brand positioning → "health comes first"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Political Cartoon Analysis</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="mb-4">
            <h4 className="font-semibold">Analyzing Political Cartoons</h4>
            <p>Key elements to consider:</p>
            <ul>
              <li>Symbolism: Objects/figures representing concepts</li>
              <li>Labels: Text identifying elements</li>
              <li>Caricature: Exaggerated features</li>
              <li>Context: Current events referenced</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded mt-4">
            <h4 className="text-yellow-800 font-medium mb-2">Example Analysis Steps</h4>
            <ol className="list-decimal list-inside space-y-2 text-yellow-900">
              <li>Identify the main figures/objects</li>
              <li>Analyze visual symbolism</li>
              <li>Consider current events context</li>
              <li>Interpret the cartoon's message</li>
              <li>Evaluate effectiveness</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Practice Exercise</h3>
        <div className="border p-4 rounded-lg">
          <p className="font-semibold mb-4">Analyze the following visual texts:</p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Advertisement Analysis</h4>
              <p className="italic mb-2">
                A sports drink advertisement showing an athlete crossing a finish line. 
                Tagline: "Push beyond your limits"
              </p>
              <div className="bg-gray-100 p-3 rounded">
                <p className="font-medium">Answer these questions:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Who is the target audience?</li>
                  <li>What persuasive techniques are used?</li>
                  <li>How do visual elements support the message?</li>
                  <li>Evaluate the effectiveness of the advertisement</li>
                </ol>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Infographic Analysis</h4>
              <p className="italic mb-2">
                An infographic about climate change showing global temperature changes 
                over the past century.
              </p>
              <div className="bg-gray-100 p-3 rounded">
                <p className="font-medium">Analyze:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Data presentation methods</li>
                  <li>Use of color and symbols</li>
                  <li>Clarity of information</li>
                  <li>Overall impact and effectiveness</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>Key Takeaways</h3>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="text-green-800">
            <li>Consider both visual and verbal elements</li>
            <li>Understand the target audience and purpose</li>
            <li>Recognize persuasive techniques</li>
            <li>Evaluate effectiveness of visual communication</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg mt-4">
          <h4 className="text-red-800 font-semibold">Common Mistakes to Avoid</h4>
          <ul className="text-red-700">
            <li>Overlooking subtle visual elements</li>
            <li>Missing contextual references</li>
            <li>Ignoring target audience considerations</li>
            <li>Superficial analysis of techniques</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default VisualLiteracy;
