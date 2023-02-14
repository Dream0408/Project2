import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfdMMu_gQqn_8VLCxlsBy-eVrP457Ykmw",
  authDomain: "dbproject2-726d7.firebaseapp.com",
  projectId: "dbproject2-726d7",
  storageBucket: "dbproject2-726d7.appspot.com",
  messagingSenderId: "133566590536",
  appId: "1:133566590536:web:94bc6ee66db986c18ff27d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app