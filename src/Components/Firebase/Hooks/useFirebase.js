import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const auth = getAuth();

  const registerUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        const newUser={email, displayName: name}
        setUser(newUser);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };
  const logInUser=(email, password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        user= userCredential.user
    })
    .catch((error) => {
        setAuthError(error.message)
    });

  }
 
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
          setUser({})
        }
      });
      
  },[])
  const logout=()=>{
    signOut(auth)
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
      
      });
      
  }



  return{
      useFirebase, user,
      authError,
      registerUser,
      logout,
      logInUser
  }

};
 

export default useFirebase;