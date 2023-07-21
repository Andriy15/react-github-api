import { initializeApp } from "firebase/app"
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDOdG5tds6v4WLB0DDJnlGUnRfS1yhYXzU",
  authDomain: "github-ts-api.firebaseapp.com",
  databaseURL: "https://github-ts-api-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "github-ts-api",
  storageBucket: "github-ts-api.appspot.com",
  messagingSenderId: "952398096424",
  appId: "1:952398096424:web:f18933a5e7fdebaf2a2d1d",
  measurementId: "G-80G6NPBT8F"
};

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)