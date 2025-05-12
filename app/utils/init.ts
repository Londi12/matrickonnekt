import { User } from '../types/auth';
import { checkNeedsMigration, migrateUserData } from './migrationUtils';
import { getUserProgress } from '../services/userDataService';

/**
 * Initialize app with local authentication
 */
export async function initializeLocalAuth() {
  console.log('Initializing local authentication...');
  
  // Check if we have a current user
  const currentUserJSON = localStorage.getItem('matrickonnekt_current_user');
  if (!currentUserJSON) return;
  
  try {
    const currentUser = JSON.parse(currentUserJSON) as User;
    
    // Check if we need to migrate the user's data
    const needsMigration = await checkNeedsMigration(currentUser.uid);
    
    if (needsMigration) {
      console.log(`Migrating data for user ${currentUser.uid}`);
      
      // Fetch data from local storage
      const userData = await getUserProgress(currentUser.uid);
      
      // Migrate to new format if needed
      if (userData) {
        await migrateUserData(currentUser.uid, userData);
        console.log('Migration complete');
      }
    }
  } catch (error) {
    console.error('Error during local auth initialization:', error);
  }
}
