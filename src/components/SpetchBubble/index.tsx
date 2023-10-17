"use client";

import { useUser } from "@/providers";
import * as S from "./styles";
import * as T from "./types";
import { v4 as uuid } from "uuid";

export const SpetchBubble = ({
  message,
  position,
  notch = true,
}: T.ISpetchBubbleProps) => {
  const { user } = useUser();

  const isLoggedUser = message.user?.username === user.username;

  return (
    <S.Container position={position} notch={notch}>
      {message.type !== "system" ? (
        <S.Bubble notch={notch} position={position} className="bubble">
          <S.BoxTop isLoggedUser={isLoggedUser}>
            {notch && position === "left" && (
              <div className="box_avatar">
                <img src={message.user?.image} alt={message.user?.name} />
              </div>
            )}

            <div className="box_content">
              {notch && <h4>{message.user?.username}</h4>}
              {message.content.map((txt) => (
                <p key={uuid()}>{txt}</p>
              ))}
            </div>

            {notch && position === "right" && (
              <div className="box_avatar">
                <img src={message.user?.image} alt={message.user?.name} />
              </div>
            )}
          </S.BoxTop>
          <S.BoxBottom position={position}>
            <small>{message.info.hour}</small>
          </S.BoxBottom>
        </S.Bubble>
      ) : (
        <S.BoxSystem>
          {message.content.map((txt) => (
            <small key={uuid()}>{txt}</small>
          ))}
        </S.BoxSystem>
      )}
    </S.Container>
  );
};
