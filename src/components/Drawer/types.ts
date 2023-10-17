import { ReactNode } from "react";

export interface IDrawerProps {
  actionClose: () => void;
  children: ReactNode;
}
