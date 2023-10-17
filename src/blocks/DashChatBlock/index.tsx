"use client";

import * as S from "./styles";
import * as CTX from "@/providers";
import * as C from "@/components";

import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";

export const DashChatBlock = () => {
  const { messages, addMessage } = CTX.useMessages();
  const { user, socket } = CTX.useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user.token) {
      router.push("/");
      return;
    }

    const dash = document.getElementById("dashchatmessages");
    dash?.scrollTo(0, dash.scrollHeight + 1000);

    socket?.on("chat", (msg) => {
      addMessage(msg);
    });

    return () => {
      socket?.off("chat");
    };
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
