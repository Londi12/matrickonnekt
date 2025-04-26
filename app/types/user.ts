export interface UserProgress {
  userId: string;
  subjects: {
    [subjectId: string]: {
      progress: number;
      completedTopics: string[];
      lastStudied: Date;
    };
  };
  totalStudyTime: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: Date;
  recentActivity: StudyActivity[];
}

export interface StudyActivity {
  id: string;
  type: 'study' | 'practice' | 'resource';
  subject: string;
  topic: string;
  timestamp: Date;
  duration?: number;
  score?: number;
}

export interface UserStats {
  totalStudyTime: number;
  currentStreak: number;
  longestStreak: number;
  subjectsProgress: {
    [subjectId: string]: number;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  earnedDate: string;
  icon: string;
}

export interface Activity {
  id: string;
  type: 'quiz' | 'chapter' | 'achievement';
  title: string;
  details: string;
  timestamp: string;
} 