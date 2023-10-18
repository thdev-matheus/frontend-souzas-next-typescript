"use client";

import * as T from "./types";
import * as S from "./styles";
import { useUser } from "@/providers";

export const UserCard = ({ user: usr }: T.IUserCardProps) => {
  const { user } = useUser();

  return (
    <S.Container>
      <div className="box_img">
        <img src={usr.image} alt={usr.name} />
      </div>
      <h4>{usr.name === user.name ? "Você" : usr.name}</h4>
    </S.Container>
  );
};
