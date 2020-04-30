
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Spinner from 'react-bootstrap/Spinner'
import Styles from '../componentsCSS/Spinner.module.css'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
    
  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <Spinner animation="grow" className={Styles.spinner}/>
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
