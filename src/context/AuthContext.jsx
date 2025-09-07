"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { apiFunctions } from "@/lib/apiFunctions";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.log("No token found, setting unauthenticated");
        setUser(null);
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      const response = await apiFunctions.getProfile();

      if (response?.id) {
        const userData = response;
        setUser(userData);
        setIsAuthenticated(true);

        localStorage.setItem("userInfo", JSON.stringify(userData));
      } else {
        throw new Error("Invalid token");
      }
    } catch (error) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userInfo");

      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const login = (userData, tokens) => {
    try {
      localStorage.setItem("authToken", tokens.access);
      localStorage.setItem("refreshToken", tokens.refresh);
      localStorage.setItem("userInfo", JSON.stringify(userData));

      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userInfo");

      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const updateUser = (userData) => {
    try {
      localStorage.setItem("userInfo", JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Function to manually refresh auth status (useful for token refresh)
  const refreshAuthStatus = async () => {
    setIsLoading(true);
    await checkAuthStatus();
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    updateUser,
    checkAuthStatus,
    refreshAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
