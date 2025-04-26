import { db } from '../firebase/config';
import { doc, getDoc, updateDoc, setDoc, Timestamp } from 'firebase/firestore';
import { UserProgress, Activity, Achievement } from '@/app/types/user';

export const getUserProgress = async (userId: string): Promise<UserProgress | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      return null;
    }
    return userDoc.data() as UserProgress;
  } catch (error) {
    console.error('Error fetching user progress:', error);
    return null;
  }
};

export const updateUserProgress = async (
  userId: string,
  updates: Partial<UserProgress>
): Promise<boolean> => {
  try {
    await updateDoc(doc(db, 'users', userId), updates);
    return true;
  } catch (error) {
    console.error('Error updating user progress:', error);
    return false;
  }
};

export const initializeUserProgress = async (userId: string): Promise<boolean> => {
  try {
    const initialProgress: UserProgress = {
      completedTopics: [],
      studyTime: {
        daily: 0,
        weekly: 0,
        total: 0
      },
      streak: {
        current: 0,
        best: 0,
        lastStudyDate: new Date().toISOString()
      },
      achievements: [],
      recentActivity: []
    };

    await setDoc(doc(db, 'users', userId), initialProgress);
    return true;
  } catch (error) {
    console.error('Error initializing user progress:', error);
    return false;
  }
};

export const addActivity = async (
  userId: string,
  activity: Omit<Activity, 'id' | 'timestamp'>
): Promise<boolean> => {
  try {
    const userProgress = await getUserProgress(userId);
    if (!userProgress) return false;

    const newActivity: Activity = {
      ...activity,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString()
    };

    const recentActivity = [newActivity, ...userProgress.recentActivity].slice(0, 10);
    await updateUserProgress(userId, { recentActivity });
    return true;
  } catch (error) {
    console.error('Error adding activity:', error);
    return false;
  }
};

export const updateStudyTime = async (
  userId: string,
  minutesStudied: number
): Promise<boolean> => {
  try {
    const userProgress = await getUserProgress(userId);
    if (!userProgress) return false;

    const now = new Date();
    const lastStudyDate = new Date(userProgress.streak.lastStudyDate);
    const isNewDay = now.toDateString() !== lastStudyDate.toDateString();

    // Update streak
    let streak = userProgress.streak;
    if (isNewDay) {
      const daysSinceLastStudy = Math.floor(
        (now.getTime() - lastStudyDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      
      if (daysSinceLastStudy === 1) {
        streak.current += 1;
        streak.best = Math.max(streak.current, streak.best);
      } else if (daysSinceLastStudy > 1) {
        streak.current = 1;
      }
      streak.lastStudyDate = now.toISOString();
    }

    // Update study time
    const studyTime = {
      daily: isNewDay ? minutesStudied : userProgress.studyTime.daily + minutesStudied,
      weekly: userProgress.studyTime.weekly + minutesStudied,
      total: userProgress.studyTime.total + minutesStudied
    };

    await updateUserProgress(userId, { studyTime, streak });
    return true;
  } catch (error) {
    console.error('Error updating study time:', error);
    return false;
  }
}; 