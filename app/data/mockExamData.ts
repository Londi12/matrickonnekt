import { MockQuestion, MockPaper } from '../types/mockExam';

export const mathP1Questions: MockQuestion[] = [
  {
    id: 'math-p1-q1',
    question: 'Solve for x: (x + 3)(x - 2) = 0',
    marks: 3,
    difficulty: 'easy' as const,
    topic: 'Algebra',
    solution: 'Using the zero product property:\n(x + 3) = 0 or (x - 2) = 0\nx = -3 or x = 2',
    answer: 'x = -3 or x = 2',
    source: { year: 2024, paper: 'DBE Paper 1', questionNumber: 1 }
  },
  {
    id: 'math-p1-q2',
    question: 'Find dy/dx if y = x³ - 3x² + 2x - 1',
    marks: 4,
    difficulty: 'medium' as const,
    topic: 'Calculus',
    solution: 'Using the power rule and sum rule:\ndy/dx = 3x² - 6x + 2',
    answer: '3x² - 6x + 2',
    source: { year: 2024, paper: 'DBE Paper 1', questionNumber: 2 }
  },
  {
    id: 'math-p1-q3',
    question: 'Determine the nature of the turning points of f(x) = x³ - 3x² - 9x + 1',
    marks: 6,
    difficulty: 'hard' as const,
    topic: 'Calculus',
    solution: '1. f\'(x) = 3x² - 6x - 9\n2. Solve f\'(x) = 0\n3. x = 3 ± √18\n4. f\'\'(x) = 6x - 6\n5. At x = 3 + √18: maximum\n   At x = 3 - √18: minimum',
    answer: 'x = 3 + √18: maximum, x = 3 - √18: minimum',
    source: { year: 2024, paper: 'DBE Paper 1', questionNumber: 3 }
  }
];

export const mathP2Questions: MockQuestion[] = [
  {
    id: 'math-p2-q1',
    question: 'Prove that triangles ABC and DEF are similar if ∠A = ∠D, ∠B = ∠E',
    marks: 5,
    difficulty: 'medium' as const,
    topic: 'Geometry',
    solution: '1. Given ∠A = ∠D and ∠B = ∠E\n2. By angle sum in triangle, ∠C = ∠F\n3. Therefore triangles are similar by AAA',
    answer: 'Similar by AAA criterion',
    source: { year: 2024, paper: 'DBE Paper 2', questionNumber: 1 }
  },
  {
    id: 'math-p2-q2',
    question: 'Find the equation of the circle with center (2, -1) and radius 5',
    marks: 4,
    difficulty: 'easy' as const,
    topic: 'Analytical Geometry',
    solution: '(x - 2)² + (y + 1)² = 25',
    answer: '(x - 2)² + (y + 1)² = 25',
    source: { year: 2024, paper: 'DBE Paper 2', questionNumber: 2 }
  }
];

export const physicsQuestions: MockQuestion[] = [
  {
    id: 'physics-q1',
    question: 'A 2kg object is thrown vertically upward with an initial velocity of 20m/s. Calculate the maximum height reached.',
    marks: 6,
    difficulty: 'medium' as const,
    topic: 'Mechanics',
    solution: '1. Using v² = u² + 2as\n2. At max height, v = 0\n3. 0 = 20² + 2(-9.8)h\n4. h = 20.4m',
    answer: '20.4m',
    source: { year: 2024, paper: 'DBE Physical Sciences Paper 1', questionNumber: 1 }
  },
  {
    id: 'physics-q2',
    question: 'Calculate the electric field strength at a point 2m from a charge of +4μC.',
    marks: 5,
    difficulty: 'hard' as const,
    topic: 'Electrostatics',
    solution: '1. E = kQ/r²\n2. k = 9 × 10⁹\n3. Q = 4 × 10⁻⁶ C\n4. r = 2m\n5. E = 9000 N/C',
    answer: '9000 N/C',
    source: { year: 2024, paper: 'DBE Physical Sciences Paper 1', questionNumber: 2 }
  }
];

export const englishQuestions: MockQuestion[] = [
  {
    id: 'eng-q1',
    question: 'Analyze the use of imagery in the following extract from "Life of Pi":\n"The sea was black and warm as blood..."',
    marks: 8,
    difficulty: 'hard' as const,
    topic: 'Literature',
    solution: 'The imagery emphasizes isolation through dark colors and visceral comparisons. The warmth suggests life while blackness implies danger.',
    answer: 'Key points: ocean symbolism, colors represent hope and danger, blood imagery suggests life and death themes',
    source: { year: 2024, paper: 'DBE English HL Paper 2', questionNumber: 1 }
  },
  {
    id: 'eng-q2',
    question: 'Write a critical commentary on the effectiveness of the rhetorical devices used in the given speech.',
    marks: 10,
    difficulty: 'medium' as const,
    topic: 'Language',
    solution: 'Identify and analyze: repetition, metaphors, rhetorical questions, and emotional appeals',
    answer: 'Discussion of rhetorical devices and their impact on audience engagement and persuasion',
    source: { year: 2024, paper: 'DBE English HL Paper 1', questionNumber: 2 }
  }
];

export const mockPapers: MockPaper[] = [
  {
    id: 'math-2024-p1-1',
    subject: 'Mathematics',
    name: 'Mathematics Paper 1 - Practice Set 1',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP1Questions,
    difficulty: 'medium' as const
  },
  {
    id: 'math-2024-p1-2',
    subject: 'Mathematics',
    name: 'Mathematics Paper 1 - Practice Set 2',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP1Questions.map(q => ({...q, id: q.id + '-v2'})),
    difficulty: 'hard' as const
  },
  {
    id: 'math-2024-p1-3',
    subject: 'Mathematics',
    name: 'Mathematics Paper 1 - Practice Set 3',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP1Questions.map(q => ({...q, id: q.id + '-v3'})),
    difficulty: 'easy' as const
  },
  {
    id: 'math-2024-p1-4',
    subject: 'Mathematics',
    name: 'Mathematics Paper 1 - Practice Set 4',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP1Questions.map(q => ({...q, id: q.id + '-v4'})),
    difficulty: 'medium' as const
  },
  {
    id: 'math-2024-p1-5',
    subject: 'Mathematics',
    name: 'Mathematics Paper 1 - Practice Set 5',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP1Questions.map(q => ({...q, id: q.id + '-v5'})),
    difficulty: 'hard' as const
  },
  {
    id: 'math-2024-p1-6',
    subject: 'Mathematics',
    name: 'Mathematics Paper 1 - Practice Set 6',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP1Questions.map(q => ({...q, id: q.id + '-v6'})),
    difficulty: 'medium' as const
  },

  {
    id: 'math-2024-p2-1',
    subject: 'Mathematics',
    name: 'Mathematics Paper 2 - Practice Set 1',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP2Questions,
    difficulty: 'medium' as const
  },
  {
    id: 'math-2024-p2-2',
    subject: 'Mathematics',
    name: 'Mathematics Paper 2 - Practice Set 2',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP2Questions.map(q => ({...q, id: q.id + '-v2'})),
    difficulty: 'hard' as const
  },
  {
    id: 'math-2024-p2-3',
    subject: 'Mathematics',
    name: 'Mathematics Paper 2 - Practice Set 3',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP2Questions.map(q => ({...q, id: q.id + '-v3'})),
    difficulty: 'easy' as const
  },
  {
    id: 'math-2024-p2-4',
    subject: 'Mathematics',
    name: 'Mathematics Paper 2 - Practice Set 4',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP2Questions.map(q => ({...q, id: q.id + '-v4'})),
    difficulty: 'medium' as const
  },
  {
    id: 'math-2024-p2-5',
    subject: 'Mathematics',
    name: 'Mathematics Paper 2 - Practice Set 5',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP2Questions.map(q => ({...q, id: q.id + '-v5'})),
    difficulty: 'hard' as const
  },
  {
    id: 'math-2024-p2-6',
    subject: 'Mathematics',
    name: 'Mathematics Paper 2 - Practice Set 6',
    timeLimit: 180,
    totalMarks: 150,
    questions: mathP2Questions.map(q => ({...q, id: q.id + '-v6'})),
    difficulty: 'medium' as const
  },

  {
    id: 'physics-2024-p1-1',
    subject: 'Physical Sciences',
    name: 'Physical Sciences Paper 1 - Practice Set 1',
    timeLimit: 180,
    totalMarks: 150,
    questions: physicsQuestions,
    difficulty: 'medium' as const
  },
  {
    id: 'physics-2024-p1-2',
    subject: 'Physical Sciences',
    name: 'Physical Sciences Paper 1 - Practice Set 2',
    timeLimit: 180,
    totalMarks: 150,
    questions: physicsQuestions.map(q => ({...q, id: q.id + '-v2'})),
    difficulty: 'hard' as const
  },
  {
    id: 'physics-2024-p1-3',
    subject: 'Physical Sciences',
    name: 'Physical Sciences Paper 1 - Practice Set 3',
    timeLimit: 180,
    totalMarks: 150,
    questions: physicsQuestions.map(q => ({...q, id: q.id + '-v3'})),
    difficulty: 'easy' as const
  },
  {
    id: 'physics-2024-p1-4',
    subject: 'Physical Sciences',
    name: 'Physical Sciences Paper 1 - Practice Set 4',
    timeLimit: 180,
    totalMarks: 150,
    questions: physicsQuestions.map(q => ({...q, id: q.id + '-v4'})),
    difficulty: 'medium' as const
  },
  {
    id: 'physics-2024-p1-5',
    subject: 'Physical Sciences',
    name: 'Physical Sciences Paper 1 - Practice Set 5',
    timeLimit: 180,
    totalMarks: 150,
    questions: physicsQuestions.map(q => ({...q, id: q.id + '-v5'})),
    difficulty: 'hard' as const
  },
  {
    id: 'physics-2024-p1-6',
    subject: 'Physical Sciences',
    name: 'Physical Sciences Paper 1 - Practice Set 6',
    timeLimit: 180,
    totalMarks: 150,
    questions: physicsQuestions.map(q => ({...q, id: q.id + '-v6'})),
    difficulty: 'medium' as const
  },

  {
    id: 'eng-2024-p1-1',
    subject: 'English Home Language',
    name: 'English HL Paper 1 - Practice Set 1',
    timeLimit: 120,
    totalMarks: 100,
    questions: englishQuestions,
    difficulty: 'medium' as const
  },
  {
    id: 'eng-2024-p1-2',
    subject: 'English Home Language',
    name: 'English HL Paper 1 - Practice Set 2',
    timeLimit: 120,
    totalMarks: 100,
    questions: englishQuestions.map(q => ({...q, id: q.id + '-v2'})),
    difficulty: 'hard' as const
  },
  {
    id: 'eng-2024-p1-3',
    subject: 'English Home Language',
    name: 'English HL Paper 1 - Practice Set 3',
    timeLimit: 120,
    totalMarks: 100,
    questions: englishQuestions.map(q => ({...q, id: q.id + '-v3'})),
    difficulty: 'easy' as const
  },
  {
    id: 'eng-2024-p1-4',
    subject: 'English Home Language',
    name: 'English HL Paper 1 - Practice Set 4',
    timeLimit: 120,
    totalMarks: 100,
    questions: englishQuestions.map(q => ({...q, id: q.id + '-v4'})),
    difficulty: 'medium' as const
  },
  {
    id: 'eng-2024-p1-5',
    subject: 'English Home Language',
    name: 'English HL Paper 1 - Practice Set 5',
    timeLimit: 120,
    totalMarks: 100,
    questions: englishQuestions.map(q => ({...q, id: q.id + '-v5'})),
    difficulty: 'hard' as const
  },
  {
    id: 'eng-2024-p1-6',
    subject: 'English Home Language',
    name: 'English HL Paper 1 - Practice Set 6',
    timeLimit: 120,
    totalMarks: 100,
    questions: englishQuestions.map(q => ({...q, id: q.id + '-v6'})),
    difficulty: 'medium' as const
  }
];
