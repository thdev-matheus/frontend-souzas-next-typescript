import { ReactNode } from "react";

export interface IMediaQueryContextData {
  widthScreen: number;
  heightScreen: number;
  setMediaQuery: () => void;
}

export interface IMediaQueryProviderData {
  children: ReactNode;
}
