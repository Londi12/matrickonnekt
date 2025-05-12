export interface Example {
  problem: string;
  solution: string;
}

export interface Interactive {
  type: string;
  data: any;
}

export interface Lesson {
  id: string;
  title: string;
  theory?: string[];
  examples?: Example[];
  interactive?: Interactive[];
  quiz?: any[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  lessons: Lesson[];
}
