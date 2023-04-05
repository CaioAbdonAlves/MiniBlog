import { initializeApp, getFirestore } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmBswWNIKzQ7anSwSXlCELOCPGZdnaSxc",
  authDomain: "miniblog-73d68.firebaseapp.com",
  projectId: "miniblog-73d68",
  storageBucket: "miniblog-73d68.appspot.com",
  messagingSenderId: "719292613709",
  appId: "1:719292613709:web:4025c2d1631b71a2bec804"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };