// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB_z72OBSaCHUiVfsn3RguIJcUUmv1QpDE',
  authDomain: 'nextflix-c080b.firebaseapp.com',
  projectId: 'nextflix-c080b',
  storageBucket: 'nextflix-c080b.appspot.com',
  messagingSenderId: '600955117079',
  appId: '1:600955117079:web:668a5d695334ed691f4652',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
