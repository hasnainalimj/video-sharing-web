import firebase from "firebase";
import "firebase/firestore";
import { firebaseCredentials } from "./credentials";
firebase.initializeApp(firebaseCredentials);

const auth = firebase.auth();

export const createAccount = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const logout = () => {
  return auth.signOut();
};
