import { UserProgress, StudyActivity } from '../types/user';
import { generateId } from '../utils/helpers';
import { getItem, setItem } from '../utils/localStorage';

// Storage keys
const USER_PROGRESS_KEY = 'matrickonnekt_user_progress';

// Get user progress from localStorage
export const getUserProgress = async (userId: string): Promise<UserProgress | null> => {
  try {
    const allProgress = getItem<Record<string, UserProgress>>(USER_PROGRESS_KEY, {});
    const userProgress = allProgress[userId];
    
    if (!userProgress) {
      return null;
    }
    
    // Ensure recentActivity is a valid array
    if (!Array.isArray(userProgress.recentActivity)) {
      userProgress.recentActivity = [];
    }

    // Clean and validate each activity
    userProgress.recentActivity = userProgress.recentActivity
      .filter(activity => activity && typeof activity === 'object')
      .map(activity => createValidActivity(activity as any));
    
    return userProgress;
  } catch (error) {
    console.error('Error getting user progress:', error);
    return null;
  }
};

// Save user progress to localStorage
export const saveUserProgress = async (userId: string, progress: UserProgress): Promise<void> => {
  try {
    const allProgress = getItem<Record<string, UserProgress>>(USER_PROGRESS_KEY, {});
    allProgress[userId] = progress;
    setItem(USER_PROGRESS_KEY, allProgress);
  } catch (error) {
    console.error('Error saving user progress:', error);
  }
};

// Initialize user progress when they first sign up
export const initializeUserProgress = async (userId: string): Promise<UserProgress> => {
  const initialProgress: UserProgress = {
    userId,
    subjects: {},
    totalStudyTime: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastStudyDate: new Date(),
    recentActivity: [] // Initialize as empty array
  };

  await saveUserProgress(userId, initialProgress);
  return initialProgress;
};

// Update user progress
export const updateUserProgress = async (userId: string, updates: Partial<UserProgress>): Promise<void> => {
  const currentProgress = await getUserProgress(userId);
  
  if (!currentProgress) {
    throw new Error('User progress not found');
  }
  
  const updatedProgress = {
    ...currentProgress,
    ...updates
  };
  
  await saveUserProgress(userId, updatedProgress);
};

// Helper function to create a valid activity object
export function createValidActivity(activity: any = {}): StudyActivity {
  const now = new Date().toISOString();
  return {
    id: activity.id || generateId(),
    type: activity.type || 'study',
    subject: activity.subject || 'unknown',
    topic: activity.topic || 'unknown',
    timestamp: activity.timestamp || now
  };
}

// Add activity
export const addActivity = async (userId: string, activity: StudyActivity): Promise<void> => {
  const progress = await getUserProgress(userId);
  
  if (!progress) {
    throw new Error('User progress not found');
  }
  
  // Ensure all required fields are present and timestamp is in ISO format
  const activityWithTimestamp = {
    id: activity.id || generateId(),
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

  const updatedActivities = [activityWithTimestamp, ...currentActivities].slice(0, 10);
  
  progress.recentActivity = updatedActivities;
  
  await saveUserProgress(userId, progress);
};
