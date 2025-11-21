import axios from "axios";

// 👉 Troque pela URL REAL da sua API
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});
