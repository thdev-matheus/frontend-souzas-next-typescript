import { Dispatch, ReactNode, SetStateAction } from "react";
import { Socket } from "socket.io-client";

export interface IUserContext {
  user: IUser;
  loggedUsers: IUser[];
  setLoggedUsers: Dispatch<SetStateAction<IUser[]>>;
  login: (data: IUserLogin) => Promise<void>;
  logout: () => void;
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
