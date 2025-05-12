export interface MockQuestion {
  id: string;
  question: string;
  marks: number;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  solution: string;
  answer: string;
  source: {
    year: number;
    paper: string;
    questionNumber: number;
  };
}

export interface MockPaper {
  id: string;
  subject: string;
  name: string;
  timeLimit: number; // in minutes
  totalMarks: number;
  questions: MockQuestion[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface UserMockExamResult {
  paperId: string;
  completed: Date;
  score: number;
  timeSpent: number;
  answers: {
    questionId: string;
    answer: string;
    isCorrect: boolean;
    marksEarned: number;
  }[];
  badges: string[];
}

export interface MockExamBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: {
    type: 'score' | 'completion' | 'topic_mastery';
    threshold: number;
    topic?: string;
  };
}
