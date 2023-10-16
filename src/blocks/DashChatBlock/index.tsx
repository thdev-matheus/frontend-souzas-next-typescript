"use client";

import * as S from "./styles";
import * as CTX from "@/providers";
import * as C from "@/components";

import { useEffect } from "react";
import { v4 as uuid } from "uuid";

export const DashChatBlock = () => {
  const { messages } = CTX.useMessages();
  const { user } = CTX.useUser();

  useEffect(() => {
    document.getElementById("dashchatmessages")?.scrollTo(0, 10000000);
  }, []);

  return (
    <S.Container id="dashchatmessages">
      <S.BoxDash>
        {messages.map((msg, i, arr) => {
          const notch = !(msg.user?.username === arr[i - 1]?.user?.username);
          const position: "left" | "right" | "center" =
            msg.type === "system"
              ? "center"
              : msg.user?.username === user.username
              ? "right"
              : "left";

          return notch ? (
            <div key={uuid()}>
              <C.Separator height="1rem" />
              <C.SpetchBubble message={msg} position={position} notch={notch} />
            </div>
          ) : (
            <C.SpetchBubble
              key={uuid()}
              message={msg}
              position={position}
              notch={notch}
            />
          );
        })}
      </S.BoxDash>
    </S.Container>
  );
};
