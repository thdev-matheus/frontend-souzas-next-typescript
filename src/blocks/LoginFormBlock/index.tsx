"use client";

import * as S from "./styles";
import * as C from "@/components";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface IUserLogin {
  username: string;
  password: string;
}

export const LoginFormBlock = () => {
  const { reset, handleSubmit, register } = useForm<IUserLogin>({
    reValidateMode: "onSubmit",
  });

  const handleLogin = (data: IUserLogin) => {
    if (!data.username) {
      toast.error("Digite o usuário");
    }
    if (!data.password) {
      toast.error("Digite a senha");
    }

    if (!data.username || !data.password) {
      return;
    }

    console.log(data);
    reset();
  };

  return (
    <S.Container>
      <h2>Faça Seu Login</h2>

      <S.Form onSubmit={handleSubmit(handleLogin)}>
        <C.Input
          placeholder="Digite seu usuário"
          borderRadius=".5rem"
          {...register("username")}
        />
        <C.Input
          placeholder="Digite sua senha"
          borderRadius=".5rem"
          {...register("password")}
        />

        <S.BoxButton>
          <C.Button label="Entrar" onAction={() => {}} />
        </S.BoxButton>

        <span>Esqueceu sua senha? Solicite ao staff</span>
      </S.Form>
    </S.Container>
  );
};
