import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: null})

  const toggleLoginStatus = () => {
    setIsLoggedIn((state) => !state);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, toggleLoginStatus, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
