// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdLQpFis4Y0FlH6TdpuxpauJvC_z7yT2g",
  authDomain: "malikinstitute-a136b.firebaseapp.com",
  projectId: "malikinstitute-a136b",
  storageBucket: "malikinstitute-a136b.firebasestorage.app",
  messagingSenderId: "764059289915",
  appId: "1:764059289915:web:a9ecafa09dcbc97c644f1e",
  measurementId: "G-2JTKZY6F29"
};

// Initialize Firebase for SSR and client-side
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics only on the client-side
const analytics = typeof window !== 'undefined' && isSupported().then(yes => yes ? getAnalytics(app) : null);

export { app, db, analytics };
