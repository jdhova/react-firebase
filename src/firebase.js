// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrlx1UVBy7HkQxbZ0S4h9M_Qskk7WRmW8",
  authDomain: "auth-project-57e64.firebaseapp.com",
  projectId: "auth-project-57e64",
  storageBucket: "auth-project-57e64.appspot.com",
  messagingSenderId: "217140657350",
  appId: "1:217140657350:web:c99cbdc1af6016e9aaabc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app