import React from 'react';

const ArgumentativeWriting = () => {
  return (
    <div className="prose max-w-none">
      <section className="mb-8">
        <h2>Argumentative & Discursive Writing</h2>
        <p className="text-gray-600 mb-4">
          Master the art of writing compelling argumentative and discursive essays that present 
          well-reasoned arguments and balanced discussions.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-blue-800">Learning Objectives</h3>
          <ul className="text-blue-700">
            <li>Plan and structure argumentative essays effectively</li>
            <li>Present balanced views in discursive writing</li>
            <li>Use evidence and examples to support arguments</li>
            <li>Apply logical reasoning and counter-arguments</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Essay Structure Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Argumentative Essay</h4>
            <ul>
              <li>Clear thesis statement</li>
              <li>Supporting evidence</li>
              <li>Counter-arguments addressed</li>
              <li>Strong conclusion</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Discursive Essay</h4>
            <ul>
              <li>Balanced introduction</li>
              <li>Multiple viewpoints</li>
              <li>Objective analysis</li>
              <li>Reasoned conclusion</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Writing Examples</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="mb-6">
            <h4 className="font-semibold mb-2">1. Argumentative Essay Extract</h4>
            <div className="bg-white p-3 rounded border mb-3">
              <p className="italic">
                "While social media has revolutionized communication, its negative impact on mental 
                health cannot be ignored. Studies consistently show a correlation between excessive 
                social media use and increased rates of anxiety and depression among teenagers. 
                Furthermore, the constant comparison to curated online personas creates unrealistic 
                expectations and damages self-esteem."
              </p>
            </div>
            <div className="bg-yellow-50 p-3 rounded">
              <p className="font-medium text-yellow-800">Analysis:</p>
              <ul className="text-yellow-900">
                <li>Clear position stated</li>
                <li>Evidence provided through studies</li>
                <li>Specific examples given</li>
                <li>Logical flow of ideas</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">2. Discursive Essay Extract</h4>
            <div className="bg-white p-3 rounded border mb-3">
              <p className="italic">
                "The debate over renewable energy implementation presents various considerations. 
                Proponents argue that it's essential for environmental sustainability and long-term 
                economic benefits. However, critics point out the high initial costs and current 
                technological limitations. Both perspectives merit careful consideration in developing 
                energy policies."
              </p>
            </div>
            <div className="bg-yellow-50 p-3 rounded">
              <p className="font-medium text-yellow-800">Analysis:</p>
              <ul className="text-yellow-900">
                <li>Balanced presentation</li>
                <li>Multiple viewpoints explored</li>
                <li>Neutral tone maintained</li>
                <li>No personal bias shown</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Practice Exercise</h3>
        <div className="border p-4 rounded-lg">
          <p className="font-semibold mb-4">Choose one of these topics and write an essay outline:</p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-medium mb-2">Argumentative Topic:</h4>
              <p>"Should smartphones be banned in schools?"</p>
              <ul className="mt-2 text-sm text-gray-600">
                <li>Consider: Education impact, safety concerns, distractions</li>
                <li>Include counter-arguments and rebuttals</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-medium mb-2">Discursive Topic:</h4>
              <p>"The impact of artificial intelligence on future employment"</p>
              <ul className="mt-2 text-sm text-gray-600">
                <li>Explore: Job creation vs displacement</li>
                <li>Consider multiple stakeholder perspectives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>Key Takeaways</h3>
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <ul className="text-green-800">
            <li>Clear structure is essential for both essay types</li>
            <li>Evidence and examples strengthen arguments</li>
            <li>Maintain appropriate tone for essay type</li>
            <li>Address counter-arguments in argumentative essays</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="text-red-800 font-semibold">Common Mistakes to Avoid</h4>
          <ul className="text-red-700">
            <li>Emotional rather than logical arguments</li>
            <li>Insufficient evidence or examples</li>
            <li>Biased language in discursive essays</li>
            <li>Weak or missing counter-arguments</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ArgumentativeWriting;
