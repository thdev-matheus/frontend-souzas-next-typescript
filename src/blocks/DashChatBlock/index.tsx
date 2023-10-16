"use client";

import * as S from "./styles";
import * as CTX from "@/providers";
import * as C from "@/components";

import { MessageBox, SystemMessage } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { useEffect } from "react";

export const DashChatBlock = () => {
  const { messages } = CTX.useMessages();
  const { user } = CTX.useUser();

  // useEffect(() => {
  //   document.getElementById("dashchatmessages")?.scrollTo(0, 600000);
  // }, []);

  return (
    <S.Container id="dashchatmessages">
      <C.SpetchBubble message={messages[0]} position="left" />
    </S.Container>
  );
};
