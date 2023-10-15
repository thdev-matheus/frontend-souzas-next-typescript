import { GlobalStyle } from "./GlobalStyles";
import * as theme from "./GlobalTheme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "@/providers/DarkMode";

export const Styles = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};
