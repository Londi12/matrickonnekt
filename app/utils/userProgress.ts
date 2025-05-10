import { db } from '../firebase/config';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { UserProgress, Activity, StudyActivity } from '../types/user';

interface Achievement {
  id: string;
  title: string;
  description: string;
  unlockedAt: Date;
  icon: string;
}

// Initialize user progress when they first sign up
export async function initializeUserProgress(userId: string) {
  const userProgressRef = doc(db, 'userProgress', userId);
  
  const initialProgress: UserProgress = {
    userId,
    subjects: {},
    totalStudyTime: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastStudyDate: new Date(),
    recentActivity: [] // Initialize as empty array
  };

  await setDoc(userProgressRef, initialProgress);
  return initialProgress;
}

// Helper function to create a valid activity object
function createValidActivity(activity: any = {}): StudyActivity {
  const now = new Date().toISOString();
  return {
    id: activity.id || Date.now().toString(),
    type: activity.type || 'study',
    subject: activity.subject || 'unknown',
    topic: activity.topic || 'unknown',
    timestamp: activity.timestamp || now
  };
}

// Get user progress
export async function getUserProgress(userId: string): Promise<UserProgress | null> {
  const userProgressRef = doc(db, 'userProgress', userId);
  const docSnap = await getDoc(userProgressRef);
  
  if (docSnap.exists()) {
    const data = docSnap.data();
    
    // Ensure recentActivity is a valid array
    if (!Array.isArray(data.recentActivity)) {
      data.recentActivity = [];
    }

    // Clean and validate each activity
    data.recentActivity = data.recentActivity
      .filter(activity => activity && typeof activity === 'object')
      .map(activity => createValidActivity(activity));

    return data as UserProgress;
  }
  return null;
}

// Mark lesson as completed
export async function markLessonCompleted(
  userId: string,
  subjectId: string,
  topicId: string,
  lessonId: number
) {
  const userProgressRef = doc(db, 'userProgress', userId);
  const progress = await getUserProgress(userId);

  if (!progress) return;

  // Initialize subjects if it doesn't exist
  const subjects = progress.subjects || {};
  
  const subject = subjects[subjectId] || {
    progress: 0,
    completedTopics: [],
    completedLessons: {},
    lastStudied: new Date().toISOString()
  };

  // Update completed lessons
  const topicLessons = subject.completedLessons[topicId] || [];
  if (!topicLessons.includes(lessonId)) {
    topicLessons.push(lessonId);
  }

  // Calculate topic progress
  const topicProgress = calculateTopicProgress(topicLessons);
  
  // Update subject progress
  const updatedSubjects = {
    ...subjects,
    [subjectId]: {
      ...subject,
      completedLessons: {
        ...subject.completedLessons,
        [topicId]: topicLessons
      },
      progress: calculateSubjectProgress(subject, topicId, topicProgress),
      lastStudied: new Date().toISOString()
    }
  };

  // Create new activity
  const newActivity = createValidActivity({
    type: 'study',
    subject: subjectId,
    topic: topicId,
    lessonId
  });

  // Get current activities and ensure they're valid
  const currentActivities = Array.isArray(progress.recentActivity) 
    ? progress.recentActivity 
    : [];

  // Update both subjects and activities in one transaction
  await updateDoc(userProgressRef, {
    subjects: updatedSubjects,
    recentActivity: [newActivity, ...currentActivities].slice(0, 10)
  });
}

// Calculate topic progress based on completed lessons
function calculateTopicProgress(completedLessons: number[]): number {
  // Assuming each topic has a fixed number of lessons (e.g., 5)
  const totalLessons = 5; // This should be dynamic based on actual lesson count
  return (completedLessons.length / totalLessons) * 100;
}

// Calculate subject progress based on topic progress
function calculateSubjectProgress(
  subject: any,
  updatedTopicId: string,
  updatedTopicProgress: number
): number {
  const topics = Object.keys(subject.completedLessons);
  const totalTopics = topics.length;
  
  if (totalTopics === 0) return 0;
  
  let totalProgress = 0;
  topics.forEach(topicId => {
    const topicLessons = subject.completedLessons[topicId] || [];
    const topicProgress = calculateTopicProgress(topicLessons);
    totalProgress += topicProgress;
  });
  
  return totalProgress / totalTopics;
}

// Update study time
export async function updateStudyTime(userId: string, minutesStudied: number) {
  const userProgressRef = doc(db, 'userProgress', userId);
  const progress = await getUserProgress(userId);

  if (progress) {
    const totalStudyTime = progress.totalStudyTime + minutesStudied;
    await updateDoc(userProgressRef, { totalStudyTime });
  }
}

// Mark topic as completed
export async function markTopicCompleted(userId: string, subjectId: string, topicId: string) {
  const userProgressRef = doc(db, 'userProgress', userId);
  const progress = await getUserProgress(userId);

  if (progress) {
    const subject = progress.subjects[subjectId] || {
      progress: 0,
      completedTopics: [],
      lastStudied: new Date()
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

      await updateDoc(userProgressRef, { subjects: updatedSubjects });

      // Add activity
      const activity: StudyActivity = {
        id: Date.now().toString(),
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
  const userProgressRef = doc(db, 'userProgress', userId);
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
      await updateDoc(userProgressRef, {
        currentStreak,
        longestStreak,
        lastStudyDate: today
      });
    } else if (diffDays > 1) {
      // Streak broken
      await updateDoc(userProgressRef, {
        currentStreak: 1,
        lastStudyDate: today
      });
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
  const userProgressRef = doc(db, 'userProgress', userId);
  const progress = await getUserProgress(userId);

  if (progress) {
    const hasAchievement = progress.recentActivity.some(
      activity => activity.topic === achievement.title
    );
    
    if (!hasAchievement) {
      const activity: StudyActivity = {
        id: Date.now().toString(),
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
  const userProgressRef = doc(db, 'userProgress', userId);
  const progress = await getUserProgress(userId);

  if (progress) {
    // Ensure all required fields are present and timestamp is in ISO format
    const activityWithTimestamp = {
      id: activity.id || Date.now().toString(),
      type: activity.type || 'study',
      subject: activity.subject || 'unknown',
      topic: activity.topic || 'unknown',
      timestamp: activity.timestamp instanceof Date 
        ? activity.timestamp.toISOString()
        : new Date().toISOString()
    };

    // Ensure recentActivity exists and is an array
    const currentActivities = Array.isArray(progress.recentActivity) 
      ? progress.recentActivity 
      : [];

    const updatedActivities = [activityWithTimestamp, ...currentActivities].slice(0, 10); // Keep only last 10 activities
    
    await updateDoc(userProgressRef, {
      recentActivity: updatedActivities
    });
  }
}

// Record quiz completion
export async function recordQuizCompletion(userId: string, subject: string, score: number) {
  const activity: StudyActivity = {
    id: Date.now().toString(),
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