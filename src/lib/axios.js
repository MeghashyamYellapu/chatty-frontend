import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatty-backend-oykc.onrender.com/api",
  withCredentials: true,
});