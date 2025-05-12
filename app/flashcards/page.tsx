'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FlashCard from '../components/FlashCard';
import { useAuth } from '../context/AuthContext';
import AuthCheck from '../components/AuthCheck';
import { getUserProgress } from '../utils/userProgress';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { addProgressUpdate } from '../utils/progressUpdates';

interface Flashcard {
  id: string;
  subject: string;
  topic: string;
  front: string;
  back: string;
}

export default function FlashcardsPage() {
  const { user } = useAuth();
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  // Sample flashcards data - In a real app, this would come from your backend
  const sampleFlashcards = [
    {
      id: '1',
      subject: 'Mathematics',
      topic: 'Algebra',
      front: 'What is a quadratic equation?',
      back: 'An equation in the form ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0'
    },
    {
      id: '2',
      subject: 'Mathematics',
      topic: 'Algebra',
      front: 'What is the quadratic formula?',
      back: 'x = (-b ± √(b² - 4ac)) / 2a'
    },
    {
      id: '3',
      subject: 'Mathematics',
      topic: 'Calculus',
      front: 'What is a derivative?',
      back: 'The rate of change of a function with respect to a variable'
    }
  ];

  useEffect(() => {
    const loadFlashcards = async () => {
      if (user) {
        // In a real app, fetch flashcards from your backend here
        setFlashcards(sampleFlashcards);
      }
      setLoading(false);
    };

    loadFlashcards();
  }, [user]);

  const subjects = Array.from(new Set(flashcards.map(card => card.subject)));
  const topics = Array.from(
    new Set(
      flashcards
        .filter(card => !selectedSubject || card.subject === selectedSubject)
        .map(card => card.topic)
    )
  );

  const filteredCards = flashcards.filter(
    card =>
      (!selectedSubject || card.subject === selectedSubject) &&
      (!selectedTopic || card.topic === selectedTopic)
  );

  const handleNext = () => {
    setCurrentIndex(current => (current + 1) % filteredCards.length);
    addProgressUpdate({
      type: 'flashcard',
      details: `Reviewed flashcard for ${filteredCards[currentIndex].subject} - ${filteredCards[currentIndex].topic}`
    });
  };

  const handlePrevious = () => {
    setCurrentIndex(current =>
      current === 0 ? filteredCards.length - 1 : current - 1
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <AuthCheck>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Flashcards</h1>
            
            {/* Filters */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  value={selectedSubject}
                  onChange={(e) => {
                    setSelectedSubject(e.target.value);
                    setSelectedTopic('');
                    setCurrentIndex(0);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">All Subjects</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Topic
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => {
                    setSelectedTopic(e.target.value);
                    setCurrentIndex(0);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">All Topics</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredCards.length > 0 ? (
              <>
                {/* Flashcard */}
                <div className="mb-8">
                  <FlashCard {...filteredCards[currentIndex]} />
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={handlePrevious}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <ChevronLeftIcon className="h-5 w-5 mr-2" />
                    Previous
                  </button>
                  
                  <div className="text-sm text-gray-500">
                    Card {currentIndex + 1} of {filteredCards.length}
                  </div>
                  
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Next
                    <ChevronRightIcon className="h-5 w-5 ml-2" />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No flashcards found for the selected filters.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </AuthCheck>
  );
}
