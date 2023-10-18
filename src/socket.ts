import { io } from "socket.io-client";
import { IUser } from "./providers/UserProvider/types";
import "dotenv/config";

const isDev = false;

export const socket = (user: IUser) =>
  io(isDev ? "http://localhost:8081" : "https://souzas.onrender.com", {
    query: user,
  });
