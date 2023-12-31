"use client";

import * as C from "@/components";
import { useMessages, useUser } from "@/providers";
import { IMessage } from "@/providers/MessageProvider/types";
import * as U from "@/utils";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { v4 as uuid } from "uuid";
import * as S from "./styles";

export const FormChatBlock = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { user, socket } = useUser();

  const handleSendMessage = () => {
    if (!inputValue.trim()) {
      return;
    }

    const newMessage: IMessage = {
      id: uuid(),
      type: "text",
      user,
      info: U.getDateHour(),
      content: inputValue.split("\n"),
    };

    socket?.emit("chat", newMessage);
    setTimeout(() => {
      setInputValue("");
    }, 100);
  };

  return (
    <S.Container>
      <C.TextArea
        placeholder="Digite sua mensagem"
        icon={IoSend}
        value={inputValue}
        iconAction={handleSendMessage}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </S.Container>
  );
};
