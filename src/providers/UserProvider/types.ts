import { ReactNode } from "react";

export interface IUserContext {
  user: IUser;
}

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  username: string;
  name: string;
  image: string;
}
