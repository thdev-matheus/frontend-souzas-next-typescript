"use client";

import * as S from "./styles";
import * as T from "./types";

export const SpetchBubble = ({
  message,
  position,
  notch = true,
}: T.ISpetchBubbleProps) => {
  return (
    <S.Container position={position} notch={notch}>
      <S.Bubble notch={notch} position={position} className="bubble">
        <h4>{message.user?.username}</h4>
        {message.content.map((txt) => (
          <p key={message.id}>{txt}</p>
        ))}
      </S.Bubble>
    </S.Container>
  );
};
