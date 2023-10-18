"use client";

import { createContext, useState, useEffect, useContext } from "react";
import * as T from "./types";
import * as U from "@/utils";

import { v4 as uuid } from "uuid";
import { useUser } from "../UserProvider";
const MessageContext = createContext<T.IMessageContext>(
  {} as T.IMessageContext
);

export const useMessages = () => {
  const context = useContext(MessageContext);

  return context;
};

export const MessageProvider = ({ children }: T.IMessageProviderProps) => {
  const [messages, setMessages] = useState<T.IMessage[]>([]);

  const addMessage = (msg: T.IMessage) => {
    setMessages((prev) => {
      return [...prev, msg];
    });
  };

  const clearMessages = () => setMessages([]);

  return (
    <MessageContext.Provider value={{ messages, addMessage, clearMessages }}>
      {children}
    </MessageContext.Provider>
  );
};
