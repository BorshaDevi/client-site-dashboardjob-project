// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.dashboard_apiKey,
  authDomain: import.meta.env.dashboard_authDomain,
  projectId: import.meta.env.dashboard_projectId,
  storageBucket: import.meta.env.dashboard_storageBucket,
  messagingSenderId: import.meta.env.dashboard_messagingSenderId,
  appId: import.meta.env.dashboard_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app