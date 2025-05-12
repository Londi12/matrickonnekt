import React from 'react';

const NovelAnalysis = () => {
  return (
    <div className="prose max-w-none">
      <section className="mb-8">
        <h2>Novel Analysis: The Life of Pi</h2>
        <p className="text-gray-600 mb-4">
          An in-depth study of Yann Martel's "Life of Pi", focusing on narrative techniques,
          symbolism, and thematic analysis for Grade 12 examination preparation.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-blue-800">Learning Objectives</h3>
          <ul className="text-blue-700">
            <li>Analyze narrative structure and storytelling techniques</li>
            <li>Explore symbolism and metaphorical meaning</li>
            <li>Understand character development and relationships</li>
            <li>Examine major themes and their significance</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Narrative Structure & Techniques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Frame Narrative</h4>
            <ul>
              <li>Adult Pi telling his story</li>
              <li>Role of the writer/interviewer</li>
              <li>Reliability of narrator</li>
              <li>Multiple versions of truth</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Storytelling Elements</h4>
            <ul>
              <li>Use of magical realism</li>
              <li>Symbolism and allegory</li>
              <li>Religious and cultural references</li>
              <li>Time manipulation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Major Themes</h3>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Faith and Religion</h4>
            <ul>
              <li>Pi's exploration of multiple faiths</li>
              <li>Role of belief in survival</li>
              <li>Relationship between faith and reason</li>
              <li>Religious symbolism throughout the novel</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Survival and Human Nature</h4>
            <ul>
              <li>Physical vs. psychological survival</li>
              <li>Man vs. nature conflict</li>
              <li>Animal behavior as mirror to human nature</li>
              <li>Moral compromises in extreme situations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Key Passage Analysis</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="italic mb-4">
            "I challenge anyone to understand Islam, its spirit, and not to love it. 
            It is a beautiful religion of brotherhood and devotion... I challenge 
            anyone to understand Hinduism, its spirit, and not to love it... I 
            challenge anyone to understand Christianity, its spirit, and not to love it."
          </p>
          <div className="bg-yellow-50 p-4 rounded">
            <h4 className="text-yellow-800">Analysis</h4>
            <ul className="text-yellow-900">
              <li>Demonstrates Pi's inclusive religious views</li>
              <li>Parallelism in structure emphasizes equality</li>
              <li>Theme of universal spirituality</li>
              <li>Tone of conviction and tolerance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Practice Questions</h3>
        <div className="border p-4 rounded-lg">
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">Essay Question:</p>
              <p className="italic mb-2">"Life of Pi is more about the power of storytelling than about survival." Discuss this statement, referring to specific elements of the novel.</p>
              <div className="bg-yellow-50 p-3 rounded mt-2">
                <p className="font-medium text-yellow-800">Essay Planning:</p>
                <ul className="text-yellow-900">
                  <li>Introduction: Frame narrative structure</li>
                  <li>Two versions of the story - significance</li>
                  <li>Role of imagination in survival</li>
                  <li>Reader's choice in interpretation</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Contextual Questions:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>How does the author use symbolism to explore themes of faith and survival?</li>
                <li>Analyze the significance of Richard Parker in Pi's journey.</li>
                <li>Discuss the role of the Japanese investigators in the novel's structure.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>Key Takeaways & Exam Tips</h3>
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <ul className="text-green-800">
            <li>Connect analysis to major themes</li>
            <li>Support arguments with textual evidence</li>
            <li>Consider multiple interpretations</li>
            <li>Link literary devices to meaning</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="text-red-800 font-semibold">Common Mistakes to Avoid</h4>
          <ul className="text-red-700">
            <li>Focusing too much on plot summary</li>
            <li>Ignoring the frame narrative's significance</li>
            <li>Missing symbolic meanings</li>
            <li>Oversimplifying complex themes</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NovelAnalysis;
