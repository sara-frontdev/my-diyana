"use client";

//base
import { FC } from "react";

//components
import { AntDesignConfig } from "./AntDesignConfig/AntDesignConfig";

import "@/styles/globals.scss";
import { NProsessBarProvider } from "./NProsessBar/NProsessBarProvider";

export interface IPropType {
  children: React.ReactNode;
}

const UiProvider: FC<IPropType> = ({ children }) => {
  return (
    <>
      <NProsessBarProvider>
        <AntDesignConfig>{children}</AntDesignConfig>
      </NProsessBarProvider>
    </>
  );
};

export { UiProvider };
