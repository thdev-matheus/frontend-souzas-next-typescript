import { DarkModeProvider, useDarkMode } from "./DarkMode";
import { MediaQueryProvider, useMediaQuery } from "./MediaQuery";
import { UserProvider, useUser } from "./UserProvider";

export { useDarkMode, useMediaQuery, useUser };

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MediaQueryProvider>
        <DarkModeProvider>
          <UserProvider>{children}</UserProvider>
        </DarkModeProvider>
      </MediaQueryProvider>
    </>
  );
};
