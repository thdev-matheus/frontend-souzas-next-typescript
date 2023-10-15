"use client";

import * as S from "./styles";
import * as B from "@/blocks";

export default function LoginPage() {
  return (
    <S.Container>
      <S.BoxLogo>
        <h1>SOUZA'S</h1>
        <h2>O chat da família</h2>
      </S.BoxLogo>
      <S.BoxForm>
        <B.LoginFormBlock />
      </S.BoxForm>
    </S.Container>
  );
}
