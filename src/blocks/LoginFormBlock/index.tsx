"use client";

import * as C from "@/components";
import { useUser } from "@/providers";
import { IUserLogin } from "@/providers/UserProvider/types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as S from "./styles";
import { FaLock, FaUser } from "react-icons/fa";

export const LoginFormBlock = () => {
  const { login } = useUser();

  const { reset, handleSubmit, register } = useForm<IUserLogin>({
    reValidateMode: "onSubmit",
  });

  const handleLogin = async (data: IUserLogin) => {
    if (!data.username) {
      toast.error("Digite o usuário");
    }
    if (!data.password) {
      toast.error("Digite a senha");
    }

    if (!data.username || !data.password) {
      return;
    }

    try {
      await login(data);
      reset();
    } catch (error) {
      toast.error("Credenciais inválidas");
    }
  };

  return (
    <S.Container>
      <h2>Faça seu Login</h2>

      <S.Form onSubmit={handleSubmit(handleLogin)}>
        <C.Input
          icon={FaUser}
          placeholder="Digite seu usuário"
          borderRadius=".5rem"
          {...register("username")}
        />
        <C.Input
          icon={FaLock}
          placeholder="Digite sua senha"
          borderRadius=".5rem"
          type="password"
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
