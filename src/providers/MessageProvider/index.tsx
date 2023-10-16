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
  const { user } = useUser();

  const [messages, setMessages] = useState<T.IMessage[]>([
    {
      id: uuid(),
      type: "text",
      user: {
        id: "jessid",
        image:
          "https://cdn1.epicgames.com/offer/83c7eb83fadd4a41ad2367dbf17705fc/EGS_ImpoftheSun_SunwolfEntertainment_S1_03_2560x1440-3b70259304f76cfbc09f141aaaf205e6",
        name: "Jess Vieira",
        username: "Jess",
      },
      content: ["Mensagem de teste de outra pessoa"],
      info: U.getDateHour(),
    },
    {
      id: uuid(),
      type: "text",
      user: {
        id: "jessid",
        image:
          "https://cdn1.epicgames.com/offer/83c7eb83fadd4a41ad2367dbf17705fc/EGS_ImpoftheSun_SunwolfEntertainment_S1_03_2560x1440-3b70259304f76cfbc09f141aaaf205e6",
        name: "Jess Vieira",
        username: "Jess",
      },
      content: [
        "Mensagem de teste de outra pessoa",
        "Esta mensagem tem 2 linhas",
      ],
      info: U.getDateHour(),
    },
    {
      id: uuid(),
      type: "text",
      user: {
        id: "jessid",
        image:
          "https://cdn1.epicgames.com/offer/83c7eb83fadd4a41ad2367dbf17705fc/EGS_ImpoftheSun_SunwolfEntertainment_S1_03_2560x1440-3b70259304f76cfbc09f141aaaf205e6",
        name: "Jess Vieira",
        username: "Jess",
      },
      content: [
        "Mensagem de teste de outra pessoa",
        "esta é a 2ª linha",
        "esta é a a terceira linha",
      ],
      info: U.getDateHour(),
    },
    {
      id: uuid(),
      type: "text",
      user: {
        id: "asnid",
        image: "https://img.freepik.com/fotos-premium/asno_328046-39672.jpg",
        name: "Asnonildo Asnóbio",
        username: "Asn",
      },
      content: ["Mensagem de teste de asnonnildo"],
      info: U.getDateHour(),
    },
    {
      id: uuid(),
      type: "text",
      user: {
        id: "asnid",
        image: "https://img.freepik.com/fotos-premium/asno_328046-39672.jpg",
        name: "Asnonildo Asnóbio",
        username: "Asn",
      },
      content: ["Mensagem de teste de asnonnildo"],
      info: U.getDateHour(),
    },
    {
      id: uuid(),
      type: "text",
      user: {
        id: "asnid",
        image: "https://img.freepik.com/fotos-premium/asno_328046-39672.jpg",
        name: "Asnonildo Asnóbio",
        username: "Asn",
      },
      content: ["Mensagem de teste de asnonnildo"],
      info: U.getDateHour(),
    },

    {
      id: uuid(),
      type: "text",
      user: user,
      content: ["Mensagem de teste do usuário logado", "com 2 linhas"],
      info: U.getDateHour(),
    },
    {
      id: uuid(),
      type: "system",
      content: ["Theus Entrou"],
      info: U.getDateHour(),
    },
  ]);

  const addMessage = (msg: T.IMessage) => {
    setMessages([msg, ...messages]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
