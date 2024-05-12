import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.init";

export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ! create user by email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };







// ! User Observer 
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
}, [])










  const authInfo = {
    user,
    loading,
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
