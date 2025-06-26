"use client";

import { useState, useEffect } from "react";

export const usePanelLayoutUtils = () => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width ?? 0;
};
