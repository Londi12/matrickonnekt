import React from 'react';

const CreativeWriting = () => {
  return (
    <div className="prose max-w-none">
      <section className="mb-8">
        <h2>Creative Writing</h2>
        <p className="text-gray-600 mb-4">
          Master the art of creative writing through narrative and descriptive essays, focusing on techniques 
          that will help you excel in your examinations.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-blue-800">Learning Objectives</h3>
          <ul className="text-blue-700">
            <li>Plan and structure engaging narratives</li>
            <li>Create vivid descriptions using sensory details</li>
            <li>Develop authentic characters and dialogue</li>
            <li>Apply literary devices effectively</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Essential Writing Techniques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Narrative Writing</h4>
            <ul>
              <li>Strong opening hooks</li>
              <li>Clear plot development</li>
              <li>Effective characterization</li>
              <li>Engaging dialogue</li>
              <li>Satisfying resolution</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold">Descriptive Writing</h4>
            <ul>
              <li>Sensory details</li>
              <li>Figurative language</li>
              <li>Vivid imagery</li>
              <li>Mood and atmosphere</li>
              <li>Spatial organization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3>Example: Descriptive Writing</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-sm mb-2 text-gray-500">Weak description:</p>
          <p className="mb-4">
            "The beach was nice. There were lots of people there. The water was blue 
            and the sand was hot. I could hear the waves."
          </p>

          <p className="text-sm mb-2 text-gray-500">Strong description:</p>
          <p>
            "Golden sand stretched endlessly before me, dotted with colorful umbrellas 
            that swayed in the salty breeze. Children's laughter mingled with the 
            rhythmic crash of turquoise waves against the shore, while seagulls 
            wheeled overhead, their cries echoing across the sun-drenched beach. 
            The scorching sand shifted beneath my feet, forcing me to dance my way 
            toward the cooling embrace of the ocean."
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="text-yellow-800">Analysis</h4>
          <ul className="text-yellow-900">
            <li><strong>Sensory Details:</strong> Visual, auditory, tactile</li>
            <li><strong>Figurative Language:</strong> Personification of waves, metaphor of dance</li>
            <li><strong>Varied Sentence Structure:</strong> Complex and compound sentences</li>
            <li><strong>Active Word Choice:</strong> "crashed," "wheeled," "shifted"</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3>Practice Exercise</h3>
        <div className="border p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Creative Writing Task</h4>
          <p className="mb-4">Write a narrative essay beginning with this prompt:</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4 italic">
            "The old photograph fell from between the pages of the book, and suddenly, 
            memories came flooding back..."
          </div>
          
          <div className="mt-4">
            <p className="font-medium">Planning Steps:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Brainstorm possible memories/storylines</li>
              <li>Create a brief character sketch</li>
              <li>Plan your narrative arc:
                <ul className="ml-8 list-disc">
                  <li>Initial situation</li>
                  <li>Rising action</li>
                  <li>Climax</li>
                  <li>Resolution</li>
                </ul>
              </li>
              <li>List sensory details to include</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <h3>Key Takeaways</h3>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="text-green-800">
            <li>Strong creative writing engages all the senses</li>
            <li>Planning and structure are essential for effective narratives</li>
            <li>Varied sentence structure and vocabulary enhance writing</li>
            <li>Show, don't tell - use specific details and actions</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg mt-4">
          <h4 className="text-red-800 font-semibold">Common Pitfalls to Avoid</h4>
          <ul className="text-red-700">
            <li>Over-reliance on basic adjectives</li>
            <li>Lack of character development</li>
            <li>Telling instead of showing</li>
            <li>Inconsistent point of view</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CreativeWriting;
