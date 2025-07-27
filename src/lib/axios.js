import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-backend111.onrender.com/api",
  withCredentials: true,
});
