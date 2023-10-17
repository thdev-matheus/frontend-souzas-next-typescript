import axios from "axios";

export const souzasAPI = axios.create({
  baseURL: "http://localhost:8081",
});
