import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyCeMS2uIKR7jiyjAyDVoqrYP0tuey_Pxgw",
  authDomain: "messag-79729.firebaseapp.com",
  projectId: "messag-79729",
  storageBucket: "messag-79729.appspot.com",
  messagingSenderId: "661358412530",  
  appId: "1:661358412530:web:bb85342362cf89e0ed066b",
  measurementId: "G-SPWSSJHLE6"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();