"use client";

import { createContext, useState, useEffect, useContext } from "react";
import * as T from "./types";

const UserContext = createContext<T.IUserContext>({} as T.IUserContext);

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }: T.IUserProviderProps) => {
  const [user, setUser] = useState<T.IUser>({
    id: "iddousuario",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "Matheus Vieira",
    username: "Theus",
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
