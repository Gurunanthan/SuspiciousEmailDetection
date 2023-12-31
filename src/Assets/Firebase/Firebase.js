import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfAk8q9VdqLj6DFJwJINIjVc602OnyWQs",
  authDomain: "suspiciousemaildetection-a1f06.firebaseapp.com",
  projectId: "suspiciousemaildetection-a1f06",
  storageBucket: "suspiciousemaildetection-a1f06.appspot.com",
  messagingSenderId: "59660996513",
  appId: "1:59660996513:web:bef1e241b33d2bd42685e0",
  measurementId: "G-94P4PPP37H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const signUpWithEmail = async (email, password, name) => {
  const auth = getAuth(app);
  await createUserWithEmailAndPassword(auth, email, password);
  // Optionally update user profile with name
  await auth.currentUser.updateProfile({
    displayName: name,
  });
};

export const signUpWithGoogle = async () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export const signInWithEmail = async (email, password) => {
  const auth = getAuth(app);
  await signInWithEmailAndPassword(auth, email, password);
  // Optionally handle additional actions after sign-in
};

export const signInWithGoogle = async () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};