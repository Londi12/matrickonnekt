import { db } from '../config/firebase';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { UserProgress, Activity, Achievement } from '../types/user';

// Initialize user progress when they first sign up
export async function initializeUserProgress(userId: string) {
  const userProgressRef = doc(db, 'userProgress', userId);
  
  const initialProgress: UserProgress = {
    completedTopics: [],
    studyTime: {
      weekly: 0,
      total: 0
    },
    achievements: [],
    streak: {
      current: 0,
      lastStudyDate: new Date().toISOString()
    },
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
    const updatedProgress = {
      'studyTime.weekly': progress.studyTime.weekly + minutesStudied,
      'studyTime.total': progress.studyTime.total + minutesStudied
    };

    await updateDoc(userProgressRef, updatedProgress);
  }
}

// Mark topic as completed
export async function markTopicCompleted(userId: string, topicId: string) {
  const userProgressRef = doc(db, 'userProgress', userId);
  const progress = await getUserProgress(userId);

  if (progress && !progress.completedTopics.includes(topicId)) {
    await updateDoc(userProgressRef, {
      completedTopics: [...progress.completedTopics, topicId]
    });

    // Add activity
    const activity: Activity = {
      id: Date.now().toString(),
      type: 'chapter',
      title: `Completed Topic: ${topicId}`,
      details: 'Topic completed successfully',
      timestamp: new Date().toISOString()
    };

    await addActivity(userId, activity);
  }
}

// Update streak
export async function updateStreak(userId: string) {
  const userProgressRef = doc(db, 'userProgress', userId);
  const progress = await getUserProgress(userId);

  if (progress) {
    const lastStudyDate = new Date(progress.streak.lastStudyDate);
    const today = new Date();
    const diffDays = Math.floor((today.getTime() - lastStudyDate.getTime()) / (1000 * 60 * 60 * 24));

    let newStreak = progress.streak.current;
    if (diffDays === 1) {
      // Consecutive day
      newStreak += 1;
    } else if (diffDays > 1) {
      // Streak broken
      newStreak = 1;
    }

    await updateDoc(userProgressRef, {
      'streak.current': newStreak,
      'streak.lastStudyDate': today.toISOString()
    });

    // Check for streak achievements
    if (newStreak === 7) {
      await addAchievement(userId, {
        id: 'week-streak',
        name: 'Week Warrior',
        description: 'Studied for 7 days in a row!',
        earnedAt: new Date().toISOString(),
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
    const hasAchievement = progress.achievements.some(a => a.id === achievement.id);
    if (!hasAchievement) {
      await updateDoc(userProgressRef, {
        achievements: [...progress.achievements, achievement]
      });

      // Add activity
      const activity: Activity = {
        id: Date.now().toString(),
        type: 'achievement',
        title: `New Achievement: ${achievement.name}`,
        details: achievement.description,
        timestamp: new Date().toISOString()
      };

      await addActivity(userId, activity);
    }
  }
}

// Add activity
export async function addActivity(userId: string, activity: Activity) {
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
  const activity: Activity = {
    id: Date.now().toString(),
    type: 'quiz',
    title: `Completed ${subject} Quiz`,
    details: `Scored ${score}%`,
    timestamp: new Date().toISOString(),
    subject,
    score
  };

  await addActivity(userId, activity);

  // Check for achievements
  if (score >= 90) {
    await addAchievement(userId, {
      id: 'high-scorer',
      name: 'High Scorer',
      description: 'Scored 90% or higher on a quiz!',
      earnedAt: new Date().toISOString(),
      icon: '🎯'
    });
  }
} 