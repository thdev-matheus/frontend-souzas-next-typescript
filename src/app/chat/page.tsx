"use client";

import * as S from "./styles";
import * as B from "@/blocks";

export default function ChatPage() {
  return (
    <S.Container>
      <B.DashChatBlock />
      <B.FormChatBlock />
    </S.Container>
  );
}
