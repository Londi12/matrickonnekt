import { User, UserCredential } from '../types/auth';
import { generateId } from '../utils/helpers';

import { getItem, setItem, removeItem } from '../utils/localStorage';

// Storage keys
const USERS_STORAGE_KEY = 'matrickonnekt_users';
const CURRENT_USER_KEY = 'matrickonnekt_current_user';

// Interface for local storage user data
interface StoredUser {
  id: string;
  email: string;
  password: string; // In a real app, this should be hashed
  displayName?: string;
  photoURL?: string;
  createdAt: string;
}

// Get users from localStorage
const getUsers = (): StoredUser[] => {
  return getItem<StoredUser[]>(USERS_STORAGE_KEY, []);
};

// Save users to localStorage
const saveUsers = (users: StoredUser[]) => {
  setItem(USERS_STORAGE_KEY, users);
};

// Get current user from localStorage
export const getCurrentUser = (): User | null => {
  return getItem<User | null>(CURRENT_USER_KEY, null);
};

// Save current user to localStorage
export const saveCurrentUser = (user: User | null) => {
  if (user) {
    setItem(CURRENT_USER_KEY, user);
  } else {
    removeItem(CURRENT_USER_KEY);
  }
};

// Create a user credential response similar to Firebase
const createUserCredential = (user: User): UserCredential => {
  return {
    user,
    providerId: 'password',
    operationType: user.isNewUser ? 'signUp' : 'signIn'
  };
};

// Convert stored user to User interface
const storedUserToUser = (storedUser: StoredUser): User => {
  return {
    uid: storedUser.id,
    email: storedUser.email,
    displayName: storedUser.displayName || null,
    photoURL: storedUser.photoURL || null,
    emailVerified: true, // Assume email is verified in local auth
    isAnonymous: false,
    metadata: {
      creationTime: storedUser.createdAt,
      lastSignInTime: new Date().toISOString()
    },
    isNewUser: false
  };
};

// Sign in with email and password
export const signInWithEmailAndPassword = async (
  email: string, 
  password: string
): Promise<UserCredential> => {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('auth/user-not-found');
  }
  
  const userData = storedUserToUser(user);
  userData.isNewUser = false;
  
  // Update last sign-in time
  const updatedUsers = users.map(u => {
    if (u.id === user.id) {
      return {
        ...u,
        lastSignInTime: new Date().toISOString()
      };
    }
    return u;
  });
  
  saveUsers(updatedUsers);
  saveCurrentUser(userData);
  
  return createUserCredential(userData);
};

// Create user with email and password
export const createUserWithEmailAndPassword = async (
  email: string, 
  password: string
): Promise<UserCredential> => {
  const users = getUsers();
  
  // Check if user already exists
  if (users.some(u => u.email === email)) {
    throw new Error('auth/email-already-in-use');
  }
  
  const newUser: StoredUser = {
    id: generateId(),
    email,
    password,
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  saveUsers(users);
  
  const userData = storedUserToUser(newUser);
  userData.isNewUser = true;
  
  saveCurrentUser(userData);
  
  return createUserCredential(userData);
};

// Sign out
export const signOut = async (): Promise<void> => {
  saveCurrentUser(null);
};

// Update user profile
export const updateProfile = async (
  user: User, 
  { displayName, photoURL }: { displayName?: string; photoURL?: string }
): Promise<void> => {
  const users = getUsers();
  const updatedUsers = users.map(u => {
    if (u.id === user.uid) {
      return {
        ...u,
        displayName: displayName || u.displayName,
        photoURL: photoURL || u.photoURL
      };
    }
    return u;
  });
  
  saveUsers(updatedUsers);
  
  // Update current user if this is the active user
  const currentUser = getCurrentUser();
  if (currentUser && currentUser.uid === user.uid) {
    saveCurrentUser({
      ...currentUser,
      displayName: displayName || currentUser.displayName,
      photoURL: photoURL || currentUser.photoURL
    });
  }
};

// Update user password
export const updatePassword = async (
  user: User, 
  newPassword: string,
  currentPassword?: string
): Promise<void> => {
  const users = getUsers();
  const storedUser = users.find(u => u.id === user.uid);
  
  if (!storedUser) {
    throw new Error('User not found');
  }
  
  // If currentPassword is provided, verify it matches
  if (currentPassword && storedUser.password !== currentPassword) {
    throw new Error('Current password is incorrect');
  }
  
  // Update password
  const updatedUsers = users.map(u => {
    if (u.id === user.uid) {
      return {
        ...u,
        password: newPassword
      };
    }
    return u;
  });
  
  saveUsers(updatedUsers);
};

// Initialize auth with a listener
export const initAuth = (onAuthStateChanged: (user: User | null) => void) => {
  // Check authentication state on initialization
  onAuthStateChanged(getCurrentUser());
  
  if (typeof window !== 'undefined') {
    // Set up a storage event listener to handle auth changes across tabs/windows
    window.addEventListener('storage', (event) => {
      if (event.key === CURRENT_USER_KEY) {
        const user = event.newValue ? JSON.parse(event.newValue) : null;
        onAuthStateChanged(user);
      }
    });
  }
  
  // Return a function to unsubscribe
  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', () => {});
    }
  };
};
