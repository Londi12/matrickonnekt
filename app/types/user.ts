export interface UserProgress {
  userId: string;
  subjects: {
    [subjectId: string]: {
      progress: number;
      completedTopics: string[];
      completedLessons: {
        [topicId: string]: number[];
      };
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
  lessonId?: number;
  timestamp: Date | string;
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
  icon: string;
  unlockedAt: Date;
}

export interface Activity {
  id: string;
  type: 'quiz' | 'chapter' | 'achievement';
  title: string;
  details: string;
  timestamp: string;
} 