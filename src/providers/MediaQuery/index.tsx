"use client";

import { createContext, useContext, useEffect, useState } from "react";
import * as T from "./types";

const MediaQueryContext = createContext<T.IMediaQueryContextData>(
  {} as T.IMediaQueryContextData
);

export const useMediaQuery = () => {
  const context = useContext(MediaQueryContext);

  return context;
};

export const MediaQueryProvider = ({ children }: T.IMediaQueryProviderData) => {
  const [widthScreen, setWidthScreen] = useState(0);
  const [heightScreen, setHeightScreen] = useState(0);

  const setMediaQuery = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setWidthScreen(width);
    setHeightScreen(height);
  };

  useEffect(() => {
    setWidthScreen(window.innerWidth);
    setHeightScreen(window.innerHeight);

    window.addEventListener("resize", (_) => {
      setMediaQuery();
    });
  }, []);

  return (
    <MediaQueryContext.Provider
      value={{ widthScreen, heightScreen, setMediaQuery }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
};
