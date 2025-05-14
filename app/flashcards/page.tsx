'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FlashCard from '../components/FlashCard';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import AuthCheck from '../components/AuthCheck';
import { getUserProgress } from '../utils/userProgress';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  AcademicCapIcon,
  BookmarkIcon,
  ArrowPathIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { addProgressUpdate } from '../utils/progressUpdates';

interface Flashcard {
  id: string;
  subject: string;
  topic: string;
  front: string;
  back: string;
}

// Translations for the flashcards page
const translations = {
  en: {
    title: 'Flashcards',
    subtitle: 'Review and test your knowledge with these interactive flashcards',
    subject: 'Subject',
    topic: 'Topic',
    allSubjects: 'All Subjects',
    allTopics: 'All Topics',
    previous: 'Previous',
    next: 'Next',
    cardCount: 'Card',
    of: 'of',
    noCards: 'No flashcards found for the selected filters.',
    mastered: 'Mastered',
    progress: 'Progress',
    shuffle: 'Shuffle Cards',
    bookmark: 'Bookmark'
  },
  zu: {
    title: 'Amakhadi Okufunda',
    subtitle: 'Buyekeza futhi uhlole ulwazi lwakho ngalamakhadi okufunda',
    subject: 'Isifundo',
    topic: 'Isihloko',
    allSubjects: 'Zonke Izifundo',
    allTopics: 'Zonke Izihloko',
    previous: 'Elidlule',
    next: 'Elilandelayo',
    cardCount: 'Ikhadi',
    of: 'kwangu',
    noCards: 'Awekho amakhadi okufunda atholakele.',
    mastered: 'Uphumelele',
    progress: 'Inqubekela phambili',
    shuffle: 'Shova Amakhadi',
    bookmark: 'Phawula'
  },
  af: {
    title: 'Flitskaarte',
    subtitle: 'Hersien en toets jou kennis met hierdie interaktiewe flitskaarte',
    subject: 'Vak',
    topic: 'Onderwerp',
    allSubjects: 'Alle Vakke',
    allTopics: 'Alle Onderwerpe',
    previous: 'Vorige',
    next: 'Volgende',
    cardCount: 'Kaart',
    of: 'van',
    noCards: 'Geen flitskaarte gevind vir die geselekteerde filters nie.',
    mastered: 'Bemeester',
    progress: 'Vordering',
    shuffle: 'Skommel Kaarte',
    bookmark: 'Boekmerk'
  }
};

export default function FlashcardsPage() {
  const { user } = useAuth();
  const { language } = useLanguage();
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [masteredCards, setMasteredCards] = useState<Set<string>>(new Set());
  const [bookmarkedCards, setBookmarkedCards] = useState<Set<string>>(new Set());
  
  // Get the appropriate translations
  const t = translations[language];

  // Comprehensive flashcards data aligned with South African Grade 12 curriculum
  // Based on WCED ePortal (https://wcedeportal.co.za/) and Department of Education (https://www.education.gov.za/)
  const sampleFlashcards = [
    // Mathematics - Algebra
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
      topic: 'Algebra', 
      front: 'Define a cubic function.',
      back: 'A function of the form f(x) = ax³ + bx² + cx + d, where a ≠ 0'
    },
    {
      id: '4',
      subject: 'Mathematics',
      topic: 'Algebra',
      front: 'What are the nature of roots of a quadratic equation?',
      back: 'Determined by the discriminant (b² - 4ac):\n- If b² - 4ac > 0: Two distinct real roots\n- If b² - 4ac = 0: Equal real roots (one repeated root)\n- If b² - 4ac < 0: Two complex conjugate roots'
    },
    {
      id: '5',
      subject: 'Mathematics',
      topic: 'Algebra',
      front: 'What is the remainder theorem?',
      back: 'If a polynomial P(x) is divided by (x - a), then the remainder equals P(a)'
    },
    // Mathematics - Calculus
    {
      id: '6',
      subject: 'Mathematics',
      topic: 'Calculus',
      front: 'What is a derivative?',
      back: 'The rate of change of a function with respect to a variable'
    },
    {
      id: '7',
      subject: 'Mathematics',
      topic: 'Calculus',
      front: 'State the power rule for differentiation.',
      back: 'If f(x) = xⁿ, then f\'(x) = n·xⁿ⁻¹'
    },
    {
      id: '8',
      subject: 'Mathematics',
      topic: 'Calculus',
      front: 'What does the second derivative tell us about a function?',
      back: 'The second derivative indicates the concavity of the function:\n- If f\'\'(x) > 0: Concave upward (∪)\n- If f\'\'(x) < 0: Concave downward (∩)\n- If f\'\'(x) = 0: Possible point of inflection'
    },
    {
      id: '9',
      subject: 'Mathematics',
      topic: 'Calculus',
      front: 'What is the chain rule?',
      back: 'If y = f(g(x)), then dy/dx = (dy/du)(du/dx) where u = g(x)'
    },
    {
      id: '10',
      subject: 'Mathematics',
      topic: 'Calculus',
      front: 'How do you find the equation of a tangent line to a curve at a specific point?',
      back: '1. Find the derivative of the function\n2. Evaluate the derivative at the given point to find the slope\n3. Use the point-slope form: y - y₁ = m(x - x₁)'
    },
    // Mathematics - Trigonometry
    {
      id: '11',
      subject: 'Mathematics',
      topic: 'Trigonometry',
      front: 'What is the compound angle formula for sin(A + B)?',
      back: 'sin(A + B) = sin A cos B + cos A sin B'
    },
    {
      id: '12',
      subject: 'Mathematics',
      topic: 'Trigonometry',
      front: 'State the double angle formula for cos(2θ).',
      back: 'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ'
    },
    {
      id: '13',
      subject: 'Mathematics',
      topic: 'Trigonometry',
      front: 'What is the period of the sine and cosine functions?',
      back: '2π radians or 360°'
    },
    // Mathematics - Statistics
    {
      id: '14',
      subject: 'Mathematics',
      topic: 'Statistics',
      front: 'What does the correlation coefficient (r) measure?',
      back: 'The strength and direction of the linear relationship between two variables. Its value ranges from -1 (perfect negative correlation) to +1 (perfect positive correlation), with 0 indicating no correlation.'
    },
    {
      id: '15',
      subject: 'Mathematics',
      topic: 'Statistics',
      front: 'Define the standard deviation.',
      back: 'A measure of the amount of variation or dispersion in a set of values. It is calculated as the square root of the variance.'
    },
    // Physical Sciences - Mechanics
    {
      id: '16',
      subject: 'Physical Sciences',
      topic: 'Mechanics',
      front: 'State Newton\'s Second Law of Motion.',
      back: 'The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. F = ma'
    },
    {
      id: '17',
      subject: 'Physical Sciences',
      topic: 'Mechanics',
      front: 'What is the difference between scalar and vector quantities?',
      back: 'Scalar quantities have magnitude only (e.g., mass, time, energy).\nVector quantities have both magnitude and direction (e.g., force, velocity, displacement).'
    },
    {
      id: '18',
      subject: 'Physical Sciences',
      topic: 'Mechanics',
      front: 'Define the principle of conservation of mechanical energy.',
      back: 'In an isolated system where only conservative forces do work, the total mechanical energy (KE + PE) remains constant.'
    },
    // Physical Sciences - Electricity & Magnetism
    {
      id: '19',
      subject: 'Physical Sciences',
      topic: 'Electricity & Magnetism',
      front: 'State Ohm\'s Law.',
      back: 'The current through a conductor is directly proportional to the voltage across it, provided the temperature and other physical conditions remain constant. V = IR'
    },
    {
      id: '20',
      subject: 'Physical Sciences',
      topic: 'Electricity & Magnetism',
      front: 'What is Faraday\'s Law of Electromagnetic Induction?',
      back: 'The induced electromotive force (EMF) in a closed circuit is equal to the negative of the rate of change of magnetic flux through the circuit.'
    },
    // Physical Sciences - Rates & Equilibrium
    {
      id: '21',
      subject: 'Physical Sciences',
      topic: 'Rates & Equilibrium',
      front: 'What are the four main factors affecting reaction rates?',
      back: 'Temperature\nConcentration\nSurface area\nCatalysts'
    },
    {
      id: '22',
      subject: 'Physical Sciences',
      topic: 'Rates & Equilibrium',
      front: 'Define dynamic equilibrium.',
      back: 'A state where:\n- Forward and reverse reactions occur simultaneously\n- Rates of forward and reverse reactions are equal\n- Concentrations of reactants and products remain constant'
    },
    {
      id: '23',
      subject: 'Physical Sciences',
      topic: 'Rates & Equilibrium',
      front: 'How does increasing temperature affect an endothermic reaction at equilibrium?',
      back: 'The equilibrium shifts to favor the endothermic direction, increasing product formation'
    },
    {
      id: '24',
      subject: 'Physical Sciences',
      topic: 'Rates & Equilibrium',
      front: 'What is Le Chatelier\'s principle?',
      back: 'When a system at equilibrium is disturbed, it shifts to counteract the change'
    },
    {
      id: '25',
      subject: 'Physical Sciences',
      topic: 'Rates & Equilibrium',
      front: 'How does a catalyst affect equilibrium position?',
      back: 'A catalyst does not affect the equilibrium position. It only speeds up both forward and reverse reactions equally'
    },
    // Life Sciences - Genetics
    {
      id: '26',
      subject: 'Life Sciences',
      topic: 'Genetics',
      front: 'What is a gene?',
      back: 'A segment of DNA that codes for a functional product (usually a protein) and is the basic unit of heredity'
    },
    {
      id: '27',
      subject: 'Life Sciences',
      topic: 'Genetics',
      front: 'Define allele.',
      back: 'Alternative forms of a gene that can occur at the same locus on homologous chromosomes'
    },
    {
      id: '28',
      subject: 'Life Sciences',
      topic: 'Genetics',
      front: 'What is the difference between genotype and phenotype?',
      back: 'Genotype is the genetic makeup of an organism (the alleles present), while phenotype is the observable physical characteristics resulting from the genotype and environmental influences'
    },
    {
      id: '29',
      subject: 'Life Sciences',
      topic: 'Genetics',
      front: 'What is crossing over?',
      back: 'The exchange of genetic material between homologous chromosomes during meiosis, resulting in genetic recombination'
    },
    {
      id: '30',
      subject: 'Life Sciences',
      topic: 'Genetics',
      front: 'Explain Mendel\'s Law of Segregation.',
      back: 'The two alleles for each trait separate (segregate) during gamete formation, and each gamete receives only one allele for each gene'
    },
    // Life Sciences - Evolution
    {
      id: '31',
      subject: 'Life Sciences',
      topic: 'Evolution',
      front: 'What evidence supports the theory of evolution?',
      back: 'Fossil record\nComparative anatomy (homologous structures)\nBiogeography\nGenetic evidence (DNA similarities)\nEmbryonic development\nDirectly observed examples of natural selection'
    },
    {
      id: '32',
      subject: 'Life Sciences',
      topic: 'Evolution',
      front: 'Define natural selection.',
      back: 'The process whereby organisms better adapted to their environment tend to survive and produce more offspring'
    },
    {
      id: '33',
      subject: 'Life Sciences',
      topic: 'Evolution',
      front: 'What is speciation?',
      back: 'The formation of new and distinct species in the course of evolution'
    },
    // Life Sciences - Human Physiology
    {
      id: '34',
      subject: 'Life Sciences',
      topic: 'Human Physiology',
      front: 'Describe the three main functions of the human nervous system.',
      back: '1. Sensory function - receiving information from internal and external environments\n2. Integrative function - processing and interpreting sensory information\n3. Motor function - responding to stimuli through muscular contractions or glandular secretions'
    },
    {
      id: '35',
      subject: 'Life Sciences',
      topic: 'Human Physiology',
      front: 'What are the functions of the human endocrine system?',
      back: '1. Maintains homeostasis\n2. Regulates growth and development\n3. Controls metabolism\n4. Regulates reproduction\n5. Responds to stress and injury'
    },
    // Accounting - Financial Statements
    {
      id: '36',
      subject: 'Accounting',
      topic: 'Financial Statements',
      front: 'What are the main components of annual financial statements?',
      back: '1. Income Statement\n2. Balance Sheet\n3. Cash Flow Statement\n4. Notes to the financial statements\n5. Statement of Changes in Equity'
    },
    {
      id: '37',
      subject: 'Accounting',
      topic: 'Financial Statements',
      front: 'What is the accounting equation?',
      back: 'Assets = Owner\'s Equity + Liabilities'
    },
    {
      id: '38',
      subject: 'Accounting',
      topic: 'Financial Statements',
      front: 'Define a balance sheet.',
      back: 'A financial statement that reports a company\'s assets, liabilities, and owner\'s equity at a specific point in time. It provides a snapshot of what a business owns and owes, as well as the amount invested by shareholders.'
    },
    // Accounting - Cash Flow
    {
      id: '39',
      subject: 'Accounting',
      topic: 'Cash Flow',
      front: 'What are the three main categories of activities in a cash flow statement?',
      back: '1. Operating activities\n2. Investing activities\n3. Financing activities'
    },
    {
      id: '40',
      subject: 'Accounting',
      topic: 'Cash Flow',
      front: 'Why is cash flow analysis important for a business?',
      back: '1. Helps assess liquidity\n2. Indicates ability to pay debts\n3. Shows sustainability of business operations\n4. Helps in planning future investments\n5. Important for budgeting and forecasting'
    },
    // Accounting - Inventory Valuation
    {
      id: '41',
      subject: 'Accounting',
      topic: 'Inventory Valuation',
      front: 'What is the FIFO method?',
      back: 'First-In-First-Out: Assumes that the items purchased or produced first are sold first. The remaining inventory consists of the most recently purchased or produced items.'
    },
    {
      id: '42',
      subject: 'Accounting',
      topic: 'Inventory Valuation',
      front: 'What is the weighted average method of inventory valuation?',
      back: 'Calculates the average cost of all similar items in inventory, regardless of purchase date. The average is computed by dividing the total cost of goods available for sale by the total units available for sale.'
    },
    // English - Literary Devices
    {
      id: '43',
      subject: 'English',
      topic: 'Literary Devices',
      front: 'Define metaphor and provide an example.',
      back: 'A figure of speech that makes a direct comparison between two unrelated things without using "like" or "as."\nExample: "Her eyes were diamonds, sparkling in the light."'
    },
    {
      id: '44',
      subject: 'English',
      topic: 'Literary Devices',
      front: 'What is personification?',
      back: 'Giving human qualities or characteristics to non-human objects, animals, or natural phenomena.\nExample: "The wind whispered through the trees."'
    },
    {
      id: '45',
      subject: 'English',
      topic: 'Literary Devices',
      front: 'What is dramatic irony?',
      back: 'When the audience/reader knows something that the characters in the story do not know.'
    },
    // English - Essay Writing
    {
      id: '46',
      subject: 'English',
      topic: 'Essay Writing',
      front: 'What are the main components of an argumentative essay?',
      back: '1. Introduction with a clear thesis statement\n2. Body paragraphs presenting evidence and arguments\n3. Counterarguments and rebuttals\n4. Conclusion that reinforces the thesis'
    },
    {
      id: '47',
      subject: 'English',
      topic: 'Essay Writing',
      front: 'What is a thesis statement?',
      back: 'A concise statement that summarizes the main point or claim of an essay, typically presented in the introduction'
    },
    // English - Visual Literacy
    {
      id: '48',
      subject: 'English',
      topic: 'Visual Literacy',
      front: 'What are the key elements to analyze in an advertisement?',
      back: '1. Target audience\n2. Visual imagery and symbolism\n3. Text and language use\n4. Layout and design\n5. Color psychology\n6. Persuasive techniques'
    },
    {
      id: '49',
      subject: 'English',
      topic: 'Visual Literacy',
      front: 'What is the difference between a cartoon and a caricature?',
      back: 'A cartoon is a simple drawing representing a situation, often humorous or satirical.\nA caricature is a picture or description that deliberately exaggerates a person\'s distinctive features for comic effect.'
    },
    {
      id: '50',
      subject: 'English',
      topic: 'Visual Literacy',
      front: 'Why is visual literacy important?',
      back: '1. Helps critically analyze media messages\n2. Develops ability to interpret visual information\n3. Enhances understanding of how images create meaning\n4. Builds awareness of manipulation techniques used in advertising and propaganda\n5. Essential skill in today\'s digital and media-rich environment'
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
  
  const toggleMastered = (cardId: string) => {
    const newMastered = new Set(masteredCards);
    if (newMastered.has(cardId)) {
      newMastered.delete(cardId);
    } else {
      newMastered.add(cardId);
      addProgressUpdate({
        type: 'flashcard',
        details: `Mastered a flashcard on ${filteredCards.find(c => c.id === cardId)?.topic}`
      });
    }
    setMasteredCards(newMastered);
  };
  
  const toggleBookmark = (cardId: string) => {
    const newBookmarked = new Set(bookmarkedCards);
    if (newBookmarked.has(cardId)) {
      newBookmarked.delete(cardId);
    } else {
      newBookmarked.add(cardId);
    }
    setBookmarkedCards(newBookmarked);
  };
  
  const shuffleCards = () => {
    // Create a shuffled version of the filtered cards
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
    setFlashcards(prevCards => {
      // Replace the filtered cards with shuffled ones while keeping the rest
      const nonFiltered = prevCards.filter(
        card => 
          (selectedSubject && card.subject !== selectedSubject) || 
          (selectedTopic && card.topic !== selectedTopic)
      );
      return [...nonFiltered, ...shuffled];
    });
    setCurrentIndex(0);
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
          {/* Header section with title and subtitle */}
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <AcademicCapIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
            </div>
            <p className="text-gray-600">{t.subtitle}</p>
          </div>
          
          {/* Filters */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.subject}
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
                  <option value="">{t.allSubjects}</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.topic}
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => {
                    setSelectedTopic(e.target.value);
                    setCurrentIndex(0);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">{t.allTopics}</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredCards.length > 0 ? (
            <div className="mb-8">
              {/* Action Buttons */}
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={shuffleCards}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <ArrowPathIcon className="h-4 w-4 mr-2" />
                  {t.shuffle}
                </button>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleBookmark(filteredCards[currentIndex].id)}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md
                      ${bookmarkedCards.has(filteredCards[currentIndex].id) 
                        ? 'bg-blue-50 text-blue-700 border border-blue-300' 
                        : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'}`}
                  >
                    <BookmarkIcon className="h-4 w-4 mr-2" />
                    {t.bookmark}
                  </button>
                  
                  <button
                    onClick={() => toggleMastered(filteredCards[currentIndex].id)}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md
                      ${masteredCards.has(filteredCards[currentIndex].id) 
                        ? 'bg-green-50 text-green-700 border border-green-300' 
                        : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'}`}
                  >
                    <CheckCircleIcon className="h-4 w-4 mr-2" />
                    {t.mastered}
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(currentIndex + 1) / filteredCards.length * 100}%` }}
                ></div>
              </div>

              {/* Flashcard */}
              <div className="mb-8">
                <FlashCard {...filteredCards[currentIndex]} />
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={handlePrevious}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <ChevronLeftIcon className="h-5 w-5 mr-2" />
                  {t.previous}
                </button>
                
                <div className="text-sm text-gray-500">
                  {t.cardCount} {currentIndex + 1} {t.of} {filteredCards.length}
                </div>
                
                <button
                  onClick={handleNext}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  {t.next}
                  <ChevronRightIcon className="h-5 w-5 ml-2" />
                </button>
              </div>

              {/* Stats */}
              <div className="mt-8 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.progress}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>
                    {t.mastered}: {Array.from(masteredCards).filter(id => 
                      filteredCards.some(card => card.id === id)
                    ).length} / {filteredCards.length}
                  </span>
                  <span>
                    {t.bookmark}: {Array.from(bookmarkedCards).filter(id => 
                      filteredCards.some(card => card.id === id)
                    ).length}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">{t.noCards}</p>
            </div>
          )}
        </main>
      </div>
    </AuthCheck>
  );
}
