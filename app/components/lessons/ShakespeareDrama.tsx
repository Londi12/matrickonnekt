import React from 'react';

const ShakespeareDrama = () => {
  return (
    <div className="prose max-w-none">
      <section className="mb-8">
        <h2>Shakespeare Drama Study: Macbeth</h2>
        <p className="text-gray-600 mb-4">
          A comprehensive study of Shakespeare's tragedy "Macbeth", focusing on character analysis,
          themes, and dramatic techniques that commonly appear in exams.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-blue-800">Learning Objectives</h3>
          <ul className="text-blue-700">
            <li>Analyze key characters and their development</li>
            <li>Explore major themes and motifs</li>
            <li>Understand dramatic techniques and their effects</li>
            <li>Develop skills for answering contextual questions</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Key Characters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Macbeth</h4>
            <ul>
              <li>Initial characterization: Brave warrior, loyal thane</li>
              <li>Fatal flaw: Ambition</li>
              <li>Character development: Hero to tragic villain</li>
              <li>Key quotes for analysis</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Lady Macbeth</h4>
            <ul>
              <li>Initial characterization: Strong-willed, manipulative</li>
              <li>Role in Macbeth's downfall</li>
              <li>Mental deterioration</li>
              <li>Symbolic importance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Major Themes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Ambition</h4>
            <ul>
              <li>Corrupting influence of unchecked ambition</li>
              <li>Relationship between ambition and morality</li>
              <li>Consequences of ambitious actions</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Guilt and Conscience</h4>
            <ul>
              <li>Psychological effects of guilt</li>
              <li>Manifestation in different characters</li>
              <li>Symbolic representations (blood, sleep)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Key Scene Analysis</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold">Act 1, Scene 7: Macbeth's Soliloquy</h4>
          <div className="bg-white p-4 rounded mt-2">
            <p className="italic mb-4">
              "If it were done when 'tis done, then 'twere well<br />
              It were done quickly. If th' assassination<br />
              Could trammel up the consequence, and catch<br />
              With his surcease success..."
            </p>
            <div className="space-y-2">
              <p><strong>Context:</strong> Macbeth contemplates killing Duncan</p>
              <p><strong>Analysis:</strong></p>
              <ul>
                <li>Reveals Macbeth's moral struggle</li>
                <li>Shows awareness of consequences</li>
                <li>Use of metaphor and alliteration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Practice Questions</h3>
        <div className="border p-4 rounded-lg">
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">Essay Question:</p>
              <p className="italic mb-2">"Macbeth's downfall is primarily due to external forces rather than his own character flaws." Discuss this statement with reference to the play.</p>
              <div className="bg-yellow-50 p-3 rounded mt-2">
                <p className="font-medium text-yellow-800">Planning Points:</p>
                <ul className="text-yellow-900">
                  <li>Consider the role of the witches vs. Macbeth's ambition</li>
                  <li>Analyze Lady Macbeth's influence</li>
                  <li>Examine Macbeth's decision-making process</li>
                  <li>Discuss the concept of fate vs. free will</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Contextual Question:</p>
              <p>Analyze the significance of the "tomorrow, and tomorrow, and tomorrow" soliloquy in terms of themes and character development.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>Exam Tips and Key Takeaways</h3>
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <ul className="text-green-800">
            <li>Always link character analysis to the broader themes</li>
            <li>Support arguments with relevant quotations</li>
            <li>Consider the historical context when analyzing</li>
            <li>Pay attention to dramatic techniques and their effects</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="text-red-800 font-semibold">Common Mistakes to Avoid</h4>
          <ul className="text-red-700">
            <li>Retelling the plot instead of analyzing</li>
            <li>Ignoring the significance of dramatic devices</li>
            <li>Making unsupported claims</li>
            <li>Neglecting to discuss dramatic irony</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ShakespeareDrama;
