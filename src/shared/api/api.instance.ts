import axios from "axios";
import { tokenService } from "../model/tokenService";

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

// let retryCount = 0;

// instance.interceptors.response.use(
//   (config) => config,
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 401 ||
//       (retryCount < 2 && error.config && !error.config._isRetry)
//     ) {
//       originalRequest._isRetry = true;
//       retryCount += 1;
//       try {
//         return instance.get("auth/refresh");
//       } catch {
//         console.log(error);
//       }
//     }

//     throw error;
//   },
// );
