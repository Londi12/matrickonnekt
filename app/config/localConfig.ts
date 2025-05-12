// This file replaces the Firebase config with local storage configuration

// Storage keys for local authentication
export const AUTH_STORAGE_KEY = 'matrickonnekt_auth';
export const USERS_STORAGE_KEY = 'matrickonnekt_users';
export const USER_PROGRESS_KEY = 'matrickonnekt_user_progress';

// Config options
export const localConfig = {
  storagePrefix: 'matrickonnekt_',
  maxStorageSize: 5 * 1024 * 1024, // 5MB limit for local storage
  authPersistence: true, // Whether to persist auth between sessions
  encryptData: false, // Future enhancement: encrypt sensitive data in local storage
};

// Migration settings
export const migrationConfig = {
  autoMigrate: true, // Automatically migrate users from Firebase to local storage
  keepFirebaseBackup: true, // Keep a backup of Firebase data after migration
};
