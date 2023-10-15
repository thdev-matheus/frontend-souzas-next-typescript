"use client";

import * as S from "./styles";
import * as C from "@/components";

export const LoginFormBlock = () => {
  return (
    <S.Container>
      <h2>Faça Seu Login</h2>

      <S.Form>
        <C.Input placeholder="Digite seu usuário" borderRadius=".5rem" />
        <C.Input placeholder="Digite sua senha" borderRadius=".5rem" />

        <S.BoxButton>
          <C.Button label="Entrar" onAction={() => {}} />
        </S.BoxButton>

        <span>Esqueceu sua senha? Solicite ao staff</span>
      </S.Form>
    </S.Container>
  );
};
