import React from 'react';

const CriticalReading = () => {
  return (
    <div className="prose max-w-none">
      <section className="mb-8">
        <h2>Critical Reading & Comprehension</h2>
        <p className="text-gray-600 mb-4">
          Master advanced reading comprehension strategies to analyze and interpret complex texts effectively.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-blue-800">Learning Objectives</h3>
          <ul className="text-blue-700">
            <li>Develop advanced reading comprehension strategies</li>
            <li>Identify main ideas and supporting details</li>
            <li>Make logical inferences from texts</li>
            <li>Analyze author's purpose and bias</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Key Reading Strategies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Before Reading</h4>
            <ul>
              <li>Preview the text structure</li>
              <li>Activate prior knowledge</li>
              <li>Set purpose for reading</li>
              <li>Make predictions</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">During Reading</h4>
            <ul>
              <li>Identify main ideas</li>
              <li>Make connections</li>
              <li>Monitor comprehension</li>
              <li>Use context clues</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Example Analysis</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-sm mb-2 text-gray-500">Extract from an article about climate change:</p>
          <p>
            "While the debate around climate change continues in political circles, 
            the scientific consensus is clear: human activities are contributing 
            significantly to global warming. Recent studies indicate that the rate 
            of sea-level rise has doubled in the last two decades, threatening 
            coastal communities worldwide. However, some argue that economic growth 
            should take precedence over environmental concerns."
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="text-yellow-800">Analysis</h4>
          <ul className="text-yellow-900">
            <li><strong>Main Idea:</strong> Scientific evidence supports human-caused climate change</li>
            <li><strong>Supporting Detail:</strong> Sea-level rise has doubled recently</li>
            <li><strong>Author's Purpose:</strong> To present scientific consensus while acknowledging debate</li>
            <li><strong>Bias/Perspective:</strong> Leans towards scientific viewpoint while presenting counter-argument</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Practice Exercise</h3>
        <div className="border p-4 rounded-lg">
          <p className="font-semibold mb-4">Read the following excerpt and answer the questions below:</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p>
              "Digital technology has revolutionized education, offering unprecedented 
              access to information and learning resources. Yet, some educators warn 
              that over-reliance on technology may impact critical thinking skills 
              and face-to-face interaction. As schools increasingly adopt digital 
              tools, finding the right balance becomes crucial."
            </p>
          </div>
          <div className="mt-4">
            <p className="font-medium">Answer these questions:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>What is the main argument presented in this passage?</li>
              <li>Identify two contrasting viewpoints about technology in education.</li>
              <li>What inference can you make about the author's stance?</li>
              <li>How does the author structure the argument?</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <h3>Key Takeaways</h3>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="text-green-800">
            <li>Effective reading requires active engagement with the text</li>
            <li>Critical analysis involves identifying main ideas, bias, and purpose</li>
            <li>Supporting details help understand the author's argument</li>
            <li>Practice different types of questions to improve comprehension skills</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CriticalReading;
