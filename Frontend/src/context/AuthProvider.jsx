import React, { createContext, useState } from "react";
import { useContext } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("streamchat");
  // parse the user data and storing in state
  const [user, setUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => udeContext(AuthContext);
