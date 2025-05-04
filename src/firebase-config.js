import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBWm3OoSYO93r29Wp_kjh9BToq4pjocVsg",
  authDomain: "koosha-90bf4.firebaseapp.com",
  projectId: "koosha-90bf4",
  storageBucket: "koosha-90bf4.appspot.com",
  messagingSenderId: "116095723843",
  appId: "1:116095723843:web:b05607b29bbd4b4fee67f6",
  measurementId: "G-E72RRS70KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app