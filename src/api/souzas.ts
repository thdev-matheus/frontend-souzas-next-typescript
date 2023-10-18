import axios from "axios";
import "dotenv/config";

const isDev = false;

export const souzasAPI = axios.create({
  baseURL: isDev ? "http://localhost:8081" : "https://souzas.onrender.com",
  timeout: 30000,
});
