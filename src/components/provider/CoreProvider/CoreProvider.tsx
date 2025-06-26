"use client";

import { FC } from "react";

// components
import ReactQueryProvider from "./ReactQuery/ReactQuery";

// core
import { AuthenticationContext } from "@/core/context/AuthenticationContext";
import { ShoppingCartContextProvider } from "@/core/context/ShoppingCartContext";

interface IPropType {
  children: React.ReactNode;
}

const CoreProvider: FC<IPropType> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AuthenticationContext>
        <ShoppingCartContextProvider>{children}</ShoppingCartContextProvider>
      </AuthenticationContext>
    </ReactQueryProvider>
  );
};

export { CoreProvider };
