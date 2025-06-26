//base
import { FC, Suspense } from "react";
import { Metadata } from "next";

import { WelcomingContainer } from "@/components/containers/Auth/RegisterContainer/WelcomingContainer/WelcomingContainer";

//components

export const metadata: Metadata = {
  title: "ثبت نام موفق | مهد کودک دیانا",
  description: "ثبت نام موفق | مهد کودک دیانا  ",
};

const Welcoming: FC = () => {
  return (
    <Suspense>
      <WelcomingContainer />
    </Suspense>
  );
};

export default Welcoming;
