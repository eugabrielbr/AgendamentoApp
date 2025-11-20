import axios from "axios";

// 👉 Troque pela URL REAL da sua API
export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});
