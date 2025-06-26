//base
import { FC } from "react";
import { Metadata } from "next";

//components
import { ForgotPasswordContainer } from "@/components/containers/Auth/ForgotPasswordContainer/ForgotPasswordContainer";

export const metadata: Metadata = {
  title: "فراموشی رمز (2) |  مهد کودک دیانا ",
  description: "فراموشی رمز (2) | مهد کودک دیانا ",
};

const ForgotPassword: FC = () => {
  return <ForgotPasswordContainer />;
};

export default ForgotPassword;
