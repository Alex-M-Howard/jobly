import React, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import JoblyApi from "@/API";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function getUserWithToken(token) {
      JoblyApi.token = token;
      let res = await JoblyApi.getUser(localStorage.getItem("username"))
      setIsLoggedIn(true);
      setUser(res);  
    }
    
    const token = localStorage.getItem("token");
    
    if (token) {
      getUserWithToken(token);
    }
  }, []);

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const loginUser = (username, token) => {
    toggleLoginStatus();
    setUser({ username: username });
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
  }

  const logoutUser = () => {
    if (user) {
      toggleLoginStatus();
      setUser(null);
      localStorage.removeItem("username");
      localStorage.removeItem("token");
    } else {
      router.push('/login')
    }
  }

  return (
    <UserContext.Provider
      value={{ isLoggedIn, toggleLoginStatus, user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
