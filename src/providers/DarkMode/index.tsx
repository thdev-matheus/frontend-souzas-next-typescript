"use client";

import { createContext, useContext, useState } from "react";
import * as T from "./types";

const DarkModeContext = createContext<T.IDarkModeContext>(
  {} as T.IDarkModeContext
);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  return context;
};

export const DarkModeProvider = ({ children }: T.IDarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
