
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDq_4H9-nQQvfp5IumVzPBcq8OcYNmeASo",
  authDomain: "netflix-6a381.firebaseapp.com",
  projectId: "netflix-6a381",
  storageBucket: "netflix-6a381.appspot.com",
  messagingSenderId: "276600089672",
  appId: "1:276600089672:web:eae34f4c204436a433bc7d",
  measurementId: "G-X3Y72MBYVQ"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)