import { GoogleAuthProvider, getAuth, initializeAuth ,signOut} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAmc6gbaMbK1RdYn5yBYyRDvzOy6ZUCrbc",
  authDomain: "disneyclone-8a951.firebaseapp.com",
  projectId: "disneyclone-8a951",
  storageBucket: "disneyclone-8a951.appspot.com",
  messagingSenderId: "434455152939",
  appId: "1:434455152939:web:7b837db985948b1ec9dd6e",
  measurementId: "G-R4971MHKSY",
};
const application = initializeApp(firebaseConfig);
const auth1 = getAuth(application);
const db = getFirestore(application);
const googleProvider = new GoogleAuthProvider();
export { auth1, googleProvider,signOut };
export default db;
