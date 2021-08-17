/* eslint-disable no-undef */
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCyTaLRh1bTeyvWQAAYePY17_7EdZEL6ss',
  authDomain: 'clever-to-do.firebaseapp.com',
  projectId: 'clever-to-do',
  storageBucket: 'clever-to-do.appspot.com',
  messagingSenderId: '995249906170',
  appId: '1:995249906170:web:859c37eb02a8c17edbc443',
}

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

// apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
