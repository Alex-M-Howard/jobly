import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginStatus = () => {
    setIsLoggedIn((state) => !state);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, toggleLoginStatus }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
