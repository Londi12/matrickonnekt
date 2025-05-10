import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBfTzLdN-x7W__xUJvYe6ZCkDSyX3d8gVA",
  authDomain: "matrickonnekt.firebaseapp.com",
  projectId: "matrickonnekt",
  storageBucket: "matrickonnekt.firebasestorage.app",
  messagingSenderId: "315511083549",
  appId: "1:315511083549:web:89318171fe889ffa612cf4"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db }; 