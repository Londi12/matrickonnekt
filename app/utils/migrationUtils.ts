import { User } from '../types/auth';
import { UserProgress } from '../types/user';
import { saveUserProgress, getUserProgress } from '../services/userDataService';

// A utility function to migrate a user's data from Firebase to local storage
export async function migrateUserData(userId: string, firebaseData?: UserProgress): Promise<boolean> {
  try {
    // Check if user data already exists in local storage
    const localData = await getUserProgress(userId);
    
    // If local data exists, no need to migrate
    if (localData) {
      return true;
    }
    
    if (firebaseData) {
      // If Firebase data was provided, save it to local storage
      await saveUserProgress(userId, firebaseData);
      return true;
    }
    
    // If no local data and no Firebase data provided, there's nothing to migrate
    return false;
  } catch (error) {
    console.error('Error during user data migration:', error);
    return false;
  }
}

// A utility function to check if a user needs to be migrated 
// (can be called after login to determine if migration is needed)
export async function checkNeedsMigration(userId: string): Promise<boolean> {
  try {
    const localData = await getUserProgress(userId);
    return !localData; // If no local data, migration is needed
  } catch (error) {
    console.error('Error checking migration status:', error);
    return true; // If error, assume migration is needed to be safe
  }
}
