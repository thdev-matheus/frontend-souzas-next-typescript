import { DarkModeProvider, useDarkMode } from "./DarkMode";
import { MediaQueryProvider, useMediaQuery } from "./MediaQuery";

export { useDarkMode, useMediaQuery };

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MediaQueryProvider>
        <DarkModeProvider>{children}</DarkModeProvider>
      </MediaQueryProvider>
    </>
  );
};
