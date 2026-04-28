import axios from "axios";
import { tokenService } from "../model/tokenService";
import { useTokenSlice } from "@/modules/Tokens";

export const instance = axios.create({
  baseURL: "https://dummyjson.com/",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = tokenService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
let isRefreshFailed = false;

instance.interceptors.response.use(
  (response) => {
    isRefreshFailed = false;
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("auth/refresh") &&
      !isRefreshFailed
    ) {
      originalRequest._retry = true;
      try {
        const response = await instance.get("auth/refresh", {
          withCredentials: true,
        });
        const newToken = response.data.token;
        tokenService.saveToken(newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return instance(originalRequest);
      } catch (refreshError) {
        isRefreshFailed = true;
        tokenService.removeToken();
        useTokenSlice((state) => state).removeToken();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
