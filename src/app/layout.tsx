import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Config } from "./config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Souza's",
  description: "O chat da família",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="shortcut icon"
          href="/image/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        <Config>{children}</Config>
      </body>
    </html>
  );
}
