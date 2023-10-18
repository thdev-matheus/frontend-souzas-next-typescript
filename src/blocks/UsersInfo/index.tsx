"use client";

import { useUser } from "@/providers";
import * as S from "./styles";
import * as C from "@/components";
import { FaInfoCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const UsersInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedUsers, socket, setLoggedUsers, logout } = useUser();

  const toggleIsOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    socket?.on("users", (response) => {
      setLoggedUsers(response);
    });
  }, [socket]);

  return (
    <>
      <S.Container>
        <FaInfoCircle onClick={toggleIsOpen} />
      </S.Container>
      {isOpen && (
        <>
          <S.DeadBox onClick={toggleIsOpen} />
          <S.BoxInfo
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            initial={{
              elevation: 5,
              opacity: 0,
              x: -300,
            }}
            animate={{
              elevation: 5,
              opacity: 1,
              x: 0,
            }}
          >
            <div className="header">
              <h3>Usuários Logados</h3>
              <FiLogOut onClick={logout} />
            </div>

            {loggedUsers.map((usr) => (
              <C.UserCard user={usr} key={uuid()} />
            ))}
          </S.BoxInfo>
        </>
      )}
    </>
  );
};
