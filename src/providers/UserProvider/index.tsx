"use client";

import { createContext, useState, useEffect, useContext } from "react";
import * as T from "./types";
import { souzasAPI } from "@/api/souzas";
import { Socket } from "socket.io-client";
import { socket as SOCKET } from "@/socket";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const UserContext = createContext<T.IUserContext>({} as T.IUserContext);

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }: T.IUserProviderProps) => {
  const [user, setUser] = useState<T.IUser>({} as T.IUser);
  const [socket, setSocket] = useState<Socket | null>(null);

  const router = useRouter();

  const login = async (data: T.IUserLogin) => {
    try {
      const response = await souzasAPI.post("/session/login", data);

      const newUser = {
        ...response.data.user,
        token: response.data.token,
      };

      setUser(newUser);
      setSocket(SOCKET(newUser));

      toast.success("Conectado"), router.push(`/chat/${newUser.id}`);
    } catch (error) {
      console.log(error);

      throw new Error();
    }
  };

  return (
    <UserContext.Provider value={{ user, login, socket }}>
      {children}
    </UserContext.Provider>
  );
};
