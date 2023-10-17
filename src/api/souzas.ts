import axios from "axios";
import "dotenv/config";

export const souzasAPI = axios.create({
  baseURL:
    process.env.BASE_URL_USER_DATABASE ||
    "https://souzas-database.onrender.com",
});
