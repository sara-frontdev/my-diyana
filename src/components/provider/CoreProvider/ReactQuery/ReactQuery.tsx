"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// base
import { FC } from "react";

//lib

interface IPropType {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const ReactQueryProvider: FC<IPropType> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
