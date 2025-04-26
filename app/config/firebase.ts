import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
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
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics only on the client side and when supported
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then(yes => yes && (analytics = getAnalytics(app)));
}

export { analytics };
export default app; 