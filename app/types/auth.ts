// User interface similar to Firebase Auth User
export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: {
    creationTime: string;
    lastSignInTime: string;
  };
  isNewUser?: boolean;
}

// UserCredential interface similar to Firebase Auth UserCredential
export interface UserCredential {
  user: User;
  providerId: string;
  operationType: 'signIn' | 'signUp' | 'link';
}

export type AuthStateListener = (user: User | null) => void;
