import React, { useState, createContext, useEffect } from "react";
import JoblyApi from "@/API";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: null });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setUser({username: localStorage.getItem("username")})
      // Fetch user data using token and set the user state
      // Example:
      // let res = async () => {
      //   await JoblyApi.getUser(token).then((userData) => setUser(userData))
      // }
    }
  }, []);

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, toggleLoginStatus, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
