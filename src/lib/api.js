import axios from "axios";

// Simple API client
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Simple request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Simple response interceptor for errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(error);

    // ❌ Skip refresh logic if it's the refresh API itself
    if (originalRequest?.url?.includes("/auth/token/refresh")) {
      return Promise.reject(error);
    }

    if (
      error.response?.data.code === "AUTH_TOKEN_EXPIRED" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        console.log(refreshToken);
        if (refreshToken) {
          // Make refresh token request WITHOUT Authorization header
          const refreshResponse = await api.post(
            "/auth/token/refresh",
            { refresh: refreshToken },
            { headers: { Authorization: undefined } } // explicitly no Authorization header
          );

          const token =
            refreshResponse?.data?.data?.access ||
            refreshResponse?.data?.access;

          // Update token in storage
          localStorage.setItem("authToken", token);

          // Add Authorization header back to originalRequest for retry
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
      }

      // 🔑 Clear storage if refresh fails
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userInfo");

      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
