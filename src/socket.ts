import { io } from "socket.io-client";
import { IUser } from "./providers/UserProvider/types";

export const socket = (user: IUser) =>
  io("http://localhost:8082", { query: user });
