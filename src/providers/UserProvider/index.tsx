"use client";

import { createContext, useState, useEffect, useContext } from "react";
import * as T from "./types";

import { v4 as uuid } from "uuid";

const UserContext = createContext<T.IUserContext>({} as T.IUserContext);

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }: T.IUserProviderProps) => {
  const [user, setUser] = useState<T.IUser>({
    id: uuid(),
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "Matheus Vieira",
    username: "Theus",
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
