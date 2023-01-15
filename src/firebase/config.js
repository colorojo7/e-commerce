import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyByuzM05WAilLk98XwgyTLDvRBnruU3QYA",
  authDomain: "react-app-leonardi.firebaseapp.com",
  projectId: "react-app-leonardi",
  storageBucket: "react-app-leonardi.appspot.com",
  messagingSenderId: "404550148705",
  appId: "1:404550148705:web:a4e64b31944c4012820020"
};

const app = initializeApp(firebaseConfig);

export const initFirebase =()=>{
    app
}