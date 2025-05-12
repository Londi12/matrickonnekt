// filepath: c:\Users\Londi\Desktop\projects\matrickonnekt\app\utils\userProgress.ts
import { UserProgress, StudyActivity, LessonCompletion, SubjectProgress } from '../types/progress';
import { generateId } from './helpers';
import { 
  getUserProgress as getProgress, 
  saveUserProgress, 
  updateUserProgress, 
  createValidActivity as createValidActivityService, 
  addActivity as addUserActivity
} from '../services/userDataService';

interface Achievement {
  id: string;
  title: string;
  description: string;
  unlockedAt: Date;
  icon: string;
}

// Migrate legacy progress format to new format
function migrateProgressFormat(progress: any): UserProgress {
  if (!progress) return initializeProgress();

  const subjects = Object.entries(progress.subjects || {}).reduce((acc, [subjectId, subject]: [string, any]) => {
    const completedLessons = Object.entries(subject.completedLessons || {}).reduce((lessonsAcc, [topicId, lessons]: [string, any]) => {
      const migratedLessons = Array.isArray(lessons) 
        ? lessons.map((lesson: any) => {
            if (typeof lesson === 'number') {
              return {
                id: lesson.toString(),
                title: `Lesson ${lesson}`,
                completedAt: subject.lastStudied || new Date()
              };
            }
            return lesson;
          })
        : [];
      return { ...lessonsAcc, [topicId]: migratedLessons };
    }, {});

    return {
      ...acc,
      [subjectId]: {
        progress: subject.progress || 0,
        completedTopics: subject.completedTopics || [],
        completedLessons,
        lastStudied: subject.lastStudied || new Date()
      }
    };
  }, {});

  return {
    userId: progress.userId,
    subjects,
    totalStudyTime: progress.totalStudyTime || 0,
    currentStreak: progress.currentStreak || 0,
    longestStreak: progress.longestStreak || 0,
    lastStudyDate: progress.lastStudyDate || new Date(),
    recentActivity: (progress.recentActivity || []).map((activity: any) => ({
      ...activity,
      lessonId: activity.lessonId?.toString(),
      type: 'study'
    }))
  };
}

// Initialize an empty progress object
function initializeProgress(): UserProgress {
  return {
    userId: '',
    subjects: {},
    totalStudyTime: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastStudyDate: new Date(),
    recentActivity: []
  };
}

// Initialize user progress when they first sign up
export async function initializeUserProgress(userId: string) {
  const { initializeUserProgress } = await import('../services/userDataService');
  return await initializeUserProgress(userId);
}

// Helper function to create a valid activity object
function createValidActivity(activity: Partial<StudyActivity> = {}): StudyActivity {
  const now = new Date().toISOString();
  return {
    id: activity.id || generateId(),
    type: 'study',
    subject: activity.subject || 'unknown',
    topic: activity.topic || 'unknown',
    timestamp: activity.timestamp || now,
    lessonId: activity.lessonId?.toString(),
    lessonTitle: activity.lessonTitle
  };
}

// Get user progress
export async function getUserProgress(userId: string): Promise<UserProgress | null> {
  const progress = await getProgress(userId);
  return progress ? migrateProgressFormat(progress) : null;
}

// Mark lesson as completed
export async function markLessonCompleted(
  userId: string,
  subjectId: string,
  topicId: string,
  lessonId: string | number,
  lessonTitle?: string
) {
  // Get and migrate progress if needed
  let progress = await getUserProgress(userId);
  if (!progress) return;

  const subjects = progress.subjects || {};
  
  const subject = subjects[subjectId] || {
    progress: 0,
    completedTopics: [],
    completedLessons: {},
    lastStudied: new Date()
  };

  const lessonCompletion: LessonCompletion = {
    id: lessonId.toString(),
    title: lessonTitle || `Lesson ${lessonId}`,
    completedAt: new Date()
  };

  // Update completed lessons
  const topicLessons = subject.completedLessons[topicId] || [];
  if (!topicLessons.some(lesson => lesson.id === lessonCompletion.id)) {
    topicLessons.push(lessonCompletion);
  }

  // Calculate progress
  const topicProgress = calculateTopicProgress(topicLessons);
  
  // Update subject
  const updatedSubject: SubjectProgress = {
    ...subject,
    completedLessons: {
      ...subject.completedLessons,
      [topicId]: topicLessons
    },
    progress: calculateSubjectProgress(subject, topicId, topicProgress),
    lastStudied: new Date()
  };

  // Create activity
  const activityData = {
    type: 'study' as const,
    subject: subjectId,
    topic: topicId,
    lessonId: lessonCompletion.id,
    lessonTitle: lessonCompletion.title
  };

  // Update progress object
  progress.subjects = {
    ...subjects,
    [subjectId]: updatedSubject
  };
  
  const activity = createValidActivity(activityData);
  progress.recentActivity = [activity, ...progress.recentActivity].slice(0, 10);

  // Save progress
  await saveUserProgress(userId, progress);
  await addUserActivity(userId, activity);
  
  return lessonCompletion;
}

// Calculate topic progress based on completed lessons
function calculateTopicProgress(completedLessons: LessonCompletion[], totalLessonsInTopic: number = 5): number {
  if (!Array.isArray(completedLessons)) return 0;
  return Math.min((completedLessons.length / totalLessonsInTopic) * 100, 100);
}

// Calculate subject progress based on topic progress
function calculateSubjectProgress(subject: SubjectProgress, updatedTopicId: string, updatedTopicProgress: number): number {
  const topics = Object.keys(subject.completedLessons);
  const totalTopics = topics.length;
  
  if (totalTopics === 0) return 0;
  
  // Get progress for each topic
  const topicProgressValues = topics.map(topicId => {
    if (topicId === updatedTopicId) {
      return updatedTopicProgress;
    }
    return calculateTopicProgress(subject.completedLessons[topicId] || []);
  });
  
  // Calculate average progress across all topics
  const totalProgress = topicProgressValues.reduce((sum, progress) => sum + progress, 0);
  return Math.min(totalProgress / totalTopics, 100);
}

// Update study time
export async function updateStudyTime(userId: string, minutesStudied: number) {
  const progress = await getUserProgress(userId);

  if (progress) {
    progress.totalStudyTime = progress.totalStudyTime + minutesStudied;
    await saveUserProgress(userId, progress);
  }
}

// Mark topic as completed
export async function markTopicCompleted(userId: string, subjectId: string, topicId: string) {
  const progress = await getUserProgress(userId);

  if (progress) {
    const subject = progress.subjects[subjectId] || {
      progress: 0,
      completedTopics: [],
      lastStudied: new Date(),
      completedLessons: {}
    };

    if (!subject.completedTopics.includes(topicId)) {
      const updatedSubjects = {
        ...progress.subjects,
        [subjectId]: {
          ...subject,
          completedTopics: [...subject.completedTopics, topicId],
          lastStudied: new Date()
        }
      };

      progress.subjects = updatedSubjects;
      await saveUserProgress(userId, progress);

      // Add activity
      const activity: StudyActivity = {
        id: generateId(),
        type: 'study',
        subject: subjectId,
        topic: topicId,
        timestamp: new Date()
      };

      await addActivity(userId, activity);
    }
  }
}

// Update streak
export async function updateStreak(userId: string) {
  const progress = await getUserProgress(userId);

  if (progress) {
    const lastStudyDate = new Date(progress.lastStudyDate);
    const today = new Date();
    const diffDays = Math.floor((today.getTime() - lastStudyDate.getTime()) / (1000 * 60 * 60 * 24));

    let currentStreak = progress.currentStreak;
    if (diffDays === 1) {
      // Consecutive day
      currentStreak += 1;
      const longestStreak = Math.max(currentStreak, progress.longestStreak);
      
      progress.currentStreak = currentStreak;
      progress.longestStreak = longestStreak;
      progress.lastStudyDate = today;
      
      await saveUserProgress(userId, progress);
    } else if (diffDays > 1) {
      // Streak broken
      progress.currentStreak = 1;
      progress.lastStudyDate = today;
      
      await saveUserProgress(userId, progress);
    }

    // Check for streak achievements
    if (currentStreak === 7) {
      await addAchievement(userId, {
        id: 'week-streak',
        title: 'Week Warrior',
        description: 'Studied for 7 days in a row!',
        unlockedAt: new Date(),
        icon: '🔥'
      });
    }
  }
}

// Add achievement
export async function addAchievement(userId: string, achievement: Achievement) {
  const progress = await getUserProgress(userId);

  if (progress) {
    const hasAchievement = progress.recentActivity.some(
      activity => activity.topic === achievement.title
    );
    
    if (!hasAchievement) {
      const activity: StudyActivity = {
        id: generateId(),
        type: 'study',
        subject: 'achievements',
        topic: achievement.title,
        timestamp: new Date()
      };

      await addActivity(userId, activity);
    }
  }
}

// Add activity
export async function addActivity(userId: string, activity: StudyActivity) {
  await addUserActivity(userId, activity);
}

// Record quiz completion
export async function recordQuizCompletion(userId: string, subject: string, score: number) {
  const activity: StudyActivity = {
    id: generateId(),
    type: 'study',
    subject,
    topic: 'quiz',
    timestamp: new Date(),
    score
  };

  await addActivity(userId, activity);

  // Check for achievements
  if (score >= 90) {
    await addAchievement(userId, {
      id: 'high-scorer',
      title: 'High Scorer',
      description: 'Scored 90% or higher on a quiz!',
      unlockedAt: new Date(),
      icon: '🎯'
    });
  }
}
