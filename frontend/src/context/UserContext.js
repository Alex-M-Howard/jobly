import React, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
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

  const router = useRouter();

  const loginUser = (username, token) => {
    setUser({ username: username });
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
  }

  const logoutUser = () => {
    setUser({ username: null });
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  }

  return (
    <UserContext.Provider
      value={{ isLoggedIn, toggleLoginStatus, user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
