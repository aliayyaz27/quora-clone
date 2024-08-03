// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKDHdi2U6XXl21Ie8YkzIZQtzBBw0FRz4",
  authDomain: "quora-clone-c9e3f.firebaseapp.com",
  projectId: "quora-clone-c9e3f",
  storageBucket: "quora-clone-c9e3f.appspot.com",
  messagingSenderId: "40673773569",
  appId: "1:40673773569:web:3886c020917e038b0e5800",
  measurementId: "G-2E2SWNKF0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
