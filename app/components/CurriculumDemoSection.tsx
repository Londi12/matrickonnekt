import React, { useState } from 'react';

// Define all necessary types based on the data structure
interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  difficulty: string;
  duration: number;
  topics: string[];
}

interface Module {
  id: string;
  name: string;
  description: string;
  lessons: Lesson[];
}

interface Subject {
  id: string;
  name: string;
  description: string;
  iconUrl?: string;
  modules: Module[];
}

interface CurriculumDemoSectionProps {
  subjects: Subject[];
}

const CurriculumDemoSection: React.FC<CurriculumDemoSectionProps> = ({ subjects }) => {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [activeModule, setActiveModule] = useState<string | null>(null);
  
  const handleSubjectClick = (subjectId: string) => {
    if (activeSubject === subjectId) {
      setActiveSubject(null);
      setActiveModule(null);
    } else {
      setActiveSubject(subjectId);
      setActiveModule(null);
    }
  };
  
  const handleModuleClick = (moduleId: string) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };  const selectedSubject = subjects.find((s: Subject) => s.id === activeSubject);
  const selectedModule = selectedSubject?.modules.find((m: Module) => m.id === activeModule);
  // Count total lessons across all subjects
  const totalLessons = subjects.reduce((total: number, subject: Subject) => {
    return total + subject.modules.reduce((subtotal: number, module: Module) => {
      return subtotal + module.lessons.length;
    }, 0);
  }, 0);
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg shadow-sm mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-indigo-900">Updated WCED Curriculum Content</h2>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">Last Updated: May 11, 2025</span>
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">New</span>
        </div>
      </div>
      <p className="text-gray-700 mb-3">Our curriculum has been updated based on the latest WCED ePortal Grade 12 resources, featuring {totalLessons}+ lessons across {subjects.length} subjects.</p>
      
      {/* Subject selection tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => handleSubjectClick(subject.id)}
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm transition-colors ${
              activeSubject === subject.id 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-800 shadow-sm hover:bg-gray-50'
            }`}
          >
            <span className="mr-1.5 text-lg">
              {subject.id === 'mathematics' ? '📐' : 
               subject.id === 'physical-sciences' ? '🔬' : 
               subject.id === 'life-sciences' ? '🧬' : 
               subject.id === 'accounting' ? '📊' : 
               subject.id === 'consumer-studies' ? '🛍️' : 
               subject.id === 'tourism' ? '🌍' : 
               subject.id === 'information-technology' ? '💻' : 
               subject.id === 'computer-applications-technology' ? '🖥️' : '📚'}
            </span>
            <span className="font-medium">{subject.name}</span>
          </button>
        ))}
      </div>
      
      {/* Dynamic content based on selection */}
      {!activeSubject ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded p-3 shadow-sm">
            <h3 className="font-medium text-gray-900 mb-2">New Content Features</h3>
            <ul className="text-sm text-gray-600 pl-5 list-disc">
              <li>Detailed lesson descriptions aligned with CAPS</li>
              <li>Difficulty ratings for better exam preparation</li>
              <li>Estimated duration for effective time management</li>
              <li>Key topic areas covered in each lesson</li>
              <li>Interactive practice exercises and quizzes</li>
            </ul>
          </div>
          <div className="bg-white rounded p-3 shadow-sm">
            <h3 className="font-medium text-gray-900 mb-2">Featured Topics</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Calculus', 'Organic Chemistry', 'Evolution', 'Financial Statements',
                'Trigonometry', 'Electrodynamics', 'Genetics', 'Cash Flow'
              ].map((topic) => (
                <span key={topic} className="inline-block px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-medium">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          {/* Selected subject overview */}
          <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-gray-900">{selectedSubject?.name}</h3>
              <span className="text-sm text-gray-500">{selectedSubject?.modules.reduce((total: number, module: Module) => total + module.lessons.length, 0)} lessons</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{selectedSubject?.description}</p>
            
            {/* Module buttons */}
            <div className="flex flex-wrap gap-2">            {selectedSubject?.modules.map((module: Module) => (
                <button
                  key={module.id}
                  onClick={() => handleModuleClick(module.id)}
                  className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                    activeModule === module.id 
                      ? 'bg-indigo-100 text-indigo-700 font-medium' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {module.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Selected module details */}
          {selectedModule && (
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-gray-900 mb-1">{selectedModule.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{selectedModule.description}</p>
              
              <div className="space-y-2">                {selectedModule.lessons.map((lesson: Lesson) => (
                  <div key={lesson.id} className="bg-gray-50 p-3 rounded-md">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium text-sm">{lesson.title}</h5>
                      <div className="flex items-center gap-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">
                          {lesson.difficulty}
                        </span>
                        <span className="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                          {lesson.duration} min
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 my-1">{lesson.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {lesson.topics.map((topic: string) => (
                        <span key={topic} className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-xs rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="text-center mt-3">
        <a 
          href="https://wcedeportal.co.za/grade12-subject-support" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-700 hover:text-blue-800 font-medium"
        >
          View WCED ePortal Resources →
        </a>
      </div>
    </div>
  );
};

export default CurriculumDemoSection;
