import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBfTzLdN-x7W__xUJvYe6ZCkDSyX3d8gVA",
  authDomain: "matrickonnekt.firebaseapp.com",
  projectId: "matrickonnekt",
  storageBucket: "matrickonnekt.firebasestorage.app",
  messagingSenderId: "315511083549",
  appId: "1:315511083549:web:89318171fe889ffa612cf4",
  measurementId: "G-ZPEDPN4X3S"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Analytics only on client side
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, auth, db, analytics }; 