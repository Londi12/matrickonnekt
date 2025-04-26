import { db } from '../firebase/config';
import { doc, getDoc, updateDoc, setDoc, Timestamp } from 'firebase/firestore';
import { UserProgress, Activity, Achievement, StudyActivity } from '@/app/types/user';

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
      userId,
      subjects: {},
      totalStudyTime: 0,
      currentStreak: 0,
      longestStreak: 0,
      lastStudyDate: new Date(),
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
  activity: Omit<StudyActivity, 'id' | 'timestamp'>
): Promise<boolean> => {
  try {
    const userProgress = await getUserProgress(userId);
    if (!userProgress) return false;

    const newActivity: StudyActivity = {
      ...activity,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date()
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
    const lastStudyDate = new Date(userProgress.lastStudyDate);
    const isNewDay = now.toDateString() !== lastStudyDate.toDateString();

    // Update streak
    let currentStreak = userProgress.currentStreak;
    if (isNewDay) {
      const daysSinceLastStudy = Math.floor(
        (now.getTime() - lastStudyDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      
      if (daysSinceLastStudy === 1) {
        currentStreak += 1;
        const longestStreak = Math.max(currentStreak, userProgress.longestStreak);
        await updateUserProgress(userId, { 
          currentStreak,
          longestStreak,
          lastStudyDate: now
        });
      } else if (daysSinceLastStudy > 1) {
        await updateUserProgress(userId, { 
          currentStreak: 1,
          lastStudyDate: now
        });
      }
    }

    // Update study time
    const totalStudyTime = userProgress.totalStudyTime + minutesStudied;
    await updateUserProgress(userId, { totalStudyTime });
    return true;
  } catch (error) {
    console.error('Error updating study time:', error);
    return false;
  }
}; 