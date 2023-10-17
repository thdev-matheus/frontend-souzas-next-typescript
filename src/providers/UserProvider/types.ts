import { ReactNode } from "react";
import { Socket } from "socket.io-client";

export interface IUserContext {
  user: IUser;
  login: (data: IUserLogin) => Promise<void>;
  socket: Socket | null;
}

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  username: string;
  name: string;
  image: string;
  token?: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}
