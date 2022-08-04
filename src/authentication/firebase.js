// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWAVFL3fso90cSrVmf9lNCFQnNoPYUTE4",
  authDomain: "final-project-dts-f50b7.firebaseapp.com",
  projectId: "final-project-dts-f50b7",
  storageBucket: "final-project-dts-f50b7.appspot.com",
  messagingSenderId: "4889983502",
  appId: "1:4889983502:web:24e1ceb3df912ccf1d9a5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangDidapatkan = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(
      "user yang teregis dan berhasil login adalah",
      userYangDidapatkan.user
    );
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth ", err.message);
  }
};

const loginDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangLogin = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(
      "User yang sekarang ini berhasil login adalah ",
      userYangLogin.user
    );
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth ", err.message);
  }
};
const keluarAplikasi = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth ", err.message);
  }
};

export {
  auth,
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  keluarAplikasi,
};
