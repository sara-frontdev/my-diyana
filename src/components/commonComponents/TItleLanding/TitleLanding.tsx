"use client";

import { FC, ReactNode } from "react";

const TitleLanding: FC<{ className?: string; children: ReactNode }> = ({
  className = "",
  children,
}) => (
  <h2 className={`font-yekan-bold text-2xl text-customeBlack   ${className}`}>
    {children}
  </h2>
);

export default TitleLanding;
