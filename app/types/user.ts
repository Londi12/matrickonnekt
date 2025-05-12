export interface LessonCompletion {
  id: string;
  title: string;
  completedAt: Date;
}

export interface SubjectProgress {
  progress: number;
  completedTopics: string[];
  completedLessons: { [topicId: string]: LessonCompletion[] };
  lastStudied: Date;
}

export interface UserProgress {
  userId: string;
  subjects: { [subjectId: string]: SubjectProgress };
  totalStudyTime: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: Date;
  recentActivity: StudyActivity[];
}

export interface StudyActivity {
  id: string;
  type: 'study';
  subject: string;
  topic: string;
  timestamp: Date | string;
  lessonId?: string;
  lessonTitle?: string;
  score?: number;
  duration?: number; // duration in minutes
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