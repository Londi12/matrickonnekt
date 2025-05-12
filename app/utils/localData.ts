/**
 * This file replaces the firebase.ts utility with local storage-based implementations.
 * It serves as a direct replacement for firebase.ts, providing the same interface
 * but using local storage instead of Firebase.
 */

import { UserProgress, Activity, Achievement, StudyActivity } from '@/app/types/user';
import { getUserProgress as getProgress, saveUserProgress, updateUserProgress as updateProgress } from '@/app/services/userDataService';

export const getUserProgress = async (userId: string): Promise<UserProgress | null> => {
  try {
    return await getProgress(userId);
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
    // Get current progress
    const currentProgress = await getUserProgress(userId);
    if (!currentProgress) {
      return false;
    }
    
    // Update and save
    const updatedProgress = {
      ...currentProgress,
      ...updates
    };
    
    await saveUserProgress(userId, updatedProgress);
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
    
    await saveUserProgress(userId, initialProgress);
    return true;
  } catch (error) {
    console.error('Error initializing user progress:', error);
    return false;
  }
};

export const addActivity = async (
  userId: string,
  activity: StudyActivity
): Promise<boolean> => {
  try {
    const userProgress = await getUserProgress(userId);
    if (!userProgress) {
      return false;
    }
    
    const currentActivities = Array.isArray(userProgress.recentActivity) 
      ? userProgress.recentActivity 
      : [];
      
    const newActivity: StudyActivity = {
      id: activity.id || Date.now().toString(),
      type: activity.type,
      subject: activity.subject,
      topic: activity.topic,
      timestamp: activity.timestamp || new Date()
    };
    
    const updatedActivities = [newActivity, ...currentActivities].slice(0, 10);
    
    await updateUserProgress(userId, { recentActivity: updatedActivities });
    return true;
  } catch (error) {
    console.error('Error adding activity:', error);
    return false;
  }
};

export const addAchievement = async (
  userId: string,
  achievement: Achievement
): Promise<boolean> => {
  try {
    const activity: StudyActivity = {
      id: Date.now().toString(),
      type: 'study',
      subject: 'achievements',
      topic: achievement.title,
      timestamp: new Date()
    };
    
    return addActivity(userId, activity);
  } catch (error) {
    console.error('Error adding achievement:', error);
    return false;
  }
};
