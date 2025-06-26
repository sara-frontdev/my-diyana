//base
import { FC } from "react";
import { Metadata } from "next";

import { ForgotPasswordContainer } from "@/components/containers/Auth/ForgotPasswordContainer/ForgotPasswordContainer";

//components

export const metadata: Metadata = {
  title: "فراموشی رمز (1) | مهد کودک دیانا",
  description: "فراموشی رمز (1) | مهد کودک دیانا",
};

const ForgotPassword: FC = () => {
  return <ForgotPasswordContainer />;
};

export default ForgotPassword;
