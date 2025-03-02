import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import.meta.env

const apiKey = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "aipromptexplorer-ebe5b.firebaseapp.com",
  projectId: "aipromptexplorer-ebe5b",
  storageBucket: "aipromptexplorer-ebe5b.firebasestorage.app",
  messagingSenderId: "153951462989",
  appId: "1:153951462989:web:046c1d5dbf9d5cf58bde04",
  measurementId: "G-ZZB3KZ8Y6C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("User logged in:", user); // Log the user after login to confirm the user is authenticated
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

const logout = async () => {
  await signOut(auth);
};

export { auth, signInWithGoogle, logout };
