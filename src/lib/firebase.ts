
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCo3ZIrVWLVB0WiofaJMecbWZI_TzsfW0s",
  authDomain: "expensetracker-2d0e0.firebaseapp.com",
  projectId: "expensetracker-2d0e0",
  storageBucket: "expensetracker-2d0e0.appspot.com",
  messagingSenderId: "360407849927",
  appId: "1:360407849927:web:4259af5995cdb7fc08d7e2"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)