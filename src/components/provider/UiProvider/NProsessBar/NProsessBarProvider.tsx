"use client";

//base
import { FC } from "react";

//lib
import NextTopLoader from "nextjs-toploader";

const NProsessBarProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <NextTopLoader
        color="#13C2C2"
        initialPosition={0.1}
        crawlSpeed={200}
        height={3}
        crawl
        showSpinner={false}
        easing="ease-in-out"
        speed={300}
        shadow="none"
        zIndex={9999}
      />

      {children}
    </>
  );
};

export { NProsessBarProvider };
