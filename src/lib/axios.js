import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatty-backend-oykc.onrender.com",
  withCredentials: true,
  transports: ["websocket", "polling"]
});
