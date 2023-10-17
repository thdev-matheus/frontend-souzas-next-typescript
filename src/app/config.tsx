"use client";

import { ReactNode } from "react";

import { Providers } from "@/providers";
import { Styles } from "@/styles";
import { Toaster } from "react-hot-toast";

export const Config = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Providers>
        <Styles>{children}</Styles>
      </Providers>
      <Toaster />
    </>
  );
};
