"use client";

import { useState } from "react";
import * as S from "./styles";
import { useMessages, useUser } from "@/providers";
import { Input } from "react-chat-elements";
import { IoSend } from "react-icons/io5";
import { v4 as uuid } from "uuid";
import { IMessage } from "@/providers/MessageProvider/types";

export const FormChatBlock = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const { addMessage } = useMessages();
  const { user } = useUser();

  const handleSendMessage = () => {
    if (!inputValue) {
      return;
    }

    const messages: IMessage[] = [];
    const splitMsg = inputValue.split("\n");

    splitMsg.forEach((msg) => {
      const newMessage = {
        id: uuid(),
        user: user,
        text: msg,
        date: new Date(),
      };

      messages.unshift({ ...newMessage, type: "text" });
    });

    addMessage(messages);

    document.getElementsByTagName("textarea")[0]["value"] = "";
    setInputValue("");
  };

  return (
    <S.Container>
      <Input
        maxHeight={70}
        autoHeight={true}
        multiline={true}
        className="input send_message"
        placeholder="Digite sua mensagem"
        defaultValue=""
        value={inputValue}
        clear={() => {
          setInputValue("");
        }}
        onChange={(e: any) => {
          setInputValue(e.target.value);
        }}
        rightButtons={<IoSend onClick={() => handleSendMessage()} />}
      />
    </S.Container>
  );
};
