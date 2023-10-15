"use client";

import * as S from "./styles";
import * as B from "@/blocks";
import "react-chat-elements/dist/main.css";

export default function ChatPage() {
  return (
    <S.Container>
      <B.DashChatBlock />
      <B.FormChatBlock />
    </S.Container>
  );
}
