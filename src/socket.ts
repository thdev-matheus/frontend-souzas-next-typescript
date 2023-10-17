import { io } from "socket.io-client";
import { IUser } from "./providers/UserProvider/types";
import "dotenv/config";

export const socket = (user: IUser) =>
  io(process.env.BASE_URL_SOCKET || "https://souzas-socket.onrender.com", {
    query: user,
  });
