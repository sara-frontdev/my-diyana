"use client";

//base
import { FC } from "react";

//components
import { AntDesignConfig } from "./AntDesignConfig/AntDesignConfig";

import "@/styles/globals.scss";

export interface IPropType {
  children: React.ReactNode;
}

const UiProvider: FC<IPropType> = ({ children }) => {
  return (
    <>
      <AntDesignConfig>{children}</AntDesignConfig>
    </>
  );
};

export { UiProvider };
