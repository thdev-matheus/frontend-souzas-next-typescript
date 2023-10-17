import { DarkModeProvider, useDarkMode } from "./DarkMode";
import { MediaQueryProvider, useMediaQuery } from "./MediaQuery";
import { UserProvider, useUser } from "./UserProvider";
import { MessageProvider, useMessages } from "./MessageProvider";

export { useDarkMode, useMediaQuery, useUser, useMessages };

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MediaQueryProvider>
        <DarkModeProvider>
          <UserProvider>
            <MessageProvider>{children}</MessageProvider>
          </UserProvider>
        </DarkModeProvider>
      </MediaQueryProvider>
    </>
  );
};
