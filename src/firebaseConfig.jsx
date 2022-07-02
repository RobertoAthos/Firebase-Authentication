import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAwLn2DNqKLZnOzI5MsWa9NRFmPvhErxao",
    authDomain: "signup-project-2f5f7.firebaseapp.com",
    projectId: "signup-project-2f5f7",
    storageBucket: "signup-project-2f5f7.appspot.com",
    messagingSenderId: "671974065397",
    appId: "1:671974065397:web:0b9be4004830ed47db31bc",
    measurementId: "G-EBXRMZ6EBH"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)