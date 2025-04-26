import { db } from '../config/firebase';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { UserProgress, Activity, Achievement, StudyActivity } from '../types/user';

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
    recentActivity: []
  };

  await setDoc(userProgressRef, initialProgress);
  return initialProgress;
}

// Get user progress
export async function getUserProgress(userId: string): Promise<UserProgress | null> {
  const userProgressRef = doc(db, 'userProgress', userId);
  const docSnap = await getDoc(userProgressRef);

  if (docSnap.exists()) {
    return docSnap.data() as UserProgress;
  } else {
    return await initializeUserProgress(userId);
  }
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
        earnedDate: new Date().toISOString(),
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
    const updatedActivities = [activity, ...progress.recentActivity].slice(0, 10); // Keep only last 10 activities
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
      earnedDate: new Date().toISOString(),
      icon: '🎯'
    });
  }
} 