import { ReactNode } from "react";

export interface IDarkModeContext {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface IDarkModeProviderProps {
  children: ReactNode;
}
