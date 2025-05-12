import React from 'react';

const LanguageStructures = () => {
  return (
    <div className="prose max-w-none">
      <section className="mb-8">
        <h2>Language Structures & Conventions</h2>
        <p className="text-gray-600 mb-4">
          Master advanced grammar and language conventions essential for effective communication 
          and examination success.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-blue-800">Learning Objectives</h3>
          <ul className="text-blue-700">
            <li>Apply advanced syntactical structures correctly</li>
            <li>Use appropriate verb tenses and moods</li>
            <li>Master concord and sentence structures</li>
            <li>Apply punctuation rules effectively</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Key Language Concepts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Syntax & Sentence Structure</h4>
            <ul>
              <li>Simple, compound, and complex sentences</li>
              <li>Coordinating and subordinating conjunctions</li>
              <li>Active and passive voice</li>
              <li>Direct and indirect speech</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Parts of Speech</h4>
            <ul>
              <li>Advanced noun phrases</li>
              <li>Verb tenses and moods</li>
              <li>Adjectival and adverbial phrases</li>
              <li>Prepositions and articles</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Common Examples & Analysis</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="mb-6">
            <h4 className="font-semibold mb-2">1. Active vs. Passive Voice</h4>
            <div className="space-y-2">
              <p><strong>Active:</strong> "The student wrote the essay."</p>
              <p><strong>Passive:</strong> "The essay was written by the student."</p>
              <div className="bg-yellow-50 p-3 rounded mt-2">
                <p className="font-medium text-yellow-800">Analysis:</p>
                <ul className="text-yellow-900">
                  <li>Active voice emphasizes the doer</li>
                  <li>Passive voice emphasizes the action/object</li>
                  <li>Consider purpose when choosing voice</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">2. Complex Sentence Structure</h4>
            <p className="italic mb-2">
              "Although the rain was pouring heavily, the students continued their 
              practice session because they were determined to succeed."
            </p>
            <div className="bg-yellow-50 p-3 rounded mt-2">
              <p className="font-medium text-yellow-800">Components:</p>
              <ul className="text-yellow-900">
                <li>Subordinate clause: "Although the rain was pouring heavily"</li>
                <li>Main clause: "the students continued their practice session"</li>
                <li>Adverbial clause: "because they were determined to succeed"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Practice Exercise</h3>
        <div className="border p-4 rounded-lg">
          <p className="font-semibold mb-2">Analyze and correct these sentences:</p>
          <div className="space-y-4">
            <div>
              <p className="text-red-600 mb-1">1. "Neither of the students have completed their assignments."</p>
              <p className="italic text-green-600">Correction: "Neither of the students has completed his or her assignment."</p>
              <p className="text-sm text-gray-600">Issue: Subject-verb agreement and pronoun agreement</p>
            </div>
            <div>
              <p className="text-red-600 mb-1">2. "The committee are discussing the proposal today."</p>
              <p className="italic text-green-600">Correction: "The committee is discussing the proposal today."</p>
              <p className="text-sm text-gray-600">Issue: Collective noun agreement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Punctuation Rules</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Semicolons</h4>
              <ul>
                <li>Connect related independent clauses</li>
                <li>Separate items in complex lists</li>
                <li>Example: "She was exhausted; however, she continued studying."</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Colons</h4>
              <ul>
                <li>Introduce lists or explanations</li>
                <li>Emphasize subsequent information</li>
                <li>Example: "He needed three items: pen, paper, and calculator."</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>Key Takeaways</h3>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="text-green-800">
            <li>Pay attention to subject-verb agreement</li>
            <li>Use appropriate tense sequence</li>
            <li>Apply punctuation rules consistently</li>
            <li>Consider context when choosing sentence structures</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg mt-4">
          <h4 className="text-red-800 font-semibold">Common Mistakes to Avoid</h4>
          <ul className="text-red-700">
            <li>Incorrect subject-verb agreement with collective nouns</li>
            <li>Mixing tenses inappropriately</li>
            <li>Misplaced or dangling modifiers</li>
            <li>Incorrect punctuation in complex sentences</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LanguageStructures;
