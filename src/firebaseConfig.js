// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr6g_t9ZB_X-oczGq3OC6dw_plMgSgJ9E",
  authDomain: "casa-de-chaupi-app.firebaseapp.com",
  projectId: "casa-de-chaupi-app",
  storageBucket: "casa-de-chaupi-app.appspot.com",
  messagingSenderId: "513151654697",
  appId: "1:513151654697:web:f9830d8c69b0a2ba563538",
  measurementId: "G-PF2RPV1CFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

