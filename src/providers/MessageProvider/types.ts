import { ReactNode } from "react";
import { IUser } from "../UserProvider/types";

export interface IMessageContext {
  messages: IMessage[];
  addMessage: (msg: IMessage) => void;
}

export interface IMessageProviderProps {
  children: ReactNode;
}

export interface IMessage {
  id: string;
  user?: IUser;
  type: "text" | "system";
  content: string[];
  info: {
    date: string;
    hour: string;
  };
}
