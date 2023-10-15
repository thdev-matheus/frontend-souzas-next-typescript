import { ReactNode } from "react";
import { IUser } from "../UserProvider/types";

export interface IMessageContext {
  messages: IMessage[];
  addMessage: (msg: IMessage[]) => void;
}

export interface IMessageProviderProps {
  children: ReactNode;
}

export interface IMessage {
  id: string;
  user?: IUser;
  type: "text" | "photo" | "system";
  text?: string;
  data?: {
    uri: string;
    size: number;
  };
  replyData?: {
    title: "Emre";
    titleColor: "#8717ae";
    message: "Nice to meet you";
  };
  date: Date;
}
