import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3JJXFya8DNIqZvjIbkNKgHNcvRlUPqBE",
  authDomain: "interior-ai2.firebaseapp.com",
  projectId: "interior-ai2",
  storageBucket: "interior-ai2.firebasestorage.app",
  messagingSenderId: "950268260674",
  appId: "1:950268260674:web:43df4887cb48369c98d8db",
  measurementId: "G-ZN9N85XES2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

