"use client";

import * as C from "@/components";
import * as S from "./styles";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { socket } from "@/socket";
import { souzasAPI } from "@/api/souzas";

export default function HomePage() {
  const [isloading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("Carregando recursos");

  const router = useRouter();

  const changeMessage = (text: string) => setMessage(text);

  const awakeDatabase = async () => {
    changeMessage("carregando banco de dados");

    await souzasAPI.get("");
  };

  const awakeSocket = async () => {
    changeMessage("carregando conexões");

    socket({ id: "", image: "", name: "", username: "", token: "" });
  };

  const loadAPI = async () => {
    setTimeout(() => {
      awakeDatabase();
      awakeSocket();
    }, 2000);

    setTimeout(() => {
      changeMessage("Preparando tudo");
    }, 3000);

    setTimeout(() => {
      changeMessage("Concluido!");
    }, 4500);

    setTimeout(() => {
      setIsLoading(false);
    }, 7500);
  };

  useEffect(() => {
    loadAPI();
  }, []);

  return (
    <S.Container>
      <div>
        <C.Logo />
      </div>
      {isloading ? (
        <S.BoxLoading>
          <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            visible={true}
          />
          <h3>{message}</h3>
        </S.BoxLoading>
      ) : (
        <S.BoxButton>
          <C.Button
            label="ir para login"
            onAction={() => router.push("/login")}
          />
        </S.BoxButton>
      )}
    </S.Container>
  );
}
