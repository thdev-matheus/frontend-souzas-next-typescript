"use client";

import * as S from "./styles";
import * as B from "@/blocks";
import * as C from "@/components";

export default function LoginPage() {
  return (
    <S.Container>
      <S.BoxLogo>
        <C.Logo />
      </S.BoxLogo>
      <S.BoxForm>
        <B.LoginFormBlock />
      </S.BoxForm>
    </S.Container>
  );
}
