
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
 apiKey:ENTER_YOUR_API_KEY, 
 authDomain:ENTER_YOUR_API_KEY,
 projectId:ENTER_YOUR_API_KEY,
 storageBucket:ENTER_YOUR_API_KEY, 
 messagingSenderId:ENTER_YOUR_API_KEY, 
 appId:ENTER_YOUR_API_KEY,
 measurementId:ENTER_YOUR_API_KEY
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
