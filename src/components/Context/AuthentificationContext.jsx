// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";

export const AuthifContext = createContext();

export const AuthProvider = ({ children }) => {
  const [utilisateur, setUtilisateur] = useState(null);
  useEffect(() => {
    const deconnecter = onAuthStateChanged(auth, (user) => {
      setUtilisateur(user);
    });
    return () => deconnecter();
  }, []);

  return (
    <AuthifContext.Provider value={{ utilisateur }}>
      {children}
    </AuthifContext.Provider>
  );
};

export const useAuth = () => useContext(AuthifContext);
