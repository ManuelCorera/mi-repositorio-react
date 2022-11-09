import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDl0AaYoov91kIa6LKUywyVz4QaOBbHEy4",
    authDomain: "comision34770-e0f76.firebaseapp.com",
    projectId: "comision34770-e0f76",
    storageBucket: "comision34770-e0f76.appspot.com",
    messagingSenderId: "1081380769162",
    appId: "1:1081380769162:web:c2e3d9628289852f9ccc73"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
