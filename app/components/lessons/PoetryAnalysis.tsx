import React from 'react';

const PoetryAnalysis = () => {
  return (
    <div className="prose max-w-none">
      <section className="mb-8">
        <h2>Poetry Analysis & Appreciation</h2>
        <p className="text-gray-600 mb-4">
          Learn how to analyze and appreciate poetry by understanding key poetic devices,
          themes, and structure.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-blue-800">Learning Objectives</h3>
          <ul className="text-blue-700">
            <li>Identify and analyze various poetic devices</li>
            <li>Understand how tone and mood contribute to meaning</li>
            <li>Develop skills for analyzing unseen poetry</li>
            <li>Connect themes to broader contextual elements</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Key Poetic Devices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Figurative Language</h4>
            <ul>
              <li>Metaphor: Direct comparison without 'like' or 'as'</li>
              <li>Simile: Comparison using 'like' or 'as'</li>
              <li>Personification: Giving human qualities to non-human things</li>
              <li>Alliteration: Repetition of initial consonant sounds</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Sound Devices</h4>
            <ul>
              <li>Rhyme: Similar sound patterns at line endings</li>
              <li>Rhythm: Pattern of stressed and unstressed syllables</li>
              <li>Assonance: Repetition of vowel sounds</li>
              <li>Onomatopoeia: Words that imitate sounds</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Example Analysis</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="font-semibold italic">
            "The fog comes<br />
            on little cat feet.<br />
            It sits looking<br />
            over harbor and city<br />
            on silent haunches<br />
            and then moves on."<br />
            - Fog by Carl Sandburg
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="text-yellow-800">Analysis</h4>
          <ul className="text-yellow-900">
            <li><strong>Metaphor:</strong> The fog is compared to a cat</li>
            <li><strong>Personification:</strong> The fog "sits" and "looks"</li>
            <li><strong>Imagery:</strong> Visual image of fog moving like a cat</li>
            <li><strong>Mood:</strong> Quiet, mysterious atmosphere</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Practice Exercise</h3>
        <div className="border p-4 rounded-lg">
          <p className="font-semibold mb-4">Analyze the following poem, identifying key poetic devices and themes:</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="italic">
              "Hope is the thing with feathers<br />
              That perches in the soul,<br />
              And sings the tune without the words,<br />
              And never stops at all."<br />
              - Emily Dickinson
            </p>
          </div>
          <div className="mt-4">
            <p className="font-medium">Consider these questions:</p>
            <ol className="list-decimal list-inside">
              <li>What is the central metaphor in this poem?</li>
              <li>How does personification contribute to the poem's meaning?</li>
              <li>What is the mood created by the imagery?</li>
              <li>How does the structure support the poem's message?</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <h3>Key Takeaways</h3>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="text-green-800">
            <li>Poetry analysis requires careful attention to both form and content</li>
            <li>Poetic devices enhance meaning and emotional impact</li>
            <li>Context and themes connect poems to broader human experiences</li>
            <li>Practice with unseen poetry improves analytical skills</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PoetryAnalysis;
