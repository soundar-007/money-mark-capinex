import axios from "axios";
import toast from "react-hot-toast";
import { apiFunctions } from "./apiFunctions";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (config.url?.includes("/auth/token/refresh")) {
    return config;
  }

  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (originalRequest?.url?.includes("/auth/token/refresh")) {
      return Promise.reject(error);
    }

    if (
      error.response?.data?.code === "AUTH_TOKEN_EXPIRED" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) {
          throw new Error("No refresh token found");
        }
        const refreshResponse = await apiFunctions.refreshToken();
        const token =
          refreshResponse?.data?.data?.access || refreshResponse?.data?.access;

        if (!token) {
          throw new Error("No new access token received");
        }

        localStorage.setItem("authToken", token);

        originalRequest.headers.Authorization = `Bearer ${token}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userInfo");

        if (typeof window !== "undefined") {
          window.location.href = "/";
        }
        toast.error("Session Expired, Please login");
      }
    }

    return Promise.reject(error);
  }
);

export default api;
