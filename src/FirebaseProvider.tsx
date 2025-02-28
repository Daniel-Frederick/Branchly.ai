import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase"; // Import your Firebase auth
import { onAuthStateChanged, User } from "firebase/auth"; // Firebase auth types

const AuthContext = createContext<{ user: User | null }>({ user: null });

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state when the authentication state changes
    });
    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
