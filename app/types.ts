export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LessonContent {
  id: string;
  title: string;
  description?: string;
  content?: string;
  difficulty?: string;
  duration?: number;
  topics?: string[];
  theory: string[];
  examples: Array<{
    problem: string;
    solution: string;
  }>;
  interactive: Array<{
    type: string;
    data: any;
  }>;
  quiz: QuizQuestion[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  lessons: LessonContent[];
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  modules: {
    id: string;
    name: string;
    description: string;
    lessons: Array<{
      id: string;
      title: string;
      description: string;
      content: string;
      difficulty: string;
      duration: number;
      topics: string[];
    }>;
  }[];
}