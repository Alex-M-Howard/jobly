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
      let res;
      const maxRetries = 3;
      let retryCount = 0;
      while (retryCount < maxRetries) {
        try {
          res = await JoblyApi.getUser(localStorage.getItem("username"));
          setIsLoggedIn(true);
          setUser(res);
          return
        } catch (error) {
          console.error(`Error fetching user: ${error.message}. Retrying...`);
          retryCount++;
          // wait for 0.5 seconds before retrying
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
      throw new Error(`Failed to fetch user after ${maxRetries} retries`);
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

  const handleApplyJob = async (username, jobId) => {
    await JoblyApi.userApplyJob(username, jobId);
    setUser({ ...user, applications: [...user.applications, jobId] });
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, toggleLoginStatus, user, loginUser, logoutUser, handleApplyJob }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
