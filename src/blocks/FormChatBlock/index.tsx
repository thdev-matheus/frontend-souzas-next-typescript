"use client";

import { useState } from "react";
import * as S from "./styles";
import { Input } from "react-chat-elements";
import { IoSend } from "react-icons/io5";

export const FormChatBlock = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <S.Container>
      <Input
        maxHeight={70}
        autoHeight={true}
        multiline={true}
        className="input"
        placeholder="Digite sua mensagem"
        value={inputValue}
        onChange={(e: any) => {
          setInputValue(e.target.value);
        }}
        rightButtons={
          <IoSend
            onClick={() => {
              console.log("clickou para enviar");
            }}
          />
        }
      />
    </S.Container>
  );
};
