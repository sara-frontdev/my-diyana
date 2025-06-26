//base
import { FC } from "react";
import { Metadata } from "next";

// components
import { LoginContainer } from "@/components/containers/Auth/LoginContainer/LoginContainer";

export const metadata: Metadata = {
  title: "ورود | مهد کودک دیانا",
  description: "  ورود | مهد کودک دیانا",
};

const Login: FC = () => {
  return <LoginContainer />;
};

export default Login;
