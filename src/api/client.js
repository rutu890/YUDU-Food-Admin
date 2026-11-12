import axios from "axios";
import { env } from "../config/env";
import { tokenStore } from "../auth/tokenStore";
export const http = axios.create({ baseURL: env.API_URL, timeout: 15000 });
http.interceptors.request.use((config) => {
  const token = tokenStore.get();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
http.interceptors.response.use((response) => response, (error) => {
  const data = error?.response?.data;
  return Promise.reject({ code:data?.code || "REQUEST_FAILED", message:data?.message || error.message || "Something went wrong", fieldErrors:data?.fieldErrors || {} });
});
